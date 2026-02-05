
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Shield, Zap, Globe, Cpu, ArrowRight, Server, Check, Activity, Database, Lock, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-20 pb-40 overflow-hidden">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }} 
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full"
        ></motion.div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>
      </div>

      <motion.div 
        style={{ y: y1, scale }}
        className="container mx-auto px-6 relative z-10 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] mb-12 animate-pulse shadow-[0_0_20px_rgba(59,130,246,0.2)]">
            <Activity size={14} /> Next-Gen Enterprise Infrastructure
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-tight tracking-tighter mb-10 italic">
            GRID <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600">VELOCITY.</span>
          </h1>
          <p className="max-w-3xl mx-auto text-gray-400 text-lg md:text-2xl leading-relaxed mb-16 font-medium">
            Deploy massive multi-region infrastructure in seconds. Optimized for heavy AI training, Enterprise databases, and high-frequency trading apps.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
            <Link to="/hosting" className="group w-full sm:w-auto px-12 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-lg transition-all shadow-2xl shadow-blue-600/30 flex items-center justify-center gap-4 active:scale-95">
              Deploy Instance <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link to="/offers" className="w-full sm:w-auto px-12 py-5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-2">
              View Matrix
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 pt-20 border-t border-white/5 max-w-5xl mx-auto">
            {[
              { label: 'Network SLA', value: '99.999%', icon: <Shield size={16} /> },
              { label: 'Edge Nodes', value: '142+', icon: <Globe size={16} /> },
              { label: 'Latency', value: '< 2.4ms', icon: <Zap size={16} /> },
              { label: 'Storage', value: 'NVMe Gen5', icon: <Database size={16} /> },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="text-center group"
              >
                <div className="flex justify-center mb-3 text-blue-500 group-hover:scale-125 transition-transform">{stat.icon}</div>
                <div className="text-4xl font-black text-white mb-1 tracking-tight italic">{stat.value}</div>
                <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const FeatureCard = ({ icon, title, desc, delay }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay }}
      whileHover={{ y: -10 }}
      className="group relative p-10 bg-[#08090d] border border-white/5 hover:border-blue-500/50 rounded-[2.5rem] transition-all duration-500 shadow-2xl overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="shrink-0 w-16 h-16 rounded-2xl bg-blue-600/5 flex items-center justify-center text-blue-400 mb-8 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all duration-500">
        {icon}
      </div>
      <h3 className="text-2xl font-black text-white mb-4 italic tracking-tighter">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed font-bold group-hover:text-gray-300 transition-colors">
        {desc}
      </p>
    </motion.div>
  );
};

const CoreTech = () => {
  const features = [
    { icon: <Database />, title: 'Hyper-Scale NVMe', desc: 'Enterprise Gen5 storage arrays delivering over 15GB/s throughput per instance block.' },
    { icon: <Lock />, title: 'Quantum Shield', desc: 'Advanced DDoS mitigation with zero-latency traffic inspection and neural network filtering.' },
    { icon: <Activity />, title: 'Edge Analytics', desc: 'Real-time telemetry from every node worldwide, streamed directly to your custom console.' },
    { icon: <Terminal />, title: 'API First Grid', desc: 'Full automation via REST and GraphQL. Deploy clusters, subnets, and firewalls programmatically.' }
  ];

  return (
    <section className="py-40 bg-[#05060b] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-24 items-center mb-32">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-6 block italic">Infrastructure Architecture</span>
              <h2 className="text-5xl md:text-7xl font-black text-white mb-10 leading-none tracking-tighter italic">
                Engineered for <br /><span className="text-blue-500 underline decoration-blue-500/20 underline-offset-8">Critical Scale</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {features.map((f, i) => (
                  <FeatureCard key={i} {...f} delay={i * 0.1} />
                ))}
              </div>
            </motion.div>
          </div>
          <div className="lg:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2 }}
              className="relative z-10"
            >
              <div className="p-3 bg-white/5 border border-white/10 rounded-[3.5rem] shadow-3xl overflow-hidden aspect-square flex items-center justify-center">
                 <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=1200" alt="Datacenter" className="w-full h-full object-cover rounded-[3rem] opacity-40 grayscale hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" />
                 <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-transparent to-black/60 pointer-events-none"></div>
              </div>
              <div className="absolute -bottom-10 -right-10 bg-[#0c0e16] border border-blue-500/30 p-10 rounded-[2.5rem] shadow-2xl backdrop-blur-xl">
                 <div className="flex items-center gap-5 mb-4">
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
                    <span className="text-white font-black text-sm uppercase tracking-widest italic">Global Node Active</span>
                 </div>
                 <div className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Region: North Atlantic</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-40 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-blue-600 to-indigo-900 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-3xl border border-white/20"
        >
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>
           <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none"
           ></motion.div>
           
           <div className="relative z-10 max-w-4xl mx-auto">
             <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter italic uppercase">Ready for <br/>Immersion?</h2>
             <p className="text-blue-100/70 text-lg md:text-2xl font-bold mb-16 leading-relaxed">Join 50,000+ developers scaling the future on Host Master infrastructure.</p>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <Link to="/hosting" className="w-full sm:w-auto px-16 py-6 bg-white text-blue-900 rounded-3xl font-black text-xl hover:bg-blue-50 transition-all shadow-2xl active:scale-95">
                  DEPLOY NOW
                </Link>
                <Link to="/services" className="w-full sm:w-auto text-white font-black uppercase tracking-widest text-sm flex items-center gap-3 group">
                   Schedule Demo <ArrowRight className="group-hover:translate-x-3 transition-transform" />
                </Link>
             </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <CoreTech />
      <CTASection />
    </div>
  );
};

export default Home;
