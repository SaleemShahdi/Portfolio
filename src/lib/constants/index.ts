import LinkedinIcon from '@/components/ui/icons/linkedin.astro'
import XIcon from '@/components/ui/icons/x.astro'
import GithubIcon from '@/components/ui/icons/github.astro'

export const NAV_LINKS = [
  {
    label: "Home",
    href: "/Portfolio/",
  },
  {
    label: "Projects",
    href: "/Portfolio/projects",
  },
  {
    label: "Professional Experience",
    href: "/Portfolio/#experience",
  },
] as const;

export const SOCIAL_LINKS = [
  {
    name: 'Github',
    icon: GithubIcon,
    url: "https://github.com/Louai-Zokerburg",
  },
  {
    name: 'Linkedin',
    icon: LinkedinIcon,
    url: "https://www.linkedin.com/in/louai-boumediene-018919262/",
  },
  {
    name: 'X',
    icon: XIcon,
    url: "https://x.com/Louai_Dourov",
  },
];