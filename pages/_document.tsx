import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
        <Script
          strategy="beforeInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
      )}
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
        <Script
          id='google-analytics'
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
            `,
          }}
        />
      )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}