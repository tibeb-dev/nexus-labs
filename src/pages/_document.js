import Document, { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

const APP_NAME =
  "Nexus - Software As a Service";
const APP_DESCRIPTION =
  "Nexus - SaaS company.";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/logo-nexuss.png" />
          <meta property="og:title" content={APP_NAME} />

          <meta property="og:description" content={APP_DESCRIPTION} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
