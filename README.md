# Zappyrent API

Simple Book Management REST API built with NestJS.  
Allows users to register, log in, and manage their books with JWT authentication.

---

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm or yarn

### Installation

``bash
git clone https://github.com/crimanvel/zappyrent.git
cd zappyrent
npm install``
Running the App
Start the development server:

``bash
npm run start:dev``
The server will run at http://localhost:3000.

API Endpoints
User Registration
POST /users
Register a new user by sending JSON with username and password.

Authentication
POST /auth/login
Log in with username and password to receive a JWT token.

Books
All book routes require a valid Bearer token.

GET /books
List all books of the authenticated user.

POST /books
Add a new book. Required fields: title, author, year. Optional: description, coverImageUrl.

PUT /books/:id
Update a book by ID.

DELETE /books/:id
Delete a book by ID.

Cover Image Upload
POST /upload/cover
Upload a cover image file. The uploaded image will be stored in the uploads folder, and the response will include the URL to access it.

Notes
Data is stored in memory; restarting the server will reset all users and books.

Images uploaded via /upload/cover are served statically at /uploads/{filename}.

JWT tokens expire after 1 hour.

The project uses class-validator for input validation; invalid inputs will return clear error messages.

Swagger documentation is available at http://localhost:3000/api.

How to Test
Use Postman, Insomnia, or any HTTP client.

Register a user with POST /users.

Log in with POST /auth/login to get the token.

Include the token as Authorization: Bearer <token> header for all /books and /upload/cover requests.

Test CRUD operations on /books.

Upload cover images and use the returned URL in your book entries.

