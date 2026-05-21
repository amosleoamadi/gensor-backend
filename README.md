Backend Authentication API

A scalable Node.js authentication API built with Express and MongoDB following a professional backend architecture pattern.

Features:

User Registration
User Login
Protected Profile Route
JWT Authentication
Password Hashing with bcrypt
MongoDB Integration
Swagger API Documentation
CORS Configuration
Modular Folder Structure
Environment Variable Configuration

Tech Stack:

Node.js
Express.js
MongoDB
Mongoose
JWT (jsonwebtoken)
bcryptjs
Swagger UI
Nodemon

Project Structure:
backend/
│
├── config/
│ └── db.js
│
├── controllers/
│ └── auth.controller.js
│
├── middleware/
│ └── auth.middleware.js
│
├── models/
│ └── user.model.js
│
├── routes/
│ └── auth.routes.js
│
├── services/
│ └── auth.service.js
│
├── utils/
│ └── generateToken.js
│
├── validators/
│ └── auth.validator.js
│
├── app.js
├── server.js
├── swagger.js
├── .env
├── package.json
└── README.md
Architecture Breakdown
app.js

Responsible for:

Express application setup
Middleware configuration
Route registration
Swagger setup
CORS configuration
server.js

Responsible for:

Starting the server
Connecting the database
Loading environment variables
config/db.js

Responsible for:

MongoDB connection logic

This keeps database configuration separated from application startup logic.

routes/

Defines API endpoints.

Example:

POST /api/auth/signup
POST /api/auth/login
GET /api/auth/profile

Routes should stay clean and only map endpoints to controllers.

controllers/

Handles:

Request and response logic
Calling services
Returning API responses
services/

Contains business logic such as:

User creation
Password hashing
Login verification
JWT token generation
middleware/

Contains reusable middleware such as:

JWT authentication
Route protection
models/

Defines MongoDB schemas and database structure.

validators/

Handles request validation using Zod.

utils/

Contains reusable helper functions.

Example:

JWT token generation
