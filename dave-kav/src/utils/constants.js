export const NAVIGATION_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' }
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/dave-kav',
  linkedin: 'https://linkedin.com/in/dave-kavanagh',
  email: 'dave.kavanagh87@gmail.com'
};

export const SECTION_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.645, 0.045, 0.355, 1] }
  }
};
