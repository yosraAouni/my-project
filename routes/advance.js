//express 
const express= require("express");
const { addAdvance, getAllAdvance, deleteAdvance } = require("../controllers/advance");


//route
const router = express.Router();

//post advance (worker)
router.post("/addadvance", addAdvance)


//get all list advance (admin)
router.get("/getalladvance", getAllAdvance )

//delete advance (admin)
router.delete("/deleteadvance/:_id", deleteAdvance)









//module
module.exports = router ;


