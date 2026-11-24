import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { loadEnv } from 'vite';

// URL publik website. Setelah deploy pertama, isi SITE_URL di file .env
// dengan URL dari Cloudflare (mis. https://portofolio-me.<akun>.workers.dev) atau domain sendiri.
const { SITE_URL } = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');
const site = SITE_URL || 'https://portofolio-me.workers.dev';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  i18n: { defaultLocale: 'id', locales: ['id', 'en'], routing: { prefixDefaultLocale: false } },
  vite: { plugins: [tailwindcss()] },
  integrations: [sitemap({ i18n: { defaultLocale: 'id', locales: { id: 'id-ID', en: 'en-US' } } })],
});
