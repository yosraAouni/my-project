const Advance = require("../models/Advance");



//post (workers)
exports.addAdvance = async (req,res) =>{
    try {
        const {fullName, poste, advance} = req.body
        const newAdvance = new Advance ({fullName, poste, advance})
        await newAdvance.save()
        res.status(200).send({msg:"request sent successfully", newAdvance})
    } catch (error) {
        res.status(400).send({msg:"request not sent!!!", error})
    }
}


//get all advance (admin)
exports.getAllAdvance = async (req,res)=>{
    try {
        const listAdvance = await Advance.find()
        res.status(200).send({msg:"validated list advance...", listAdvance})
    } catch (error) {
        res.status(400).send({msg:"Unacceptable list advance!!!", error})
        
    }
}

//delete advance
exports.deleteAdvance = async (req,res)=>{
    try {
        const {_id}= req.params
    await Advance.findOneAndDelete({_id})
    res.status(200).send({msg:"Advance deleted"})
    } catch (error) {
        res.status(400).send({msg:"can not delete advance with this id !!!!", error})
    }
    
}