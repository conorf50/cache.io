var mongoose = require('mongoose');

//todo add more fields, photos, google auth etc....

//todo REMOVE USERNAME + PASSWORD ONCE GOOGLE SIGN IN IS IMPLEMENTED
var SettingsSchema = new mongoose.Schema({
    accountName: String,
    email: String,
    googleAuthToken: String,
    userName: String
    password:String

});

module.exports = mongoose.model('Settings', SettingsSchema);