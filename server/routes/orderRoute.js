import express from "express";
import { createOrder, getOrder } from "../controller/orderController";

const router = express.Router();


router.post("/order",createOrder);
router.get("/getOrder/:id",getOrder);


export default router;
