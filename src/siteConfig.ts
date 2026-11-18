import type {
    SiteConfiguration,
    NavigationLinks,
    SocialLinks,
} from '@/types.ts';

export const SITE: SiteConfiguration = {
    title: 'srlbel site',
    description: 'A simple web based on Astro to share my blog and projects',
    href: 'https://lebelito.cc',
    author: 'srlbel',
    locale: 'en-US',
};

export const NAV_LINKS: NavigationLinks = {
    blog: {
        path: '/blog',
        label: 'blog',
    },
    projects: {
        path: '/projects',
        label: 'projects',
    },
};

export const SOCIAL_LINKS: SocialLinks = {
    email: {
        label: 'email',
        href: 'mailto:dev.juansimancas@proton.me',
    },
    github: {
        label: 'github',
        href: 'https://github.com/srlbel',
    },
    x: {
        label: "x (formely 'twitter')",
        href: 'https://x.com/srlbel',
    },
};
