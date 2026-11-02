import React, { useState } from 'react';
import { useSiteData } from '../context/SiteContext';
import { Button } from '../components/Button';
import { ArrowLeft, RefreshCw, Save, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { iconOptions, IconMapper } from '../components/IconMapper';

export const Admin: React.FC = () => {
  const { data, updateData, resetData } = useSiteData();
  const [activeTab, setActiveTab] = useState('general');
  const [successMsg, setSuccessMsg] = useState('');

  const showSuccess = () => {
    setSuccessMsg('Changes saved locally!');
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  const tabs = [
    { id: 'general', label: 'General Info' },
    { id: 'hero', label: 'Hero Section' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'testimonials', label: 'Testimonials' },
  ];

  const handleInputChange = (section: string, field: string, value: any) => {
    // Deep clone the section to avoid direct state mutation
    const sectionData = { ...data[section as keyof typeof data] };
    // @ts-ignore
    sectionData[field] = value;
    updateData(section as any, sectionData);
  };

  const handleArrayChange = (section: string, index: number, field: string, value: any) => {
    // @ts-ignore
    const list = [...data[section]];
    list[index] = { ...list[index], [field]: value };
    updateData(section as any, list);
  };

  const addItem = (section: string, template: any) => {
    // @ts-ignore
    const list = [...data[section], template];
    updateData(section as any, list);
  };

  const removeItem = (section: string, index: number) => {
    // @ts-ignore
    const list = data[section].filter((_, i) => i !== index);
    updateData(section as any, list);
  };

  return (
    <div className="min-h-screen bg-brand-dark flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-brand-charcoal border-r border-white/5 flex-shrink-0">
        <div className="p-6 border-b border-white/5">
          <Link to="/" className="flex items-center gap-2 text-brand-gold hover:text-white mb-4">
            <ArrowLeft size={16} /> Back to Site
          </Link>
          <h1 className="text-2xl font-display font-bold text-white">Admin Panel</h1>
          <p className="text-xs text-gray-500 mt-1">CMS Version 1.0</p>
        </div>
        <div className="flex flex-col">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-left px-6 py-4 border-b border-white/5 text-sm font-medium transition-colors ${
                activeTab === tab.id ? 'bg-brand-blue/10 text-brand-blue border-l-4 border-l-brand-blue' : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
          <div className="p-6 mt-auto">
             <button 
              onClick={() => { if(window.confirm('Reset all changes to default?')) resetData(); }}
              className="flex items-center gap-2 text-red-400 hover:text-red-300 text-sm"
            >
              <RefreshCw size={14} /> Reset Defaults
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto max-h-screen">
        <header className="bg-brand-dark sticky top-0 z-20 border-b border-white/5 p-6 flex justify-between items-center backdrop-blur-lg bg-opacity-90">
          <div>
            <h2 className="text-xl font-bold text-white capitalize">{activeTab} Editor</h2>
            <p className="text-sm text-gray-500">Make changes to the {activeTab} section</p>
          </div>
          <div className="flex items-center gap-4">
            {successMsg && <span className="text-green-400 text-sm animate-fade-in">{successMsg}</span>}
            <Button variant="primary" onClick={showSuccess}>
              <Save className="w-4 h-4" /> Save Changes
            </Button>
          </div>
        </header>

        <div className="p-6 md:p-10 max-w-4xl">
          
          {/* GENERAL TAB */}
          {activeTab === 'general' && (
            <div className="grid gap-6">
               <div className="input-group">
                <label className="block text-sm text-gray-400 mb-2">Company Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 p-3 rounded text-white"
                  value={data.general.companyName}
                  onChange={(e) => handleInputChange('general', 'companyName', e.target.value)}
                />
              </div>
              <div className="input-group">
                <label className="block text-sm text-gray-400 mb-2">Address</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 p-3 rounded text-white"
                  value={data.general.address}
                  onChange={(e) => handleInputChange('general', 'address', e.target.value)}
                />
              </div>
              <div className="input-group">
                <label className="block text-sm text-gray-400 mb-2">Email</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 p-3 rounded text-white"
                  value={data.general.contactEmail}
                  onChange={(e) => handleInputChange('general', 'contactEmail', e.target.value)}
                />
              </div>
            </div>
          )}

          {/* HERO TAB */}
          {activeTab === 'hero' && (
             <div className="grid gap-6">
              <div className="input-group">
                <label className="block text-sm text-gray-400 mb-2">Badge Text</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 p-3 rounded text-white"
                  value={data.hero.badge}
                  onChange={(e) => handleInputChange('hero', 'badge', e.target.value)}
                />
              </div>
              <div className="input-group">
                <label className="block text-sm text-gray-400 mb-2">Headline Line 1</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 p-3 rounded text-white"
                  value={data.hero.titleLine1}
                  onChange={(e) => handleInputChange('hero', 'titleLine1', e.target.value)}
                />
              </div>
              <div className="input-group">
                <label className="block text-sm text-gray-400 mb-2">Headline Line 2 (Gradient)</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 p-3 rounded text-white"
                  value={data.hero.titleLine2}
                  onChange={(e) => handleInputChange('hero', 'titleLine2', e.target.value)}
                />
              </div>
               <div className="input-group">
                <label className="block text-sm text-gray-400 mb-2">Subtitle</label>
                <textarea 
                  rows={3}
                  className="w-full bg-white/5 border border-white/10 p-3 rounded text-white"
                  value={data.hero.subtitle}
                  onChange={(e) => handleInputChange('hero', 'subtitle', e.target.value)}
                />
              </div>
             </div>
          )}

          {/* SERVICES TAB (Dynamic List) */}
          {activeTab === 'services' && (
            <div className="space-y-8">
              {data.services.map((service, idx) => (
                <div key={idx} className="bg-white/5 p-6 rounded-xl border border-white/5 relative group">
                  <button 
                    onClick={() => removeItem('services', idx)}
                    className="absolute top-4 right-4 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Trash2 size={18} />
                  </button>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Title</label>
                      <input 
                        type="text" 
                        className="w-full bg-black/20 border border-white/10 p-2 rounded text-white text-sm"
                        value={service.title}
                        onChange={(e) => handleArrayChange('services', idx, 'title', e.target.value)}
                      />
                    </div>
                     <div>
                      <label className="block text-xs text-gray-500 mb-1">Icon</label>
                      <select 
                        className="w-full bg-black/20 border border-white/10 p-2 rounded text-white text-sm"
                        value={service.icon}
                        onChange={(e) => handleArrayChange('services', idx, 'icon', e.target.value)}
                      >
                        {iconOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                    </div>
                    <div className="md:col-span-2">
                       <label className="block text-xs text-gray-500 mb-1">Description</label>
                       <textarea 
                        className="w-full bg-black/20 border border-white/10 p-2 rounded text-white text-sm"
                        value={service.description}
                        onChange={(e) => handleArrayChange('services', idx, 'description', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              ))}
              <Button variant="outline" onClick={() => addItem('services', { title: 'New Service', description: 'Description here', icon: 'Lightbulb', tags: [] })}>
                <Plus size={16} /> Add Service
              </Button>
            </div>
          )}

          {/* PORTFOLIO TAB */}
          {activeTab === 'portfolio' && (
            <div className="space-y-8">
              {data.portfolio.map((item, idx) => (
                <div key={idx} className="bg-white/5 p-6 rounded-xl border border-white/5 relative group">
                  <button 
                    onClick={() => removeItem('portfolio', idx)}
                    className="absolute top-4 right-4 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Trash2 size={18} />
                  </button>
                  <div className="grid gap-4">
                     <div>
                      <label className="block text-xs text-gray-500 mb-1">Project Title</label>
                      <input 
                        type="text" 
                        className="w-full bg-black/20 border border-white/10 p-2 rounded text-white text-sm"
                        value={item.title}
                        onChange={(e) => handleArrayChange('portfolio', idx, 'title', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Image URL</label>
                      <div className="flex gap-4">
                        <img src={item.image} className="w-16 h-10 object-cover rounded bg-white/10" alt="Preview"/>
                        <input 
                          type="text" 
                          className="w-full bg-black/20 border border-white/10 p-2 rounded text-white text-sm"
                          value={item.image}
                          onChange={(e) => handleArrayChange('portfolio', idx, 'image', e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Tech Stack (comma separated)</label>
                      <input 
                          type="text" 
                          className="w-full bg-black/20 border border-white/10 p-2 rounded text-white text-sm"
                          value={item.tech.join(', ')}
                          onChange={(e) => handleArrayChange('portfolio', idx, 'tech', e.target.value.split(',').map((s:string) => s.trim()))}
                        />
                    </div>
                     <div>
                       <label className="block text-xs text-gray-500 mb-1">Description</label>
                       <textarea 
                        className="w-full bg-black/20 border border-white/10 p-2 rounded text-white text-sm"
                        value={item.description}
                        onChange={(e) => handleArrayChange('portfolio', idx, 'description', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              ))}
               <Button variant="outline" onClick={() => addItem('portfolio', { title: 'New Project', category: 'Web', description: 'Description', image: 'https://picsum.photos/800/600', tech: ['React'] })}>
                <Plus size={16} /> Add Project
              </Button>
            </div>
          )}

           {/* TESTIMONIALS TAB */}
           {activeTab === 'testimonials' && (
            <div className="space-y-8">
              {data.testimonials.map((item, idx) => (
                <div key={idx} className="bg-white/5 p-6 rounded-xl border border-white/5 relative group">
                  <button 
                    onClick={() => removeItem('testimonials', idx)}
                    className="absolute top-4 right-4 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Trash2 size={18} />
                  </button>
                  <div className="grid gap-4">
                     <div>
                      <label className="block text-xs text-gray-500 mb-1">Author</label>
                      <input 
                        type="text" 
                        className="w-full bg-black/20 border border-white/10 p-2 rounded text-white text-sm"
                        value={item.author}
                        onChange={(e) => handleArrayChange('testimonials', idx, 'author', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Role</label>
                      <input 
                        type="text" 
                        className="w-full bg-black/20 border border-white/10 p-2 rounded text-white text-sm"
                        value={item.role}
                        onChange={(e) => handleArrayChange('testimonials', idx, 'role', e.target.value)}
                      />
                    </div>
                     <div>
                       <label className="block text-xs text-gray-500 mb-1">Quote</label>
                       <textarea 
                        className="w-full bg-black/20 border border-white/10 p-2 rounded text-white text-sm"
                        value={item.text}
                        onChange={(e) => handleArrayChange('testimonials', idx, 'text', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              ))}
               <Button variant="outline" onClick={() => addItem('testimonials', { author: 'New Person', role: 'Client', text: 'Great service!' })}>
                <Plus size={16} /> Add Testimonial
              </Button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};