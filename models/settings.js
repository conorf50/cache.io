var mongoose = require('mongoose');

//todo add more fields, photos, google auth etc....


var SettingsSchema = new mongoose.Schema({
    accountName: String,
    email: String,
    googleAuthToken: String,

});

module.exports = mongoose.model('Settings', SettingsSchema);