import React from 'react';
import { Button } from './Button';
import { PlayCircle, Cpu, Globe } from 'lucide-react';
import { useSiteData } from '../context/SiteContext';

export const Hero: React.FC = () => {
  const { data } = useSiteData();
  const { hero } = data;

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[120px]" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        
        {/* Floating Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 backdrop-blur-md mb-8 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
          </span>
          <span className="text-xs md:text-sm font-mono text-brand-blue tracking-wider">{hero.badge}</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 tracking-tight">
          {hero.titleLine1} <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">{hero.titleLine2}</span> <br/>
          <span className="italic text-brand-gold">{hero.titleLine3}</span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          {hero.subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Button variant="primary" icon onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
            Start a Project
          </Button>
          <Button variant="outline" onClick={() => document.getElementById('portfolio')?.scrollIntoView({behavior: 'smooth'})}>
            View Portfolio
          </Button>
        </div>

        {/* Stats / Tech stack visualization */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto border-t border-white/10 pt-12">
          {[
            { label: 'Virtual Reality', icon: <Globe className="w-5 h-5 text-brand-blue" /> },
            { label: 'AI Solutions', icon: <Cpu className="w-5 h-5 text-brand-gold" /> },
            { label: 'EdTech', icon: <PlayCircle className="w-5 h-5 text-purple-400" /> },
            { label: 'Innovation', icon: <div className="w-2 h-2 rounded-full bg-green-400" /> },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2 group cursor-default">
              <div className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                {item.icon}
              </div>
              <span className="text-sm font-medium text-gray-400">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};