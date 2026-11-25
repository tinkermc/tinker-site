import { defineConfig } from 'vocs/config'

export default defineConfig({
  title: 'Tinker Docs',
  titleTemplate: '%s | Tinker Docs',
  description:
    'Learn how to set up and manage Minecraft servers with Tinker Dash and Tinker Agent.',
  baseUrl: 'https://docs.tinkermc.com',
  iconUrl: 'https://tinkermc.com/assets/images/tinker/wrench.png',
  ogImageUrl: 'https://tinkermc.com/assets/images/tinker/console.png',
  accentColor: '#22c55e',
  colorScheme: 'dark',
  // Builds plain HTML files so the docs can be hosted on Cloudflare Pages
  // (same as tinkermc.com). See README.md → "Deploying".
  renderStrategy: 'full-static',
  sitemap: {},
  head: {
    link: [{ rel: 'stylesheet', href: '/vocs.css' }],
  },
  topNav: [
    { text: 'Quick Start', link: '/getting-started/quick-start' },
    { text: 'tinkermc.com', link: 'https://tinkermc.com', external: true },
  ],
  socials: [{ icon: 'discord', link: 'https://discord.gg/9G9H4HdtJx' }],

  // ─── Sidebar ────────────────────────────────────────────────────────────
  // Every page in src/pages needs an entry here to show up in the menu.
  // `link` is the file path without `src/pages` and without `.mdx`.
  //   src/pages/dash/console.mdx  →  link: '/dash/console'
  sidebar: [
    {
      text: 'Getting started',
      items: [
        { text: 'Welcome', link: '/' },
        { text: 'Quick Start', link: '/getting-started/quick-start' },
        { text: 'Requirements', link: '/getting-started/requirements' },
        { text: 'How Tinker works', link: '/getting-started/how-it-works' },
      ],
    },
    {
      text: 'Tinker Agent',
      items: [
        { text: 'Install the Agent', link: '/agent/install' },
        { text: 'Update the Agent', link: '/agent/update' },
        { text: 'Troubleshooting', link: '/agent/troubleshooting' },
      ],
    },
    {
      text: 'Tinker Dash',
      items: [
        { text: 'Install Tinker Dash', link: '/dash/install' },
        { text: 'Connect to your Agent', link: '/dash/connect' },
        { text: 'Create a server', link: '/dash/create-server' },
        { text: 'Import from Crafty', link: '/dash/import-crafty' },
        { text: 'Server tab', link: '/dash/server' },
        { text: 'Console', link: '/dash/console' },
        { text: 'Players', link: '/dash/players' },
        { text: 'World tools', link: '/dash/world' },
      ],
    },
    {
      text: 'Remote access',
      items: [
        { text: 'Tailscale', link: '/remote/tailscale' },
        { text: 'Tinker Connection Tunnel', link: '/remote/tinkertunnel' }
      ],
    },
    {
      text: 'Help',
      items: [
        { text: 'FAQ', link: '/help/faq' },
        { text: 'Support', link: '/help/support' },
      ],
    },
    // Writer-only reference. Remove this group before launch if you don't
    // want it public (the page still works at /contributing/kitchen-sink).
    {
      text: 'For Tommy :)',
      collapsed: true,
      items: [{ text: 'Formatting reference', link: '/contributing/kitchen-sink' }],
    },
  ],
})
