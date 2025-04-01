import Document, { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

const APP_NAME =
  "Nexus | SaaS & Software Solutions";
const APP_DESCRIPTION =
  "Nexus Technology: Expert Software, Web, and App Development Outsourcing from Ethiopia for Global Clients.";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Favicon */}
          <link rel="icon" href="/logo-nexuss.png" />

          {/* Google Fonts */}
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Inter:wght@400;600&display=swap"
            rel="stylesheet"
          />

          {/* Devicons (if needed) */}
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
          />

          {/* Meta Tags for SEO */}
          <meta name="description" content={APP_DESCRIPTION} />
          <meta property="og:title" content={APP_NAME} />
          <meta property="og:description" content={APP_DESCRIPTION} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://nexustechnologyet.com/" />
          <meta property="og:image" content="/logo/l1.png" />

          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={APP_NAME} />
          <meta name="twitter:description" content={APP_DESCRIPTION} />
          <meta name="twitter:image" content="/logo/l1.png" />

          {/* Viewport for Mobile Optimization */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
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
