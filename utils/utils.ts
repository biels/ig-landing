import {createIntl, createIntlCache} from '@formatjs/intl';
import { useRouter } from 'next/router'
import {caEs} from "../lang/ca-es";
import {esEs} from "../lang/es-es";
import {enUs} from "../lang/en-us";
import {AppStore} from "../AppStore";
import {svSE} from "../lang/sv-se";

export let appStore = new AppStore()

export let globalLocale = appStore.activeLocale // 'es'


const cache = createIntlCache()

let localeMessagesMap = {
    ca: caEs,
    es: esEs,
    en: enUs,
    sv: svSE,
}
const messages = localeMessagesMap[globalLocale]

const intl = createIntl(
    {
        // Locale of the application
        locale: `${globalLocale}-es`,
        // Locale of the fallback defaultMessage
        defaultLocale: `${globalLocale}-es`,
        messages: messages,
    },
    cache
)

/**
 *
 * @param text Example: 'My name is {name}'
 * @param values Example: {name: 'aa'}
 */
export let f = (id, text?, values?) => {
    return intl.formatMessage({
            id: id,
            defaultMessage: text, // Message should be a string literal
        },
        values // Values should be an object literal, but not necessarily every value inside
    )
}
