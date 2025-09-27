import { describe, expect, it } from 'vitest';
import i18n from './i18n';
import { enUS, ptBR } from './locales';

describe('i18n configuration', () => {
  it('should initialize with the correct fallback language', () => {
    expect(i18n.options.fallbackLng).toStrictEqual(['en']);
  });

  it('should initialize with the correct default language', () => {
    expect(i18n.language).toBe('pt');
  });

  it('should have English and Portuguese resources', () => {
    expect(i18n.options.resources).toHaveProperty('en');
    expect(i18n.options.resources).toHaveProperty('pt');
  });

  function getAllKeys(obj: Record<string, unknown>, prefix = ''): string[] {
    return Object.entries(obj).flatMap(([key, value]) => {
      const fullKey = prefix ? `${prefix}.${key}` : key;
      if (typeof value === 'object' && value !== null) {
        return getAllKeys(value as Record<string, unknown>, fullKey);
      }
      return [fullKey];
    });
  }

  it('should have the same translation keys in pt-BR and en-US locale files, including nested keys', () => {
    const enKeys = getAllKeys(enUS);
    const ptKeys = getAllKeys(ptBR);
    expect(ptKeys.sort()).toEqual(enKeys.sort());
  });
});
