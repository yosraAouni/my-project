const mongoose = require('mongoose');

const { Schema, model } = mongoose

const leaveSchema = new Schema ({
    fullName:{type: String, required: true},
    poste:{type:String, required: true},
    firstDay : {type: String, required: true },
    lastDay: {type : String, required: true},
    leaveType: {type: String, required:true},
    nbrDay:{type: Number, required:true},
    
})


module.exports = Leave = model ("leave", leaveSchema)