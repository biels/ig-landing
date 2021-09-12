import Document, { DocumentContext } from 'next/document'
import Link from 'next/link'
import { ServerStyleSheet } from 'styled-components'
import { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
        <Html className="">
          <Head>
              <title>MedicalOne RIS</title>
              <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'/>

          </Head>
          <body>
          <Main />
          <NextScript />
          </body>
        </Html>
    )
  }

}
