const express = require("express");

const userRoutes = express.Router();
userRoutes.post("/login",async (req,res)=>{
console.log("route added")
})

userRoutes.post("/register",async(req,res)=>{
    
})

module.exports = userRoutes