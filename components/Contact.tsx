import React, { useState } from 'react';
import { Section } from './Section';
import { Button } from './Button';
import { MapPin, Mail, Phone, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useSiteData } from '../context/SiteContext';

export const Contact: React.FC = () => {
  const { data } = useSiteData();
  const { contact, general } = data;
  
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      alert('Thank you! We will get back to you shortly.');
      setIsSubmitting(false);
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div id="contact" className="relative bg-brand-charcoal pt-24 pb-12">
      <Section>
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-brand-gold font-mono text-sm tracking-widest mb-4">GET IN TOUCH</h2>
            <h3 className="font-display text-5xl font-bold mb-6">{contact.heading}</h3>
            <p className="text-gray-400 mb-12 text-lg">
              {contact.subheading}
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-blue">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Visit Us</h4>
                  <p className="text-gray-400">{general.address}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-blue">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Email Us</h4>
                  <p className="text-gray-400">{general.contactEmail}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-blue">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Call Us</h4>
                  <p className="text-gray-400">{general.contactPhone}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/5 border border-white/5 p-8 md:p-10 rounded-2xl backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-brand-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                  placeholder="John Doe"
                  value={formState.name}
                  onChange={e => setFormState({...formState, name: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-brand-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                  placeholder="john@company.com"
                  value={formState.email}
                  onChange={e => setFormState({...formState, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Project Details</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full bg-brand-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                  placeholder="Tell us about your vision..."
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                ></textarea>
              </div>

              <Button type="submit" className="w-full justify-center" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Book a Consultation'}
              </Button>
            </form>
          </div>

        </div>
      </Section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 pt-12 pb-8 border-t border-white/5 mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col md:items-start items-center">
          <span className="font-display font-bold text-xl text-white">{general.companyName}</span>
          <p className="text-gray-500 text-sm mt-1">© {new Date().getFullYear()} {general.companyName} Ltd.</p>
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><Instagram size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><Twitter size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><Linkedin size={20} /></a>
        </div>
      </footer>
    </div>
  );
};