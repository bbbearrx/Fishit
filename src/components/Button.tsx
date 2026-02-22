import { ReactNode } from 'react';
import { Link } from 'react-router';

interface ButtonProps {
  children: ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Button({ 
  children, 
  to, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  className = '' 
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg transition-all duration-300 font-semibold';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50',
    secondary: 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-400 hover:to-pink-500 shadow-lg shadow-purple-500/30 hover:shadow-purple-400/50',
    outline: 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}