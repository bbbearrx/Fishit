import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function Card({ children, className = '', hover = false, glow = false }: CardProps) {
  return (
    <div
      className={`
        bg-gradient-to-br from-slate-800/90 to-slate-900/90 
        backdrop-blur-sm 
        border border-cyan-500/20 
        rounded-xl 
        p-6 
        ${hover ? 'hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1' : ''}
        ${glow ? 'shadow-lg shadow-cyan-500/10' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
