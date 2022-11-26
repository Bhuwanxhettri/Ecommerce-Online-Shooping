import express from "express";
import cors from "cors"
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser';
import { databaseConnect } from "./db/db.js";
import product from './routes/productRoute.js'
import user from './routes/userRoute.js'

const app = express();
app.use(cookieParser());
app.use(bodyParser.json());

app.use(cors());


app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
})

// Routes
app.use(product);
app.use(user);
// database connection
databaseConnect()



