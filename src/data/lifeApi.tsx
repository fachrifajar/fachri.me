import { ExternalLink } from '../components/ExternalLink';
import { GitHubIcon } from '../components/icons/GitHubIcon';
import { InstagramIcon } from '../components/icons/InstagramIcon';
import { XIcon } from '../components/icons/XIcon';
import FachriMeLogo from '../images/logos/ff-transparent.png';
import SidLogo from '../images/logos/ethos-light-fix.png'
import { LinkedInIcon } from '../components/icons/LinkedInIcon';

export const Name = 'Fachri Fajar';

export const About = (
  <>
    {`I used to consider myself a software engineer, but the reality is that I simply enjoy creating things. If you'd like to get in touch,`}{' '}
    <ExternalLink href="mailto:fachri.fajar@gmail.com">send me an email.</ExternalLink>
  </>
);
export const AboutExtended = `I live in Indonesia and hold a bachelor's degree in Petroleum Engineering from Universitas Pembangunan Nasional Yogyakarta. Although my background is in petroleum engineering, I made a significant career switch to become a software developer. This transition was driven by my passion for technology and the dynamic nature of the tech industry`;

export type Project = {
  title: string;
  techStack: string[];
  description: string;
  logo: any;
  link?: {
    label: string;
    href: string;
  };
};

export const MyCurrentProjects: Project[] = [
  {
    title: 'SID',
    techStack: ["Frontend Developer", 'Typescript', 'React'],
    description: 'One stop solution ads manager for Facebook, Tiktok, Google',
    logo: SidLogo,
    link: {
      label: 'sid.ethos',
      href: 'https://sid.ethos.co.id',
    },
  },
  {
    title: 'Github Repo Explorer',
    techStack: ["Frontend Developer", 'Typescript', 'Next'],
    description: 'Repo explorer for Github',
    logo: SidLogo,
    link: {
      label: 'github.repo.explorer',
      href: 'https://github-repo-explorer-alpha.vercel.app/',
    },
  },
  {
    title: 'Fachri.me',
    techStack: ['Side Project', 'Next.js',],
    description: 'My personal website you are currently on, built with Next.js.',
    logo: FachriMeLogo,
    link: {
      label: 'github.com',
      href: 'https://github.com/fachrifajar/fachri.me',
    },
  },
];

export const MyPastProjects: Project[] = [
  {
    title: 'Link Hub',
    techStack: ['Full Stack Developer', 'TypeScript', 'React', 'Node.js', 'Firebase'],
    description: 'Linktree clone',
    logo: SidLogo,
    link: {
      label: 'linkhub.com',
      href: 'https://link-hub-v1.vercel.app/',
    },
  },
  // {
  //   title: 'xxx',
  //   techStack: ['x', 'x', 'x'],
  //   description: 'lorem',
  //   logo: CDGOLogo,
  // },
];

export const SocialMedia = [
  { name: 'Github', link: 'https://github.com/fachrifajar', icon: GitHubIcon },
  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/fachri-fajar', icon: LinkedInIcon },
] as const;

export const Work = [
  {
    company: 'Waizly',
    title: 'Frontend Developer',
    // logo: ParabolLogo,
    start: '2023',
    end: 'Present',
  },
  {
    company: 'Anteraja',
    title: 'QA Analyst',
    // logo: ClevertechLogo,
    start: '2021',
    end: '2023',
  },
] as const;





