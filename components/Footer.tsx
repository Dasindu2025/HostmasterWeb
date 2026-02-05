
import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Twitter, Facebook, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#05050a] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                <Server size={22} />
              </div>
              <span className="text-xl font-extrabold tracking-tighter text-white">HOST<span className="text-blue-500">MASTER</span></span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              Empowering the next generation of web applications with enterprise-grade infrastructure, high-speed connectivity, and unmatched reliability.
            </p>
            <div className="flex gap-4">
              {[Twitter, Facebook, Github, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Hosting</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/hosting/shared" className="hover:text-blue-400">Web Hosting</Link></li>
              <li><Link to="/vps/linux" className="hover:text-blue-400">VPS Hosting</Link></li>
              <li><Link to="/dedicated/intel" className="hover:text-blue-400">Dedicated Servers</Link></li>
              <li><Link to="/hosting/wordpress" className="hover:text-blue-400">WordPress Hosting</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400">Data Centers</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact</a></li>
              <li><a href="#" className="hover:text-blue-400">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-2"><Phone size={14} /> +1 (800) HOST</li>
              <li className="flex items-center gap-2"><Mail size={14} /> support@hostmaster.io</li>
              <li><a href="#" className="hover:text-blue-400">Knowledge Base</a></li>
              <li><a href="#" className="hover:text-blue-400">Ticketing System</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
          <p>© 2024 Host Master Web Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">SLA Guarantee</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
