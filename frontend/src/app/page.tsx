import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-8 animate-in fade-in zoom-in duration-700">
      <div className="space-y-4">
        <h1 className="text-6xl font-extrabold tracking-tight">
          Consistent Characters. <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Every Single Time.
          </span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Stop struggling with random faces. Buy premium, highly-trained LoRA models for your AI generations, or request a custom model built just for you.
        </p>
      </div>
      
      <div className="flex gap-4">
        <Link href="/marketplace" className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-primary/25">
          Browse Marketplace
        </Link>
        <Link href="/custom-lora" className="px-8 py-4 bg-surface hover:bg-surface/80 border border-gray-700 rounded-full font-semibold transition-all transform hover:scale-105">
          Request Custom LoRA
        </Link>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        <div className="p-6 bg-surface rounded-2xl border border-gray-800">
          <h3 className="text-xl font-bold mb-2">High Consistency</h3>
          <p className="text-gray-400">Trained on curated datasets to ensure the face stays the same across different angles and styles.</p>
        </div>
        <div className="p-6 bg-surface rounded-2xl border border-gray-800">
          <h3 className="text-xl font-bold mb-2">Instant Download</h3>
          <p className="text-gray-400">Get your .safetensors file immediately after purchase. No waiting.</p>
        </div>
        <div className="p-6 bg-surface rounded-2xl border border-gray-800">
          <h3 className="text-xl font-bold mb-2">Custom Requests</h3>
          <p className="text-gray-400">Need a specific person? Upload 15-20 photos and we'll train a private LoRA for you.</p>
        </div>
      </div>
    </div>
  );
}
