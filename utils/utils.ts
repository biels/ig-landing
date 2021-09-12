import {createIntl, createIntlCache} from '@formatjs/intl';
import { useRouter } from 'next/router'
import {AppStore} from "../AppStore";
import React, {useContext} from "react";



export let AppStoreContext = React.createContext(null as AppStore)
export let useStore = () => useContext(AppStoreContext)




/**
 *
 * @param text Example: 'My name is {name}'
 * @param values Example: {name: 'aa'}
 */
// export let f = (id, text?, values?) => {
//     return 'A'
//     // return intl.formatMessage({
//     //         id: id,
//     //         defaultMessage: text, // Message should be a string literal
//     //     },
//     //     values // Values should be an object literal, but not necessarily every value inside
//     // )
// }
