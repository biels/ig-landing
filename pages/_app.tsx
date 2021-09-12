import Link from 'next/link'
import "../styles/globals.scss";
import {appStore} from "../utils/utils";

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} store={appStore}/>;
}

export default MyApp;
