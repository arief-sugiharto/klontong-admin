# Klontong Admin Backend

Backend REST API untuk aplikasi **Klontong Admin** yang dibangun menggunakan **NestJS**, **Prisma ORM**, dan **PostgreSQL**.

Project ini menyediakan fitur Authentication menggunakan JWT, serta manajemen Category dan Product dengan arsitektur modular.

---

# Technology Stack

- NestJS
- Prisma ORM
- PostgreSQL
- JWT Authentication
- Passport
- Bcrypt
- Class Validator
- TypeScript

---

# Features

## Authentication

- User Register
- User Login
- JWT Authentication
- Protected Route

## Category

- Create Category
- Get All Categories
- Get Category By ID
- Update Category
- Delete Category

## Product

- Create Product
- Get All Products
- Get Product By ID
- Update Product
- Delete Product

---

# Database

## User

| Field | Type |
|------|------|
| id | Integer |
| name | String |
| email | String |
| password | String |

## Category

| Field | Type |
|------|------|
| id | Integer |
| name | String |

## Product

| Field | Type |
|------|------|
| id | Integer |
| sku | String |
| name | String |
| description | String |
| weight | Integer |
| width | Integer |
| length | Integer |
| height | Integer |
| image | String |
| price | Decimal |
| stock | Integer |
| isActive | Boolean |
| categoryId | Integer |

---

# Entity Relationship

Category (1) -----> (N) Product

---

# Installation

Clone repository

```bash
git clone <repository-url>
```

Install dependency

```bash
npm install
```

Generate Prisma Client

```bash
npx prisma generate
```

Run Migration

```bash
npx prisma migrate dev
```

Run Application

```bash
npm run start:dev
```

---

# API Endpoints

## Authentication

| Method | Endpoint | Authentication |
|---------|----------|----------------|
| POST | /auth/register | No |
| POST | /auth/login | No |
| GET | /auth/profile | Yes |

## Category

| Method | Endpoint | Authentication |
|---------|----------|----------------|
| POST | /category | Yes |
| GET | /category | No |
| GET | /category/:id | No |
| PATCH | /category/:id | Yes |
| DELETE | /category/:id | Yes |

## Product

| Method | Endpoint | Authentication |
|---------|----------|----------------|
| POST | /product | Yes |
| GET | /product | No |
| GET | /product/:id | No |
| PATCH | /product/:id | Yes |
| DELETE | /product/:id | Yes |

---

# Project Structure

```
src
│
├── auth
├── category
├── product
├── prisma
│
├── app.module.ts
├── main.ts
```

---

# Validation

The application includes validation for:

- Duplicate Email
- Duplicate Category
- Duplicate SKU
- Category Exists
- Product Exists
- JWT Authentication
- Request Validation using DTO

---

# Testing

API testing performed using:

- Thunder Client (VS Code)

Authentication, Category, and Product endpoints have been tested successfully.

---

# Author

Arief Sugiharto