//require mongoose
const mongoose = require('mongoose');

//create schema
const { Schema , model } = mongoose


const adminSchema = new Schema({
    firstName:{type: String, required: true},
    lastName:{type: String, required: true},
    email:{type: String, required: true},
    password:{type: String, required: true},
    phone: Number
})


module.exports = Admin = model("admin", adminSchema)