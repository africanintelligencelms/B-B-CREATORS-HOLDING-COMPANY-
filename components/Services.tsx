import React from 'react';
import { Section } from './Section';
import { useSiteData } from '../context/SiteContext';
import { IconMapper } from './IconMapper';

export const Services: React.FC = () => {
  const { data } = useSiteData();

  return (
    <Section id="services">
      <div className="text-center mb-16">
        <h2 className="text-brand-blue font-mono text-sm tracking-widest mb-4">WHAT WE DO</h2>
        <h3 className="font-display text-4xl md:text-5xl font-bold mb-4">Our Expertise</h3>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Comprehensive digital solutions tailored for high-growth African enterprises and public sector innovation.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.services.map((service, index) => (
          <div 
            key={index}
            className="group relative p-8 rounded-2xl glass-panel border border-white/5 hover:border-brand-gold/30 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="bg-brand-dark/50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <IconMapper name={service.icon} className="w-8 h-8 text-brand-gold" />
            </div>
            
            <h4 className="text-2xl font-display font-bold mb-3 group-hover:text-brand-gold transition-colors">{service.title}</h4>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {service.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {service.tags.map(tag => (
                <span key={tag} className="text-xs font-mono py-1 px-2 rounded bg-white/5 text-gray-300 border border-white/5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};