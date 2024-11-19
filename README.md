Library Management API
A RESTful API for managing a library system. This API allows you to manage books, users, and loans with full CRUD operations. It is built using Node.js, Express, Sequelize, and MySQL.

Features
CRUD operations for:
Books, Users, Loans
Relational database using MySQL with Sequelize ORM.
Follows the MVC pattern for clean and scalable code.
API endpoints tested using Thunder Client.
Technologies Used
Node.js
Express.js
Sequelize (ORM)
MySQL
Thunder Client (for API testing)


Installation and Setup
Prerequisites
Make sure you have the following installed on your system:

Node.js (v16 or higher)
npm (comes with Node.js)
MySQL
Steps to Run Locally
Clone the Repository

git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name
Install Dependencies

npm install
Set Up the Database

In the root of this repository you'll found an script.sql, if you run it in your root user it will create an DB called Library_TP2 ready to test, with inserts inclueded.

Inside the .env file in the root directory change the password, with your MySQL root password.

DB_NAME=Library_TP2
DB_USER=root
DB_PASS=your-password
DB_HOST=localhost
DB_PORT=3306
SERVER_PORT=3000


To create the necessary tables in the database, run:


npx sequelize-cli db:migrate
Optionally, add some initial data with:


npx sequelize-cli db:seed:all
Start the Server


npm start
By default, the server will run on http://localhost:3000.


Testing the API

Use Thunder Client or any API testing tool to test the endpoints.
API Endpoints
Books
Method	Endpoint	Description
GET	/api/books	List all books
GET	/api/books/:id	Get a book by ID
POST	/api/books	Add a new book
PUT	/api/books/:id	Update a book by ID
DELETE	/api/books/:id	Delete a book by ID
Users
Method	Endpoint	Description
GET	/api/users	List all users
GET	/api/users/:id	Get a user by ID
POST	/api/users	Add a new user
PUT	/api/users/:id	Update a user by ID
DELETE	/api/users/:id	Delete a user by ID
Loans
Method	Endpoint	Description
GET	/api/loans	List all loans
GET	/api/loans/:id	Get a loan by ID
POST	/api/loans	Register a new loan
PUT	/api/loans/:id	Update a loan (e.g., return a book)
DELETE	/api/loans/:id	Delete a loan

How to Test
Install Thunder Client:

Install the extension in Visual Studio Code.
Create requests to the endpoints listed above.
Sample Request:

POST /api/loans
json
Copiar código
{
  "userId": 1,
  "bookId": 1,
  "loanDate": "2023-11-20"
}

Contributors: 


