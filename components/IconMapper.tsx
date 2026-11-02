import React from 'react';
import { Glasses, Brain, GraduationCap, PenTool, Smartphone, Target, Globe, Cpu, PlayCircle, Lightbulb, Code, Database, Layout } from 'lucide-react';

const iconMap: Record<string, any> = {
  Glasses, Brain, GraduationCap, PenTool, Smartphone, Target, Globe, Cpu, PlayCircle, Lightbulb, Code, Database, Layout
};

export const IconMapper: React.FC<{ name: string; className?: string }> = ({ name, className }) => {
  const Icon = iconMap[name] || Lightbulb;
  return <Icon className={className} />;
};

export const iconOptions = Object.keys(iconMap);