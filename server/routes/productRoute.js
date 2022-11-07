import express from "express";
import { createProduct, createProductReview, deleteProduct, getAllProduct, getProductDetails, updateProduct } from "../controller/productController.js";
import { isAuthenticatedUser,authorizeRole} from "../middleware/auth.js";
const router = express.Router();


router.get("/products",getAllProduct);
router.get("/product/:id",getProductDetails); 
router.put("/review",isAuthenticatedUser,createProductReview)

//  admin route --😎
router.post("/product/new",createProduct);
router.put("/product/:id",isAuthenticatedUser,authorizeRole("admin"),updateProduct);
router.delete("/product/:id",isAuthenticatedUser,authorizeRole("admin"),deleteProduct);



export default router;
