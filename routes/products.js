const express =  require("express");
const { getProductByCode ,getWarehouse,getWarehousequantity} = require("../db/products");
 
const produtctRouter = express.Router();


produtctRouter.get("/product",async(req,res)=>{

    const rowCode = req.query.Id
    const name = req.query.name
    
    resultProduct =  await getProductByCode(rowCode)

    if(!resultProduct){res.status(500).json({message:"something went wrong in the server"})}
    
    resultwarehouse = await getWarehouse(parseInt(resultProduct.recordset[0].Warehouse_ID))
    resultquantitywarehouse = await getWarehousequantity(parseInt(resultProduct.recordset[0].RowID))

    const productJson = [
 
];
    
resultProduct.recordset.forEach(element => {productJson.push({name:element.RowName,price:element.SalePrice,RowCode:element.RowCode})
    
});
    
    res.status(200).json({resultquantitywarehouse})
})

module.exports = produtctRouter;
