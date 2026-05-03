import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const sessionId = searchParams.session_id as string;

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-surface border border-primary/30 p-12 rounded-3xl max-w-xl w-full text-center shadow-2xl shadow-primary/10 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center">
          <CheckCircle2 className="w-24 h-24 text-primary mb-6 animate-pulse" />
          
          <h1 className="text-4xl font-bold mb-4 text-white">Payment Successful!</h1>
          
          <p className="text-gray-300 text-lg mb-2">
            Thank you for your purchase. Your premium LoRA character has been unlocked.
          </p>
          
          {sessionId && (
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-3 mt-6 mb-8 inline-block max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
              <span className="text-xs text-gray-500 uppercase tracking-wider block mb-1">Order Session ID</span>
              <span className="font-mono text-sm text-primary/80">{sessionId}</span>
            </div>
          )}

          <div className="flex gap-4 w-full mt-6">
            <Link 
              href="/dashboard" 
              className="flex-1 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-primary/30"
            >
              View My Collection
            </Link>
            <Link 
              href="/marketplace" 
              className="flex-1 py-4 bg-transparent border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white rounded-xl font-bold transition-all"
            >
              Back to Marketplace
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
