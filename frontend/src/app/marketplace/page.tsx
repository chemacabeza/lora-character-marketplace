import LoRACard from "@/components/LoRACard";

// Mock data for MVP
const MOCK_PRODUCTS = [
  { id: 1, name: "Emma from Ireland", description: "Highly consistent portrait LoRA.", baseModel: "SDXL", priceCents: 999 },
  { id: 2, name: "Cyberpunk Knight", description: "Stylized armor and neon lighting.", baseModel: "Flux", priceCents: 1499 },
  { id: 3, name: "Vintage Film Grain", description: "90s aesthetic style LoRA.", baseModel: "SD 1.5", priceCents: 499 },
];

export default function MarketplacePage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-4xl font-bold">Marketplace</h1>
          <p className="text-gray-400 mt-2">Browse our collection of premium, production-ready LoRAs.</p>
        </div>
        <a 
          href="https://civitai.red/user/chemacabeza/models?sort=Most+Downloaded" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-3 bg-surface border border-gray-700 hover:border-blue-500 rounded-xl text-gray-300 hover:text-white transition-all flex items-center gap-2 group"
        >
          View free models on <span className="font-bold text-blue-500 group-hover:text-blue-400">Civitai</span> ↗
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_PRODUCTS.map(product => (
          <LoRACard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
