import express from "express";
import { getBooks, getBookById, createBook, updateBook, deleteBook } from "../controllers/bookController.js";

const router = express.Router();

router.get("/", getBooks); // List all books
router.get("/:id", getBookById); // Get a book by ID
router.post("/", createBook); // Add a new book
router.put("/:id", updateBook); // Update a book by ID
router.delete("/:id", deleteBook); // Delete a book by ID

export default router;
