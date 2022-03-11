const { validationResult , check } = require ("express-validator")

exports.registerValidation = () => [
    check("firstName", "firstName is required").not().isEmpty(),
    check("lastName", "lastName is required").not().isEmpty(),
    check("email", "enter a viled email").isEmail(),
    check("password", "enter a viled password").isLength({min:6})
]


exports.loginValidation = () =>[
    check ( "email", "enter a viled email").isEmail(),
    check("password", "enter a viled password").isLength({min: 6})
]

exports.validations = (req , res , next) =>{
    const errors =validationResult (req);
    if(!errors.isEmpty()) {
        return res.status (400).json ({errors : errors.array()})
    }
next()
}