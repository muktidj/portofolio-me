import * as id from './content.id';
import * as enRaw from './content.en';

const en: typeof id = enRaw;
export const content = { id, en };
export type Lang = keyof typeof content;
export type Content = typeof id;
export const langs: Lang[] = ['id', 'en'];
/** Anchor id per section — satu bahasa per halaman, jadi id tidak perlu suffix. */
export const sid = (name: string, _lang?: Lang) => name;

export const paths: Record<Lang, string> = { id: '/', en: '/en/' };
export const meta: Record<Lang, { title: string; description: string; locale: string }> = {
  id: {
    title: 'Your Name — System Analyst, Product Manager & Vibe Coder',
    description: 'Portofolio generalis yang menjembatani bisnis dan teknologi: system analyst, product manager, project manager, dan vibe coder berbasis di Jakarta.',
    locale: 'id_ID',
  },
  en: {
    title: 'Your Name — System Analyst, Product Manager & Vibe Coder',
    description: 'Portfolio of a generalist bridging business and technology: system analyst, product manager, project manager and vibe coder based in Jakarta.',
    locale: 'en_US',
  },
};
