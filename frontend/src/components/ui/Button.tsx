import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  primary?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  href, 
  primary = false,
  className = ''
}) => {
  const baseClasses = "inline-flex items-center justify-center px-5 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";
  
  const styleClasses = primary
    ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-md hover:shadow-lg"
    : "bg-transparent hover:bg-indigo-600 text-indigo-400 hover:text-white border border-indigo-500";
  
  const allClasses = `${baseClasses} ${styleClasses} ${className}`;
  
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={allClasses}>
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={allClasses}>
      {children}
    </button>
  );
};

export default Button;