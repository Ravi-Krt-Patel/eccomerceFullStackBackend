const express = require('express');
const db = require("./connection/db")
const cors = require('cors')

//create table not exist


//all controllers 
const userController = require('./controllers/user.controller/user.controller.creation')

const app = express();
app.use(express.json())
app.use(cors())
db.sequelize.sync({force:true})


//calling controller
app.use('/user',userController)


const port = 2323;
app.listen(port, async()=>{
    console.log("app is working on port 2323")
})