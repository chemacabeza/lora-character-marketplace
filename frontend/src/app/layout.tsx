import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LoRA Character Marketplace",
  description: "High-quality consistent AI characters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-background text-text`}>
        <nav className="border-b border-surface p-4 flex justify-between items-center bg-surface/50 backdrop-blur-md sticky top-0 z-50">
          <a href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">LoRA Market</a>
          <div className="space-x-6 flex items-center">
            <a href="/marketplace" className="hover:text-primary transition-colors">Marketplace</a>
            <a href="/custom-lora" className="hover:text-primary transition-colors">Custom Request</a>
            <a href="/dashboard" className="hover:text-primary transition-colors">Dashboard</a>
            <a 
              href="https://civitai.red/user/chemacabeza/models?sort=Most+Downloaded" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600/20 text-blue-400 border border-blue-600/50 rounded-lg text-sm font-bold hover:bg-blue-600/40 transition-colors flex items-center gap-2"
            >
              Civitai Portfolio ↗
            </a>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
