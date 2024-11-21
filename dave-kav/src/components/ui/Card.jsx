import { forwardRef } from 'react';
import './Card.css';

export const Card = forwardRef(({
  children,
  variant = 'default',
  hover = false,
  className = '',
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={`
        card
        card--${variant}
        ${hover ? 'card--hover' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
});
