# Express.js Assignment

## Setup Instructions

Follow these steps to set up and run the project:

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/express-assignment.git
   cd express-assignment
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm start
   ```
   The server will start on the defined `PORT` (default: 3000).

## Environment Variables

| Variable | Purpose |
|----------|---------|
| PORT     | Defines the port the server listens on (default: 3000). |

## Folder Structure

- **routes/**: Defines route handlers for different API endpoints.
- **controllers/**: Contains logic for handling requests and responses.
- **middleware/**: Includes custom middleware like logging and error handling.
- **models/**: (If using a database) Defines data models.
- **config/**: Stores configuration settings such as environment variables.

## Middleware

### Logger Middleware
A custom middleware that logs request details:
```js
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
```

### Global Error Handling
Catches and handles errors consistently:
```js
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});
```

## Testing Endpoints

You can test the API using **Postman** or **cURL**.

Example using cURL:
```sh
curl -X GET http://localhost:3000/api/users
```

