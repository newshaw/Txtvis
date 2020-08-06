import GenrePage from './pages/GenrePage'
import GenreYearPage from './pages/GenreYearPage'
import MainPage from './pages/MainPage'
import SongPage from './pages/SongPage'

export default [
    {
        path: "/",
        component: MainPage
    },
    {
        path: "/genre/:genre",
        component: GenrePage
    },
    {
        path: "/genre/:genre/top/:year",
        component: GenreYearPage
    },
    {
        path: "/genre/:genre/top/:year/song/:id",
        component: SongPage
    },
    {
        path: "*",
        component: MainPage
    },
]