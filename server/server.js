const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
require("dotenv").config();
const port = process.env.PORT || 8080;

const connections = require("./config/db");

const userRouter = require("./Routes/user.routes");
const productRouter = require("./Routes/product.routes");
const wishlistRouter = require("./Routes/wishlist.routes");
const cartRouter = require("./Routes/cart.routes");
const paymentRouter = require("./Routes/payment.Routes");


app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use('/api/wishlist', wishlistRouter);
app.use('/api/cart', cartRouter);
app.use('/api/payment', paymentRouter);



// deployemnet configuration

const path = require('path');
__dirname=path.resolve();
// render deployment

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,'/client/build')));
    app.get('*', (req,res)=>{
        res.sendFile(path.join(__dirname,'client','build','index.html'));
    });
}

app.listen(port,()=> console.log(`listening on port number ${port}`));