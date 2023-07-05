const express = require('express')
const {AllModel} = require('../../connection/db')
const {User} = AllModel
const router = express.Router()

router.get("/signUp", async(req,res)=>{
    try{
        // let userData = {
        //     firstName:'sunil',
        //     lastName:'pal',
        //     email:'sunil@gmail.com'
        // }
        const user = await User.create(req.body)
        res.status(201).json({user:user.toJSON()})
    }catch(err){
        res.status(500).json({message:err})
    }
})


module.exports = router;