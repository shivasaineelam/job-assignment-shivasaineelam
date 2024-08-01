

The Robotic State Management System is a backend application designed for managing robotic states with user authentication and session management. The application uses Node.js, Express.js, Passport.js for authentication, and MongoDB for data storage. It allows users to manage robotic states securely and ensures that only authenticated users can perform CRUD operations on state data.

## Features

- **User Authentication**: Register, login, and logout functionality.
- **Session Management**: Secure user sessions using `express-session`.
- **CRUD Operations**: Create, read, update, and delete robotic states.
- **User-Based State Management**: States are associated with the user who created them, and only authenticated users can manage them.

## Installation

### Prerequisites

- Node.js (v14 or later)
- npm (or yarn)
- MongoDB

### Steps


## Project Structure

- `src/`
  - `server.ts`: Main server file that sets up the Express application and connects to the database.
  - `config/`
    - `db.ts`: Database connection setup.
    - `passport.ts`: Passport.js configuration and strategies.
  - `models/`
    - `user.ts`: Mongoose schema and model for users.
    - `robotState.ts`: Mongoose schema and model for robot states.
  - `routes/`
    - `userRoute.ts`: Routes for user-related operations (signup, login, logout, etc.).
    - `robotroute.ts`: Routes for managing robot states.
  - `middleware/`
    - `authMiddleware.ts`: Middleware for ensuring authentication.

## API Endpoints

### User Routes

- **Register a New User**

    ```http
    POST /user/signup
    ```

    **Request Body:**
    ```json
    {
      "username": "newuser",
      "password": "userpassword"
    }
    ```

    **Response:**
    ```json
    {
      "_id": "userId",
      "username": "newuser",
      "password": "hashedPassword"
    }
    ```

- **Login**

    ```http
    POST /user/login
    ```

    **Request Body:**
    ```json
    {
      "username": "existinguser",
      "password": "userpassword"
    }
    ```

    **Response:**
    ```json
    {
      "message": "Logged in successfully"
    }
    ```

- **Logout**

    ```http
    GET /user/logout
    ```

    **Response:**
    ```json
    {
      "message": "Logged out successfully"
    }
    ```

- **Get Current User**

    ```http
    GET /user/me
    ```

    **Response:**
    ```json
    {
      "_id": "userId",
      "username": "existinguser"
    }
    ```

### Robot State Routes

- **Get All States (Authenticated Only)**

    ```http
    GET /robot
    ```

    **Response:**
    ```json
    [
      {
        "_id": "stateId",
        "name": "Robot Name",
        "description": "Description of the robot",
        "status": "active",
        "createdAt": "2024-07-31T00:00:00Z",
        "updatedAt": "2024-07-31T00:00:00Z",
        "createdBy": "username"
      }
    ]
    ```

- **Create a New State (Authenticated Only)**

    ```http
    POST /robot
    ```

    **Request Body:**
    ```json
    {
      "name": "Robot Name",
      "description": "Description of the robot",
      "status": "active",
      "createdBy": "username",
      "createdAt": "2024-07-31T00:00:00Z",
      "updatedAt": "2024-07-31T00:00:00Z"
    }
    ```

    **Response:**
    ```json
    {
      "message": "new robot added"
    }
    ```

## Dependencies

### Core Dependencies

- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **Mongoose**: MongoDB object modeling tool designed to work in an asynchronous environment.
- **Passport**: Simple, unobtrusive authentication middleware for Node.js.
- **Express-session**: Session management middleware for Express.
- **Bcrypt**: Library to hash passwords for secure storage.

### Development Dependencies

- **TypeScript**: Superset of JavaScript that compiles to plain JavaScript.
- **Nodemon**: Tool that helps develop Node.js applications by automatically restarting the server.
- **Ts-node**: TypeScript execution environment for Node.js.


