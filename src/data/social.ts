import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { SocialLink } from '@/src/types';

export const socialLinks: SocialLink[] = [
  {
    href: 'https://github.com/welch-connor',
    label: 'GitHub',
    icon: FaGithub,
    ariaLabel: 'Visit my GitHub profile'
  },
  {
    href: 'https://www.linkedin.com/in/connor-welch-095286a3',
    label: 'LinkedIn',
    icon: FaLinkedin,
    ariaLabel: 'Connect with me on LinkedIn'
  },
  {
    href: 'mailto:connor.welch18@gmail.com',
    label: 'Email',
    icon: FaEnvelope,
    ariaLabel: 'Chat with me'
  }
];
