import { DataTypes } from "sequelize";
import sequelize from "../connection/connection.js"; // Ensure this points to your connection file
import User from "./user.js";
import Book from "./book.js";

const Loan = sequelize.define(
  "Loan",
  {
    loanDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    returnDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    timestamps: false, // Disable timestamps
  }
);

// Relationships
User.hasMany(Loan, { foreignKey: "userId" });
Loan.belongsTo(User, { foreignKey: "userId" });

Book.hasMany(Loan, { foreignKey: "bookId" });
Loan.belongsTo(Book, { foreignKey: "bookId" });

export default Loan;