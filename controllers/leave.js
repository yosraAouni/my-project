const Leave = require ("../models/Leave");

//post (worker)
exports.addLeave = async (req,res)=>{
    try {
        const {fullName, poste, firstDay,lastDay  , leaveType, nbrDay, comment} = req.body
        const newLeave = new Leave ({fullName, poste, firstDay, lastDay, leaveType, nbrDay, comment})
        await newLeave.save()
        res.status(200).send({msg:"leave added successfully...", newLeave})
    } catch (error) {
        res.status(400).send({ msg: "Can not add leave !!", error})
    }
}

//get all leave (admin)
exports.getAllLeave = async (req,res)=>{
    try {
        const listLeave = await Leave.find()
        res.status(200).send({msg:"validated leave....", listLeave})
    } catch (error) {
        res.status(400).send({msg:"Unacceptable leave !!!", error})
    }
}

//delete leave (admin)
exports.deleteLeave = async (req, res)=>{
    try {
        const {_id} = req.params
        await Leave.findOneAndDelete({_id})
        res.status(200).send({msg:"leave deleted..."})
    } catch(error){
        res.status(400).send({msg:"can not delete leave with this id !!!!", error})
    }
}