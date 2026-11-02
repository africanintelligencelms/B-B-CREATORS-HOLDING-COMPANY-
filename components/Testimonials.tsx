import React from 'react';
import { Section } from './Section';
import { Quote } from 'lucide-react';
import { useSiteData } from '../context/SiteContext';

export const Testimonials: React.FC = () => {
  const { data } = useSiteData();

  return (
    <Section id="testimonials" className="bg-brand-dark">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-brand-blue font-mono text-sm tracking-widest mb-4">TRUSTED PARTNERS</h2>
        <h3 className="font-display text-4xl font-bold">What People Say</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {data.testimonials.map((item, i) => (
          <div key={i} className="bg-white/5 border border-white/5 p-8 rounded-2xl relative">
            <Quote className="absolute top-8 right-8 text-brand-gold/20 w-12 h-12" />
            <p className="text-lg text-gray-300 leading-relaxed mb-6 italic">"{item.text}"</p>
            <div>
              <p className="font-bold text-white">{item.author}</p>
              <p className="text-sm text-brand-blue">{item.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Logos Strip */}
      <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        <div className="text-xl font-display font-bold">MEES PALACE</div>
        <div className="text-xl font-display font-bold">PLATEAU GOV</div>
        <div className="text-xl font-display font-bold">ATOMIC BUDS</div>
        <div className="text-xl font-display font-bold">LMS CORP</div>
      </div>
    </Section>
  );
};