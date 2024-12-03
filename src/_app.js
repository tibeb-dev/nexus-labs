// import '@assets/css/bootstrap.min.css';
import "@assets/fonts/fontawesome-all.min.css";
import "@assets/scss/main.scss";
import "@assets/scss/custom.css";

// Import Swiper style
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay"
import Script from "next/script";

//Modal Video
import "react-modal-video/scss/modal-video.scss";

import { Fragment } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"
      ></Script>

      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
