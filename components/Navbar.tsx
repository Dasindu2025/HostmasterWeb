
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, Server, Cpu, Layers, Shield, Zap, Search, User, 
  ChevronDown, ArrowRight, CheckCircle, Menu, X, Activity, HardDrive,
  Headphones, Gauge, Signal, Terminal, Palette, MessageSquare, Rocket, Database, Cpu as CpuIcon
} from 'lucide-react';

const UtilityBar = () => (
  <div className="hidden lg:block bg-[#020308] border-b border-white/5 py-2">
    <div className="container mx-auto px-6 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.25em] text-gray-500">
      <div className="flex gap-8">
        <a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
          <Server size={12} className="group-hover:text-blue-400" /> Infrastructure
        </a>
        <a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
          <Gauge size={12} /> Speed Test
        </a>
        <a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
          <Activity size={12} className="text-green-500 animate-pulse" /> Status: <span className="text-white ml-1">Normal</span>
        </a>
      </div>
      <div className="flex gap-6 items-center">
        <a href="#" className="hover:text-white transition-colors">Support</a>
        <div className="h-3 w-[1px] bg-white/10 mx-1"></div>
        <a href="#" className="hover:text-white transition-colors font-bold">Client Login</a>
        <button className="bg-blue-600/10 hover:bg-blue-600 border border-blue-600/30 text-blue-400 hover:text-white px-4 py-1 rounded-md transition-all duration-300 font-black uppercase">
          Register
        </button>
      </div>
    </div>
  </div>
);

const MegaMenuContent = ({ item }: { item: any }) => {
  // Define feature block content for each category
  const featureBlocks: Record<string, any> = {
    'Web Hosting': {
      title: 'Velocity Stacks',
      highlight: '#1 Web Hosting Company',
      highlightColor: 'text-blue-400',
      description: 'Experience pure speed with our LSCache-optimized environment.',
      features: ['Flexible Control Panel', '99.9% Uptime Guarantee', 'Free SSL Included', 'Global Edge CDN'],
      icon: <Zap size={32} />,
      cta: 'View Hosting Deals',
      gradient: 'from-blue-600 to-indigo-900'
    },
    'VPS Hosting': {
      title: 'Cloud Compute',
      highlight: 'Extreme Scalability',
      highlightColor: 'text-purple-400',
      description: 'Next-gen KVM virtualization on NVMe Gen4 storage arrays.',
      features: ['Full Root Access', 'Instant Deployment', 'Snapshot Backups', '10Gbps Uplink'],
      icon: <Terminal size={32} />,
      cta: 'Configure VPS',
      gradient: 'from-purple-600 to-indigo-950'
    },
    'Dedicated': {
      title: 'Bare Metal',
      highlight: 'HPC Infrastructure',
      highlightColor: 'text-red-400',
      description: 'Physical isolation for business-critical enterprise applications.',
      features: ['Single-Tenant Power', 'Custom RAID Stacks', 'DDoS Protection Pro', 'Tier 4 Reliability'],
      icon: <CpuIcon size={32} />,
      cta: 'Request Custom Rack',
      gradient: 'from-red-600 to-black'
    },
    'Domains': {
      title: 'Digital Identity',
      highlight: 'Secure Your Brand',
      highlightColor: 'text-pink-400',
      description: 'Secure your unique identity with our lightning-fast registration.',
      features: ['Whois Privacy Free', 'Instant DNS Setup', 'Auto-Renewal Matrix', 'Transfer Concierge'],
      icon: <Globe size={32} />,
      cta: 'Search Domains',
      gradient: 'from-pink-600 to-indigo-900'
    },
    'Services': {
      title: 'Growth Lab',
      highlight: 'Business Solutions',
      highlightColor: 'text-green-400',
      description: 'Marketing and design expertise to scale your digital presence.',
      features: ['SMS Gateways API', 'Modern UI/UX Design', 'Custom App Dev', 'Expert Consulting'],
      icon: <Palette size={32} />,
      cta: 'Talk to Experts',
      gradient: 'from-green-600 to-blue-900'
    }
  };

  const feature = featureBlocks[item.label] || {
    title: 'Neural Cloud',
    highlight: 'Advanced Infrastructure',
    highlightColor: 'text-blue-400',
    description: 'Leverage massive multi-core architectures optimized for scale.',
    features: ['100Gbps Backbone', 'Zero Day Backups', 'AI Load Balancers'],
    icon: <Zap size={32} />,
    cta: 'Check Deals',
    gradient: 'from-blue-900 to-black'
  };

  return (
    <div className="relative z-10 grid grid-cols-12 gap-10">
      {/* Background Tech Label */}
      <div className="absolute top-0 right-0 text-[180px] font-black text-white/[0.01] uppercase select-none pointer-events-none leading-none tracking-tighter -mr-20 -mt-10 italic">
        {item.label.split(' ')[0]}
      </div>

      <div className="col-span-8">
        <div className="flex justify-between items-center mb-10 pb-4 border-b border-white/5">
          <div className="flex items-center gap-4">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping"></span>
            <h4 className="text-[11px] font-black text-blue-500 uppercase tracking-[0.4em]">Grid Deployment Matrix</h4>
          </div>
          <Link to={item.href} className="group text-[10px] font-black text-gray-500 hover:text-white uppercase tracking-widest flex items-center gap-2 transition-colors">
            ENTER CONSOLE <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 gap-5">
          {item.dropdown?.map((sub: any, idx: number) => (
            <motion.div 
              key={sub.label} 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, type: 'spring', stiffness: 100 }}
            >
              <Link 
                to={sub.href} 
                className="group flex items-start gap-6 p-6 bg-[#0c0e16] hover:bg-[#121524] rounded-2xl transition-all border border-white/5 hover:border-blue-500/40 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-blue-600/5 border border-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all duration-500 relative z-10">
                  {sub.icon || <Layers size={28} />}
                </div>
                <div className="flex flex-col relative z-10">
                  <div className="font-black text-white group-hover:text-blue-400 transition-colors text-xl mb-1 tracking-tighter">
                    {sub.label}
                  </div>
                  <div className="text-xs text-gray-500 font-bold leading-relaxed group-hover:text-gray-300 transition-colors tracking-tight">
                    {sub.description}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="col-span-4">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`h-full bg-gradient-to-br ${feature.gradient} border border-white/5 rounded-[3rem] p-10 flex flex-col justify-between shadow-inner relative overflow-hidden group/cta`}
        >
          {/* Subtle noise/pattern overlay */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-3xl bg-white/10 backdrop-blur-xl flex items-center justify-center text-white mb-10 shadow-2xl border border-white/20">
              {React.cloneElement(feature.icon, { fill: "white", className: "animate-pulse" })}
            </div>
            <h4 className={`text-xs font-black uppercase tracking-[0.3em] mb-4 ${feature.highlightColor}`}>{feature.highlight}</h4>
            <h3 className="text-4xl font-black text-white mb-4 leading-tight tracking-tighter italic uppercase">{feature.title}.</h3>
            <p className="text-white/60 text-sm font-bold mb-10 leading-relaxed">{feature.description}</p>
            
            <ul className="space-y-4">
              {feature.features.map((f: string) => (
                <li key={f} className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-white/80">
                  <CheckCircle size={14} className="text-green-400" /> {f}
                </li>
              ))}
            </ul>
          </div>
          
          <Link to="/offers" className="mt-12 bg-white hover:bg-blue-50 text-black py-5 rounded-2xl text-[12px] font-black uppercase tracking-[0.3em] text-center transition-all shadow-2xl active:scale-[0.98] flex items-center justify-center gap-2 group-hover/cta:gap-4 relative z-10">
            {feature.cta} <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const timerRef = useRef<any>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const openMenu = (label: string) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setActiveMenu(label);
  };

  const closeMenu = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const handleNavMouseLeave = () => {
     if (timerRef.current) clearTimeout(timerRef.current);
     timerRef.current = setTimeout(() => {
       setActiveMenu(null);
     }, 100);
  };

  useEffect(() => {
    setActiveMenu(null);
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { 
      label: 'Web Hosting', 
      href: '/hosting', 
      dropdown: [
        { label: 'Enterprise', href: '/hosting/enterprise', description: 'Business critical high-availability stacks', icon: <Shield /> },
        { label: 'Shared', href: '/hosting/shared', description: 'Affordable entry for growing brands', icon: <Zap /> },
        { label: 'Reseller', href: '/hosting/reseller', description: 'Launch your hosting white-label agency', icon: <Layers /> },
        { label: 'WordPress', href: '/hosting/wordpress', description: 'Fully optimized WP speed matrices', icon: <Globe /> }
      ]
    },
    { 
      label: 'VPS Hosting', 
      href: '/vps', 
      dropdown: [
        { label: 'Linux Compute', href: '/vps/linux', description: 'KVM virtualization on NVMe Gen4 stacks', icon: <Terminal /> },
        { label: 'Windows RDP', href: '/vps/windows', description: 'Scalable cloud for Windows workloads', icon: <Server /> },
        { label: 'Cloud Storage', href: '/vps/storage', description: 'Ultra-redundant object data buckets', icon: <HardDrive /> }
      ]
    },
    { 
      label: 'Dedicated', 
      href: '/dedicated',
      dropdown: [
        { label: 'Intel Xeon', href: '/dedicated/intel', description: 'Pure metal Intel enterprise reliability', icon: <Cpu /> },
        { label: 'AMD EPYC', href: '/dedicated/amd', description: 'Next-gen high core count performance', icon: <Cpu className="text-red-500" /> }
      ]
    },
    { 
      label: 'Domains', 
      href: '/domains',
      dropdown: [
        { label: 'International Domain', href: '/domains/international', description: 'Register for lifetime global TLDs', icon: <Globe className="text-pink-500" /> },
        { label: 'LK Domains', href: '/domains/lk', description: 'Specialized local registration services', icon: <Globe className="text-blue-500" /> },
        { label: 'Domain Transfer', href: '/domains/transfer', description: 'Migrate to us with zero downtime', icon: <Signal className="text-orange-500" /> }
      ]
    },
    { 
      label: 'Services', 
      href: '/services', 
      dropdown: [
        { label: 'SMS Solutions', href: '/services/sms', description: 'Global bulk SMS transactional gateways', icon: <MessageSquare className="text-green-500" /> },
        { label: 'Web Design', href: '/services/design', description: 'Futuristic UI/UX design & development', icon: <Palette className="text-purple-500" /> }
      ]
    },
    { label: 'Colocation', href: '/colocation' },
    { label: 'Offers', href: '/offers' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${scrolled ? 'translate-y-[-40px]' : ''}`}
      onMouseLeave={handleNavMouseLeave}
    >
      <UtilityBar />
      
      <div 
        className={`relative transition-all duration-500 border-b border-white/5 ${scrolled ? 'bg-[#030712]/98 backdrop-blur-3xl py-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)]' : 'bg-[#030712]/50 py-6'}`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-4 group" onMouseEnter={() => setActiveMenu(null)}>
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-[0_0_40px_rgba(37,99,235,0.4)] group-hover:rotate-[360deg] transition-all duration-1000">
              <Server size={26} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter text-white leading-none">HOST<span className="text-blue-500">MASTER</span></span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 mt-1">NEXT-GEN CLOUD</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div 
                key={item.label}
                className="relative py-2"
                onMouseEnter={() => openMenu(item.label)}
              >
                <Link 
                  to={item.href} 
                  className={`px-5 py-3 rounded-xl text-[11px] font-black uppercase tracking-[0.25em] flex items-center gap-2 transition-all ${activeMenu === item.label ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown size={14} className={`transition-transform duration-500 ${activeMenu === item.label ? 'rotate-180' : ''}`} />
                  )}
                </Link>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4" onMouseEnter={() => setActiveMenu(null)}>
            <button className="p-3 text-gray-500 hover:text-white bg-white/5 rounded-xl border border-white/10 transition-all hover:border-blue-500/50">
              <Search size={20} />
            </button>
            <Link to="/offers" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl text-[11px] font-black uppercase tracking-[0.3em] shadow-2xl shadow-blue-600/30 active:scale-95 transition-all flex items-center gap-3">
              LAUNCH NOW <ArrowRight size={16} />
            </Link>
            
            <button 
              className="lg:hidden p-3 text-white bg-white/5 rounded-xl border border-white/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {activeMenu && navItems.find(i => i.label === activeMenu)?.dropdown && (
            <motion.div
              key="mega-menu"
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute top-full left-0 right-0 z-[110] flex justify-center pt-2 px-6 pointer-events-auto"
              onMouseEnter={() => openMenu(activeMenu)}
            >
              <div className="absolute top-[-30px] left-0 w-full h-[30px] bg-transparent"></div>
              <div className="bg-[#08090d] border border-white/10 shadow-[0_60px_120px_rgba(0,0,0,1)] rounded-[3rem] w-full max-w-[1200px] p-12 overflow-hidden relative">
                 <MegaMenuContent item={navItems.find(i => i.label === activeMenu)} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 bg-[#030712] z-[120] lg:hidden overflow-y-auto"
          >
            <div className="container mx-auto px-8 pt-24 pb-20">
              <div className="flex justify-between items-center mb-16">
                <span className="text-3xl font-black text-white italic">HOST<span className="text-blue-500">MASTER</span></span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-3 bg-white/5 rounded-full text-white"><X size={28} /></button>
              </div>
              <div className="flex flex-col gap-10">
                {navItems.map((item, idx) => (
                  <motion.div 
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link to={item.href} onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-black text-white tracking-tighter flex items-center justify-between group">
                      {item.label}
                      <ArrowRight size={32} className="text-blue-500" />
                    </Link>
                    {item.dropdown && (
                      <div className="mt-8 grid grid-cols-1 gap-4">
                        {item.dropdown.map(sub => (
                          <Link key={sub.label} to={sub.href} onClick={() => setIsMobileMenuOpen(false)} className="bg-white/5 p-6 rounded-2xl flex items-center gap-6 border border-white/10">
                            <div className="text-blue-400">{sub.icon || <Layers size={22} />}</div>
                            <div className="text-sm font-black uppercase tracking-widest text-white">{sub.label}</div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
