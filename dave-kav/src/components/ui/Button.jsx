import { forwardRef } from 'react';
import './Button.css';

export const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'medium',
  icon,
  className = '',
  href,
  ...props
}, ref) => {
  const Component = href ? 'a' : 'button';
  
  return (
    <Component
      ref={ref}
      className={`
        button
        button--${variant}
        button--${size}
        ${className}
      `}
      href={href}
      {...props}
    >
      {icon && <span className="button__icon">{icon}</span>}
      <span className="button__text">{children}</span>
    </Component>
  );
});
