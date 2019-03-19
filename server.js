'use strict';

const express = require('express');
const SocketServer = require('ws').Server;
const path = require('path');

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');

const server = express()
  .use((req, res) => res.sendFile(INDEX) )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

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
