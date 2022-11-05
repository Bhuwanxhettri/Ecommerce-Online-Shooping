import express from "express";
import { getAllUser, getUser, getUserDetails, logout, updateUserProfile, verifyToken } from "../controller/userController.js";
import {login, registerUser} from "../controller/userController.js";
import { isAuthenticatedUser,authorizeRole} from "../middleware/auth.js";

const router = express.Router();

router.post("/register",registerUser);
router.post("/login",login);
router.get("/logout",logout);

// authorize the user
router.get("/user",getUser);


router.get("/me",isAuthenticatedUser,getUserDetails);
router.get("/allUsers",getAllUser);
router.put("/updateMe",isAuthenticatedUser,updateUserProfile);


export default router;
