import { defaultLang, isLang, type Lang } from './config';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Build an absolute (base-aware) URL for a locale and a path inside the site. */
export function localeUrl(lang: Lang, path = '/'): string {
  return `${base}/${lang}${path}`;
}

/** Remove the configured base path from a pathname, if present. */
function stripBase(pathname: string): string {
  return pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
}

export function getLangFromPath(pathname: string): Lang {
  const segment = stripBase(pathname).split('/')[1];
  return isLang(segment) ? segment : defaultLang;
}

/** Path inside a locale, e.g. /architecture/ (always starts with a slash). */
export function getRelativePath(pathname: string, lang: Lang): string {
  const withoutLang = stripBase(pathname).replace(new RegExp(`^/${lang}(?=/|$)`), '');
  return withoutLang.startsWith('/') ? withoutLang || '/' : `/${withoutLang}`;
}

export function switchLangUrl(pathname: string, target: Lang): string {
  const current = getLangFromPath(pathname);
  return localeUrl(target, getRelativePath(pathname, current));
}
