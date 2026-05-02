# API Design

REST endpoints for the LoRA Character Marketplace MVP.

## Authentication
| Method | Endpoint | Description | Request Body | Response |
|---|---|---|---|---|
| POST | `/api/auth/register` | Register user | `{ email, password, username }` | `{ token, user }` |
| POST | `/api/auth/login` | Login user | `{ email, password }` | `{ token, user }` |

## Products (LoRAs)
| Method | Endpoint | Description | Request Body | Response |
|---|---|---|---|---|
| GET | `/api/products` | List all LoRAs | - | `[{ id, name, price, imageUrl... }]` |
| GET | `/api/products/{id}` | Get LoRA details | - | `{ id, name, description, price... }` |

## Orders & Payments
| Method | Endpoint | Description | Request Body | Response |
|---|---|---|---|---|
| POST | `/api/orders` | Create an order | `{ productId }` | `{ orderId, clientSecret (Stripe) }` |
| GET | `/api/orders/{userId}` | List user orders | - | `[{ id, product, status, createdAt }]` |

## Downloads
| Method | Endpoint | Description | Request Body | Response |
|---|---|---|---|---|
| GET | `/api/downloads/{productId}` | Get download URL | - | `{ presignedUrl, expiry }` (Requires Auth & valid order) |

## Training Jobs (Custom LoRAs)
| Method | Endpoint | Description | Request Body | Response |
|---|---|---|---|---|
| POST | `/api/training-jobs` | Request custom training | `{ name, baseModel, images (multipart) }` | `{ jobId, status }` |
| GET | `/api/training-jobs/{id}` | Get job status | - | `{ jobId, status, progress, resultUrl }` |
