'use strict';

const express = require('express');
const SocketServer = require('ws').Server;
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
const app = express();

// ---------------------------------------------------
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('method-override')());
app.use(express.static(__dirname + '/public'));

//------------------------------------------------------


app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({'errors': {
        message: err.message,
        error: {}
    }});
});

const server = app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

// WEBSOCKET ------------------------------------------------------------------
const wss = new SocketServer({ server });

let clients = 0;
wss.on('connection', (ws) => {
    clients++;
  console.log('Client '+ clients +' connected');
  ws.on('close', () => {
    clients--;
      console.log('Client disconnected');
  });

  ws.on('message', (event) => {
    wss.clients.forEach((client) => {
        client.send(event);
    });
  });
});
