import Document, { Html, Head, Main, NextScript } from "next/document";

const APP_NAME =
  "Nexus, SaaS.";
const APP_DESCRIPTION =
  "";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/logo-nexuss.png" />
          <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" /> 
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
