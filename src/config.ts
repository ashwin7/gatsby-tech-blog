// src/config.ts
import type { SiteConfig } from '@chirpy/types';

export const SITE: SiteConfig = {
  url: 'https://ashwin.saxena.blog', // TODO: update to TalkingDev domain if different
  title: 'TalkingDev - Programming, Tech and Finance',
  description: 'On TalkingDev blog, Ashwin Saxena writes about his experiments with technology and his experiences as a software engineer. Occasionally some financial knowledge too.',
  author: {
    name: 'Ashwin Saxena',
    avatar: '/avatar.png', // placeholder; we'll keep the existing avatar or update later
    bio: 'Software engineer. Writing about life, movies, and things I learn along the way.',
  },
  postsPerPage: 8,
  multilingual: false,
  locales: ['en'], // English-only
  defaultLocale: 'en',
  autoOgImage: true,
  showFeaturedImages: true,
  footer: {
    leftText: '© {year} {author}',
    showPrivacyPolicy: false,
    showThemeCredits: true,
  },
};