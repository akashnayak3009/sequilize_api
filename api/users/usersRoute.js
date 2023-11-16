import express from "express";
import {
    createUser,
    deleteUser,
    getAllUsers,
    getUserById,
    updateUser,
} from "./usersControllers.js";

const router = express.Router();

// GET all users
router.get("/", getAllUsers);

// GET user by ID
router.get("/:id", getUserById);

// CREATE a new user
router.post("/", createUser);

// UPDATE user by ID
router.put("/:id", updateUser);

// DELETE user by ID
router.delete("/:id", deleteUser);

export default router;
