# Project Summary

## Project Name

Klontong Admin Backend

---

## Objective

Develop a REST API backend for a grocery (Klontong) management system.

The backend provides secure authentication using JWT and supports Category and Product management.

---

## Technology Stack

- NestJS
- Prisma ORM
- PostgreSQL
- JWT Authentication
- Passport
- Class Validator
- TypeScript

---

## Architecture

Client

↓

Controller

↓

Service

↓

Prisma ORM

↓

PostgreSQL

---

## Modules

### Authentication

- Register
- Login
- JWT Authentication
- Protected Routes

### Category

- Create Category
- Get Categories
- Get Category by ID
- Update Category
- Delete Category

### Product

- Create Product
- Get Products
- Get Product by ID
- Update Product
- Delete Product

---

## Validation

The project includes validation for:

- Duplicate Email
- Duplicate Category
- Duplicate SKU
- Category Exists
- Product Exists
- Request Validation using DTO
- JWT Authorization

---

## Testing

The APIs were tested using Thunder Client.

Authentication:

✔ Register

✔ Login

✔ JWT Protected Route

Category:

✔ Create

✔ Read

✔ Update

✔ Delete

Product:

✔ Create

✔ Read

✔ Update

✔ Delete

---

## Result

All required CRUD operations have been implemented successfully.

The project follows a modular architecture using NestJS and Prisma ORM.

JWT Authentication is implemented to secure protected endpoints.