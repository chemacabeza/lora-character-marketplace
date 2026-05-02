# Training Pipeline Architecture (Simulated for MVP)

This document outlines the asynchronous architecture for processing custom LoRA training requests.

## Flow
1. **Upload:** User fills out the Custom LoRA form, uploading a zip file of images.
2. **Ingestion:** Spring Boot saves the images to S3 (`/private/training/{jobId}`) and creates a `TrainingJob` record in PostgreSQL with status `PENDING`.
3. **Queueing:** Spring Boot sends a message to a queue (e.g., Redis Pub/Sub, RabbitMQ, or AWS SQS) containing the `jobId` and S3 path.
4. **Processing (Worker):**
   - An external Python worker (running on RunPod/Replicate/AWS Batch) picks up the job.
   - It downloads the images from S3.
   - It runs the Kohya/sd-scripts training loop.
   - Upon completion, it uploads the resulting `.safetensors` back to S3 (`/private/loras/{newProductId}`).
5. **Callback:** The worker hits a webhook on the Spring Boot backend (`/api/webhooks/training/{jobId}`) to update the status to `COMPLETED`.
6. **Notification:** The user sees the status change on their dashboard and can download their custom LoRA.

## MVP Simulation
For the initial MVP, the worker is "simulated". The Spring Boot backend will have a scheduled task or async `@Async` method that:
- Waits 30-60 seconds to simulate processing.
- Updates the database status.
- Makes a dummy file available for download.
