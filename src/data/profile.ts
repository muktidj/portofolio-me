/** Data pribadi yang sama untuk semua bahasa. */
export const profile = {
  name: 'Mukti Dwi Jatmoko',
  degree: 'S.Kom',
  logo: 'muktidj',
  email: 'muktidwijatmoko@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mukti-dwi-jatmoko-a9471b172/',
  github: 'https://github.com/muktidj',
  location: 'Tangerang Selatan, Indonesia',
};

/** Tampilkan URL tanpa protokol, "www." dan garis miring di akhir. */
export const shortUrl = (u: string) => u.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
