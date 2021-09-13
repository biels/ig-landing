import Document, {DocumentContext} from 'next/document'
import Link from 'next/link'
import {ServerStyleSheet} from 'styled-components'
import {Html, Head, Main, NextScript} from 'next/document'

interface Props {
    locale: string;
    lang: string;
    nonce: string;
}

export default class MyDocument extends Document<Props> {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                })
            const {req} = ctx;
            const initialProps = await Document.getInitialProps(ctx)
            const locale = ctx.locale;
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
                locale,
                lang: locale ? locale.split('-')[0] : undefined,
                nonce: (req as any).nonce,
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        let scriptEl;
        if (this.props.locale) {
            scriptEl = (
                <script
                    nonce={this.props.nonce}
                    dangerouslySetInnerHTML={{
                        __html: `window.LOCALE="${this.props.locale}"`,
                    }}
                />
            );
        }
        return (
            <Html className="" lang={this.props.lang}>
                <Head>
                    <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'/>

                </Head>
                <body>
                {scriptEl}
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }

}
