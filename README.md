# UserManagementAPI
The goal of this assignment was to develop a User Management System using Express.js (Node.js) and MongoDB. The application will allow users to register, log in, and manage their profiles. The system will include user authentication using JWT tokens and password encryption with bcrypt.js to ensure security.

## Features
- Users can create an account by providing their name, email, and password.
- Passwords are hashed before being stored in the database using bcrypt.
- Email addresses are validated for uniqueness.
- Registered users can log in using their email and password.
- Upon successful login, a JWT token is generated for session management.
- Secure password validation using bcrypt for hashed passwords.
- Authenticated users can view their profile, including their name, and email.
- The password is excluded from the response for security purposes.
- Users can update their profile information such as name and email.
- Certain routes such as /profile are protected and require a valid token for access.

## Uses
- Node.js
- Express.js
- MongoDB
- JWT
- bcrypt
- mongoose
- dotenv

## Create .env file
Create a .env file to store your credentials. Example below:

```
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/yourDB?retryWrites=true&w=majority

JWT_SECRET=your_jwt_secret_key
```

## Installation
To install and run this project - install dependencies using npm and then start your server:

```
$ npm install
$ touch .env (include above .env properties)
$ npm start (http://localhost:3000)
```

## API Endpoints
Public calls:
- POST /api/users/register --> Register a new user
- POST /api/users/login --> Log in and receive a JWT token

Protected calls:<br>
--> Use the jwt token from the response in a header like this: <br> --> Authorization:Bearer <'token'> 

- GET /api/users/profile --> Get the profile of the authed user
- PUT /api/users/profile --> Update the profile of the authed user 

<br>

- GET /api/users/ --> Get all users (only admin)
- GET /api/users/:id --> Get user details by ID (only admin)
- DELETE /api/users/:id --> Delete user by ID (only admin)