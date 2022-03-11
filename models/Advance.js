const mongoose = require ('mongoose');

const {Schema , model} = mongoose


const advanceSchema = new Schema ({
    fullName:{type: String, required: true},
    poste: {type: String, required: true},
    advance: {type: String, required: true}


})

module.exports = Advance = model("advance", advanceSchema)