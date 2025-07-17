import type {
  SiteConfiguration,
  NavigationLinks,
  SocialLinks,
} from "@/types.ts";

export const SITE: SiteConfiguration = {
  title: "lbel's shrine",
  description:
    "A simple web based on Astro to share my blog and projects",
  href: "https://srlbel.is-a.dev",
  author: "srlbel",
  locale: "en-US",
};

export const NAV_LINKS: NavigationLinks = {
  blog: {
    path: "/blog",
    label: "blog",
  },
  projects: {
    path: "/projects",
    label: "projects",
  },
};

export const SOCIAL_LINKS: SocialLinks = {
  email: {
    label: "email",
    href: "mailto:dev.juansimancas@proton.me",
  },
  github: {
    label: "github",
    href: "https://github.com/srlbel",
  },
  twitter: {
    label: "x",
    href: "https://twitter.com/srlbel",
  },
};
