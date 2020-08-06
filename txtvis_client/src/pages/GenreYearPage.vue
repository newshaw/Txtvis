<template>
    <div>
        <div>
            <h4>Let's see what were the trending songs for the {{genre.name}} genre for year {{year}}</h4>
            <b-card
                    :img-src="genre.image" img-alt="Card image" img-left class="mb-3">
                <h5 class="text-left font-italic">{{genre.name}}</h5>
                <b-card-text class="text-left">
                    {{genre.description}}
                </b-card-text>
            </b-card>
            <h5 class="text-left text-muted pl-2"># Top songs : </h5>
            <b-list-group>
                <b-list-group-item class="text-left" v-for="song in songList"
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
                songList: []
            }
        },
        created() {
            this.genre = genres.filter(g => g.id === this.$route.params.genre)[0]
            this.year = this.$route.params.year
            this.getGenreYearTopSongs()
        },
        methods: {
            getGenreYearTopSongs() {
                gate.getGenreYearTopSongs(this.genre.id, this.year).then(res => {
                    this.songList = res.data;
                })
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
