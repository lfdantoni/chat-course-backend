const VIDEO_COLLECTION = 'videos';

const getVideos = (req, res, db, handleError, ObjectID) => {
  console.log(req.params.id);
  const query = req.params.id ? {_id: new ObjectID(req.params.id)} : {};
  db.collection(VIDEO_COLLECTION).find({}, function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get contact");
    } else {
      const arr = []
      docs.forEach(function (doc) {
        if (doc) {
          arr.push(doc);
        }
      },
      function(err) {
        res.status(200).json(arr);
      });
    }
  });
}

const getVideo = (req, res, db, handleError, ObjectID) => {
  let videoId = '';

  try {
    videoId = new ObjectID(req.params.id);
  } catch (error) {
    handleError(res, "Invalid id", "Invalid id", 400);
    return;
  }

  db.collection(VIDEO_COLLECTION).findOne({_id: videoId}, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to get contact");
    } else {
      if(!doc) {
        handleError(res, "Video not found", "Video not found", 404);
      } else {
        res.status(200).json(doc);
      }
    }
  });
}

const postVideo = (req, res, db, handleError) => {
  var newContact = req.body;
  newContact.createDate = new Date();

  if (!req.body.name || !req.body.imageUrl || !req.body.videoUrl) {
    handleError(res, "Bad request", "Some input are invalid", 400);
  } else {
    db.collection(VIDEO_COLLECTION).insertOne(newContact, function(err, doc2) {
      if (err) {
        handleError(res, err.message, "Failed to create new video.");
      } else {
        res.status(201).json(doc2.ops[0]);
      }
    });
  }
}

const putVideo = (req, res, db, handleError, ObjectID) => {
  var updateDoc = req.body;
  updateDoc.updateDate = new Date();
  delete updateDoc._id;
  delete updateDoc.createDate;

  if (!updateDoc.name || !updateDoc.imageUrl || !updateDoc.videoUrl) {
    handleError(res, "Bad request", "Some input are invalid", 400);
  } else {
    db.collection(VIDEO_COLLECTION).updateOne({_id: new ObjectID(req.params.id)}, {$set: updateDoc}, function(err, doc) {
      if (err) {
        handleError(res, err.message, "Failed to update video");
      } else {
        updateDoc._id = req.params.id;
        res.status(200).json(updateDoc);
      }
    });
  }
}

const deleteVideo = (req, res, db, handleError, ObjectID) => {
  db.collection(VIDEO_COLLECTION).findOne({_id: new ObjectID(req.params.id)}, function(err, videoToDelete) {
    if (err) {
      handleError(res, err.message, "Failed to get video", 500);
    } if(!videoToDelete) {
      handleError(res, "Video not found", "Video not found", 404);
    } else {
      db.collection(VIDEO_COLLECTION).deleteOne({_id: new ObjectID(req.params.id)}, function(err, doc) {
        if (err) {
          handleError(res, err.message, "Failed to delete video", 500);
        } else {
          res.status(200).json(videoToDelete);
        }
      });
    }
  })
}

module.exports = {getVideos, getVideo, postVideo, putVideo, deleteVideo}
