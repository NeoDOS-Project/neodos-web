import { en } from './en';
import { es } from './es';
import type { Lang } from './config';

export const translations = { en, es } satisfies Record<Lang, typeof en>;

export function useTranslations(lang: Lang) {
  return translations[lang];
}
