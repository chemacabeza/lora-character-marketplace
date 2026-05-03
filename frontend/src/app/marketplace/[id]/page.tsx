"use client";
import Image from "next/image";
import { useState } from "react";

// Mock data
const MOCK_PRODUCT = { 
  id: 1, 
  name: "Emma from Ireland", 
  description: "Highly consistent portrait LoRA.", 
  baseModel: "SDXL", 
  priceCents: 999,
  image: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/c0c1a0f6-7a0a-4319-96c8-e1f91aa9a311/original=true/129099726.jpeg"
};

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";
      const res = await fetch(`${API_URL}/api/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: parseInt(params.id) })
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe
      }
    } catch (err) {
      alert("Error initiating checkout. Is the backend running?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Image Gallery Mock */}
      <div className="space-y-4">
        <div className="aspect-[4/5] bg-surface rounded-2xl border border-gray-800 flex items-center justify-center text-gray-500 relative overflow-hidden">
          {MOCK_PRODUCT.image ? (
            <Image 
              src={MOCK_PRODUCT.image} 
              alt={MOCK_PRODUCT.name} 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            "Main Image Preview"
          )}
        </div>
        <div className="grid grid-cols-3 gap-4">
           <div className="aspect-square bg-surface rounded-lg border border-gray-800"></div>
           <div className="aspect-square bg-surface rounded-lg border border-gray-800"></div>
           <div className="aspect-square bg-surface rounded-lg border border-gray-800"></div>
        </div>
      </div>

      {/* Details */}
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold">{MOCK_PRODUCT.name}</h1>
          <p className="text-2xl text-primary font-semibold mt-2">€{(MOCK_PRODUCT.priceCents / 100).toFixed(2)}</p>
        </div>
        
        <div className="prose prose-invert">
          <p>{MOCK_PRODUCT.description}</p>
        </div>

        <div className="bg-surface p-4 rounded-xl border border-gray-800 flex justify-between items-center">
          <span className="text-gray-400">Base Model</span>
          <span className="font-mono bg-gray-800 px-3 py-1 rounded text-sm">{MOCK_PRODUCT.baseModel}</span>
        </div>

        <button 
          onClick={handleCheckout}
          disabled={loading}
          className="w-full py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-primary/20 disabled:opacity-50"
        >
          {loading ? "Processing..." : "Buy Now"}
        </button>
        <p className="text-center text-sm text-gray-500">Secure checkout powered by Stripe</p>
      </div>
    </div>
  );
}
