// src/navigation.js
import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Reviews',
      links: [
        {
          text: '1',
          href: getPermalink('/category/reviews/'),
        },
        {
          text: '2',
          href: getPermalink('/category/reviews/2/'),
        },
        {
          text: '3',
          href: getPermalink('/category/reviews/3/'),
        }
      ],
    },
    {
      text: 'Movies',
      links: [
        {
          text: '1',
          href: getPermalink('/category/movies/'),
        },
        {
          text: '2',
          href: getPermalink('/category/movies/2/'),
        },
        {
          text: '3',
          href: getPermalink('/category/movies/3/'),
        }
      ],
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Links',
      links: [{ text: 'Website', href: 'https://devinschumacher.com' }], // *** update this ***
    },
    {
      title: 'Tags',
      links: [
        { text: 'Tags', href: '/tags/' },
        // { text: '<Tag Name>', href: '/tag/<tag>/' }, // *** update this ***
      ],
    },
    {
      title: 'Boring Stuff',
      links: [
        { text: 'Privacy Policy', href: '/privacy/' },
        { text: 'Terms & Conditions', href: '/terms/' },
        { text: 'Affiliate Disclosure', href: '/affiliate-disclosure/' },
        { text: 'DMCA', href: '/dmca/' },
        { text: 'Archive', href: '/archive/' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [     // *** update this ***
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://serp.ly/@devinschumacher/twitter', target: '_blank' },
    {
      ariaLabel: 'Instagram',
      icon: 'tabler:brand-instagram',
      href: 'https://serp.ly/@devinschumacher/instagram',
      target: '_blank',
    },
    {
      ariaLabel: 'Facebook',
      icon: 'tabler:brand-facebook',
      href: 'https://serp.ly/@devinschumacher/facebook',
      target: '_blank',
    },
    {
      ariaLabel: 'YouTube',
      icon: 'tabler:brand-youtube',
      href: 'https://serp.ly/@devinschumacher/youtube',
      target: '_blank',
    },
    {
      ariaLabel: 'Linkedin',
      icon: 'tabler:brand-linkedin',
      href: 'https://serp.ly/@devinschumacher/linkedin',
      target: '_blank',
    },
    {
      ariaLabel: 'TikTok',
      icon: 'tabler:brand-tiktok',
      href: 'https://serp.ly/@devinschumacher/tiktok',
      target: '_blank',
    },
  ],
};
