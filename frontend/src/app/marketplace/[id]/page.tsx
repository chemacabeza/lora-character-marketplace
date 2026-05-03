"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/api/products/${params.id}`)
      .then(res => {
        if (!res.ok) throw new Error("Product not found");
        return res.json();
      })
      .then(data => setProduct(data))
      .catch(err => setError(err.message));
  }, [params.id]);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: parseInt(params.id) })
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe
      } else {
        alert("Checkout failed. Please try again.");
      }
    } catch (err) {
      alert("Error initiating checkout. Is the backend running?");
    } finally {
      setLoading(false);
    }
  };

  if (error) {
    return <div className="text-red-500 text-center text-xl mt-20">{error}</div>;
  }

  if (!product) {
    return <div className="text-gray-400 text-center text-xl mt-20 animate-pulse">Loading product details...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Image Gallery */}
      <div className="space-y-4">
        <div className="aspect-[4/5] bg-surface rounded-2xl border border-gray-800 flex items-center justify-center text-gray-500 relative overflow-hidden">
          {product.imageUrl ? (
            <Image 
              src={product.imageUrl} 
              alt={product.name} 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            "Main Image Preview"
          )}
        </div>
        <div className="grid grid-cols-3 gap-4">
           <div className="aspect-square bg-surface rounded-lg border border-gray-800 opacity-50"></div>
           <div className="aspect-square bg-surface rounded-lg border border-gray-800 opacity-50"></div>
           <div className="aspect-square bg-surface rounded-lg border border-gray-800 opacity-50"></div>
        </div>
      </div>

      {/* Details */}
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-2xl text-primary font-semibold mt-2">€{(product.priceCents / 100).toFixed(2)}</p>
        </div>
        
        <div className="prose prose-invert">
          <p>{product.description}</p>
        </div>

        <div className="bg-surface p-4 rounded-xl border border-gray-800 flex justify-between items-center">
          <span className="text-gray-400">Base Model</span>
          <span className="font-mono bg-gray-800 px-3 py-1 rounded text-sm">{product.baseModel}</span>
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
