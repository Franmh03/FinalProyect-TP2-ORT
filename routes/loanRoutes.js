import express from "express";
import { 
  getLoans, 
  getLoanById, 
  createLoan, 
  updateLoan, 
  deleteLoan 
} from "../controllers/loanController.js";
import validateUserAndBook from "../middleware/validateUserAndBook.js"; // Import middleware
import checkBookAvailability from "../middleware/checkBookAvailability.js"; // Import middleware

const router = express.Router();

router.get("/", getLoans); // List all loans
router.get("/:id", getLoanById); // Get a loan by ID
router.post("/", validateUserAndBook, checkBookAvailability, createLoan); // Add a new loan
router.put("/:id", updateLoan); // Update a loan by ID
router.delete("/:id", deleteLoan); // Delete a loan by ID

export default router;
