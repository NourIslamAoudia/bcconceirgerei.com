import { translations } from '@/locales/translations';

/**
 * Server-side translation helper.
 * Returns a t() function that resolves dot-notation keys against the translations object.
 * Usage: const t = getTranslations('fr');  t('hero.title') → "B&C pour bienveillance…"
 */
export function getTranslations(locale = 'fr') {
    const dict = translations[locale] || translations.fr;

    return function t(key) {
        const keys = key.split('.');
        let value = dict;

        for (const k of keys) {
            if (value && typeof value === 'object') {
                value = value[k];
            } else {
                return key;
            }
        }

        return value || key;
    };
}
