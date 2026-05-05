import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { LORAS } from '@/lib/data';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const productId = body.productId;

    // Look up product from static catalog
    const product = LORAS.find(p => p.id === productId);
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    
    if (stripeSecretKey) {
      // Real Stripe Checkout Session
      const stripe = new Stripe(stripeSecretKey);

      const origin = req.headers.get("origin") || "https://prolific-amazement-production-1c52.up.railway.app";

      const session = await stripe.checkout.sessions.create({
        mode: 'payment',
        billing_address_collection: 'required',
        line_items: [
          {
            quantity: 1,
            price_data: {
              currency: 'eur',
              unit_amount: product.priceCents,
              product_data: {
                name: product.name,
                description: `${product.baseModel} LoRA Character – ${product.description}`,
              },
            },
          },
        ],
        success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/marketplace/${product.id}`,
        metadata: {
          product_id: product.id.toString(),
          product_key: product.key,
        },
      });

      return NextResponse.json({ url: session.url });
    }
    
    // Graceful fallback if STRIPE_SECRET_KEY is not set (local dev)
    const origin = req.headers.get("origin") || "https://prolific-amazement-production-1c52.up.railway.app";
    const fallbackUrl = `${origin}/checkout/success?session_id=mock_session_frontend_${productId}`;
    
    return NextResponse.json({ url: fallbackUrl });
  } catch (error) {
    console.error("Orders API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
