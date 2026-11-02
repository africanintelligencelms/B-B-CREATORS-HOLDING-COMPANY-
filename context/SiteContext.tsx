import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { defaultData } from './defaultData';

type SiteData = typeof defaultData;

interface SiteContextType {
  data: SiteData;
  updateData: (section: keyof SiteData, value: any) => void;
  resetData: () => void;
}

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export const SiteProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<SiteData>(defaultData);

  useEffect(() => {
    const savedData = localStorage.getItem('site_data_v1');
    if (savedData) {
      try {
        setData(JSON.parse(savedData));
      } catch (e) {
        console.error("Failed to parse site data", e);
      }
    }
  }, []);

  const updateData = (section: keyof SiteData, value: any) => {
    const newData = { ...data, [section]: value };
    setData(newData);
    localStorage.setItem('site_data_v1', JSON.stringify(newData));
  };

  const resetData = () => {
    setData(defaultData);
    localStorage.setItem('site_data_v1', JSON.stringify(defaultData));
  };

  return (
    <SiteContext.Provider value={{ data, updateData, resetData }}>
      {children}
    </SiteContext.Provider>
  );
};

export const useSiteData = () => {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error("useSiteData must be used within a SiteProvider");
  }
  return context;
};