var mongoose = require('mongoose');

//todo add more fields, photos, google auth etc....


var CacheSchema = new mongoose.Schema({
    name: String,
    note: String,
    latitude: String,
    longitude: String,
    photo: String,
    rating: {type: String, default: "5"},
    type: String,
    contents: String
});

module.exports = mongoose.model('Cache', CacheSchema);