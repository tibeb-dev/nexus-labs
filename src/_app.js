import "@assets/fonts/fontawesome-all.min.css";
import "@assets/scss/main.scss";
import "@assets/scss/custom.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

// Modal Video styles
import "react-modal-video/scss/modal-video.scss";

import { Inter, Montserrat } from "next/font/google";
import Script from "next/script";

// Load Google Fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

function MyApp({ Component, pageProps }) {
  return (
    <div className={`${inter.variable} ${montserrat.variable}`}>
      {/* Bootstrap Script */}
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"
      />

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
