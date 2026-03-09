import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string; index: number }> = ({ question, answer, index }) => {
    const [isOpen, setIsOpen] = useState(index === 0);

    return (
        <div 
            className={`w-full bg-[#0a0a0a] border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-brand-purple/30 bg-brand-purple/[0.02]' : 'border-white/5 hover:border-white/10'}`}
        >
            <button 
                className="w-full p-6 md:p-8 flex items-center justify-between text-left gap-4 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`text-lg md:text-xl font-medium font-inter transition-colors ${isOpen ? 'text-white' : 'text-white/70'}`}>
                    {question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${isOpen ? 'bg-brand-purple text-white border-brand-purple' : 'bg-white/5 border-white/10 text-white/50'}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </div>
            </button>
            
            <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="p-6 md:p-8 pt-0 text-white/60 text-[16px] leading-relaxed font-sans max-w-3xl">
                    {answer}
                </div>
            </div>
        </div>
    );
};

const FAQ: React.FC = () => {
    const faqs = [
        {
            question: "How much does it cost to automate a process?",
            answer: "It depends on complexity, but most projects start from €2,000. We offer a free analysis where we give you an exact price and an ROI calculation to see how quickly you recover your investment."
        },
        {
            question: "How long does implementation take?",
            answer: "Between 2 and 6 weeks for most solutions. A simple chatbot can be live in 5 days. A complex automation system can take 4-6 weeks."
        },
        {
            question: "Do I need technical knowledge?",
            answer: "No. We handle everything. You tell us what you want to happen and we build the system. The interface you'll use is as simple as an email."
        },
        {
            question: "What happens if it doesn't work?",
            answer: "You have a 90-day guarantee. If the system doesn't deliver the promised results, we refund your money. You risk nothing."
        },
        {
            question: "Does it integrate with the systems I already have?",
            answer: "Yes. We work with over 500 applications: invoicing (QuickBooks, Xero), CRMs (HubSpot, Pipedrive), online stores (Shopify, WooCommerce), calendars, email, WhatsApp and many more."
        },
        {
            question: "Do I need technical staff to maintain the system?",
            answer: "No. We offer continuous support included. If something doesn't work, call us and we fix it. You focus on your business."
        }
    ];

  return (
    <section id="faq" className="w-full py-16 bg-black flex justify-center border-t border-white/5">
      <div className="w-full max-w-[900px] px-4 flex flex-col items-center gap-12">
        
        <div className="text-center max-w-2xl">
            <h2 className="text-4xl md:text-[52px] font-semibold leading-tight text-white font-inter mb-6">
                Frequently Asked <span className="font-serif italic text-brand-lightPurple font-normal">Questions</span>
            </h2>
            <p className="text-lg text-white/60 font-sans">
                Everything you need to know before starting the collaboration.
            </p>
        </div>

        <div className="w-full flex flex-col gap-4">
            {faqs.map((faq, i) => (
                <FAQItem key={i} index={i} {...faq} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
