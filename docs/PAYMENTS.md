# Payment Integration (Stripe)

We use Stripe Checkout for a robust, secure payment experience.

## Checkout Flow
1. **Initiation:** User clicks "Buy Now" on a LoRA page.
2. **Order Creation:** Frontend calls `POST /api/orders` with `productId`.
3. **Session Generation:** Backend creates an `Order` in DB (status `PENDING`), and creates a Stripe Checkout Session using the Stripe Java SDK.
4. **Redirect:** Backend returns the Stripe `sessionId` and `url`. Frontend redirects the user to the Stripe Checkout page.
5. **Payment:** User completes payment on Stripe.
6. **Webhook (Crucial Step):** Stripe sends an asynchronous webhook (`checkout.session.completed`) to `POST /api/webhooks/stripe`.
7. **Fulfillment:** 
   - Backend verifies the webhook signature using the Stripe Webhook Secret.
   - Backend extracts the `orderId` from the session metadata.
   - Backend updates the `Order` status to `PAID`.
8. **Success:** User is redirected back to the `Checkout Success` page, clicks "Go to Dashboard", and now sees the "Download" button available.

## Fallback: Lemon Squeezy
If switching to Lemon Squeezy later, the flow remains conceptually identical (Create checkout -> Webhook -> Fulfill), only the SDK and webhook payload structure changes.
