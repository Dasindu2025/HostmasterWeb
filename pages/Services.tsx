
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Activity, Layers, ArrowRight, MessageSquare, Palette } from 'lucide-react';

const Services = () => {
  const { type } = useParams();

  const services = [
    {
      id: 'sms',
      title: 'SMS Solutions',
      desc: 'Enterprise bulk SMS gateways for marketing and transactional alerts.',
      icon: <MessageSquare size={48} className="text-green-500" />,
      features: ['API Integration', 'Global Delivery', 'Real-time Analytics']
    },
    {
      id: 'design',
      title: 'Web Design',
      desc: 'Bespoke UI/UX design and modern web development for high-growth brands.',
      icon: <Palette size={48} className="text-pink-500" />,
      features: ['Responsive Layouts', 'Brand Identity', 'Custom Development']
    }
  ];

  if (!type) {
    return (
      <div className="pb-32">
        <header className="py-24 text-center">
          <div className="container mx-auto px-6">
            <h1 className="text-6xl font-black text-white mb-6 uppercase tracking-tighter">Managed <span className="text-blue-500">Services</span></h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Beyond hosting, we provide the tools and design expertise to grow your digital presence.</p>
          </div>
        </header>

        <section className="container mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {services.map((service) => (
                <div key={service.id} className="group glass p-12 rounded-3xl border border-white/5 hover:border-white/20 transition-all">
                   <div className="mb-8">{service.icon}</div>
                   <h3 className="text-3xl font-bold text-white mb-6">{service.title}</h3>
                   <p className="text-gray-400 mb-10 text-lg leading-relaxed">{service.desc}</p>
                   <ul className="space-y-3 mb-12">
                      {service.features.map(f => (
                        <li key={f} className="flex items-center gap-3 text-sm text-gray-300">
                           <Activity size={16} className="text-blue-500" /> {f}
                        </li>
                      ))}
                   </ul>
                   <button className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all flex items-center justify-center gap-2">
                      Get Started <ArrowRight size={18} />
                   </button>
                </div>
              ))}
           </div>
        </section>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-32 text-center">
       <h1 className="text-4xl font-bold text-white mb-4">Service: {type}</h1>
       <p className="text-gray-400">Detailed page coming soon for {type}.</p>
       <Link to="/services" className="mt-8 inline-block text-blue-500 font-bold underline">Back to all services</Link>
    </div>
  );
};

export default Services;
