"use client";

import Link from "next/link";

// All character LoRAs from civitai.red/user/chemacabeza
// Prices in EUR cents (999 = €9.99)
const MY_LORAS = [
  { id: 1, key: "emma", name: "Emma from Ireland", origin: "Ireland", age: 26, height: "1.75m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2905941" },
  { id: 2, key: "hildur", name: "Hildur from Iceland", origin: "Iceland", age: 28, height: "1.72m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2906595" },
  { id: 3, key: "elif", name: "Elif from Turkey", origin: "Turkey", age: 27, height: "1.68m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2901249" },
  { id: 4, key: "marie", name: "Marie from France", origin: "France", age: 25, height: "1.70m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2903847" },
  { id: 5, key: "dilnoza", name: "Dilnoza from Uzbekistan", origin: "Uzbekistan", age: 24, height: "1.65m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2854321" },
  { id: 6, key: "charlize", name: "Charlize from South Africa", origin: "South Africa", age: 29, height: "1.77m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2805114" },
  { id: 7, key: "alina", name: "Alina from Belarus", origin: "Belarus", age: 26, height: "1.71m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2784882" },
  { id: 8, key: "gabriela", name: "Gabriela from Romania", origin: "Romania", age: 25, height: "1.69m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2780416" },
  { id: 9, key: "olga", name: "Olga from Russia", origin: "Russia", age: 30, height: "1.73m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2748594" },
  { id: 10, key: "naran", name: "Naran from Mongolia", origin: "Mongolia", age: 24, height: "1.63m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2727706" },
  { id: 11, key: "carmen", name: "Carmen from Spain", origin: "Spain", age: 28, height: "1.68m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2724940" },
  { id: 12, key: "valentina", name: "Valentina from Colombia", origin: "Colombia", age: 25, height: "1.67m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2711709" },
  { id: 13, key: "priya", name: "Priya from India", origin: "India", age: 27, height: "1.62m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2709407" },
  { id: 14, key: "olena", name: "Olena from Ukraine", origin: "Ukraine", age: 26, height: "1.70m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2706444" },
  { id: 15, key: "zoya", name: "Zoya from Kazakhstan", origin: "Kazakhstan", age: 24, height: "1.66m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2705922" },
  { id: 16, key: "dalia", name: "Dalia from Mexico", origin: "Mexico", age: 26, height: "1.65m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2703173" },
  { id: 17, key: "anna", name: "Anna from Poland", origin: "Poland", age: 27, height: "1.70m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2700775" },
  { id: 18, key: "nora", name: "Nora from Norway", origin: "Norway", age: 25, height: "1.72m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2697743" },
  { id: 19, key: "tina", name: "Tina from Croatia", origin: "Croatia", age: 26, height: "1.69m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2694529" },
  { id: 20, key: "aaju", name: "Aaju from Greenland", origin: "Greenland", age: 24, height: "1.60m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2676941" },
  { id: 21, key: "maria", name: "Maria from Brazil", origin: "Brazil", age: 28, height: "1.68m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2674074" },
  { id: 22, key: "anne", name: "Anne from Denmark", origin: "Denmark", age: 27, height: "1.73m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2665179" },
  { id: 23, key: "milica", name: "Milica from Serbia", origin: "Serbia", age: 25, height: "1.68m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2627557" },
  { id: 24, key: "amina", name: "Amina from Morocco", origin: "Morocco", age: 26, height: "1.64m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2622521" },
  { id: 25, key: "sheila", name: "Sheila from Nigeria", origin: "Nigeria", age: 27, height: "1.66m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2619966" },
  { id: 26, key: "stefi", name: "Stefi from Czech Republic", origin: "Czech Republic", age: 24, height: "1.70m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2614177" },
  { id: 27, key: "lara", name: "Lara from Portugal", origin: "Portugal", age: 26, height: "1.67m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2608668" },
  { id: 28, key: "kasia", name: "Kasia from Poland", origin: "Poland", age: 25, height: "1.69m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2603390" },
  { id: 29, key: "svetlana", name: "Svetlana from Bulgaria", origin: "Bulgaria", age: 28, height: "1.71m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2599427" },
  { id: 30, key: "sofia", name: "Sofia from Greece", origin: "Greece", age: 26, height: "1.68m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2593749" },
  { id: 31, key: "juanita", name: "Juanita from Argentina", origin: "Argentina", age: 27, height: "1.66m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2590587" },
  { id: 32, key: "giulia", name: "Giulia from Italy", origin: "Italy", age: 25, height: "1.70m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2586700" },
  { id: 33, key: "fiona", name: "Fiona from Scotland", origin: "Scotland", age: 26, height: "1.72m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2583873" },
  { id: 34, key: "helga", name: "Helga from Germany", origin: "Germany", age: 29, height: "1.74m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2570750" },
  { id: 35, key: "hana", name: "Hana from Japan", origin: "Japan", age: 24, height: "1.60m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2570710" },
  { id: 36, key: "inga", name: "Inga from Finland", origin: "Finland", age: 27, height: "1.73m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2570634" },
  { id: 37, key: "mariam", name: "Mariam from Georgia", origin: "Georgia", age: 25, height: "1.65m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2570639" },
  { id: 38, key: "chen", name: "Chen from China", origin: "China", age: 26, height: "1.62m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2570349" },
  { id: 39, key: "anastasia", name: "Anastasia from Russia", origin: "Russia", age: 25, height: "1.71m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2570343" },
  { id: 40, key: "allison", name: "Allison from USA", origin: "USA", age: 28, height: "1.69m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2570341" },
  { id: 41, key: "rabab", name: "Rabab from Egypt", origin: "Egypt", age: 26, height: "1.64m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2570327" },
  { id: 42, key: "iuliia", name: "Iuliia from Ukraine", origin: "Ukraine", age: 27, height: "1.70m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2570319" },
];

// Flag emoji from country name
const FLAG_MAP: Record<string, string> = {
  "Ireland": "🇮🇪", "Iceland": "🇮🇸", "Turkey": "🇹🇷", "France": "🇫🇷",
  "Uzbekistan": "🇺🇿", "South Africa": "🇿🇦", "Belarus": "🇧🇾", "Romania": "🇷🇴",
  "Russia": "🇷🇺", "Mongolia": "🇲🇳", "Spain": "🇪🇸", "Colombia": "🇨🇴",
  "India": "🇮🇳", "Ukraine": "🇺🇦", "Kazakhstan": "🇰🇿", "Mexico": "🇲🇽",
  "Poland": "🇵🇱", "Norway": "🇳🇴", "Croatia": "🇭🇷", "Greenland": "🇬🇱",
  "Brazil": "🇧🇷", "Denmark": "🇩🇰", "Serbia": "🇷🇸", "Morocco": "🇲🇦",
  "Nigeria": "🇳🇬", "Czech Republic": "🇨🇿", "Portugal": "🇵🇹",
  "Bulgaria": "🇧🇬", "Greece": "🇬🇷", "Argentina": "🇦🇷", "Italy": "🇮🇹",
  "Scotland": "🏴󠁧󠁢󠁳󠁣󠁴󠁿", "Germany": "🇩🇪", "Japan": "🇯🇵", "Finland": "🇫🇮",
  "Georgia": "🇬🇪", "China": "🇨🇳", "USA": "🇺🇸", "Egypt": "🇪🇬",
};

export default function DashboardPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-4xl font-bold">My LoRA Collection</h1>
          <p className="text-gray-400 mt-2">
            {MY_LORAS.length} premium character LoRAs · SDXL 1.0 · €9.99 each
          </p>
        </div>
        <a
          href="https://civitai.red/user/chemacabeza/models?sort=Most+Downloaded"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 bg-surface border border-gray-700 hover:border-primary rounded-xl text-gray-300 hover:text-white transition-all text-sm font-medium flex items-center gap-2"
        >
          View on Civitai ↗
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {MY_LORAS.map((lora) => (
          <a
            key={lora.id}
            href={`https://civitai.red/model-versions/${lora.versionId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-surface border border-gray-800 hover:border-primary/60 rounded-xl p-5 flex flex-col gap-3 transition-all hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5"
          >
            {/* Avatar placeholder with flag */}
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 border border-gray-700 flex items-center justify-center text-2xl">
              {FLAG_MAP[lora.origin] ?? "🌍"}
            </div>

            <div className="flex-1">
              <h3 className="font-bold text-white group-hover:text-primary transition-colors leading-tight">
                {lora.name}
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                {lora.origin} · {lora.age}y · {lora.height}
              </p>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-gray-800">
              <span className="text-xs font-mono bg-gray-800 px-2 py-0.5 rounded text-gray-400">
                {lora.baseModel}
              </span>
              <span className="text-sm font-bold text-primary">
                €{(lora.priceCents / 100).toFixed(2)}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
