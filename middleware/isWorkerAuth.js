const jwt = require ("jsonwebtoken");
const Worker = require ("../models/Workers");

const isWorkerAuth = async (req, res, next )=>{
    try {
        const token = req.headers ["authorization"]
        if(!token){
            return res.status(401).send({errors:[{msg:"Not authorized !!!"}]})
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        const foundWorkers = await Worker.findOne({_id: decoded.id})
        if (!foundWorkers){
            return res.status(401).send({errors:[{msg:"Not authorized !!!"}]})
        }
        req.worker = foundWorkers
        next()
    } catch (error) {
        return res.status(401).send({errors:[{msg:"Not authorized"}]})
    }

}
module.exports = isWorkerAuth