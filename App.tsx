
import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const Hosting = lazy(() => import('./pages/Hosting'));
const VPS = lazy(() => import('./pages/VPS'));
const Dedicated = lazy(() => import('./pages/Dedicated'));
const Domains = lazy(() => import('./pages/Domains'));
const Offers = lazy(() => import('./pages/Offers'));
const Colocation = lazy(() => import('./pages/Colocation'));
const Services = lazy(() => import('./pages/Services'));

const LoadingScreen = () => (
  <div className="min-h-screen bg-[#030712] flex items-center justify-center">
    <div className="relative">
      <div className="w-20 h-20 border-2 border-blue-500/20 rounded-full"></div>
      <div className="absolute inset-0 w-20 h-20 border-t-2 border-blue-500 rounded-full animate-spin"></div>
      <div className="mt-8 text-blue-500 font-black uppercase tracking-[0.3em] text-[10px] text-center animate-pulse">Initializing Grid</div>
    </div>
  </div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex-grow"
      >
        <Suspense fallback={<LoadingScreen />}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/hosting" element={<Hosting />} />
            <Route path="/hosting/:type" element={<Hosting />} />
            <Route path="/vps" element={<VPS />} />
            <Route path="/vps/:type" element={<VPS />} />
            <Route path="/dedicated" element={<Dedicated />} />
            <Route path="/dedicated/:cpu" element={<Dedicated />} />
            <Route path="/domains" element={<Domains />} />
            <Route path="/domains/:type" element={<Domains />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:type" element={<Services />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/colocation" element={<Colocation />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-[#030712] selection:bg-blue-600 selection:text-white">
        {/* Global Tech Background */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(30,58,138,0.15)_0%,rgba(3,7,18,1)_100%)]"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10 mix-blend-overlay" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/carbon-fibre.png')` }}></div>
        </div>
        
        <Navbar />
        <main className="flex-grow pt-20">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
