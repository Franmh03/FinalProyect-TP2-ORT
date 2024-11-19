import Book from './book.js';
import User from './user.js';
import Loan from './loan.js';

// Configure relationships between models

// A User can have multiple loans
User.hasMany(Loan, { foreignKey: 'userId', as: 'loans' });
Loan.belongsTo(User, { foreignKey: 'userId', as: 'user' });

// A Book can be loaned multiple times
Book.hasMany(Loan, { foreignKey: 'bookId', as: 'loans' });
Loan.belongsTo(Book, { foreignKey: 'bookId', as: 'book' });

// Export models
export { Book, User, Loan };

// Default export: all models in one object
export default {
  Book,
  User,
  Loan,
};
