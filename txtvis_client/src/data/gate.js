import axios from "axios"

const client = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 1000
})
export const gate = {
    async getGenreList(genre) {
        return client.get(genre + '/list')
    },
    async getGenreYearTopSongs(genre, year) {
        return client.get(genre + '/' + year)
    }
}