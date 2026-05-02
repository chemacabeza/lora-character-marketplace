"use client";

// Mock purchases data
const MOCK_PURCHASES = [
  { id: 1, name: "Emma from Ireland", date: "2024-05-01", status: "PAID" },
  { id: 2, name: "Vintage Film Grain", date: "2024-04-28", status: "PAID" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-4xl font-bold">My Dashboard</h1>
        <p className="text-gray-400 mt-2">Manage your purchases and training requests.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-2xl font-bold border-b border-gray-800 pb-2">Purchased LoRAs</h2>
          
          <div className="space-y-4">
            {MOCK_PURCHASES.map(item => (
              <div key={item.id} className="bg-surface p-6 rounded-xl border border-gray-800 flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <p className="text-sm text-gray-400">Purchased: {item.date}</p>
                </div>
                <button className="px-6 py-2 bg-secondary/20 hover:bg-secondary/30 text-secondary border border-secondary/50 rounded-lg font-semibold transition-colors">
                  Download .safetensors
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
           <h2 className="text-2xl font-bold border-b border-gray-800 pb-2">Training Queue</h2>
           <div className="bg-surface p-6 rounded-xl border border-gray-800 text-center text-gray-500">
              No active training jobs.
              <a href="/custom-lora" className="block mt-4 text-primary hover:underline">Request a custom LoRA</a>
           </div>
        </div>

      </div>
    </div>
  );
}
