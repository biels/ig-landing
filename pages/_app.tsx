import Link from 'next/link'
import "../styles/globals.scss";
import {useRouter} from "next/router";
import React, {useContext} from "react";
import {useC3Store} from "../utils/useC3Store";
import {AppStore} from "../AppStore";
import {AppStoreContext} from "../utils/utils";
import {IntlProvider} from "react-intl";
import {polyfill} from '../polyfills';
import App from "next/app";

import {DOMParser} from "xmldom";

global.DOMParser = DOMParser

function MyApp({Component, pageProps, locale, messages}) {
    let router = useRouter()
    let store = useC3Store(() => new AppStore(router))
    return <AppStoreContext.Provider value={store}>
        <IntlProvider locale={locale} defaultLocale="en" messages={messages}>
            <Component {...pageProps} store={store}/>
        </IntlProvider>
    </AppStoreContext.Provider>
}


/**
 * Get the messages and also do locale negotiation. A multi-lingual user
 * can specify locale prefs like ['ja', 'en-GB', 'en'] which is interpreted as
 * Japanese, then British English, then English
 * @param locales list of requested locales
 * @returns {[string, Promise]} A tuple containing the negotiated locale
 * and the promise of fetching the translated messages
 */
function getMessages(locales: string | string[] = ['en']) {
    if (!Array.isArray(locales)) {
        locales = [locales];
    }
    let langBundle;
    let locale;
    for (let i = 0; i < locales.length && !locale; i++) {
        locale = locales[i];
        switch (locale) {
            case 'en':
                langBundle = import('../compiled-lang/en.json');
                break;
            case 'es':
                // langBundle = import('../compiled-lang/es.json');
                break;
            case 'ca':
                // langBundle = import('../compiled-lang/ca.json');
                break;
            case 'sv':
                // langBundle = import('../compiled-lang/sv.json');
                break;
            default:
                break;
            // Add more languages
        }
    }
    if (!langBundle) {
        // return ['en', import('../compiled-lang/en.json')];
    }
    return [locale, langBundle];
}

const getInitialProps: typeof App.getInitialProps = async appContext => {
    const {
        ctx: {req},
    } = appContext;
    const requestedLocales: string | string[] =
        (req as any)?.locale ||
        (typeof navigator !== 'undefined' && navigator.languages) ||
        // IE11
        (typeof navigator !== 'undefined' && (navigator as any).userLanguage) ||
        (typeof window !== 'undefined' && (window as any).LOCALE) ||
        'en';

    const [supportedLocale, messagePromise] = getMessages(requestedLocales);

    const [, messages, appProps] = await Promise.all([
        polyfill(supportedLocale),
        messagePromise,
        App.getInitialProps(appContext),
    ]);

    let initialProps = {
        ...(appProps as any),
        locale: supportedLocale,
        messages: messages.default,
    };
    console.log(`messages`, messages.default);
    console.log(`initialProps`, initialProps);
    return initialProps;
};

MyApp.getInitialProps = getInitialProps;

export default MyApp;
