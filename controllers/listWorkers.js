const Worker = require ("../models/Workers")

//get all workers (admin)
exports.getAllWorkers = async (req,res) =>{
    try {
        const listWorkers = await Worker.find()
        res.status(200).send({msg:"this is the list of workers", listWorkers })
    } catch (error) {
        res.status(400).send({msg:"Can not get all workers !!", error })
    }
}


//get one (admin)
exports.getOneWorkers =  async (req,res)=>{
    try {
        const workerToGet = await Worker.findOne({_id: req.params.id})
        res.status(200).send({msg:"I get the worker..", workerToGet})
    } catch (error) {
        res.status(400).send({msg:"Can not worker with this id !!!", error})
    }
}

//Delete worker (admin)
exports.deleteWorkers = async (req,res) =>{
    try {
        const {_id} = req.params
        await Worker.findOneAndDelete({_id})
        res.status(200).send({msg:"worker deleted..."})
    } catch (error) {
        res.status(400).send({msg:"Can not delete worker with this id !!!"})
    }
}

//edit worker (worker)
exports.editWorkers = async (req,res) =>{
    try {
        const {_id}= req.params
        await Worker.updateOne({_id}, { $set: {...req.body}})
        res.status(200).send({msg:"worker updated..."})
    } catch (error) {
        res.status(400).send({msg:"Can not updated worker with this id !!!", error})
    }
}