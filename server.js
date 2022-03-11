//1- require express
const express = require('express');

//2- create instance
const app= express()

const cors = require('cors')
 
app.use(cors())

//5- require dotenv
require('dotenv').config();

//6- connect DB
const connectDB = require ('./config/connectDB')
connectDB()

app.use(express.json())

//7- routes
app.use("/api/admin", require("./routes/admin"))
app.use("/api/workers",require("./routes/workers"))
app.use("/api/workerlist",require("./routes/listWorkers"))
app.use("/api/leave",require ("./routes/leave"))
app.use("/api/advance", require("./routes/advance"))

//3- PORT
const PORT = process.env.PORT

//4- create server
app.listen( PORT, error => {
    error ? console.error(`failed to connect server !!! ${error}`)
    :
    console.log(`server is ranning on port ${PORT}`);
})