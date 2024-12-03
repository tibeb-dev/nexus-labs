import Document, { Html, Head, Main, NextScript } from "next/document";

const APP_NAME =
  "Quiety - Next Js Creative SAAS Technology & IT Solutions React Template";
const APP_DESCRIPTION =
  "Quiety creative Saas, software technology, Saas agency & business react template. It is best and famous software company and Saas website template.";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.png" />
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
