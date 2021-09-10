import "../styles/globals.scss";
import {AppStore} from "../AppStore";

let appStore = new AppStore()
function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} store={appStore}/>;
}

export default MyApp;
