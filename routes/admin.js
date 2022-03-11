//require express 
const express = require('express');

const { register, login } = require('../controllers/admin');
const isAuth = require('../middleware/isAuth');
const { registerValidation, validations, loginValidation } = require('../middleware/validator');

//express router
const router = express.Router()




//register
router.post("/register",registerValidation(),validations, register)

//login
router.post("/login",loginValidation(),validations, login)


//current admin
router.get("/current", isAuth, (req, res)=>{
    res.send(req.admin)
}) 


module.exports = router