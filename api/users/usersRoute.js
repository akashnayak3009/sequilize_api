import express from "express";
import {
    createUser,
    deleteUser,
    getAllUsers,
    getUserById,
    loginUser,
    updateUser,
} from "./usersControllers.js";
import { authMiddleware } from "../../middleware/authMiddleware.js";

const router = express.Router();

router.post("/create-user", createUser);
router.post("/login-user", loginUser)
router.get('/fetch',authMiddleware,getUserById)
router.get("/fetch-user", authMiddleware, getAllUsers);
router.put("/update-user/:id", authMiddleware, updateUser);
router.delete("/delete-user/:id", authMiddleware, deleteUser);


export default router;
