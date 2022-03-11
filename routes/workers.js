const express = require("express");
const { register, login } = require("../controllers/workers");
const isWorkerAuth = require("../middleware/isWorkerAuth");


const { registerValidation, validations, loginValidation } = require("../middleware/validator");


//express router
const router = express.Router()


//register
router.post("/register",registerValidation(),validations, register)

//login
router.post("/login",loginValidation(),validations, login)

//current workers
router.get("/current", isWorkerAuth, (req,res)=>{
    res.send(req.worker)
})


module.exports = router

