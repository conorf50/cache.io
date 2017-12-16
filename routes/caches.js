

// todo Add an update method
// todo Add a fuzzy search method
// todo add routes for updating a cache, listing caches and log in log out.


var caches = require('../models/caches');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Cache = require('../models/caches');




mongoose.connect('mongodb://localhost:27017/cachesdb');

var db = mongoose.connection;


//todo Add more secure auth (google sign in)

db.on('error', function (err) {
    console.log('connection error', err);
});
db.once('open', function () {
    console.log('connected to database');
});

router.findAll = function(req, res) {
    // Use the Cache model to find all donations
    Cache.find(function(err, caches) {
        if (err)
            res.send(err);

        res.json(caches);
    });
};

router.findOne = function(req, res) {

    // Use the Cache model to find a single donation
    Cache.find({ "_id" : req.params.id },function(err, cache) {
        if (err)
            res.json({ message: 'Geocache NOT Found!', errmsg : err } );
        else
            res.json(cache);
    });
};



router.addCache = function(req, res) {

    var cache = new Cache();
//todo Look up methods of storing photos + google auth data
    cache.name = req.body.name;
    cache.note = req.body.note;
    cache.latitude = req.body.latitude;
    cache.longitude = req.body.longitude;
    cache.photo = req.body.photo;
    cache.rating = req.body.rating;
    cache.type = req.body.type;
    cache.contents = req.body.contents;

    console.log('Adding cache: ' + JSON.stringify(cache));

    // Save the cache and check for errors
    cache.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'cache Added!', data: cache });
    });
};


router.deleteCache = function(req, res) {

    Cache.findByIdAndRemove(req.params.id, function(err) {
        if (err)
            res.send(err);
        else
            res.json({ message: 'Geocache Deleted!'});
    });
};


router.deleteAllCaches = function(req, res, err) {
    /*
    removes all of the entries in the database
    Source: https://stackoverflow.com/questions/28139638/how-can-you-remove-all-documents-from-a-collection-with-mongoose
    THIS WILL TERMINATE THE MONGO DB CONNECTION - USE WITH CAUTION
    */
    Cache.remove({}, res)

    if (err)
        res.send(err);
    else
        res.json({ message: 'All Geocaches Deleted!'});

};

router.updateCache = function(req, res) {

    Cache.findById(req.params.id, function(err,cache) {
        cache.name = req.body.name;
        cache.note = req.body.note;
        cache.latitude = req.body.latitude;
        cache.longitude = req.body.longitude;
        cache.photo = req.body.photo;
        cache.rating = req.body.rating;
        cache.type = req.body.type;
        cache.contents = req.body.contents;

        console.log('Updating cache: ' + JSON.stringify(cache));

        cache.save(function (err) {
                if (err)
                    res.send(err);
                else
                    res.json({ message: 'Cache Updated!', data: donation });
            });

    });
}





module.exports = router;