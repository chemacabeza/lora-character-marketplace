# MVP Execution Plan

Building a marketplace is a marathon. To maintain momentum, we release in phases.

## Phase 1: The Static Storefront (Days 1-3)
- **Goal:** Validate demand without complex logic.
- **Features:** Next.js landing page, product listing, and product detail pages. Hardcoded mock data. Manual "Buy" buttons that link to a basic Stripe Payment Link or Gumroad. Manual delivery of files via email upon purchase.
- **Tech:** React, Tailwind.

## Phase 2: Core Platform & Automations (Days 4-7)
- **Goal:** Automate delivery and manage users.
- **Features:** User registration/login (JWT). Database integration (PostgreSQL). Dynamic product listings. Automated Stripe checkout + Webhooks. Secure S3 downloads via presigned URLs. User dashboard to view purchases.
- **Tech:** Spring Boot, Spring Security, S3, Stripe SDK.

## Phase 3: The Custom Agency (Week 2)
- **Goal:** High-ticket revenue via custom services.
- **Features:** "Request Custom LoRA" form. File upload to S3. Payment integration for custom jobs (higher price tier). Manual training behind the scenes. Admin panel or DB updates to deliver the final file to the user's dashboard.
- **Tech:** S3 Multipart uploads, Order management updates.

## Phase 4: Full Automation (Week 3+)
- **Goal:** Scale the custom service.
- **Features:** Queue system (Redis/RabbitMQ). External Python worker (RunPod/Replicate) that automatically processes training requests and pings the backend webhook upon completion.
- **Tech:** Dockerized workers, Kohya-ss, RunPod Serverless.
