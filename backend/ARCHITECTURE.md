# Architecture

## Overview

Project ini merupakan aplikasi Backend API menggunakan NestJS yang terhubung dengan PostgreSQL melalui Prisma ORM, serta Frontend sederhana menggunakan Nuxt.

```
+----------------------+
|   Nuxt Frontend      |
|   (Vue 3 + Axios)    |
+----------+-----------+
           |
           | HTTP REST API
           |
+----------v-----------+
|     NestJS API       |
|  Authentication JWT  |
|  Product Module      |
|  Category Module     |
+----------+-----------+
           |
           | Prisma ORM
           |
+----------v-----------+
|    PostgreSQL DB     |
+----------------------+
```

## Technology Stack

### Backend

- NestJS 11
- Prisma ORM
- PostgreSQL
- JWT Authentication
- Passport JWT
- Class Validator

### Frontend

- Nuxt 4
- Vue 3
- Axios

## Modules

### Authentication

- Register
- Login
- JWT Authentication

### Category

- Create Category
- Get Categories
- Update Category
- Delete Category

### Product

- Create Product
- Get Products
- Get Product by ID
- Update Product
- Delete Product

## Database

Relationship:

Category

```
1 ---- * Product
```

Satu Category dapat memiliki banyak Product.

## API Flow

Client

↓

Nuxt Frontend

↓

Axios

↓

NestJS Controller

↓

Service

↓

Prisma ORM

↓

PostgreSQL