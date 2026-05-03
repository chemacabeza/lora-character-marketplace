import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const productId = body.productId;
    
    // Try to hit backend if BACKEND_URL is set
    const backendUrl = process.env.BACKEND_URL;
    if (backendUrl) {
      try {
        const res = await fetch(`${backendUrl}/api/orders`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        });
        
        if (res.ok) {
          const data = await res.json();
          return NextResponse.json(data);
        }
        console.error("Backend returned status:", res.status);
      } catch (e) {
        console.error("Failed to reach backend:", e);
      }
    }
    
    // Graceful fallback if backend is missing or offline
    const origin = req.headers.get("origin") || "https://prolific-amazement-production-1c52.up.railway.app";
    // We redirect to /checkout/success to provide visual confirmation of the mock purchase
    const fallbackUrl = `${origin}/checkout/success?session_id=mock_session_frontend_${productId}`;
    
    return NextResponse.json({ url: fallbackUrl });
  } catch (error) {
    console.error("Orders API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
