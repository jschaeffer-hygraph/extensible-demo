import Document, { Html, Head, Main, NextScript } from 'next/document'
import { VWOScript } from 'vwo-smartcode-nextjs';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <VWOScript accountId="1118466" />
          {/* Google tag (gtag.js) */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-VVQ7079CWY"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-VVQ7079CWY');
          </script>
          <link
            rel="stylesheet"
            href="https://unpkg.com/@tailwindcss/typography@0.2.x/dist/typography.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
