import React from 'react';
import { Section } from './Section';
import { ArrowUpRight } from 'lucide-react';
import { useSiteData } from '../context/SiteContext';

export const Portfolio: React.FC = () => {
  const { data } = useSiteData();

  return (
    <Section id="portfolio" className="bg-black">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <h2 className="text-brand-gold font-mono text-sm tracking-widest mb-4">SELECTED WORKS</h2>
          <h3 className="font-display text-4xl md:text-5xl font-bold">Case Studies</h3>
        </div>
        <div className="hidden md:block">
           <a href="#contact" className="text-white hover:text-brand-gold flex items-center gap-2 border-b border-white hover:border-brand-gold pb-1 transition-colors">
            View All Projects <ArrowUpRight size={16} />
           </a>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {data.portfolio.map((project, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl mb-6 aspect-video">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter brightness-75 group-hover:brightness-100"
              />
              <div className="absolute top-4 right-4 bg-brand-dark/80 backdrop-blur px-3 py-1 rounded text-xs font-mono text-white border border-white/10">
                {project.category}
              </div>
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-2xl font-display font-bold mb-2 group-hover:text-brand-blue transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-400 mb-4 max-w-md">{project.description}</p>
                <div className="flex gap-3 text-sm text-gray-500 font-mono">
                  {project.tech.map((t, i) => (
                    <span key={i}>#{t}</span>
                  ))}
                </div>
              </div>
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-dark group-hover:border-transparent transition-all">
                <ArrowUpRight size={18} />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 md:hidden text-center">
        <a href="#contact" className="inline-flex items-center gap-2 text-brand-gold font-bold">
           View All Projects <ArrowUpRight size={16} />
        </a>
      </div>
    </Section>
  );
};