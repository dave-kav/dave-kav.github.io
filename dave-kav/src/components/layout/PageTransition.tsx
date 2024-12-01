import { motion } from 'framer-motion';
import React, { FC, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: ReactNode;
}

export const PageTransition: FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const isBlogsPage = location.pathname === '/blogs';

  return (
    <motion.div
      initial={{ opacity: 0, x: isBlogsPage ? 100 : -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: isBlogsPage ? -100 : 100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}; 