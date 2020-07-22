const express = require('express');        // call express
const cors = require('cors')
const app = express();                 // define our app using express
const bodyParser = require('body-parser');

global.baseFilePath = __dirname

app.use(cors())

const router = require('./routes/main.route')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;        // set our port


app.use('/api', router);
app.listen(port);
console.log('Magic happens on port ' + port);