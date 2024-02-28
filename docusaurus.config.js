// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentación en Docusaurus',
  tagline: 'JLBenYa',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://jlbenya.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Documentacion_Caso02',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'JLBenYa', // Usually your GitHub org/user name.
  projectName: 'Documentacion_Caso02', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {   
      logo: {
        href: '/docs/intro',
        alt: 'My Site Logo',
        src: 'data:image/png;base64,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',
      },
      items: [
        {
          href: '/docs/intro', // Aquí cambiamos la propiedad type por href
          label: 'Manual',
          position: 'left',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
