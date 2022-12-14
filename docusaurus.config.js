const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: 'Mixin JS SDK',
  tagline: 'Mixin JS SDK Documents',
  url: 'https://liuzemei.github.io/mixin-js-sdk-docs/',
  baseUrl: '/mixin-js-sdk-docs/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'liuzemei',
  projectName: 'liuzemei.github.io/mixin-js-sdk-docs',

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/liuzemei/mixin-js-sdk-docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  // i18n: {
  //   defaultLocale: 'zh-CN',
  //   locales: ['en', 'zh-CN'],
  //   localeConfigs: {
  //     'en': {
  //       label: 'English',
  //     },
  //     'zh-CN': {
  //       label: '简体中文',
  //     }
  //   }
  // },
  themeConfig: {
    navbar: {
      title: 'Mixin JS SDK',
      logo: {
        alt: 'Mixin JS SDK',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'server/intro',
          position: 'left',
          label: '服务端',
        },
        {
          type: 'doc',
          docId: 'web/intro',
          position: 'left',
          label: '浏览器端',
        },
        // {
        //   type: "localeDropdown",
        //   position: 'right',
        // },
        {
          href: 'https://github.com/liuzemei/mixin-js-sdk-docs',
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
              label: '快速开始',
              to: '/docs/server/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Mixin Developers',
              href: 'https://developers.mixin.one',
            },
            {
              label: 'Mixin HomePage',
              href: 'https://mixin.one',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mixin, Inc.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
