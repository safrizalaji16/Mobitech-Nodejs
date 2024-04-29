# Mobile Store API Documentation

## Authentication

### Login

**POST /api/auth/login**

Endpoint for user login. Returns JWT token upon successful authentication.

Request Body:
```json
{
  "username": "example_user",
  "password": "example_password"
}

Response:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiQWRtaW4iLCJleHAiOjE2MzU5Mzg0Mjl9.2jgJG9nBwVwy03yLrO4kewlKdc0gX"
}

### Login
**POST /api/auth/logout**

Endpoint for user logout. Invalidates JWT token.

Product Management
Get All Products
GET /api/products

Retrieve all products.

Response:
[
  {
    "id": 1,
    "name": "iPhone 13",
    "description": "The latest iPhone model with advanced features.",
    "price": 999.99,
    "quantity": 50
  },
  {
    "id": 2,
    "name": "Samsung Galaxy S21",
    "description": "Powerful Android smartphone with stunning display.",
    "price": 899.99,
    "quantity": 40
  }
]
Get Product by ID
GET /api/products/{id}

Retrieve a specific product by ID.

Response:
{
  "id": 1,
  "name": "iPhone 13",
  "description": "The latest iPhone model with advanced features.",
  "price": 999.99,
  "quantity": 50
}

Add New Product
POST /api/products

Add a new product. (Admin only)

Request Body:
{
  "name": "Google Pixel 6",
  "description": "Flagship smartphone by Google with exceptional camera quality.",
  "price": 799.99,
  "quantity": 30
}

Update Product
PUT /api/products/{id}

Update an existing product. (Admin only)

Request Body:
{
  "name": "Google Pixel 6 Pro",
  "description": "Upgraded version of Google Pixel 6 with additional features.",
  "price": 899.99,
  "quantity": 20
}

Delete Product
DELETE /api/products/{id}

Delete a product. (Admin only)

Error Handling
In case of errors, the API returns appropriate HTTP status codes along with error messages in the response body.

Example:
{
  "error": "Product not found"
}

