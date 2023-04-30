import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';

function Document() {
  return (
    <Html>
      <Head>
      <Script src="https://apis.google.com/js/platform.js"></Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZQVP8JFRHJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-ZQVP8JFRHJ');
          `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document;
