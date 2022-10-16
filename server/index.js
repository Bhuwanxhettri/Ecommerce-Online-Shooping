import express from "express";
import cors from "cors"
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose'
import product from './routes/productRoute.js'
import user from './routes/userRoute.js'





const app = express();
app.use(cookieParser());
app.use(bodyParser.json());

app.use(cors());


// Routes
app.use(product);
app.use(user);
// database connection
const url = "mongodb://localhost:27017/Ecommerce";
mongoose.connect(url)
.then(()=>app.listen(8000))
.then(()=>console.log("Connectet to database listining to port 8000"))
.catch((err)=>console.log(err));


