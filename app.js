
const express = require('express');

const logger = require('morgan');

const bodyParser = require('body-parser');

const cors = require('cors');
// This will be our application entry. We'll setup our server here.
const http = require('http');

// Set up the express app
const app = express();

//cors is needed so other websites can make request to our API
app.use(cors());
app.use(bodyParser.json());

// Log requests to the console....
app.use(logger('dev'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
var agentRoutes = require('./routes/agent');
agentRoutes(app);

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('/', (req, res) => res.status(200).send({  //callback
    message: 'Welcome to Ajo Card Agent API.',
}));

//middleware added to check if client enters not found route  and throws exception
app.use(function(req, res) {
    res.status(404).send({
        url: req.originalUrl + ' not found'
    })
});
const port = parseInt(process.env.PORT, 10) || 8090;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
module.exports = app;
