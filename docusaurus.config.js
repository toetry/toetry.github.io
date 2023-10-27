// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'emiya-docs',
  tagline: '✨为QQ机器人开发者提供新路径✨\✨敏捷,快速,轻量的解决方案✨',
  favicon: 'img/YA.ico',

  // Set the production url of your site here
  url: 'https://toetry.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Lixeer', // Usually your GitHub org/user name.
  projectName: 'emiya', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
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
            'https://github.com/toetry/toetry.github.io/tree/Docs/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/YA.svg',
      navbar: {
        title: 'emiya-docs',
        logo: {
          alt: 'Logo',
          src: 'img/YA.svg',
        },
        items: [
          /*{
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '文档',
          },*/
          {to: '/docs/category/开始使用', label: '开始使用', position: 'left'},
          {to: '/docs/category/开发文档', label: '开发文档', position: 'left'},
          {
            href: 'https://github.com/Lixeer/emiya/blob/main/docs/插件.md',
            label: '插件商店（丐版）',
            position: 'left'
          },
          {
            href: 'https://github.com/Lixeer/emiya',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '特别鸣谢',
            items: [
              {
                label: 'go-cqhttp',
                href: 'https://github.com/Mrs4s/go-cqhttp',
              },
              {
                label: 'Fastapi',
                href: 'https://github.com/tiangolo/fastapi',
              },
            ],
          },
          {
            title: '感谢赞助',
            items: [
              {
                label: '快优互联',
                href: 'http://www.kyvps.cn',
              },
            ],
          },
          {
            title: '加入我们',
            items: [
              {
                label: 'QQ群',
                href: 'https://qm.qq.com/q/Z4I2QiKKk2',
              },
            ],
          },
        ],
        copyright: `长路漫漫修远兮，吾等上下而求索`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
