# API Documentation

## Authentication

### Register

POST /auth/register

Request

```json
{
  "name":"Arief",
  "email":"arief@gmail.com",
  "password":"123456"
}
```

Response

```json
{
  "id":1,
  "name":"Arief",
  "email":"arief@gmail.com"
}
```

---

### Login

POST /auth/login

Request

```json
{
  "email":"arief@gmail.com",
  "password":"123456"
}
```

Response

```json
{
  "access_token":"xxxxx"
}
```