<template>
    <div>
        <div>
            <h4>#{{selectedSong.id}} <span class="text-muted">{{selectedSong.songs}} by</span> <span
                    class="font-weight-bold">{{selectedSong.singer}}</span></h4>
            <b-card
                    :img-src="genre.image" img-alt="Card image" img-left class="mb-3">
                <h5 class="text-left font-italic">{{genre.name}}</h5>
                <b-card-text class="text-left">
                    {{genre.description}}
                </b-card-text>
            </b-card>
            <b-card class="text-left mb-5" :title="selectedSong.songs"
                    :sub-title="'#'+selectedSong.id+ ' by ' + selectedSong.singer">
                <b-card-text>
                    <hr>

                    <span class="text-muted" style="font-size: x-large">lyrics:</span> <br/>
                    <pre>
                        {{selectedSong.lyrics}}
                    </pre>
                </b-card-text>
            </b-card>

            <b-card class="text-left mb-5" title="Words Cloud"
                    :sub-title="'#'+selectedSong.id+ ' : '+ selectedSong.songs +' by ' + selectedSong.singer">
                <b-card-text>
                    <vue-word-cloud
                            style="
    height: 680px;
    width: 100%;
  "
                            :words="wordsCloudData"
                            :color="([, weight]) => weight > 10 ? 'DeepPink' : weight > 5 ? 'RoyalBlue' : 'Indigo'"
                            font-family="Roboto"
                    />
                </b-card-text>
            </b-card>

            <h5 class="text-left text-muted pl-2"># Other songs for this year : </h5>
            <b-list-group>
                <b-list-group-item class="text-left" v-for="song in otherSongs"
                                   v-bind:key="song.id">
                    <b-badge pill variant="success"># {{song.id}}</b-badge>
                    &nbsp;
                    <span class="text-muted">{{song.songs}} by</span> <span
                        class="font-weight-bold">{{song.singer}}</span>
                    &nbsp;
                    <b-link class="float-right" style="padding-left: 10px"
                            :to="`/genre/${genre.id}/top/${year}/song/${song.id}`">
                        <b-button class="pull-right" pill variant="info">more information ...
                        </b-button>
                    </b-link>
                </b-list-group-item>
            </b-list-group>
        </div>
    </div>
</template>

<script>
    import {genres} from '../data/data'
    import {gate} from '../data/gate'

    export default {
        name: "GenrePage",
        components: {},
        data() {
            return {
                genre: {},
                year: "",
                otherSongs: [],
                selectedSong: {},
                wordsCloudData: []
            }
        },
        created() {
            this.initPage()
        },
        watch: {
            '$route.params.id': {
                handler: function () {
                    this.initPage()
                },
                deep: true,
                immediate: true
            }
        },
        methods: {
            initPage() {
                this.genre = genres.filter(g => g.id === this.$route.params.genre)[0]
                this.year = this.$route.params.year
                this.getSongById()
            },
            getSongById() {
                gate.getGenreYearTopSongs(this.genre.id, this.year).then(res => {
                    this.selectedSong = res.data.filter(s => s.id == this.$route.params.id)[0]
                    this.otherSongs = res.data.filter(s => s.id != this.$route.params.id);
                    this.selectedSong.lyrics = this.selectedSong.lyrics.split("--").join('\n')
                    this.fillWordsCloudData()
                })
            },
            fillWordsCloudData() {
                this.wordsCloudData = [];
                const words = this.selectedSong.lyrics.split(/\s/g);
                let wordsDataObject = {}
                for (const word of words) {
                    if (wordsDataObject[word])
                        wordsDataObject[word]++
                    else
                        wordsDataObject[word] = 1
                }
                wordsDataObject = this.deleteInvalidWords(wordsDataObject)
                const keys = Object.keys(wordsDataObject)
                keys.forEach(key => {
                    this.wordsCloudData.push([key, wordsDataObject[key]])
                })
            },
            deleteInvalidWords(wordsObject) {
                delete wordsObject[""]
                delete wordsObject["-"]
                delete wordsObject["the"]
                return wordsObject
            }
        }
    };
</script>

<style scoped>
    .card-img-left {
        max-width: 150px;
        padding: 10px;
    }
</style>
