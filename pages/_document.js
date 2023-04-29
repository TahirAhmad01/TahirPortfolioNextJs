import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  const theme = typeof window !== 'undefined' && localStorage.getItem('theme');

  return (
    <Html className={`${theme === 'light' ? 'light' : 'dark'} scroll-smooth`}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" sizes="16x16" href="/favicon.ico" />
        <link rel="shortcut icon" sizes="32x32" href="/favicon.ico" />
        <link rel="shortcut icon" sizes="192x192" href="/favicon.ico" />
        <link rel="shortcut icon" sizes="512x512" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="apple-touch-icon"
          href="/favicon.ico"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="author" content="Qubartech Tahir Ahmad" />
        <meta
          name="description"
          content="Hello! I Am Tahir Ahmad. I am web developer....."
        />
        <meta
          name="keywords"
          content="Qubartech, tech, tech company, technology, Tahir Ahamd, portfolio"
        />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <script
          src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"
          async
          
        ></script>
        <script
          src="https://kit.fontawesome.com/f70f4c2534.js"
          async
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
