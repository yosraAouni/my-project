const mongoose = require('mongoose');

const { Schema , model } = mongoose

const workersSchema = new Schema({
    firstName:{type: String, required: true},
    lastName:{type: String, required: true},
    email:{type: String, required: true},
    password:{type: String, required: true},
    phone: Number
})

module.exports = Worker = model("worker", workersSchema)