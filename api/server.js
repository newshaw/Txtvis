
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

global.baseFilePath = __dirname

app.use(cors())

const router = require('./routes/main.route')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port


app.use('/api', router);
app.listen(port);
console.log('Magic happens on port ' + port);