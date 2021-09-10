import {createIntl, createIntlCache} from '@formatjs/intl';
import {caEs} from "../lang/ca-es";
import {esEs} from "../lang/es-es";

export let globalLocale = 'es' // 'es'


const cache = createIntlCache()

let localeMessagesMap = {
    ca: caEs,
    es: esEs,
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
export let f = (id, text, values?) => {
    return intl.formatMessage({
            id: id,
            defaultMessage: text, // Message should be a string literal
        },
        values // Values should be an object literal, but not necessarily every value inside
    )
}
