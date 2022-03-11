const Admin = require("../models/Admin")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

//register (admin)
exports.register = async (req , res) =>{
    try {
        const {firstName , lastName, email , password , phone} = req.body

        const foundAdmin = await Admin.findOne({email})
        if (foundAdmin) {
            return res.status(400).send({errors:[{msg:"Email exist"}]})
        }

        const saltRounds = 10
        const hashedPassword = await bcrypt.hash(password, saltRounds)

        const newAdmin = new Admin({...req.body})
        newAdmin.password = hashedPassword
        await newAdmin.save()

        const token = jwt.sign(
            {
                id: newAdmin._id
            },
            process.env.SECRET_KEY,
            {expiresIn: "8h"}
        )
        res.status(200).send({msg:"Register Succes", admin : newAdmin, token})
    } catch (error) {
        res.status(400).send({errors:[{msg:"Can not register"}]})
    }
}

//login (admin)
exports.login = async (req , res) =>{
    try {
        const {email , password} = req.body
        const foundAdmin = await Admin.findOne({email})
        if (!foundAdmin){
            return res.status(400).send({errors:[{msg:"Bad credential"}]})
        }
        const checkPassword = await bcrypt.compare(password, foundAdmin.password)
        if ( !checkPassword) {
            return res.status(400).send({errors:[{msg:"Bad credential"}]})
        }
        const token = jwt.sign(
            {
                id: foundAdmin._id
            },
            process.env.SECRET_KEY,
            {expiresIn: "9h"}
        )
        res.status(200).send({msg:"login successfully...", admin : foundAdmin, token})
    } catch (error) {
        res.status(400).send({errors:[{msg:"Can not login !!!"}]})
    }
}