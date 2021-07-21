'use strict'

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required : true,
        id: name
    },
    password: {
        type :String,
        required : true,
        id: {type: String}
    },
    email : {
        type: String,
        required: true,
        unique :true,
        id: {type: String}
    }
});



module.exports = mongoose.model('user',UserSchema);