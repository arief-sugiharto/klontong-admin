# Database Design

## User

| Field | Type |
|--------|------|
| id | Integer |
| name | String |
| email | String |
| password | String |

---

## Category

| Field | Type |
|--------|------|
| id | Integer |
| name | String |

---

## Product

| Field | Type |
|--------|------|
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

## Relationship

Category (1) -------- (N) Product