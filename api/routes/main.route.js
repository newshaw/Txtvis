
var router = express.Router();   
var data = require('../data/data.json');              // get an instance of the express Router

router.get('/', function(req, res) {
    res.json(data);   
});

router.get('/africa', function(req, res) {
    res.json(data.africa);   
});

router.get('/asia', function(req, res) {
    res.json(data.asia); 
});

module.exports = router