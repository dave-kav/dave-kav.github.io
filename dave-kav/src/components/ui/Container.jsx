import './Container.css';

export const Container = ({
  children,
  size = 'default',
  className = '',
  ...props
}) => {
  return (
    <div
      className={`
        container
        container--${size}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};
