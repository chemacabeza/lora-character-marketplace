import LoRACard from "@/components/LoRACard";

import { LORAS } from "@/lib/data";

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
          className="px-6 py-3 bg-surface border border-gray-700 hover:border-primary rounded-xl text-gray-300 hover:text-white transition-all flex items-center gap-2 group"
        >
          View free models on <span className="font-bold text-primary group-hover:text-primary/80">Civitai</span> ↗
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {LORAS.map(product => (
          <LoRACard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
