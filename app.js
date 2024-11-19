import express from 'express';
import sequelize from './connection/connection.js';
import bookRoutes from "./routes/bookRoutes.js"; // Correct import
import userRoutes from "./routes/userRoutes.js"; // Correct import
import loanRoutes from "./routes/loanRoutes.js"; // Correct import
import { Book, User, Loan } from './models/index.js'; // Import models with relationships

const app = express();
app.use(express.json());
app.use("/api/books", bookRoutes);
app.use("/api/users", userRoutes);
app.use("/api/loans", loanRoutes);


// Sync database and relationships
sequelize.sync({ force: false }) // Set to `true` if you want to recreate the tables
  .then(() => console.log('Database synced successfully with relationships'))
  .catch((err) => console.error('Error syncing database:', err));

// Add routes for Books, Users, Loans here (if not already added)

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
