import express from "express";
import { getUsers, getUserById, createUser, updateUser, deleteUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/", getUsers); // List all users
router.get("/:id", getUserById); // Get a user by ID
router.post("/", createUser); // Add a new user
router.put("/:id", updateUser); // Update a user by ID
router.delete("/:id", deleteUser); // Delete a user by ID

export default router;
