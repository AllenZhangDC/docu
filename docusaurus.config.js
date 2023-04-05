// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GJWC',
  tagline: 'GJWC documentation',
  url: 'http://3.228.157.226',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'GJWC', // Usually your GitHub org/user name.
  projectName: 'GJWC Documentation', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },


  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // id: 'docs', // omitted => default instance
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://gitlab.cloudokyo.dev/allen.zhang/docu/-/tree/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://gitlab.cloudokyo.dev/allen.zhang/docu/-/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@cmfcmf/docusaurus-search-local',
      {
        maxSearchResults: 10,
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'cms',
        path: '00cms',
        routeBasePath: '00cms',
        sidebarPath: require.resolve('./sidebars00CMS.js'),
        editUrl:'https://gitlab.cloudokyo.dev/allen.zhang/docu/-/tree/main',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ads',
        path: '01ads',
        routeBasePath: '01ads',
        sidebarPath: require.resolve('./sidebars01Ads.js'),
        editUrl:'https://gitlab.cloudokyo.dev/allen.zhang/docu/-/tree/main',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'exam',
        path: '02exam',
        routeBasePath: '02exam',
        sidebarPath: require.resolve('./sidebars02Exam.js'),
        editUrl:'https://gitlab.cloudokyo.dev/allen.zhang/docu/-/tree/main',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'reactmodel',
        path: '03ReactModel',
        routeBasePath: '03ReactModel',
        sidebarPath: require.resolve('./sidebars03ReactModel.js'),
        editUrl:'https://gitlab.cloudokyo.dev/allen.zhang/docu/-/tree/main',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'streamingcode',
        path: '04StreamingCode',
        routeBasePath: '04StreamingCode',
        sidebarPath: require.resolve('./sidebars04StreamingCode.js'),
        editUrl:'https://gitlab.cloudokyo.dev/allen.zhang/docu/-/tree/main',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'GJWC',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            position: 'left',
            docId: 'intro',
            label: 'Doc',
          },
          {
            to: '/00cms/intro',   // To highlight the navbar item, you must link to a document, not a top-level directory
            position: 'left',
            label: 'CMS',
            activeBaseRegex: `/cms/`,
          },
          {
            to: '/01ads/intro',   // To highlight the navbar item, you must link to a document, not a top-level directory
            position: 'left',
            label: 'Ads',
            activeBaseRegex: `/ads/`,
          },
          {
            to: '/02exam/intro',   // To highlight the navbar item, you must link to a document, not a top-level directory
            position: 'left',
            label: 'Exam',
            activeBaseRegex: `/exam/`,
          },
          {
            to: '/03reactmodel/intro',   // To highlight the navbar item, you must link to a document, not a top-level directory
            position: 'left',
            label: 'React Model',
            activeBaseRegex: `/react model/`,
          },
          {
            to: '/04StreamingCode/intro',   // To highlight the navbar item, you must link to a document, not a top-level directory
            position: 'left',
            label: 'Streaming Code',
            activeBaseRegex: `/streaming code/`,
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
               label: 'Tutorial',
               to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
