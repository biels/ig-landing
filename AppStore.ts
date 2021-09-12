import {NextRouter} from "next/router";
import {IntlShape} from "react-intl";


export class AppStore {

    constructor(public router: NextRouter) {
        this.init()
    }

    init() {
        // const messages = localeMessagesMap[globalLocale]
        // const cache = createIntlCache()


    }

    get locale(){
        return this.router.locale
    }

    get messages(){
        return {}
    }


    animated = {
        sections: {
            about: false,
            product: false,
            integrations: false,
            clients: false,
            contacUs: false,
            languages: false,
        }
    }

}
