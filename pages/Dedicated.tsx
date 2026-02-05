
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, HardDrive, Zap, Shield, ChevronRight, ArrowRight, 
  Activity, Terminal, Globe, Lock, Server, Settings, 
  CheckCircle2, Plus, Minus, Download, HelpCircle, Layers,
  Database, Radio, Headphones
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
          {isOpen ? <Minus size={20} className="text-red-500" /> : <Plus size={20} className="text-gray-500" />}
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

const Dedicated = () => {
  const plans = [
    {
      name: 'Professional Server',
      price: '95.60',
      cpu: '6C/12T Xeon E-2236 3.4GHz (4.8GHz Turbo)',
      ram: '32GB (64GB Max)',
      storage: '2x1TB',
      raid: 'RAID 1 (1TB Usable)',
      color: 'blue'
    },
    {
      name: 'Professional Light',
      price: '124.60',
      cpu: '4C/4T Xeon E3-1220v5 3.0GHz (3.5GHz Turbo)',
      ram: '8GB (32GB Max)',
      storage: '2x480GB',
      raid: 'RAID 1 (480GB Usable)',
      color: 'indigo'
    },
    {
      name: 'Enterprise 10 Cores',
      price: '154.00',
      cpu: '10C/20T Xeon 4210 2.2GHz (3.4GHz Turbo)',
      ram: '32GB (256GB Max)',
      storage: '2x1TB',
      raid: 'RAID 1 (1TB Usable)',
      color: 'purple'
    },
    {
      name: 'Enterprise 20 Cores Light',
      price: '280.60',
      cpu: '20C/40T Xeon 4210 2.2GHz (3.4GHz Turbo)',
      ram: '64GB (Max 256GB)',
      storage: '2x1TB',
      raid: 'RAID 1 (1TB Usable)',
      color: 'red'
    }
  ];

  return (
    <div className="pb-40 relative">
      {/* HUD Background Grid */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      {/* Hero Section */}
      <header className="py-24 text-center">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-8 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl mx-auto w-fit">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 italic">Enterprise Compute Link Established</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter italic leading-none">
              Dedicated <span className="text-red-600">Servers.</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-black text-white/40 mb-10 tracking-tight italic uppercase">Fastest Web Hosting | Lite Speed Web Server</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
              {[
                { label: 'Network', value: '10 Gbps Uplink', icon: <Zap /> },
                { label: 'Guarantee', value: '30-Day Money Back', icon: <Shield /> },
                { label: 'Starting At', value: '$95.60/mo', icon: <Activity /> }
              ].map((h, i) => (
                <div key={i} className="bg-[#0c0d12] border border-white/5 p-6 rounded-3xl flex items-center gap-6">
                   <div className="text-red-500">{h.icon}</div>
                   <div className="text-left">
                      <div className="text-[9px] font-black text-gray-600 uppercase tracking-widest">{h.label}</div>
                      <div className="text-white font-bold text-lg italic tracking-tight uppercase">{h.value}</div>
                   </div>
                </div>
              ))}
            </div>

            <p className="text-gray-500 max-w-4xl mx-auto text-xl font-bold tracking-tight italic leading-relaxed mb-12">
              Rely on our dedicated server designed for complete isolation, control and security, ideal for your heavy workloads.
            </p>
          </motion.div>
        </div>
      </header>

      <section className="container mx-auto px-6 max-w-[1500px]">
        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {plans.map((p, i) => (
            <motion.div 
              key={p.name}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -10 }}
              className="group relative bg-[#0c0d12] border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col transition-all duration-700 hover:border-red-500/40"
            >
              <div className="bg-gradient-to-r from-red-600 to-red-900 py-7 text-center">
                 <h3 className="text-white font-black text-xl uppercase tracking-[0.2em] italic px-4">{p.name}</h3>
              </div>
              
              <div className="p-10 flex flex-col h-full bg-[#08090d]/50">
                <div className="text-center mb-10">
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-xs font-black text-gray-500 mr-1">$</span>
                    <span className="text-6xl font-black text-white tracking-tighter">{p.price.split('.')[0]}</span>
                    <span className="text-2xl font-black text-white/40 italic">.{p.price.split('.')[1]}</span>
                    <span className="text-gray-600 text-[10px] font-black uppercase tracking-widest ml-2">/mo</span>
                  </div>
                </div>

                <div className="space-y-6 mb-12 flex-grow">
                  {[
                    { label: 'Processor', text: p.cpu, icon: <Cpu size={14} /> },
                    { label: 'Memory', text: p.ram, icon: <Activity size={14} /> },
                    { label: 'Storage', text: p.storage, icon: <HardDrive size={14} /> },
                    { label: 'RAID Array', text: p.raid, icon: <Settings size={14} /> }
                  ].map((f, idx) => (
                    <div key={idx} className="flex flex-col gap-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[9px] font-black uppercase tracking-widest text-gray-600 italic flex items-center gap-2">
                          {f.icon} {f.label}
                        </span>
                        <span className="text-white font-bold italic text-right max-w-[60%]">{f.text}</span>
                      </div>
                      <div className="h-[1px] w-full bg-white/5"></div>
                    </div>
                  ))}
                </div>

                <button className="w-full py-5 rounded-2xl font-black text-[12px] uppercase tracking-[0.4em] text-white transition-all shadow-2xl active:scale-95 bg-red-600 hover:bg-red-500">
                  Deploy Plan
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GPU Server Callout */}
        <div className="max-w-4xl mx-auto mb-40">
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             className="bg-gradient-to-r from-red-600/20 to-purple-600/20 border border-white/10 p-10 rounded-[3rem] text-center backdrop-blur-3xl relative overflow-hidden group"
           >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="text-white font-black text-3xl mb-4 italic uppercase tracking-tighter">AI, ML or Deep Learning?</h3>
              <p className="text-gray-400 font-bold mb-8">Check out our dedicated GPU server plans for extreme computational workloads.</p>
              <div className="flex items-center justify-center gap-8">
                 <div className="text-4xl font-black text-white tracking-tighter">Starting at <span className="text-red-500">$335</span><span className="text-lg text-gray-500">/mo</span></div>
                 <button className="px-10 py-4 bg-white text-black font-black uppercase tracking-widest rounded-2xl hover:bg-red-500 hover:text-white transition-all">Explore GPU</button>
              </div>
           </motion.div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-40">
          <div className="text-center mb-20">
            <span className="font-black uppercase tracking-[0.4em] text-[10px] mb-4 block italic text-red-500">MISSION CRITICAL</span>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter italic">Why Choose <span className="text-red-500">Host Master.</span></h2>
            <p className="text-gray-500 text-xl font-bold italic">Enterprise-class architecture for your most intensive workloads.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Asia's Largest Data Center", 
                desc: "ISO 27001 certified with guaranteed security, highest uptime, and top-notch performance.",
                icon: <Globe />
              },
              { 
                title: '99.95% Uptime Guarantee', 
                desc: "Industry's highest guarantee achieved through robust infrastructure and regular maintenance.",
                icon: <Zap />
              },
              { 
                title: 'Ultra Secure', 
                desc: "Complete isolation in a single-tenant environment. Install custom security software via root access.",
                icon: <Shield />
              },
              { 
                title: '7-Day Money-Back', 
                desc: "Rely on our platform with total confidence. We guarantee satisfaction or a full refund within 7 days.",
                icon: <Lock />
              }
            ].map((f, i) => (
              <div key={i} className="bg-[#0c0d12] border border-white/5 p-10 rounded-[2.5rem] hover:border-red-500/20 transition-all group">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-red-600 text-white shadow-2xl group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h3 className="text-xl font-black text-white mb-4 italic tracking-tighter uppercase">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Features Grid */}
        <div className="mb-40 py-32 border-y border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-red-600/5 -z-10 blur-[150px]"></div>
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter italic">Powerful <span className="text-red-500">Specs.</span></h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-[11px]">Next-Generation Bare Metal Infrastructure</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { icon: <Cpu />, title: 'Intel Xeon Processors', desc: 'New generation processors with the highest number of CPU cores. Best for mission-critical apps.' },
              { icon: <Radio />, title: '10 Gbps Network', desc: 'Data transfer speed of up to 10 Gbps. Distinctly reduces page loading times for global visitors.' },
              { icon: <Lock />, title: 'SSL Encryption', desc: 'Free SSL certificate included. Prevents attackers from gaining access to sensitive data.' },
              { icon: <Terminal />, title: 'Root/Administrative Access', desc: 'Freely modify any file, install server-wide applications, and control all ports via SFTP.' },
              { icon: <Zap />, title: 'Rapid Provisioning', desc: 'Instantly deployed within 4 hours. OS and Control Panel pre-installed on verified hardware.' },
              { icon: <Settings />, title: 'No Setup Fees', desc: 'No additional cost for installing the OS or control panel. We focus on transparent billing.' },
              { icon: <HardDrive />, title: 'Enterprise Hardware', desc: 'Optimized for efficiency, durability, and great speed. Pure ECC RAM and Enterprise drives.' },
              { icon: <Layers />, title: 'Host Unlimited Websites', desc: 'No cap on resource usage. Host as many websites as you want on your dedicated node.' },
              { icon: <CheckCircle2 />, title: 'Fully Customizable', desc: 'Freedom to modify server configurations and install any software compatible with the kernel.' }
            ].map((f, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="text-red-500 shrink-0">{f.icon}</div>
                <div>
                  <h4 className="text-white font-black text-sm uppercase tracking-widest mb-3 italic">{f.title}</h4>
                  <p className="text-gray-500 text-xs font-bold leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Managed Support Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-40 items-center">
           <div>
              <span className="text-red-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block italic">Expert Architecture</span>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter italic uppercase">Need Expert Help <span className="text-red-500">Managing?</span></h2>
              <p className="text-gray-500 text-xl font-bold italic mb-10">Available 365 days a year via email and live chat. Leave the maintenance to our engineers.</p>
              
              <div className="space-y-6">
                 {[
                   { title: '24x7 Fully Managed Support', desc: 'Setup, maintenance, and troubleshooting included.', icon: <Headphones /> },
                   { title: 'Round-the-clock Monitoring', desc: '10-minute response time for load, memory, and CPU alerts.', icon: <Activity /> }
                 ].map((s, i) => (
                   <div key={i} className="flex gap-6 bg-[#0c0d12] border border-white/5 p-8 rounded-[2.5rem]">
                      <div className="text-red-500">{s.icon}</div>
                      <div>
                         <h4 className="text-white font-black text-sm uppercase tracking-widest mb-1 italic">{s.title}</h4>
                         <p className="text-gray-500 text-xs font-bold leading-relaxed">{s.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
           <div className="relative">
              <div className="bg-[#0c0d12] border border-white/5 p-12 rounded-[4rem] shadow-3xl overflow-hidden group">
                 <Terminal size={300} className="absolute -bottom-20 -right-20 text-red-500/5 group-hover:rotate-12 transition-transform duration-1000" />
                 <div className="relative z-10 space-y-6">
                    <div className="flex items-center gap-3">
                       <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                       <span className="text-[10px] font-black uppercase text-gray-500 tracking-[0.3em]">Monitoring Engine Active</span>
                    </div>
                    <div className="text-3xl font-black text-white italic tracking-tighter uppercase">Services Included:</div>
                    <ul className="space-y-4">
                       {['Initial Server Setup', 'OS Hardening', 'Security Patching', 'Backup Management', 'Resource Optimization', 'Proactive Monitoring'].map(item => (
                         <li key={item} className="flex items-center gap-4 text-gray-400 font-bold text-sm">
                            <CheckCircle2 size={16} className="text-red-500" /> {item}
                         </li>
                       ))}
                    </ul>
                 </div>
              </div>
           </div>
        </div>

        {/* Configuration Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-40">
           {/* OS Choices */}
           <div className="bg-[#0c0d12] border border-white/5 p-12 rounded-[3.5rem]">
              <div className="flex items-center gap-4 mb-10">
                <Download className="text-red-500" />
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter italic">Operating Systems</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 {[
                   { name: 'Ubuntu', versions: '12.x to 20.x' },
                   { name: 'Fedora', versions: '30 to 34' },
                   { name: 'Windows Server', versions: '2016, 2019' },
                   { name: 'CentOS', versions: '6.x, 7.x, 8.x' },
                   { name: 'Debian', versions: '8.x to 11.x' }
                 ].map(os => (
                   <div key={os.name} className="p-6 bg-white/5 border border-white/5 rounded-2xl flex flex-col items-center group hover:border-red-500 transition-all">
                      <div className="text-white font-black text-lg mb-1">{os.name}</div>
                      <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{os.versions}</div>
                   </div>
                 ))}
              </div>
           </div>

           {/* Control Panels */}
           <div className="bg-[#0c0d12] border border-white/5 p-12 rounded-[3.5rem]">
              <div className="flex items-center gap-4 mb-10">
                <Settings className="text-red-500" />
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter italic">Control Panel Add-ons</h3>
              </div>
              <div className="space-y-4">
                 {[
                   { name: 'DirectAdmin', price: 'from $3/mo' },
                   { name: 'cPanel', price: 'from $12/mo' },
                   { name: 'Plesk', price: 'from $13/mo' },
                   { name: 'Webuzo', price: 'from $3/mo' }
                 ].map(cp => (
                   <div key={cp.name} className="p-5 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-between group hover:border-red-500 transition-all">
                      <div className="text-white font-black uppercase tracking-widest">{cp.name}</div>
                      <div className="text-red-500 font-black text-sm italic">{cp.price}</div>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-40">
           <div className="text-center mb-16">
              <div className="flex justify-center mb-6 text-red-500"><HelpCircle size={48} /></div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter italic">F.A.Q. <span className="text-red-500">Matrix.</span></h2>
           </div>
           <div className="bg-[#0c0d12] border border-white/5 p-10 md:p-16 rounded-[4rem]">
              {[
                { q: "What is a dedicated server?", a: "A physical server with a single-tenant environment. It does not share resources with any other server—no virtualization, no noisy neighbors, and a fully isolated environment." },
                { q: "What is the difference between VPS vs Dedicated Hosting?", a: "In VPS hosting, a physical server is split into multiple virtual servers. In dedicated hosting, you get an entire physical server to yourself." },
                { q: "Managed vs Unmanaged hosting?", a: "Unmanaged: You rent the server and handle all maintenance/security yourself. Managed: Our experts handle setup, maintenance, updates, and technical issues 24/7." },
                { q: "Does Host Master provide managed dedicated servers?", a: "Yes, we offer 24x7 managed dedicated server as an add-on during checkout (Proactive or Standard)." },
                { q: "Do you offer free migration?", a: "Yes, our dedicated migration team will carefully move all your data to Host Master dedicated server without losing any data." },
                { q: "Can I get custom specifications?", a: "Absolutely! We offer custom dedicated servers. Contact us via chat/email with your requirements." },
                { q: "What will be the server location?", a: "We have dedicated servers worldwide in state-of-the-art infrastructure. Contact support for specific region availability." }
              ].map((f, i) => (
                <FAQItem key={i} question={f.q} answer={f.a} />
              ))}
           </div>
        </div>

        {/* Deploy Footer CTA */}
        <div className="bg-gradient-to-br from-red-600 to-red-950 rounded-[4rem] p-16 text-center border border-white/20 shadow-3xl relative overflow-hidden group">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
           <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter italic uppercase">Scale Your Vision.</h2>
              <p className="text-red-100/70 text-lg md:text-2xl font-bold mb-12 max-w-2xl mx-auto">Enterprise infrastructure for those who refuse to compromise on performance.</p>
              <div className="flex flex-wrap justify-center gap-8">
                 <button className="px-12 py-5 bg-white text-red-950 rounded-2xl font-black text-sm uppercase tracking-[0.3em] hover:bg-red-50 transition-all shadow-2xl active:scale-95">Configure Now</button>
                 <button className="px-12 py-5 bg-white/10 text-white border border-white/20 rounded-2xl font-black text-sm uppercase tracking-[0.3em] hover:bg-white/20 transition-all backdrop-blur-md">Talk to Sales</button>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Dedicated;
