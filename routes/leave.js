//express
const express = require("express")
const { getAllLeave, addLeave, deleteLeave } = require("../controllers/leave")

//route
const router = express.Router()


//post 
router.post("/addleave", addLeave)

//get all
router.get("/getallleave", getAllLeave )

//delete
router.delete("/deleteleave/:_id", deleteLeave )


module.exports = router;