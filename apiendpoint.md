# API Endpoints

## Users

### Retrieve all users
- **Method**: GET
- **URL**: `/api/users`
- **Response Example**:
  ```json
  [
    { "id": 1, "name": "John Doe" },
    { "id": 2, "name": "Jane Doe" }
  ]
  ```
- **cURL**:
  ```sh
  curl -X GET http://localhost:3000/api/users
  ```

### Create a user
- **Method**: POST
- **URL**: `/api/users`
- **Request Body**:
  ```json
  { "name": "New User" }
  ```
- **Response Example**:
  ```json
  { "id": 3, "name": "New User" }
  ```
- **cURL**:
  ```sh
  curl -X POST -H "Content-Type: application/json" -d '{"name":"New User"}' http://localhost:3000/api/users
  ```

### Retrieve a user by ID
- **Method**: GET
- **URL**: `/api/users/:id`

### Update a user
- **Method**: PUT
- **URL**: `/api/users/:id`
- **Request Body**:
  ```json
  { "name": "Updated Name" }
  ```

### Delete a user
- **Method**: DELETE
- **URL**: `/api/users/:id`

## Products

### Retrieve all products
- **Method**: GET
- **URL**: `/api/products`

### Create a product
- **Method**: POST
- **URL**: `/api/products`
- **Request Body**:
  ```json
  { "name": "Product Name", "price": 99.99 }
  ```

### Retrieve a product by ID
- **Method**: GET
- **URL**: `/api/products/:id`

### Update a product
- **Method**: PUT
- **URL**: `/api/products/:id`
- **Request Body**:
  ```json
  { "name": "Updated Product", "price": 109.99 }
  ```

### Delete a product
- **Method**: DELETE
- **URL**: `/api/products/:id`

