import React from 'react';
import { Bot, MessageSquare, Zap, Phone, TrendingUp, Monitor, ChevronRight, ArrowRight } from 'lucide-react';

interface Service {
    title: string;
    icon: React.ReactNode;
    preview: string;
    details: string[];
    result: string;
    image: string;
}

const ServiceCard: React.FC<Service> = ({ title, icon, preview, details, result, image }) => {
    return (
        <div className="group h-[420px] w-full [perspective:1000px]">
            <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* --- FRONT FACE --- */}
                <div className="absolute inset-0 h-full w-full rounded-[24px] overflow-hidden [backface-visibility:hidden] border border-white/10 bg-[#0a0a0a] shadow-2xl">
                    {/* Image Background */}
                    <div className="absolute inset-0">
                        <img
                            src={image}
                            alt={title}
                            loading="lazy"
                            className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                        <div className="absolute inset-0 bg-brand-purple/10 mix-blend-overlay" />
                    </div>

                    <div className="relative h-full p-8 flex flex-col justify-end items-start z-10">
                        <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white mb-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
                            {icon}
                        </div>
                        <h3 className="text-3xl font-bold text-white font-inter leading-tight mb-3 drop-shadow-lg">{title}</h3>
                        <div className="flex items-center gap-2 text-white/80 text-sm font-medium mt-2 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
                            <span>View details</span>
                            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                </div>

                {/* --- BACK FACE --- */}
                <div className="absolute inset-0 h-full w-full rounded-[24px] bg-[#0c0c12] border border-brand-purple/50 p-8 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col shadow-[0_0_50px_rgba(146,63,252,0.2)] overflow-hidden">
                    {/* Decoration */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-purple/20 blur-[80px] rounded-full pointer-events-none"></div>
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full pointer-events-none"></div>
                    
                    <div className="relative z-10 flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                            <div className="p-2 rounded-lg bg-brand-purple/20 text-brand-lightPurple shrink-0">
                                {icon}
                            </div>
                            <h3 className="text-xl font-bold font-inter leading-tight text-white">{title}</h3>
                        </div>
                        
                        <p className="text-gray-300 text-sm mb-6 leading-relaxed font-sans">
                            {preview}
                        </p>

                        <ul className="space-y-3 mb-auto">
                            {details.map((detail, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-sm text-gray-400">
                                    <ArrowRight className="w-4 h-4 text-brand-purple mt-0.5 shrink-0" />
                                    <span className="leading-tight">{detail}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="relative z-10 mt-6 bg-white/5 border border-white/10 rounded-xl p-4">
                            <p className="text-[11px] text-brand-lightPurple font-bold uppercase tracking-wider mb-1 flex items-center gap-2">
                                <Zap size={12} fill="currentColor" /> Estimated Result
                            </p>
                            <p className="text-white font-medium text-sm leading-tight">{result}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

const ServicesSection: React.FC = () => {
    const services = [
        {
            icon: <Bot size={28} />,
            title: "AI Agents for Business",
            preview: "A digital employee that never gets tired, never makes mistakes and costs 10x less.",
            image: "/images/services/ai-agent.jpg",
            details: [
                "Processes documents automatically",
                "Responds to emails intelligently",
                "Analyzes data and reports"
            ],
            result: "Savings: 40 hours/week"
        },
        {
            icon: <MessageSquare size={28} />,
            title: "AI Chatbot for Clients",
            preview: "Clients get instant answers. 24/7. Without a support team.",
            image: "/images/services/chatbot.jpg",
            details: [
                "Answers 90% of questions",
                "Qualifies leads 24/7",
                "Works on WhatsApp/Web"
            ],
            result: "Support cost reduction: 60%"
        },
        {
            icon: <Zap size={28} />,
            title: "Workflow Automation",
            preview: "We connect all your systems into a flow that runs by itself.",
            image: "/images/services/automation.jpg",
            details: [
                "CRM ↔ Invoicing sync",
                "Intelligent error notifications",
                "Integration with 500+ apps"
            ],
            result: "15-40 hours saved monthly"
        },
        {
            icon: <Phone size={28} />,
            title: "AI Receptionist",
            preview: "Your calls handled professionally, 24/7, without salaries.",
            image: "/images/services/receptionist.jpg",
            details: [
                "Natural voice in English",
                "Schedules in calendar",
                "Sends SMS confirmations"
            ],
            result: "-70% costs vs employee"
        },
        {
            icon: <TrendingUp size={28} />,
            title: "Marketing Process Automation",
            preview: "End-to-end automated marketing systems for e-commerce businesses and agencies.",
            image: "/images/services/integration.jpg",
            details: [
                "Automated content creation pipelines",
                "AI-driven briefing & campaign management",
                "Market research & analytics on autopilot"
            ],
            result: "3x marketing output, 70% less manual work"
        },
        {
            icon: <Monitor size={28} />,
            title: "Business AI OS",
            preview: "A centralized AI dashboard to control all your automated systems from one place.",
            image: "/images/services/support.jpg",
            details: [
                "Unified control panel for all AI systems",
                "Real-time monitoring & performance analytics",
                "One-click process management"
            ],
            result: "Full business visibility & control"
        }
    ];

  return (
    <section id="services" className="relative w-full py-20 bg-black flex justify-center">
      
      {/* --- Blending Gradients --- */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>

      <div className="w-full max-w-[1240px] px-4 flex flex-col items-center gap-12 relative z-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl">
            <h2 className="text-4xl md:text-[56px] font-semibold leading-tight text-white/95 font-inter">
                Solutions that work for you <br/>
                <span className="font-serif italic text-brand-lightPurple font-normal">24/7</span>
            </h2>
            <p className="mt-6 text-xl text-white/80 font-sans">
               From simple automations to complex AI agents — we choose together what fits your needs.
            </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
            ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
