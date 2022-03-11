const Worker = require("../models/Workers")
const bcrypt = require ("bcrypt") 
const jwt = require ("jsonwebtoken")


//register
exports.register = async (req , res ) =>{
    try {
        const {firstName, lastName, email, password, phone } = req.body
        const foundWorkers = await Worker.findOne({email})
        if (foundWorkers) {
            return res.status(400).send({errors:[{msg:"Email exist"}]})
        }
        const saltRounds = 10 
        const hashedPassword = await bcrypt.hash(password, saltRounds )
        const newWorker = new Worker({...req.body})
        newWorker.password = hashedPassword
        await newWorker.save()

        const token = jwt.sign(
            {
                id: newWorker._id
            },
            process.env.SECRET_KEY,
            {expiresIn: "9h"}
        )
        res.status(200).send({msg:"Can not register", worker: newWorker, token})
    } catch (error) {
        res.status(400).send({errors:[{msg:"Can not register"}]})
    }
}

//login
exports.login = async (req , res) =>{
    try {
        const {email , password} = req.body
        const foundWorkers = await Worker.findOne({email})
        if (!foundWorkers){
            return res.status(400).send({errors:[{msg:"Bad credential"}]})
        }
        const checkPassword = await bcrypt.compare(password, foundWorkers.password)
        if ( !checkPassword) {
            return res.status(400).send({errors:[{msg:"Bad credential"}]})
        }
        const token = jwt.sign(
            {
                id: foundWorkers._id
            },
            process.env.SECRET_KEY,
            {expiresIn: "9h"}
        )
        res.status(200).send({msg:"login successfully...", worker : foundWorkers, token})
    } catch (error) {
        res.status(400).send({errors:[{msg:"Can not login !!!"}]})
    }
}

