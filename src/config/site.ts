export const siteConfig = {
  name: "Basti's Website",
  url: "https://berle.dev",
  description: "My personal website",
  author: "Bastian Berle",
  links: {
    twitter: "https://x.com/BastianBerle",
    github: "https://github.com/Irish-77",
    personalSite: "https://berle.dev",
    linkedIn: "https://www.linkedin.com/in/bastian-berle/",
  },
  navLinks: [
    { href: "/cv", label: "CV" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
  ],
};

export type SiteConfig = typeof siteConfig;
