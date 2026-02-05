
import React from 'react';
import { Server, Zap, Shield, Globe, Settings, MapPin } from 'lucide-react';

const Colocation = () => {
  return (
    <div className="pb-32">
       <header className="relative py-32 overflow-hidden bg-[#05050a] border-b border-white/5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5">
             <Server className="w-full h-full" />
          </div>
          <div className="container mx-auto px-6 text-center relative z-10">
             <h1 className="text-6xl font-black text-white mb-6">Colocation Services</h1>
             <p className="text-gray-400 max-w-2xl mx-auto">House your hardware in our Tier-III+ data centers with redundant power, enterprise cooling, and ultra-low latency networking.</p>
          </div>
       </header>

       <section className="py-24">
          <div className="container mx-auto px-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                <div>
                   <h2 className="text-4xl font-black text-white mb-8">Your Hardware, <br /><span className="text-blue-500">Our Infrastructure</span></h2>
                   <p className="text-gray-400 mb-12">We provide the space, power, cooling, and security for your server, storage, and networking hardware. Focus on your business while we handle the facility management.</p>
                   
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      {[
                        { icon: <Zap />, title: '2N Power', desc: 'Redundant power feeds and UPS backup.' },
                        { icon: <Settings />, title: 'Smart Hands', desc: 'On-site technicians available 24/7.' },
                        { icon: <Shield />, title: 'Biometric Security', desc: 'Multi-layer access control systems.' },
                        { icon: <MapPin />, title: 'Global PoPs', desc: 'Major hubs in NYC, London, Tokyo.' }
                      ].map((item, i) => (
                        <div key={i}>
                           <div className="text-blue-500 mb-3">{item.icon}</div>
                           <h4 className="text-white font-bold mb-1">{item.title}</h4>
                           <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                   </div>
                </div>
                <div className="relative">
                   <div className="glass p-4 rounded-3xl border border-white/10 overflow-hidden aspect-video">
                      <img src="https://picsum.photos/800/600?nature" className="w-full h-full object-cover rounded-2xl opacity-40 grayscale" />
                   </div>
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/20">
                      <Globe size={120} />
                   </div>
                </div>
             </div>
          </div>
       </section>

       <section className="py-24 border-t border-white/5">
          <div className="container mx-auto px-6 text-center">
             <h3 className="text-2xl font-bold text-white mb-12">Rack Space Options</h3>
             <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {['1U Rack Space', '10U Quarter Rack', '20U Half Rack', '42U Full Cabinet'].map((size, i) => (
                  <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500 transition-all">
                     <div className="text-white font-bold mb-4">{size}</div>
                     <div className="text-xs text-gray-500 mb-6">Starting at</div>
                     <div className="text-2xl font-black text-white mb-8">${(i + 1) * 99}</div>
                     <button className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-all">Request Quote</button>
                  </div>
                ))}
             </div>
          </div>
       </section>
    </div>
  );
};

export default Colocation;
