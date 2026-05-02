import Link from "next/link";

export default function LoRACard({ product }: { product: any }) {
  return (
    <Link href={`/marketplace/${product.id}`} className="group block">
      <div className="bg-surface border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
        <div className="aspect-[4/5] bg-gray-900 relative overflow-hidden">
          {/* Mock image placeholder until real images are added */}
          <div className="absolute inset-0 flex items-center justify-center text-gray-700 font-mono text-sm group-hover:scale-105 transition-transform duration-500 bg-gradient-to-br from-gray-800 to-gray-900">
            [Image: {product.name}]
          </div>
        </div>
        <div className="p-5 space-y-2">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-bold truncate pr-2">{product.name}</h3>
            <span className="text-primary font-semibold">${(product.priceCents / 100).toFixed(2)}</span>
          </div>
          <p className="text-sm text-gray-400 truncate">{product.description}</p>
          <div className="flex items-center gap-2 pt-2">
            <span className="text-xs bg-gray-800 px-2 py-1 rounded text-gray-300">{product.baseModel}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
