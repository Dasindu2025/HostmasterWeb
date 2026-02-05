
import React from 'react';
import { Search, Globe, Shield, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

const Domains = () => {
  return (
    <div className="pb-32">
      <section className="py-20 bg-blue-600/5 border-b border-white/5">
        <div className="container mx-auto px-6 text-center">
           <h1 className="text-5xl font-black text-white mb-6">Find Your Perfect Domain</h1>
           <p className="text-gray-400 mb-12 max-w-2xl mx-auto">Secure your identity online with our lightning-fast domain registration system.</p>
           
           <div className="max-w-3xl mx-auto relative group">
              <input 
                type="text" 
                placeholder="search for your unique name..." 
                className="w-full bg-[#0a0a0f] border-2 border-white/10 rounded-2xl py-6 px-8 text-white focus:outline-none focus:border-blue-500 transition-all text-xl font-medium pr-32"
              />
              <button className="absolute right-3 top-3 bottom-3 bg-blue-600 hover:bg-blue-500 text-white px-8 rounded-xl font-bold flex items-center gap-2 transition-all">
                 <Search size={20} /> Search
              </button>
           </div>

           <div className="flex justify-center gap-8 mt-12 flex-wrap">
              {['.com $12.99', '.net $14.99', '.io $39.99', '.org $11.99', '.lk $19.99'].map(tld => (
                <span key={tld} className="text-sm font-bold text-gray-500 hover:text-white cursor-pointer transition-colors uppercase tracking-widest">{tld}</span>
              ))}
           </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { icon: <Globe />, title: 'Any Extension', desc: 'Over 500+ domain extensions available for registration.' },
                { icon: <Shield />, title: 'Whois Protection', desc: 'Keep your personal data hidden from public databases for free.' },
                { icon: <RefreshCw />, title: 'Easy Transfers', desc: 'Move your domains to us with just a few clicks.' }
              ].map((item, i) => (
                <div key={i} className="text-center">
                   <div className="w-16 h-16 bg-white/5 text-blue-400 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                      {item.icon}
                   </div>
                   <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                   <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default Domains;
