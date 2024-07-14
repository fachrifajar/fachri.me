import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className="h-full antialiased" lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/ff.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/ff.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/ff.png" />
        <link rel="manifest" href="/favicon/ff.png" />
        <link rel="shortcut icon" href="/favicon/ff.png" />
      </Head>
      <body className="flex h-full flex-col bg-zinc-50 dark:bg-black text-zinc-700 dark:text-zinc-300">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
