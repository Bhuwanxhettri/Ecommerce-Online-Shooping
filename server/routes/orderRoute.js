import express from "express";

const router = express.Router();


router.post("/order",createOrder);
router.get("/getOrder",getOrder);


export default router;
