// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Shuwn‘s Note',
  tagline: 'Dinosaurs are cool',
  url: 'https://note.shuwn.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/sray.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'shuwn', // Usually your GitHub org/user name.
  projectName: 'note-draft', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-TW',
    locales: ['en', 'zh-TW'],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
        },
      'zh-TW': {
        label: '繁體中文 (台灣)',
        direction: 'ltr',
        htmlLang: 'zh-TW',
        calendar: 'gregory',
        path: 'zh-TW',
      }
    }
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/shuwn/note-draft/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/shuwn/note-draft/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Shuwn‘s Note',
        logo: {
          alt: 'Sray Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/shuwn',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'About Me',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://shuwn.dev/about/',
          //     },
          //   ],
          // },
          {
            title: 'Community',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/shuwn',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/in/yi-hsiang-hsu/',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/Shuwn.Life',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'About Me',
                to: 'https://shuwn.dev/about/',
              },
              {
                label: 'Blog',
                href: 'https://shuwn.dev/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} By Shuwn Hsu, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

