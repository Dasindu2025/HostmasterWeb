
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, HardDrive, Monitor, Zap, ChevronRight, Activity, 
  Cpu, Shield, Globe, CheckCircle2, Server, Lock, 
  Settings, Clock, HelpCircle, Plus, Minus, Download, Layers
} from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-bold text-gray-300 group-hover:text-white transition-colors tracking-tight italic uppercase">{question}</span>
        <div className={`shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? <Minus size={20} className="text-blue-500" /> : <Plus size={20} className="text-gray-500" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-gray-500 leading-relaxed font-medium">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const VPS = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const currentType = type || 'linux';

  const contentMap: any = {
    linux: {
      title: 'Linux VPS Hosting',
      headline: 'Fastest Web Hosting | Lite Speed Web Server',
      subHeadline: 'Unmanaged VPS Hosting in your Budget',
      intro: 'Take Full Control with Our Unmanaged VPS. The right choice for users with technical proficiency. If you are a developer, designer, or system administrator having expertise in managing the server, our VPS hosting is the best fit.',
      accentColor: 'blue',
      tiers: [
        { name: '1 vCPU', cores: '1 Core', ram: '2GB', storage: '20GB', bw: '2TB', price: '8.00' },
        { name: '2 vCPU', cores: '2 Cores', ram: '4GB', storage: '60GB', bw: '4TB', price: '14.00' },
        { name: '3 vCPU', cores: '3 Cores', ram: '6GB', storage: '90GB', bw: '3TB', price: '20.00' },
        { name: '4 vCPU', cores: '4 Cores', ram: '8GB', storage: '120GB', bw: '8TB', price: '26.00' },
        { name: '5 vCPU', cores: '5 Cores', ram: '10GB', storage: '150GB', bw: '10TB', price: '32.00' },
        { name: '6 vCPU', cores: '6 Cores', ram: '12GB', storage: '180GB', bw: '12TB', price: '38.00' },
        { name: '7 vCPU', cores: '7 Cores', ram: '14GB', storage: '210GB', bw: '14TB', price: '44.00' },
        { name: '8 vCPU', cores: '8 Cores', ram: '16GB', storage: '240GB', bw: '16TB', price: '50.00' }
      ]
    },
    storage: {
      title: 'Storage VPS',
      headline: 'High-Density Storage Arrays',
      subHeadline: 'Massive Capacity for Data-Heavy Loads',
      intro: 'Scalable storage instances designed for media archives, backup targets, and large-scale data processing with unmatched reliability.',
      accentColor: 'emerald',
      tiers: [
        { name: '500GB', cores: '1 Core', ram: '2GB', storage: '500GB HDD', bw: '10TB', price: '15.00' },
        { name: '1TB', cores: '2 Cores', ram: '4GB', storage: '1TB HDD', bw: '20TB', price: '28.00' },
        { name: '2TB', cores: '4 Cores', ram: '8GB', storage: '2TB HDD', bw: '50TB', price: '52.00' },
        { name: '5TB', cores: '8 Cores', ram: '16GB', storage: '5TB HDD', bw: '100TB', price: '120.00' }
      ]
    },
    windows: {
      title: 'Windows VPS',
      headline: 'RDP Optimized Cloud Compute',
      subHeadline: 'Licensed Windows Server Environments',
      intro: 'Optimized for ASP.NET, MSSQL, and remote desktop workloads. Full administrator access on high-powered enterprise hardware stacks.',
      accentColor: 'indigo',
      tiers: [
        { name: 'WIN-1', cores: '2 Cores', ram: '4GB', storage: '80GB NVMe', bw: '5TB', price: '24.00' },
        { name: 'WIN-2', cores: '4 Cores', ram: '8GB', storage: '160GB NVMe', bw: '10TB', price: '44.00' },
        { name: 'WIN-3', cores: '8 Cores', ram: '16GB', storage: '320GB NVMe', bw: '20TB', price: '84.00' },
        { name: 'WIN-4', cores: '16 Cores', ram: '32GB', storage: '640GB NVMe', bw: 'Unlimited', price: '164.00' }
      ]
    }
  };

  const currentData = contentMap[currentType] || contentMap.linux;
  const accentClass = currentData.accentColor === 'emerald' ? 'text-emerald-500' : currentData.accentColor === 'indigo' ? 'text-indigo-500' : 'text-blue-500';
  const accentBg = currentData.accentColor === 'emerald' ? 'bg-emerald-600' : currentData.accentColor === 'indigo' ? 'bg-indigo-600' : 'bg-blue-600';

  return (
    <div className="pb-40 relative">
      {/* HUD Grid Background */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <header className="py-24 text-center">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-8 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl mx-auto w-fit">
              <span className={`w-2 h-2 rounded-full ${accentBg} animate-pulse`}></span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 italic">Grid Link established</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter italic leading-none">
              {currentData.title.split(' ')[0]} <span className={accentClass}>{currentData.title.split(' ').slice(1).join(' ')}.</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-black text-white/40 mb-10 tracking-tight italic uppercase">{currentData.headline}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
              {[
                { label: 'Uptime', value: '99.95%', icon: <Activity /> },
                { label: 'Guarantee', value: '14-Day Money Back', icon: <Shield /> },
                { label: 'Access', value: 'Full Root Access', icon: <Terminal /> }
              ].map((h, i) => (
                <div key={i} className="bg-[#0c0d12] border border-white/5 p-6 rounded-3xl flex items-center gap-6">
                   <div className={accentClass}>{h.icon}</div>
                   <div className="text-left">
                      <div className="text-[9px] font-black text-gray-600 uppercase tracking-widest">{h.label}</div>
                      <div className="text-white font-bold text-lg italic tracking-tight uppercase">{h.value}</div>
                   </div>
                </div>
              ))}
            </div>

            <p className="text-gray-500 max-w-4xl mx-auto text-xl font-bold tracking-tight italic leading-relaxed mb-12">
              {currentData.intro}
            </p>
          </motion.div>
        </div>
      </header>

      <section className="container mx-auto px-6 max-w-[1500px]">
        {/* Category Tabs */}
        <div className="flex justify-center mb-20">
          <div className="inline-flex bg-[#0c0d12] border border-white/5 rounded-[2rem] overflow-hidden p-1.5 shadow-3xl gap-1">
            {[
              { id: 'linux', label: 'Linux VPS', icon: <Terminal size={18} /> },
              { id: 'storage', label: 'Storage VPS', icon: <HardDrive size={18} /> },
              { id: 'windows', label: 'Windows VPS', icon: <Monitor size={18} /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => navigate(`/vps/${tab.id}`)}
                className={`relative flex items-center gap-4 px-12 py-5 transition-all group overflow-hidden rounded-2xl ${
                  currentType === tab.id ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {currentType === tab.id && (
                  <motion.div 
                    layoutId="active-tab-bg" 
                    className={`absolute inset-0 bg-gradient-to-br ${currentData.accentColor === 'emerald' ? 'from-emerald-600 to-emerald-900' : currentData.accentColor === 'indigo' ? 'from-indigo-600 to-indigo-900' : 'from-blue-600 to-blue-900'}`} 
                  />
                )}
                <span className="relative z-10">{tab.icon}</span>
                <span className="relative z-10 text-[11px] font-black uppercase tracking-[0.25em] italic">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-40">
          <AnimatePresence mode="wait">
            {currentData.tiers.map((p: any, i: number) => (
              <motion.div 
                key={`${currentType}-${p.name}`}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative bg-[#0c0d12] border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col transition-all duration-700 hover:border-white/20"
              >
                <div className={`bg-gradient-to-r ${currentData.accentColor === 'emerald' ? 'from-emerald-600 to-emerald-800' : currentData.accentColor === 'indigo' ? 'from-indigo-600 to-indigo-800' : 'from-blue-600 to-blue-800'} py-7 text-center`}>
                   <h3 className="text-white font-black text-2xl uppercase tracking-[0.3em] italic">{p.name}</h3>
                </div>
                
                <div className="p-10 flex flex-col h-full bg-[#08090d]/50">
                  <div className="text-center mb-10">
                    <div className="flex items-baseline justify-center gap-1 mb-2">
                      <span className="text-xs font-black text-gray-500 mr-1">$</span>
                      <span className="text-7xl font-black text-white tracking-tighter">{p.price.split('.')[0]}</span>
                      <span className="text-2xl font-black text-white/40 italic">.{p.price.split('.')[1]}</span>
                      <span className="text-gray-600 text-[10px] font-black uppercase tracking-widest ml-2">/mo</span>
                    </div>
                  </div>

                  <div className="space-y-6 mb-12 flex-grow">
                    {[
                      { icon: <Cpu size={14} />, text: p.cores, label: 'Compute' },
                      { icon: <Activity size={14} />, text: p.ram, label: 'Memory' },
                      { icon: <HardDrive size={14} />, text: p.storage, label: 'SSD NVMe' },
                      { icon: <Globe size={14} />, text: p.bw, label: 'Transfer' }
                    ].map((feature, idx) => (
                      <div key={idx} className="flex flex-col gap-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-[9px] font-black uppercase tracking-widest text-gray-600 italic">{feature.label}</span>
                          <span className="text-white font-bold italic">{feature.text}</span>
                        </div>
                        <div className="h-[1px] w-full bg-white/5"></div>
                      </div>
                    ))}
                  </div>

                  <button className={`w-full py-5 rounded-2xl font-black text-[12px] uppercase tracking-[0.4em] text-white transition-all shadow-2xl active:scale-95 ${accentBg} hover:opacity-90`}>
                    Buy Now
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-40">
          <div className="text-center mb-20">
            <span className={`font-black uppercase tracking-[0.4em] text-[10px] mb-4 block italic ${accentClass}`}>VALUE PROPOSITION</span>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter italic">Why Choose <span className={accentClass}>Host Master.</span></h2>
            <p className="text-gray-500 text-xl font-bold italic">Maximized Value, No Hidden Costs, Sustainable Pricing!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                title: '99.95% Uptime Guarantee', 
                desc: "We commit to a 99.95% uptime for our VPS hosting, the industry's highest guarantee. Achieved through robust infrastructure, maintenance, and security measures.",
                icon: <Zap />
              },
              { 
                title: '14-Day Money-Back', 
                desc: 'We provide affordable VPS hosting with a top-notch experience. Enjoy a 14-day money-back guarantee for all plans. Request a refund within the first 14 days if expectations aren\'t met.',
                icon: <Shield />
              },
              { 
                title: 'Best Price-to-Performance', 
                desc: 'Get VPS hosting with competitive prices, top-notch performance, and security. Features cutting-edge technology and SSD NVMe for stability.',
                icon: <Settings />
              }
            ].map((f, i) => (
              <div key={i} className="bg-[#0c0d12] border border-white/5 p-12 rounded-[3rem] hover:border-white/10 transition-all group">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${accentBg} text-white shadow-2xl group-hover:scale-110 transition-transform`}>
                  {f.icon}
                </div>
                <h3 className="text-2xl font-black text-white mb-6 italic tracking-tighter uppercase">{f.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Supreme Features Grid */}
        <div className="mb-40 py-32 border-y border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-600/5 -z-10 blur-[150px]"></div>
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter italic">Supreme <span className={accentClass}>Features.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <Server />, title: 'Tier-4 Data Center', desc: 'Highly redundant and ensures a great level of security. Your server runs smoothly for intact web presence.' },
              { icon: <Lock />, title: 'SSL Encryption', desc: 'SSL encryption for your website/app at no additional cost. Prevents attackers from gaining access.' },
              { icon: <Zap />, title: 'High-Speed NVMe', desc: 'Built for incredible speed, our SSD NVMe VPS servers act as a reliable platform for heavy apps.' },
              { icon: <Cpu />, title: 'Intel Xeon Processors', desc: 'Latest generation and high-powered processors with a large number of cores for maximum load.' },
              { icon: <Terminal />, title: 'Full Root Access', desc: 'Get complete control. Customize the server, install applications, and transfer files securely via SFTP.' },
              /* Import 'Layers' from lucide-react to fix missing reference */
              { icon: <Layers />, title: 'KVM Virtualization', desc: 'Allots VPS node resources such that no single user can utilize more than their allotted resources.' },
              { icon: <CheckCircle2 />, title: 'Guaranteed Resources', desc: 'Zero fluctuation in available resources. Immense power, low latency and high speed guaranteed.' },
              { icon: <Globe />, title: '100 Mbps Network', desc: 'Data transfer speeds up to 100Mbps. Notably reduced page loading times for global visitors.' }
            ].map((f, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className={`${accentClass} shrink-0`}>{f.icon}</div>
                <div>
                  <h4 className="text-white font-black text-sm uppercase tracking-widest mb-3 italic">{f.title}</h4>
                  <p className="text-gray-500 text-xs font-bold leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical List Horizontal */}
        <div className="bg-[#0c0d12] border border-white/5 p-12 rounded-[3.5rem] mb-40 text-center">
           <h3 className="text-xl font-black text-blue-500 mb-10 uppercase tracking-[0.4em] italic">Native Stack Support</h3>
           <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-[10px] font-black text-gray-500 uppercase tracking-widest">
              {['Full Root Access', 'SFTP', 'Easy-Upgrade', 'IPV4', 'rDNS', 'Dedicated IP', 'SSL Certificate', 'KVM Hypervisor', 'CSF Firewall', 'JSP / Tomcat', 'Java', 'Node.js', 'Apache', 'Nginx', 'LiteSpeed'].map(t => (
                <div key={t} className="flex items-center gap-2">
                  <CheckCircle2 size={12} className="text-green-500" /> {t}
                </div>
              ))}
           </div>
        </div>

        {/* Configuration Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-40">
           {/* OS Choices */}
           <div className="bg-[#0c0d12] border border-white/5 p-12 rounded-[3.5rem]">
              <div className="flex items-center gap-4 mb-10">
                <Download className={accentClass} />
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter italic">Operating Systems</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 {[
                   { name: 'Ubuntu', versions: '12.x to 20.x' },
                   { name: 'Fedora', versions: '30 to 34' },
                   { name: 'CentOS', versions: '6.x, 7.x, 8.x' },
                   { name: 'Debian', versions: '8.x to 11.x' }
                 ].map(os => (
                   <div key={os.name} className="p-6 bg-white/5 border border-white/5 rounded-2xl flex flex-col items-center group hover:border-blue-500 transition-all">
                      <div className="text-white font-black text-lg mb-1">{os.name}</div>
                      <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{os.versions}</div>
                   </div>
                 ))}
              </div>
           </div>

           {/* Control Panels */}
           <div className="bg-[#0c0d12] border border-white/5 p-12 rounded-[3.5rem]">
              <div className="flex items-center gap-4 mb-10">
                <Settings className={accentClass} />
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter italic">Control Panel Add-ons</h3>
              </div>
              <div className="space-y-4">
                 {[
                   { name: 'DirectAdmin', price: 'from $3/mo' },
                   { name: 'cPanel', price: 'from $12/mo' },
                   { name: 'Plesk', price: 'from $13/mo' },
                   { name: 'Webuzo', price: 'from $3/mo' },
                   { name: 'Softaculous', price: '$3/mo' }
                 ].map(cp => (
                   <div key={cp.name} className="p-5 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-between group hover:border-blue-500 transition-all">
                      <div className="text-white font-black uppercase tracking-widest">{cp.name}</div>
                      <div className="text-blue-500 font-black text-sm italic">{cp.price}</div>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-40">
           <div className="text-center mb-16">
              <div className="flex justify-center mb-6 text-blue-500"><HelpCircle size={48} /></div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter italic">F.A.Q. <span className="text-blue-500">Matrix.</span></h2>
           </div>
           <div className="bg-[#0c0d12] border border-white/5 p-10 md:p-16 rounded-[4rem]">
              {[
                { q: "What is VPS hosting?", a: "A virtual private server (VPS) is a virtually isolated server condition created by dividing a physical server into several virtual servers. Every server gets dedicated resources like disk space, CPU, and memory. It is an affordable alternative to dedicated servers." },
                { q: "How to begin with VPS Hosting?", a: "Just select one of our VPS hosting plans, follow the sign-up process, and once payment is complete, we will set up the server for you." },
                { q: "Is technical knowledge required?", a: "If you choose Unmanaged VPS, it needs technical skills to manage the server (best for developers). If you don't have technical knowledge, you can opt for our managed services." },
                { q: "How long does setup take?", a: "Setup starts immediately after sign-up. You can start using your server as soon as you receive the logins." },
                { q: "Can I install any software?", a: "Yes, you have full root access and can install any application compatible with your VPS server as long as it complies with our TOS." },
                { q: "Which VPS suits my project?", a: "For Python, PHP, MySQL, Ruby, or Pearl, choose Linux VPS. For ASP.net and MSSQL, choose Windows VPS." },
                { q: "What is the right time to upgrade?", a: "When your shared hosting falls short of resources or you receive high traffic on your website or application." },
                { q: "Is the VPS server secure?", a: "Yes. Each virtual server is isolated from others. We also offer a server security suite for protection against malware." }
              ].map((f, i) => (
                <FAQItem key={i} question={f.q} answer={f.a} />
              ))}
           </div>
        </div>

        {/* Support CTA Block */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-950 rounded-[4rem] p-16 text-center border border-white/20 shadow-3xl relative overflow-hidden group">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
           <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter italic uppercase">Still Undecided?</h2>
              <p className="text-blue-100/70 text-lg md:text-2xl font-bold mb-12 max-w-2xl mx-auto">Our infrastructure engineers are online 24/7 to help you architect the perfect grid.</p>
              <div className="flex flex-wrap justify-center gap-8">
                 <button className="px-12 py-5 bg-white text-blue-950 rounded-2xl font-black text-sm uppercase tracking-[0.3em] hover:bg-blue-50 transition-all shadow-2xl active:scale-95">Open Console</button>
                 <button className="px-12 py-5 bg-white/10 text-white border border-white/20 rounded-2xl font-black text-sm uppercase tracking-[0.3em] hover:bg-white/20 transition-all backdrop-blur-md">Contact Support</button>
              </div>
           </div>
        </div>
      </section>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default VPS;
