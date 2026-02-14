import { redirect } from 'next/navigation';
import { getTranslations } from '@/lib/getTranslations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const locales = ['fr', 'en'];

export async function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }) {
    const { locale } = await params;

    // Validate locale
    if (!locales.includes(locale)) {
        redirect('/fr');
    }

    const t = getTranslations(locale);

    // Navbar translations
    const navbarTranslations = {
        whatsapp: t('navbar.whatsapp'),
        home: t('navbar.home'),
        services: t('navbar.services'),
        offers: t('navbar.offers'),
        about: t('navbar.about'),
        contact: t('navbar.contact'),
        footerText: t('navbar.footerText'),
        contactUs: t('navbar.contactUs'),
    };

    // Footer translations
    const footerTranslations = {
        tagline: t('footer.tagline'),
        siteMap: t('footer.siteMap'),
        home: t('footer.home'),
        services: t('footer.services'),
        offers: t('footer.offers'),
        about: t('footer.about'),
        contact: t('footer.contact'),
        destinations: t('footer.destinations'),
        findUs: t('footer.findUs'),
        address: t('footer.address'),
        contactUs: t('footer.contactUs'),
        copyright: t('footer.copyright'),
    };

    return (
        <>
            <Navbar locale={locale} translations={navbarTranslations} />
            <main className="site-main">{children}</main>
            <Footer locale={locale} translations={footerTranslations} />
        </>
    );
}
