var express    = require('express');  
var router = express.Router();   
var fh = require('../helpers/FileReader');

router.get('/', function(req, res) {
    res.json({

    });   
});

router.get('/pop/list', function(req, res) {
    const list = fh.getListByGenre('pop')
    if(!list){
        res.status(404).json({
            message: "object cannot be found"
        })
        return
    }
    res.json(list);
});


router.get('/pop/:year', function(req, res) {
    const list = fh.getGenreSongByYear('pop',req.params.year)
    
    if(!list){
        res.status(404).json({
            message: "object cannot be found"
        })
        return
    }
    res.json(list);   
});

module.exports = router