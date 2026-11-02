import React from 'react';
import { Section } from './Section';
import { CheckCircle2 } from 'lucide-react';
import { useSiteData } from '../context/SiteContext';

export const About: React.FC = () => {
  const { data } = useSiteData();
  const { about } = data;

  return (
    <Section id="about" className="bg-brand-dark/50">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        
        {/* Visual Side */}
        <div className="relative">
          <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10">
            <img 
              src={about.imageUrl} 
              alt="Team at workshop" 
              className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80"></div>
            
            <div className="absolute bottom-8 left-8 right-8">
              <div className="glass-panel p-6 rounded-xl">
                <p className="text-brand-gold font-display text-4xl font-bold mb-1">{about.yearsExperience}</p>
                <p className="text-sm text-gray-300">Years of Digital Innovation in Nigeria</p>
              </div>
            </div>
          </div>
          
          {/* Decorative element behind */}
          <div className="absolute -top-4 -right-4 w-full h-full border border-brand-gold/20 rounded-2xl z-0"></div>
        </div>

        {/* Content Side */}
        <div>
          <h2 className="text-brand-blue font-mono text-sm tracking-widest mb-4">{about.badge}</h2>
          <h3 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">
            {about.title}
          </h3>
          <p className="text-gray-400 leading-relaxed mb-6 text-lg">
            {about.description1}
          </p>
          <p className="text-gray-400 leading-relaxed mb-8">
            {about.description2}
          </p>

          <div className="space-y-4">
            {about.checklist.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-gold w-5 h-5 flex-shrink-0" />
                <span className="text-gray-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};