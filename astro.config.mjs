import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Ganti dengan domain final (atau https://<project>.pages.dev) sebelum deploy.
export default defineConfig({
  site: 'https://yourname.dev',
  output: 'static',
  trailingSlash: 'always',
  i18n: { defaultLocale: 'id', locales: ['id', 'en'], routing: { prefixDefaultLocale: false } },
  vite: { plugins: [tailwindcss()] },
  integrations: [sitemap({ i18n: { defaultLocale: 'id', locales: { id: 'id-ID', en: 'en-US' } } })],
});
