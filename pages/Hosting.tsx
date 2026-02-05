
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe, Layers, Check, ArrowRight, Server, Cpu, Activity, Clock } from 'lucide-react';

const Hosting = () => {
  const { type } = useParams();
  
  const contentMap: any = {
    enterprise: {
      title: 'Enterprise Hosting',
      desc: 'High-performance cloud infrastructure for mission-critical business websites.',
      icon: <Shield size={48} className="text-blue-500" />,
      plans: [
        { name: 'Business Pro', price: '$24.99', features: ['50GB NVMe Storage', 'Unlimited Bandwidth', 'Free Domain & SSL', 'Daily Backups', 'Priority 24/7 Support', '99.99% Uptime SLA'] },
        { name: 'Enterprise Elite', price: '$49.99', features: ['100GB NVMe Storage', 'Unlimited Bandwidth', 'Free Domain & SSL', 'Real-time Backups', 'Dedicated Account Manager', 'Advanced DDoS Shield'] },
        { name: 'Global Matrix', price: '$99.99', features: ['250GB NVMe Storage', 'Global CDN Edge', 'Multi-Region Failover', 'White-Glove Migration', 'Elastic Resource Scaling', 'PCI Compliance Ready'] }
      ]
    },
    shared: {
      title: 'Shared Hosting',
      desc: 'The perfect starting point for your web journey. Fast, secure, and affordable.',
      icon: <Zap size={48} className="text-yellow-500" />,
      plans: [
        { name: 'Starter', price: '$2.95', features: ['1 Website', '10GB SSD Storage', 'Unlimited Bandwidth', 'Free SSL Certificate', '1-Click WP Install', '24/7 Support'] },
        { name: 'Premium', price: '$5.95', features: ['Unlimited Websites', '50GB SSD Storage', 'Unlimited Bandwidth', 'Free SSL & Domain', 'Daily Backups', 'Enhanced Security'] },
        { name: 'Business', price: '$9.95', features: ['Unlimited Websites', '100GB SSD Storage', 'Unlimited Bandwidth', 'Free SSL & Domain', 'Priority Support', 'Cloudflare CDN'] }
      ]
    },
    reseller: {
      title: 'Reseller Hosting',
      desc: 'Build your own hosting empire with our white-labeled enterprise platform.',
      icon: <Layers size={48} className="text-indigo-500" />,
      plans: [
        { name: 'Starter Reseller', price: '$19.95', features: ['25 cPanel Accounts', '50GB SSD Storage', '500GB Bandwidth', 'Free WHM & cPanel', 'Private Name Servers', 'White Label Branding'] },
        { name: 'Pro Reseller', price: '$34.95', features: ['60 cPanel Accounts', '100GB SSD Storage', '1TB Bandwidth', 'Free WHM & cPanel', 'Free Billing Software', 'Global Edge CDN'] },
        { name: 'Agency Reseller', price: '$59.95', features: ['150 cPanel Accounts', '250GB SSD Storage', 'Unlimited Bandwidth', 'Free WHMCS License', 'Master Reseller Rights', 'Priority Migration'] }
      ]
    },
    wordpress: {
        title: 'WordPress Hosting',
        desc: 'Lightning-fast WP environments with LSCache and automated security.',
        icon: <Globe size={48} className="text-blue-400" />,
        plans: [
          { name: 'WP Start', price: '$4.95', features: ['1 WP Website', '20GB NVMe Storage', 'LSCache Optimized', 'Staging Environment', 'Auto-Updates', 'Free SSL'] },
          { name: 'WP Pro', price: '$12.95', features: ['5 WP Websites', '50GB NVMe Storage', 'Object Cache Pro', 'Premium Security', 'Daily Backups', 'Free Domain'] },
          { name: 'WP Enterprise', price: '$29.95', features: ['Unlimited WP Sites', '150GB NVMe Storage', 'Global Edge CDN', 'Isolated Resources', 'Malware Removal', 'VIP Support'] }
        ]
      }
  };

  if (!type) {
    return (
      <div className="pb-32">
        <header className="py-32 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-600/5 blur-[120px] -z-10"></div>
          <div className="container mx-auto px-6">
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">Global Deployment Matrix</motion.span>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 uppercase tracking-tighter italic">Web <span className="text-blue-600">Hosting</span></h1>
            <p className="text-gray-400 max-w-3xl mx-auto text-xl leading-relaxed font-medium">Choose from our precision-engineered hosting environments. From personal blogs to global enterprise clusters, we have the infrastructure to scale your vision.</p>
          </div>
        </header>

        <section className="container mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(contentMap).map(([key, data]: any) => (
                <Link key={key} to={`/hosting/${key}`} className="group relative bg-[#08090d] p-10 rounded-[2.5rem] border border-white/5 hover:border-blue-500 transition-all flex flex-col h-full shadow-2xl overflow-hidden">
                   <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <div className="mb-10 p-4 w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">{data.icon}</div>
                   <h3 className="text-3xl font-black text-white mb-4 italic tracking-tighter group-hover:text-blue-400 transition-colors">{data.title}</h3>
                   <p className="text-gray-500 text-sm font-bold mb-10 flex-grow leading-relaxed group-hover:text-gray-300 transition-colors">{data.desc}</p>
                   <div className="flex items-center gap-3 text-white font-black text-[10px] uppercase tracking-[0.3em] group-hover:gap-5 transition-all">
                      Select Architecture <ArrowRight size={18} className="text-blue-500" />
                   </div>
                </Link>
              ))}
           </div>
        </section>
      </div>
    );
  }

  const current = contentMap[type] || contentMap.shared;

  return (
    <div className="pb-40">
      <header className="py-32 text-center relative overflow-hidden border-b border-white/5">
         <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-gradient-to-br from-blue-600 to-transparent -z-10"></div>
         <div className="container mx-auto px-6">
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="mb-10 flex justify-center">{current.icon}</motion.div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 uppercase tracking-tighter italic">{current.title}</h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-xl font-medium leading-relaxed">{current.desc}</p>
         </div>
      </header>

      <section className="py-24">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
              {current.plans.map((plan: any, i: number) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -15 }}
                  className="p-12 rounded-[3rem] bg-[#08090d] border border-white/5 hover:border-blue-500/50 transition-all group relative overflow-hidden shadow-3xl flex flex-col"
                >
                   <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <div className="flex justify-between items-start mb-10">
                      <h3 className="text-3xl font-black text-white italic tracking-tighter">{plan.name}</h3>
                      <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-400"><Server size={24} /></div>
                   </div>
                   <div className="mb-12">
                      <div className="text-5xl font-black text-white tracking-tighter mb-1">{plan.price}</div>
                      <div className="text-[10px] text-gray-500 font-black uppercase tracking-widest italic">Per Node / Monthly</div>
                   </div>
                   <ul className="space-y-6 mb-16 flex-grow">
                      {plan.features.map((f: string, j: number) => (
                        <li key={j} className="flex items-center gap-4 text-xs font-bold text-gray-400 group-hover:text-gray-200 transition-colors">
                           <Check size={18} className="text-blue-500 shrink-0" /> {f}
                        </li>
                      ))}
                   </ul>
                   <button className="w-full py-5 rounded-2xl font-black text-[12px] uppercase tracking-[0.3em] bg-blue-600 hover:bg-blue-500 text-white shadow-2xl shadow-blue-600/30 transition-all active:scale-95 flex items-center justify-center gap-2 group-hover:gap-4">
                      Deploy Plan <ArrowRight size={18} />
                   </button>
                </motion.div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default Hosting;
