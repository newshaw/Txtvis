const path = require("path")
const fs = require("fs")

const baseDataFolder = path.resolve(global.baseFilePath, "data")

exports.getListByGenre = function (genre) {
    genreGuard(genre)
    const genrePath = path.resolve(baseDataFolder, genre)

    if (!fs.existsSync(genrePath))
        return false

    const files = fs.readdirSync(genrePath)

    return files.map(f => f.replace(".json", ""))
}

exports.getGenreSongByYear = function (genre, year) {
    const years = exports.getListByGenre(genre)
    if (years.some(y => y === year)) {
        return readGenreByYear(genre, year)
    }
    return false
}

function genreGuard(genre) {
    if (typeof genre !== "string")
        throw new Error("genre is not valid")

    return genre.toLowerCase()
}

function readGenreByYear(genre, year) {
    const filePath = path.resolve(baseDataFolder, genre, `${year}.json`)
    const data = fs.readFileSync(filePath)
    return JSON.parse(data)
}