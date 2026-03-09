import React from 'react';
import { useFormContext } from '../context/FormContext';

const FinalCTA: React.FC = () => {
  const { openForm } = useFormContext();

  return (
    <section id="contact" className="w-full py-20 bg-gradient-to-b from-black to-[#0f0518] flex justify-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-brand-purple/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-[900px] px-4 flex flex-col items-center text-center gap-10 relative z-10">
        
        <h2 className="text-4xl md:text-6xl font-bold font-inter text-white tracking-tight">
            Ready to save <br/>
            <span className="text-brand-lightPurple font-serif italic font-normal">20+ hours per week?</span>
        </h2>

        <p className="text-xl text-white/80 font-sans max-w-2xl">
            Schedule a free 30-minute analysis. <br/>
            No obligations, no sales pitch. Just concrete solutions for your business.
        </p>

        <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-8 w-full max-w-lg text-left shadow-2xl relative overflow-hidden group">
            {/* Subtle sheen effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            <h4 className="text-white font-semibold mb-6 text-lg border-b border-white/10 pb-4 flex justify-between items-center">
                What you get on the call:
                <span className="text-xs bg-brand-purple/20 text-brand-lightPurple px-2 py-1 rounded border border-brand-purple/30">Limited Slots</span>
            </h4>
            
            <ul className="space-y-4 mb-8 relative z-10">
                <li className="flex items-start gap-3 text-white/90">
                    <span className="text-brand-lightPurple font-bold mt-0.5">✓</span>
                    <div className="flex-1">
                        <span className="block font-medium">Full process audit</span>
                        <span className="text-white/40 text-xs">Detailed workflow analysis</span>
                    </div>
                    <span className="text-white/40 text-sm font-mono">€600</span>
                </li>
                <li className="flex items-start gap-3 text-white/90">
                    <span className="text-brand-lightPurple font-bold mt-0.5">✓</span>
                    <div className="flex-1">
                        <span className="block font-medium">Opportunity Identification</span>
                        <span className="text-white/40 text-xs">3-5 automation solutions</span>
                    </div>
                    <span className="text-white/40 text-sm font-mono">€350</span>
                </li>
                <li className="flex items-start gap-3 text-white/90">
                    <span className="text-brand-lightPurple font-bold mt-0.5">✓</span>
                    <div className="flex-1">
                        <span className="block font-medium">Personalized Plan + ROI</span>
                        <span className="text-white/40 text-xs">Exact savings calculation</span>
                    </div>
                    <span className="text-white/40 text-sm font-mono">€200</span>
                </li>
                <li className="flex items-start gap-3 text-white/90">
                    <span className="text-brand-lightPurple font-bold mt-0.5">✓</span>
                    <div className="flex-1">
                        <span className="block font-medium">1-on-1 Consulting</span>
                        <span className="text-white/40 text-xs">30 minutes with an expert</span>
                    </div>
                    <span className="text-white/40 text-sm font-mono">€148</span>
                </li>
            </ul>
            
            <div className="flex justify-between items-end border-t border-white/10 pt-4 mb-6 relative z-10">
                <span className="text-white/60 text-sm font-medium uppercase tracking-wider">Total value</span>
                <div className="text-right flex flex-col items-end">
                    <span className="text-red-400/60 line-through text-lg font-bold decoration-white/30">€1298</span>
                    <span className="text-white font-bold text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-lightPurple">FREE</span>
                </div>
            </div>

            <button 
                onClick={openForm}
                className="w-full bg-btn-gradient text-white py-4 rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(130,55,255,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all flex justify-center items-center gap-2 relative z-10 cursor-pointer"
            >
                Schedule Free Analysis →
            </button>
            
            <div className="flex justify-center gap-4 md:gap-6 mt-4 text-[13px] text-white/40 font-medium relative z-10">
                <span>✓ 100% free</span>
                <span>✓ No obligations</span>
            </div>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;
