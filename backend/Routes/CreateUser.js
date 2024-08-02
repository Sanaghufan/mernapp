const express = require('express')
const router = express.Router()
const User = require('../models/User')
router.post("/createuser",async(req,res)=>{
    try{
        await User.create({name:"sana",
            password:"hbjbb76",
            email:"sana@gmail.com",
            location:"Pandara Road India Gate New Delhi"
        })
        res.json({success:true});
    }catch(error){
        console.log(error)
        res.json({success:false});
    }
})
module.exports = router