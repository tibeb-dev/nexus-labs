import Link from "next/link";

const AiImageCompanion = () => {
  return (
    <>
      <div className="aiart-companion-area position-relative z-1">
        <img
          src="/aiart_home/shape/compa.png"
          alt=""
          className="shape-1 position-absolute z--1"
        />
        <div className="container">
          <div className="bgc-white p-5 rounded-3 position-relative z-1">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-6">
                <h6 className="aiart-sub-title text-primary fs-18 fw-600 d-inline-flex align-items-center gap-3 mb-20">
                  <span>
                    <svg
                      width="23"
                      height="24"
                      viewBox="0 0 23 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 20.75L21 1.75"
                        stroke="#175cff"
                        strokeWidth="3"
                      ></path>
                      <path
                        d="M11 22.25L21 12.25"
                        stroke="#175cff"
                        strokeWidth="3"
                      ></path>
                    </svg>
                  </span>
                  Writebot AI Art
                </h6>
                <h2 className="aiart-title text-black fs-48 ff-risk-pri mb-20">
                  AI Artistic <span className="aiart-gd-text">Companion</span>
                </h2>
                <p className="text-black fw-600">
                  Sing an AI art generator opens up a World of creative
                  possibilities illustrationspeed. Whether you're an artist
                  looking.
                </p>
                <Link href="/login" className="btn aiart-gd-btn rounded-5">
                  {" "}
                  <span className="aiart-gd-text fs-14 fw-800">
                    Start Free Trial
                  </span>
                </Link>
              </div>
              <div className="col-lg-5">
                <img
                  src="/aiart_home/companion.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiImageCompanion;
