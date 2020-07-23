const express = require('express');
const router = express.Router();
const fh = require('../helpers/FileReader');

router.get('/', function (req, res) {
    res.json({});
});

router.get('/pop/list', function (req, res) {
    const list = fh.getListByGenre('pop')
    if (!list) {
        res.status(404).json({
            message: "object cannot be found"
        })
        return
    }
    res.json(list);
});

router.get('/pop/:year', function (req, res) {
    const list = fh.getGenreSongByYear('pop', req.params.year)
    if (!list) {
        res.status(404).json({
            message: "object cannot be found"
        })
        return
    }
    res.json(list);
});

router.get('/rock/list', function (req, res) {
    const list = fh.getListByGenre('rock')
    if (!list) {
        res.status(404).json({
            message: "object cannot be found"
        })
        return
    }
    res.json(list);
});

router.get('/rock/:year', function (req, res) {
    const list = fh.getGenreSongByYear('rock', req.params.year)
    if (!list) {
        res.status(404).json({
            message: "object cannot be found"
        })
        return
    }
    res.json(list);
});

router.get('/hip_hop/list', function (req, res) {
    const list = fh.getListByGenre('hip_hop')
    if (!list) {
        res.status(404).json({
            message: "object cannot be found"
        })
        return
    }
    res.json(list);
});

router.get('/hip_hop/:year', function (req, res) {
    const list = fh.getGenreSongByYear('hip_hop', req.params.year)
    if (!list) {
        res.status(404).json({
            message: "object cannot be found"
        })
        return
    }
    res.json(list);
});


router.get('/dance/list', function (req, res) {
    const list = fh.getListByGenre('hip_hop')
    if (!list) {
        res.status(404).json({
            message: "object cannot be found"
        })
        return
    }
    res.json(list);
});

router.get('/dance/:year', function (req, res) {
    const list = fh.getGenreSongByYear('hip_hop', req.params.year)
    if (!list) {
        res.status(404).json({
            message: "object cannot be found"
        })
        return
    }
    res.json(list);
});

module.exports = router