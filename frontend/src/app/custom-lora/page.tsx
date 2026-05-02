"use client";
import { useState } from "react";

export default function CustomLoraPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      alert("Request received! We will contact you shortly.");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Request Custom LoRA</h1>
        <p className="text-gray-400">Need a specific person or style? Upload your dataset and we'll train it for you.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-surface p-8 rounded-2xl border border-gray-800 space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">Name of Subject/Style</label>
          <input required type="text" className="w-full bg-background border border-gray-700 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors" placeholder="e.g. My Dog Max" />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">Base Model Preference</label>
          <select className="w-full bg-background border border-gray-700 rounded-lg p-3 text-white focus:border-primary focus:outline-none">
            <option>Flux.1 [dev]</option>
            <option>SDXL 1.0</option>
            <option>SD 1.5</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">Upload Images (ZIP file, 15-30 images)</label>
          <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center text-gray-500 hover:border-primary/50 transition-colors cursor-pointer bg-background/50">
            Click to upload or drag and drop
          </div>
        </div>

        <button disabled={loading} type="submit" className="w-full py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-primary/20 disabled:opacity-50">
          {loading ? "Submitting..." : "Submit Request (€40.00)"}
        </button>
      </form>
    </div>
  );
}
