interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
}

export const SOCIAL_LINKS: SocialLinks = {
  github: 'https://github.com/dave-kav',
  linkedin: 'https://linkedin.com/in/dave-kavanagh',
  email: 'dave.kavanagh87@gmail.com'
} as const;
