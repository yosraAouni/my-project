//express 
const express = require("express");
const { getAllWorkers, getOneWorkers, deleteWorkers, editWorkers } = require("../controllers/listWorkers");

//route
const router= express.Router();

//get all workers
router.get("/getallworkers", getAllWorkers);

//get one worker
router.get("/getoneworker/:id", getOneWorkers );

//delete worker 
router.delete("/deleteworker/:_id", deleteWorkers );

//edit worker
router.put("/editworker/:_id", editWorkers);




//export

module.exports = router;