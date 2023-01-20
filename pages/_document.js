import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <meta
          name="description"
          content="Full-stack developer, JavaScript enthousiast, bug squasher based in Athens, Greece."
        />

        {/* Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Stavros Melidoniotis - Web Developer"
        />
        <meta
          property="og:description"
          content="Full-stack developer, JavaScript enthousiast, bug squasher based in Athens, Greece."
        />
        <meta property="og:image" content="/social-share.png" />
        <meta property="og:url" content="https://melidon.dev/" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="Stavros Melidoniotis - Web Developer"
        />
        <meta
          property="twitter:description"
          content="Full-stack developer, JavaScript enthousiast, bug squasher based in Athens, Greece."
        />
        <meta property="twitter:image" content="/social-share.png" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
