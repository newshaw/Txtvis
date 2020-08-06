<template>
    <div>
        <div>
            <h4>Let's see what were the trending songs for the {{genre.name}} genre</h4>

            <b-card
                    :img-src="genre.image" img-alt="Card image" img-left class="mb-3">
                <h5 class="text-left font-italic">{{genre.name}}</h5>
                <b-card-text class="text-left">
                    {{genre.description}}
                </b-card-text>
            </b-card>
            <b-list-group>
                <b-list-group-item class="text-left" v-for="year in yearsList"
                                   v-bind:key="year">
                    <span>Top songs for year {{year}}</span>
                    &nbsp;
                    <b-link class="float-right" :to="`/genre/${genre.id}/top/${year}`">
                        <b-button pill variant="info">see top songs ...
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
                yearsList: []
            }
        },
        created() {
            this.genre = genres.filter(g => g.id === this.$route.params.genre)[0]
            this.getGenreList()
        },
        methods: {
            getGenreList() {
                gate.getGenreList(this.genre.id).then(res => {
                    this.yearsList = res.data;
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
