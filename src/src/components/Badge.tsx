import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'mythic' | 'default';
  className?: string;
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variantClasses = {
    common: 'bg-gray-500/20 text-gray-300 border-gray-500/40',
    uncommon: 'bg-green-500/20 text-green-300 border-green-500/40',
    rare: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
    epic: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
    legendary: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40',
    mythic: 'bg-pink-500/20 text-pink-300 border-pink-500/40 shadow-lg shadow-pink-500/20',
    default: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
}
