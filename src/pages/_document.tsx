import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <meta name="description" content="online cinema service" />
        <link rel="icon" href="/images/favicon.svg" />
      </Head>
      <body>
        <div id="tooltip-root" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
