import React from 'react';

const BentoGrid: React.FC = () => {
    const items = [
        {
            title: "Process Automation",
            desc: "We eliminate repetitive tasks that consume time. From data entry to report generation — everything runs automatically, without errors.",
            img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800",
            tag: "POPULAR"
        },
        {
            title: "AI Integration",
            desc: "We implement intelligent solutions where they make sense: chatbots, document processing, predictions, decision support.",
            img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
            tag: "ADVANCED"
        },
        {
            title: "System Integrations",
            desc: "We connect the applications you already use. CRM, ERP, e-commerce — they all communicate with each other automatically.",
            img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            tag: "AUTOMATION"
        },
        {
            title: "Automated Reporting",
            desc: "Real-time dashboards and automatically generated reports. Zero time wasted on Excel and manually compiling data.",
            img: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&q=80&w=800",
            tag: "EFFICIENCY"
        },
        {
            title: "Workflow Optimization",
            desc: "We analyze and restructure processes for maximum efficiency, with or without technology.",
            img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
            tag: "CONSULTING"
        },
        {
            title: "Support & Maintenance",
            desc: "We don't leave you alone after implementation. Continuous monitoring and constant optimizations as your business grows.",
            img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800",
            tag: "SUPPORT"
        }
    ];

  return (
    <section id="services" className="w-full py-20 bg-black flex justify-center">
      <div className="w-full max-w-[1240px] px-4 flex flex-col items-center gap-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mb-10">
            <h2 className="text-4xl md:text-[56px] font-semibold leading-tight text-white/95 font-inter">
                Save Hours Every Day and Boost Efficiency <br/>
                <span className="font-serif italic text-brand-lightPurple font-normal">With Intelligent Automation</span>
            </h2>
            <p className="mt-6 text-xl text-white/80 font-sans">
               From automating repetitive processes to system integrations and automated reporting — we build solutions that free your team to focus on what matters.
            </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {items.map((item, index) => (
                <div key={index} className="group relative bg-white/[0.04] border border-white/10 rounded-[24px] overflow-hidden flex flex-col justify-between shadow-[inset_0_0_60px_#8237ff4d] transition-transform hover:scale-[1.01]">
                    <div className="h-[250px] w-full relative overflow-hidden">
                        {/* Dark overlay for text readability over generic placeholders */}
                        <div className="absolute inset-0 bg-black/40 z-10" />
                        <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                    <div className="p-8 flex flex-col gap-4 relative z-20">
                        <div className="flex flex-wrap gap-2 mb-2">
                             <span className="px-3 py-1 bg-[#8237ff1a] border border-[#8237ff1f] rounded-full text-xs text-[#d2b0fc] uppercase tracking-wider font-semibold">{item.tag}</span>
                        </div>
                        <h3 className="text-2xl font-semibold font-sans text-white/95">{item.title}</h3>
                        <p className="text-[#bcbcbc] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default BentoGrid;
