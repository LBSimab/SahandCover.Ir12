require('dotenv').config();
const express = require("express")
const produtctRouter = require('./routes/products.js');

const app = express();







app.use(produtctRouter)

try {
    app.listen(process.env.PORT,()=>{console.log("server is running on port 5050")})
    
} catch (error) {
    console.log(error);
}


