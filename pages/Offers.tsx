
import React from 'react';
import { motion } from 'framer-motion';
import { Tag, Zap, Shield, Globe, Clock, Gift } from 'lucide-react';

const Offers = () => {
  const deals = [
    {
      title: 'Global Summer Blast',
      discount: '50% OFF',
      description: 'Get half price on all Shared Hosting plans for the first 12 months.',
      code: 'SUMMER50',
      color: 'bg-orange-500',
      icon: <Zap />
    },
    {
      title: 'Enterprise Migration',
      discount: '3 MO FREE',
      description: 'Switch your Dedicated Server to us and get 3 months of free service.',
      code: 'MIGRATEFREE',
      color: 'bg-blue-600',
      icon: <Shield />
    },
    {
      title: 'Domain Bundle',
      discount: 'FREE .COM',
      description: 'Get a free .com domain with any annual Cloud VPS subscription.',
      code: 'COMFREE',
      color: 'bg-indigo-600',
      icon: <Globe />
    },
    {
        title: 'Flash Sale',
        discount: '70% OFF',
        description: 'Selected storage VPS nodes are now 70% off for new customers.',
        code: 'FLASH70',
        color: 'bg-purple-600',
        icon: <Clock />
      }
  ];

  return (
    <div className="pb-32">
      <header className="py-20 text-center">
        <div className="container mx-auto px-6">
           <div className="w-16 h-16 bg-blue-600/10 text-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Gift size={32} />
           </div>
           <h1 className="text-5xl font-black text-white mb-6">Exclusive Offers</h1>
           <p className="text-gray-400 max-w-xl mx-auto">Limited time deals and exclusive bundles to help you scale your digital infrastructure for less.</p>
        </div>
      </header>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {deals.map((deal, i) => (
             <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative glass border border-white/5 hover:border-white/20 p-8 rounded-3xl overflow-hidden transition-all"
             >
                <div className={`absolute top-0 right-0 w-32 h-32 blur-[80px] -z-10 ${deal.color} opacity-20`}></div>
                
                <div className="flex items-start justify-between mb-8">
                   <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white ${deal.color}`}>
                      {deal.icon}
                   </div>
                   <div className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-white/10 text-white ${deal.color}`}>
                      {deal.discount}
                   </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{deal.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">{deal.description}</p>

                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                   <div className="flex-grow">
                      <div className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Promo Code</div>
                      <div className="text-white font-mono font-bold">{deal.code}</div>
                   </div>
                   <button className="bg-white text-black hover:bg-blue-500 hover:text-white px-6 py-3 rounded-xl font-bold transition-all">
                      Get Deal
                   </button>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
