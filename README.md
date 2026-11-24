# portofolio-me

Website portofolio pribadi Mukti Dwi Jatmoko — dibangun dengan [Astro](https://astro.build), dibantu Claude Opus.

## Menjalankan di lokal

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # hasil ke folder dist/
npm run preview   # cek hasil build
```

## Mengubah konten

| File | Isi |
|---|---|
| `src/data/profile.ts` | Nama, gelar, email, LinkedIn, GitHub, lokasi |
| `src/data/content.id.ts` | Semua teks versi Indonesia (`/`) |
| `src/data/content.en.ts` | Semua teks versi Inggris (`/en/`) |
| `public/mukti.jpg` | Foto profil |
| `public/og.png` | Gambar preview saat link dibagikan (1200×630) |

Status proyek diatur lewat `status` di data proyek: `'dev'` (dalam pengembangan, teks diblur), `'beta'`, atau `''`.

## Deploy ke Cloudflare

```bash
npx wrangler login   # sekali saja
npm run deploy       # build + upload ke Cloudflare Workers
```

Setelah deploy pertama, salin URL yang muncul ke `SITE_URL` di file `.env` (lihat `.env.example`), lalu `npm run deploy` sekali lagi.
