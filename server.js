'use strict';
const videosHttp = require('./videos.http');

const express = require('express');
const SocketServer = require('ws').Server;
const bodyParser = require('body-parser');
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var CONTACTS_COLLECTION = "settings";

const PORT = process.env.PORT || 3000;
const app = express();

// ---------------------------------------------------
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('method-override')());
app.use(express.static(__dirname + '/public'));

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.send(200);
  }
  else {
    next();
  }
};
app.use(allowCrossDomain);

// --------------------------------------------------------------------------------------

// ---------- Data Base -----------------------------------------------------------------
// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/test", function (err, client) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = client.db();
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });

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
});

// ----------------------------------------------

// CONTACTS API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

app.post("/api/settings", function(req, res) {
  var newContact = req.body;
  newContact.createDate = new Date();

  if (!req.body.nickname || !req.body.email) {
    handleError(res, "Invalid user input", "Must provide a nickname and email.", 400);
  } else {
    db.collection(CONTACTS_COLLECTION).findOne({ email: newContact.email }, function(err, doc) {
      if(doc) {
        handleError(res, "Invalid setting", "This email already exist", 400);
        return;
      }

      db.collection(CONTACTS_COLLECTION).insertOne(newContact, function(err, doc2) {
        if (err) {
          handleError(res, err.message, "Failed to create new setting.");
        } else {
          res.status(201).json(doc2.ops[0]);
        }
      });
    })

    
  }
});

// MANAGE VIDEOS
app.post("/api/videos", function(req, res) {
  videosHttp.postVideo(req, res, db, handleError);
});

app.get("/api/videos/:id", function(req, res) {
  videosHttp.getVideo(req, res, db, handleError, ObjectID);
});

app.get("/api/videos", function(req, res) {
  videosHttp.getVideos(req, res, db, handleError, ObjectID);
});

app.put("/api/videos/:id", function(req, res) {
  videosHttp.putVideo(req, res, db, handleError, ObjectID);
});

app.delete("/api/videos/:id", function(req, res) {
  videosHttp.deleteVideo(req, res, db, handleError, ObjectID);
});
// END MANAGE VIDEOS 


/*  "/api/contacts/:id"
 *    GET: find contact by id
 *    PUT: update contact by id
 *    DELETE: deletes contact by id
 */

app.get("/api/settings", function(req, res) {

  if(!req.query.email) {
    res.status(200).json({});
    return;
  }

  db.collection(CONTACTS_COLLECTION).findOne({ email: req.query.email }, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to get contact");
    } else {
      res.status(200).json(doc ? doc : {});
    }
  });
});

app.put("/api/settings/:id", function(req, res) {
  var updateDoc = req.body;
  delete updateDoc._id;
  delete updateDoc.createDate;

  db.collection(CONTACTS_COLLECTION).updateOne({_id: new ObjectID(req.params.id)}, {$set: updateDoc}, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to update contact");
    } else {
      res.status(200).json(doc);
    }
  });
});