import { getRelativeLocaleUrl } from 'astro:i18n';

// Import translation files
import id from '../locales/id.json';
import en from '../locales/en.json';

const translations = {
  id,
  en
} as const;

export type Locale = keyof typeof translations;

export function t(locale: Locale, key: string): string {
  const keys = key.split('.');
  let value: any = translations[locale];
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      // Fallback to Indonesian if key not found
      value = translations.id;
      for (const fallbackKey of keys) {
        if (value && typeof value === 'object' && fallbackKey in value) {
          value = value[fallbackKey];
        } else {
          return key; // Return key if translation not found
        }
      }
      break;
    }
  }
  
  return typeof value === 'string' ? value : key;
}

export function tArray(locale: Locale, key: string): any[] {
  const keys = key.split('.');
  let value: any = translations[locale];
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      // Fallback to Indonesian if key not found
      value = translations.id;
      for (const fallbackKey of keys) {
        if (value && typeof value === 'object' && fallbackKey in value) {
          value = value[fallbackKey];
        } else {
          return []; // Return empty array if translation not found
        }
      }
      break;
    }
  }
  
  return Array.isArray(value) ? value : [];
}

export function getLocalizedUrl(locale: Locale, path: string): string {
  return getRelativeLocaleUrl(locale, path);
}

export const defaultLocale: Locale = 'id';
export const locales: Locale[] = ['id', 'en'];

export function getCurrentLocale(url: URL): Locale {
  const pathname = url.pathname;
  const locale = pathname.split('/')[1];
  
  if (locales.includes(locale as Locale)) {
    return locale as Locale;
  }
  
  return defaultLocale;
}