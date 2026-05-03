"use client";

import Link from "next/link";
import Image from "next/image";

// All character LoRAs from civitai.red/user/chemacabeza
// Prices in EUR cents (999 = €9.99)
const MY_LORAS = [
  { id: 1, key: "emma", name: "Emma from Ireland", origin: "Ireland", age: 26, height: "1.75m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2905941", img: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/c0c1a0f6-7a0a-4319-96c8-e1f91aa9a311/original=true/129099726.jpeg" },
  { id: 2, key: "hildur", name: "Hildur from Iceland", origin: "Iceland", age: 28, height: "1.72m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2906595", img: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/99b10433-6c7b-46ef-8585-168022926cdb/original=true/129132369.jpeg" },
  { id: 3, key: "elif", name: "Elif from Turkey", origin: "Turkey", age: 27, height: "1.68m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2901249", img: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/d581b472-e25a-4c7c-bfb2-d742316cffd3/original=true/128950588.jpeg" },
  { id: 4, key: "marie", name: "Marie from France", origin: "France", age: 25, height: "1.70m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2903847", img: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/c451e0d5-d6a1-4b9e-840c-e051f7a67338/original=true/129050259.jpeg" },
  { id: 5, key: "dilnoza", name: "Dilnoza from Uzbekistan", origin: "Uzbekistan", age: 24, height: "1.65m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2854321", img: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/f0ec8123-fdc6-48c3-afd0-dd63d02c50de/original=true/127336926.jpeg" },
  { id: 6, key: "charlize", name: "Charlize from South Africa", origin: "South Africa", age: 29, height: "1.77m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2805114", img: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/8bb943b3-76d0-427c-9798-5ae55d881ec1/original=true/125437607.jpeg" },
  { id: 7, key: "alina", name: "Alina from Belarus", origin: "Belarus", age: 26, height: "1.71m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2784882", img: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/45f2d6a3-27fc-483a-a94f-93df50851028/original=true/124653293.jpeg" },
  { id: 8, key: "gabriela", name: "Gabriela from Romania", origin: "Romania", age: 25, height: "1.69m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2780416", img: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/2cc70d69-19f6-4c5b-a81d-c62c2817e559/original=true/124464358.jpeg" },
  { id: 9, key: "olga", name: "Olga from Russia", origin: "Russia", age: 30, height: "1.73m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2748594", img: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/5a6c1d27-1589-47a9-b9c3-58d59d0d0e12/original=true/123859534.jpeg" },
  { id: 10, key: "naran", name: "Naran from Mongolia", origin: "Mongolia", age: 24, height: "1.63m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2727706", img: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/4711cbbc-24b7-4d97-8df2-15060958996c/original=true/122579561.jpeg" },
  { id: 11, key: "carmen", name: "Carmen from Spain", origin: "Spain", age: 28, height: "1.68m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2724940", img: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/2c41df75-92c9-4999-8cbc-b11f119a96ce/original=true/122450824.jpeg" },
  { id: 12, key: "valentina", name: "Valentina from Colombia", origin: "Colombia", age: 25, height: "1.67m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2711709", img: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/ccdcb144-096c-4af7-a5f7-5165990de92c/original=true/121971479.jpeg" },
  { id: 13, key: "priya", name: "Priya from India", origin: "India", age: 27, height: "1.62m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2709407", img: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/ed6d0860-501d-4caf-b01e-6a97aae86d32/original=true/121901125.jpeg" },
  { id: 14, key: "olena", name: "Olena from Ukraine", origin: "Ukraine", age: 26, height: "1.70m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2706444", img: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/9bc01b12-88d9-4c4e-8605-8f3e7d9956f7/original=true/121790959.jpeg" },
  { id: 15, key: "zoya", name: "Zoya from Kazakhstan", origin: "Kazakhstan", age: 24, height: "1.66m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2705922", img: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/11a1dc67-005b-44f8-bc5f-29781869c9be/original=true/121754777.jpeg" },
  { id: 16, key: "dalia", name: "Dalia from Mexico", origin: "Mexico", age: 26, height: "1.65m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2703173", img: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/fff8fdb3-0cbb-466d-81c7-c333830315a2/original=true/121647674.jpeg" },
  { id: 17, key: "anna", name: "Anna from Poland", origin: "Poland", age: 27, height: "1.70m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2700775", img: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/f7a24fac-4cab-4327-8fff-35df4298a1cc/original=true/121616848.jpeg" },
  { id: 18, key: "nora", name: "Nora from Norway", origin: "Norway", age: 25, height: "1.72m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2697743", img: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/00d48c11-ee1b-405f-8fb9-03b996db0cbd/original=true/121442367.jpeg" },
  { id: 19, key: "tina", name: "Tina from Croatia", origin: "Croatia", age: 26, height: "1.69m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2694529", img: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/e7cd9cc3-2bc5-45a8-86f9-203a927b77b7/original=true/121299632.jpeg" },
  { id: 20, key: "aaju", name: "Aaju from Greenland", origin: "Greenland", age: 24, height: "1.60m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2676941", img: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/5dcd07e4-f6e0-41c8-86ed-32b9951faa1e/original=true/120605584.jpeg" },
  { id: 21, key: "maria", name: "Maria from Brazil", origin: "Brazil", age: 28, height: "1.68m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2674074", img: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/a84e1a9f-18b6-42a1-99bd-3f814190a1e8/original=true/120577362.jpeg" },
  { id: 22, key: "anne", name: "Anne from Denmark", origin: "Denmark", age: 27, height: "1.73m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2665179", img: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/0868a068-67c5-4248-a37a-a93b03412f31/original=true/120144950.jpeg" },
  { id: 23, key: "milica", name: "Milica from Serbia", origin: "Serbia", age: 25, height: "1.68m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2627557", img: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/f93a7700-22dc-4689-81b8-3800c7784fd3/original=true/118668328.jpeg" },
  { id: 24, key: "amina", name: "Amina from Morocco", origin: "Morocco", age: 26, height: "1.64m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2622521", img: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/0d31c367-b752-433c-bf76-72edd4d4135a/original=true/118459690.jpeg" },
  { id: 25, key: "sheila", name: "Sheila from Nigeria", origin: "Nigeria", age: 27, height: "1.66m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2619966", img: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/1e0bc7f9-d9ac-42b5-9a8d-f23ed0264432/original=true/118376129.jpeg" },
  { id: 26, key: "stefi", name: "Stefi from Czech Republic", origin: "Czech Republic", age: 24, height: "1.70m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2614177", img: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/6534e7cd-c4d0-4d09-bfa2-22a83ecb3e1a/original=true/118136063.jpeg" },
  { id: 27, key: "lara", name: "Lara from Portugal", origin: "Portugal", age: 26, height: "1.67m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2608668", img: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/d706b22c-5dcf-49c9-8be2-ed9289dab6df/original=true/117909238.jpeg" },
  { id: 28, key: "kasia", name: "Kasia from Poland", origin: "Poland", age: 25, height: "1.69m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2603390", img: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/e3e8305f-42b0-4fd6-a7c1-c3a3e0cba541/original=true/117742042.jpeg" },
  { id: 29, key: "svetlana", name: "Svetlana from Bulgaria", origin: "Bulgaria", age: 28, height: "1.71m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2599427", img: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/c060b0ae-6f46-4968-a61a-5565df48d27d/original=true/117559750.jpeg" },
  { id: 30, key: "sofia", name: "Sofia from Greece", origin: "Greece", age: 26, height: "1.68m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2593749", img: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/f9c3eb39-62e2-4967-878c-b7dc564aa667/original=true/117349603.jpeg" },
  { id: 31, key: "juanita", name: "Juanita from Argentina", origin: "Argentina", age: 27, height: "1.66m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2590587", img: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/acfa2396-fea3-4d2f-a518-88695142e05d/original=true/117244562.jpeg" },
  { id: 32, key: "giulia", name: "Giulia from Italy", origin: "Italy", age: 25, height: "1.70m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2586700", img: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/38e333fc-c818-4625-8239-0d1353dd9065/original=true/117088163.jpeg" },
  { id: 33, key: "fiona", name: "Fiona from Scotland", origin: "Scotland", age: 26, height: "1.72m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2583873", img: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/1e86c00c-0d9e-4ba3-a433-22dbfcda3c27/original=true/116977697.jpeg" },
  { id: 34, key: "helga", name: "Helga from Germany", origin: "Germany", age: 29, height: "1.74m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2570750", img: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/2947e803-e17e-401b-9e98-5f02b76cb9c6/original=true/116522817.jpeg" },
  { id: 35, key: "hana", name: "Hana from Japan", origin: "Japan", age: 24, height: "1.60m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2570710", img: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/04985357-7056-45d9-ad3a-fab7655f9571/original=true/116512221.jpeg" },
  { id: 36, key: "inga", name: "Inga from Finland", origin: "Finland", age: 27, height: "1.73m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2570634", img: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/82b7a3af-3bca-4ded-887b-d35c41c99875/original=true/116511750.jpeg" },
  { id: 37, key: "mariam", name: "Mariam from Georgia", origin: "Georgia", age: 25, height: "1.65m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2570639", img: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/207cca0d-3260-4156-aa45-4b0e53b34a0d/original=true/116512422.jpeg" },
  { id: 38, key: "chen", name: "Chen from China", origin: "China", age: 26, height: "1.62m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2570349", img: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/bb6144f1-7e4a-43fe-beb5-7b24210d20fd/original=true/116501408.jpeg" },
  { id: 39, key: "anastasia", name: "Anastasia from Russia", origin: "Russia", age: 25, height: "1.71m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2570343", img: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/7d0d345c-51fa-4f31-ac18-0f56625fc53d/original=true/116509365.jpeg" },
  { id: 40, key: "allison", name: "Allison from USA", origin: "USA", age: 28, height: "1.69m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2570341", img: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/23f5df57-ce04-4cbb-9fcd-4cc24b705abd/original=true/116501622.jpeg" },
  { id: 41, key: "rabab", name: "Rabab from Egypt", origin: "Egypt", age: 26, height: "1.64m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2570327", img: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/33fb3301-ec2f-4a8f-8915-c198d074efd1/original=true/116499426.jpeg" },
  { id: 42, key: "iuliia", name: "Iuliia from Ukraine", origin: "Ukraine", age: 27, height: "1.70m", baseModel: "SDXL 1.0", priceCents: 999, versionId: "2570319", img: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/c8d61866-d952-453e-819b-f4deb82acc9f/original=true/116500925.jpeg" },
];

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
            className="group bg-surface border border-gray-800 hover:border-primary/60 rounded-xl overflow-hidden flex flex-col transition-all hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5"
          >
            {/* Image section */}
            <div className="relative aspect-[4/5] w-full bg-gray-900 border-b border-gray-800 overflow-hidden">
              {lora.img ? (
                <Image
                  src={lora.img}
                  alt={lora.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-700">
                  No Image
                </div>
              )}
            </div>

            {/* Details section */}
            <div className="p-4 flex flex-col gap-3">
              <div className="flex-1">
                <h3 className="font-bold text-white group-hover:text-primary transition-colors leading-tight line-clamp-1">
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
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
