import React, { useState } from 'react';
import { TrendingUp, CheckCircle2, Building2, Monitor, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CaseStudyProps {
    study: {
        summary: { title: string; industry: string; mainResult: string; icon: any; color: string; gradientClass: string };
        details: { problem: string; solution: string[]; results: string[]; testimonial: { quote: string; author: string } };
    };
    index: number;
}

const CaseStudyCard: React.FC<CaseStudyProps> = ({ study }) => {
    const [isHovered, setIsHovered] = useState(false);

    // Toggle logic for mobile (click) and desktop (hover)
    const handleInteraction = () => {
        setIsHovered(!isHovered);
    };

    return (
        <motion.div
            className="w-full rounded-[24px] bg-[#08080a] border border-white/5 overflow-hidden relative cursor-pointer group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleInteraction}
            animate={{
                backgroundColor: isHovered ? '#0c0c10' : '#08080a',
                borderColor: isHovered ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.05)',
            }}
            transition={{ duration: 0.3 }}
        >
             {/* Background Glow - Intensifies on Hover/Active */}
            <div className={`absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b ${study.summary.color} opacity-[0.02] blur-[120px] rounded-full pointer-events-none transition-opacity duration-700 ${isHovered ? 'opacity-[0.08]' : ''}`} />

            <div className="relative z-10 px-6 py-6 md:px-10 md:py-8">
                
                {/* --- HEADER ROW (Always Visible) --- */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-start md:items-center gap-5">
                        {/* Icon Box */}
                        <div className={`w-14 h-14 rounded-2xl ${study.summary.gradientClass} flex items-center justify-center shrink-0 border border-white/5 shadow-lg`}>
                             {React.createElement(study.summary.icon, { size: 24, className: "text-white" })}
                        </div>
                        
                        {/* Title & Industry */}
                        <div>
                             <div className="flex items-center gap-3 mb-1.5">
                                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 border border-white/10 px-2 py-0.5 rounded-full bg-white/5">
                                    {study.summary.industry}
                                </span>
                             </div>
                             <h3 className="text-xl md:text-2xl font-bold text-white font-inter tracking-tight">
                                {study.summary.title}
                             </h3>
                        </div>
                    </div>

                    {/* Result & Expander */}
                    <div className="flex items-center justify-between md:justify-end gap-8 pl-4 md:pl-0 border-l border-white/5 md:border-l-0">
                        <div className="text-left md:text-right">
                             <p className="text-emerald-400 font-bold text-lg md:text-xl font-sans tracking-tight">
                                {study.summary.mainResult}
                             </p>
                             <p className="text-emerald-400/40 text-[10px] font-bold uppercase tracking-wider hidden md:block">
                                Main Impact
                             </p>
                        </div>
                        <div className={`p-3 rounded-full border border-white/5 transition-all duration-500 flex items-center justify-center ${isHovered ? 'rotate-180 bg-white/10 border-white/20' : 'bg-transparent text-white/30'}`}>
                             <ChevronDown size={20} className={isHovered ? 'text-white' : 'text-current'} />
                        </div>
                    </div>
                </div>

                {/* --- EXPANDED CONTENT (Visible on Hover/Click) --- */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ height: 0, opacity: 0, marginTop: 0 }}
                            animate={{ height: "auto", opacity: 1, marginTop: 32 }}
                            exit={{ height: 0, opacity: 0, marginTop: 0 }}
                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }} // Smooth bezier
                            className="overflow-hidden"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside content
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pt-8 border-t border-white/5">
                                
                                {/* LEFT: Problem & Solution */}
                                <div className="space-y-8">
                                    <div className="relative pl-4 border-l-2 border-white/10">
                                        <h4 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">The Challenge</h4>
                                        <p className="text-white/80 leading-relaxed text-[15px] font-sans">
                                            {study.details.problem}
                                        </p>
                                    </div>
                                    
                                    <div>
                                         <h4 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-brand-lightPurple"></span>
                                            Solution Implemented
                                         </h4>
                                         <ul className="space-y-3">
                                            {study.details.solution.map((s, i) => (
                                                <li key={i} className="flex items-start gap-3 text-[14px] text-white/70 group/item">
                                                    <CheckCircle2 size={16} className="text-brand-lightPurple mt-0.5 shrink-0 group-hover/item:text-brand-purple transition-colors" />
                                                    <span className="font-medium">{s}</span>
                                                </li>
                                            ))}
                                         </ul>
                                    </div>
                                </div>

                                {/* RIGHT: Metrics & Quote */}
                                <div className="space-y-8 flex flex-col justify-between">
                                     <div className="bg-white/[0.03] rounded-2xl p-6 border border-white/5">
                                        <h4 className="text-emerald-500/60 text-xs font-bold uppercase tracking-widest mb-4">Detailed Results</h4>
                                        <ul className="space-y-3">
                                            {study.details.results.map((r, i) => (
                                                <li key={i} className="flex items-center gap-3 text-sm text-white font-medium">
                                                    <TrendingUp size={16} className="text-emerald-400 shrink-0" />
                                                    {r}
                                                </li>
                                            ))}
                                        </ul>
                                     </div>
                                     
                                     <div className="relative">
                                        <div className="text-brand-purple/20 text-4xl absolute -top-4 -left-2 font-serif select-none">"</div>
                                        <p className="text-white/60 text-sm italic leading-relaxed pl-6 relative z-10">
                                            {study.details.testimonial.quote}
                                        </p>
                                        <div className="mt-3 pl-6 flex items-center gap-2">
                                            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold text-white">
                                                {study.details.testimonial.author.charAt(0)}
                                            </div>
                                            <span className="text-white/40 text-xs font-bold uppercase tracking-wider">
                                                {study.details.testimonial.author}
                                            </span>
                                        </div>
                                     </div>
                                </div>

                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    )
}

const CaseStudiesSection: React.FC = () => {
    const studies = [
        {
            summary: {
                title: "Boutique Hotel Chain",
                industry: "Hospitality",
                mainResult: "25 Hours Saved / Week",
                icon: Building2,
                color: "from-purple-500 to-indigo-500",
                gradientClass: "bg-gradient-to-br from-purple-500/20 to-indigo-500/20"
            },
            details: {
                problem: "The front desk was overwhelmed. They missed reservations, responded late to emails, and guests constantly called for repetitive questions (check-in, parking, breakfast).",
                solution: [
                    "AI chatbot trained on hotel specifics",
                    "Automatic sync with Booking Engine",
                    "Automated confirmation & review system"
                ],
                results: [
                    "85% of questions handled by AI",
                    "Direct booking conversion rate: +18%",
                    "Booking.com rating increased by 0.4 points"
                ],
                testimonial: {
                    quote: "We no longer have to answer 'What time is check-in?' 20 times a day. The chatbot handles that flawlessly, and we focus on in-house guests.",
                    author: "Maria D., Manager"
                }
            }
        },
        {
            summary: {
                title: "E-commerce Marketing Agency",
                industry: "Marketing",
                mainResult: "3x Content Output",
                icon: TrendingUp,
                color: "from-cyan-500 to-blue-500",
                gradientClass: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20"
            },
            details: {
                problem: "The agency was spending 60+ hours per week on manual content creation, market research, and campaign briefings across 12 client accounts.",
                solution: [
                    "Automated content creation pipeline with AI",
                    "AI-driven market research & competitor analysis",
                    "Automated campaign briefing & reporting system"
                ],
                results: [
                    "Content production tripled with same team size",
                    "Campaign setup time reduced by 70%",
                    "Client onboarding from 2 weeks to 3 days"
                ],
                testimonial: {
                    quote: "We went from drowning in manual work to focusing on strategy. Our team now manages 3x the clients with better results.",
                    author: "Sarah K., Agency CEO"
                }
            }
        },
        {
            summary: {
                title: "Multi-Location Service Business",
                industry: "Operations",
                mainResult: "Full Real-Time Visibility",
                icon: Monitor,
                color: "from-orange-500 to-red-500",
                gradientClass: "bg-gradient-to-br from-orange-500/20 to-red-500/20"
            },
            details: {
                problem: "Managing automation across 5 locations with no centralized visibility. Each location ran different tools, making it impossible to get a unified view of operations.",
                solution: [
                    "Business AI OS dashboard deployed across all locations",
                    "Unified monitoring for all automated processes",
                    "One-click control panel for system-wide management"
                ],
                results: [
                    "Management overhead cut by 50%",
                    "System downtime reduced to near-zero",
                    "Decision-making speed improved 4x"
                ],
                testimonial: {
                    quote: "Before the AI OS, I was flying blind across our locations. Now I have a single dashboard that shows everything in real-time. Game changer.",
                    author: "James R., COO"
                }
            }
        }
    ];

  return (
    <section id="results" className="relative w-full py-20 bg-black flex justify-center">
      
      {/* --- Blending Gradients --- */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>

      <div className="w-full max-w-[1240px] px-4 flex flex-col items-center gap-16 relative z-20">
        
        {/* Header */}
        <div className="text-center max-w-4xl space-y-6">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-white/60 text-xs font-bold tracking-widest uppercase">Real Case Studies</span>
            </div>
            <h2 className="text-4xl md:text-[56px] font-semibold leading-[1.1] text-white/95 font-inter">
                Concrete Results. <br />
                <span className="font-serif italic text-brand-lightPurple font-normal">Verified Numbers.</span>
            </h2>
            <p className="text-lg text-white/60 font-sans max-w-2xl mx-auto">
                We don't sell theory. We implement systems that produce time and money. <br className="hidden md:block" />
                Here's what real impact looks like in businesses we've worked with.
            </p>
        </div>

        {/* List of Case Studies */}
        <div className="w-full flex flex-col gap-6">
            {studies.map((study, index) => (
                <CaseStudyCard key={index} study={study} index={index} />
            ))}
        </div>

      </div>
    </section>
  );
};

export default CaseStudiesSection;
