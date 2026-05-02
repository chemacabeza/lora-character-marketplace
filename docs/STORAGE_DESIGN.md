# Storage Design

The marketplace relies on AWS S3 (or Cloudflare R2) to securely store LoRA files (`.safetensors`), sample images, and training datasets.

## Bucket Structure
- **Bucket:** `lora-marketplace-prod`
  - `/public/images/{productId}/` - Sample images (publicly accessible).
  - `/private/loras/{productId}/` - The actual `.safetensors` files (private, block public access).
  - `/private/training/{userId}/{jobId}/` - User uploaded datasets for custom training (private).

## Security & Download Flow
1. **Public Assets:** Sample images and UI assets are served directly via Cloudfront/CDN from the `/public` prefix.
2. **Paid Assets:** The `.safetensors` files are never public.
3. **Download Mechanism:**
   - User requests a download via `/api/downloads/{productId}`.
   - Backend verifies the user is authenticated (JWT) and owns the product (checking the `orders` table for a `PAID` status).
   - If verified, the Backend uses the AWS SDK to generate a **Presigned URL** valid for a short time (e.g., 15 minutes).
   - Backend returns this URL to the frontend.
   - Frontend triggers the download directly from S3 using the presigned URL, avoiding proxying massive files through the Spring Boot server.
