import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 tracking-wide text-sm md:text-base";
  
  const variants = {
    primary: "bg-brand-gold text-brand-dark hover:bg-white hover:text-brand-dark shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]",
    secondary: "bg-brand-blue text-white hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)]",
    outline: "border border-white/20 text-white hover:border-brand-gold hover:text-brand-gold bg-transparent backdrop-blur-sm"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && <ArrowRight className="w-4 h-4" />}
    </button>
  );
};