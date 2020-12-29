const { body } = require('express-validator');
const mongoose = require('mongoose');
const groupMessage = mongoose.Schema({
    sender : {type:mongoose.Schema.Types.ObjectId, ref:'User'},
    body : {type: String},
    name : { type: String },
    createdAt : {type:Date, default:Date.now}
});
module.exports = mongoose.model('GroupMessage', groupMessage);