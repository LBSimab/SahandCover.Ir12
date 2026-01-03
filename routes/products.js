const express =  require("express");
 getProductByCode = require("../db/products");
const produtctRouter = express.Router();


produtctRouter.get("/product",async(req,res)=>{

    const rowCode = req.query.ID
    const name = req.query.name
    
    result =  await getProductByCode(rowCode)

    if(!result){res.status(500).json({message:""})}

    res.status(200).json({result})


})

module.exports = produtctRouter;
