<template>
    <div>
        <div class="mt-4">
            <h4>Select one genre for more details</h4>
            <b-card v-for="item in genres" v-bind:key="item.name"
                    :img-src="item.image" img-alt="Card image" img-left class="mb-3">
                <h5 class="text-left font-italic">{{item.name}}</h5>
                <b-card-text class="text-left">
                    {{item.description}}
                </b-card-text>
                <b-row>
                    <b-col md="3" sm="12" offset-md="9">
                        <b-link :to="'/genre/' + item.id">
                            <b-button class="pull-right" pill variant="info">See more ...</b-button>
                        </b-link>
                    </b-col>
                </b-row>
            </b-card>
        </div>
    </div>
</template>

<script>
    import {genres} from '../data/data'

    export default {
        name: "MainPage",
        components: {},
        data() {
            return {
                genres: genres
            }
        }
    };
</script>

<style scoped>
    .card-img-left {
        max-width: 150px;
        padding: 10px;
    }

    .card {
        border: 2px solid rgba(0, 0, 0, 0.125);
        border-radius: 0.75rem;
    }
</style>
