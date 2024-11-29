import Link from "next/link";

const PaymentGatewayNewFooter = () => {
  return (
    <>
      <div className="pay-gw-footer-area pay-gw-gg-bg pt-120 pb-40">
        <div className="pay-gw-cta">
          <div className="container">
            <div className="row  justify-content-center">
              <div className="col-xl-6 col-lg-8">
                <div className="text-center">
                  <h2 className="pay-gw-title text-white fs-42 ff-risk-pri">
                    Start now boost sales & revenue using with Quiety
                  </h2>
                  <Link
                    href="/request-demo"
                    className="btn bg-warning text-white rounded-3 mt-30"
                  >
                    View More Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aiart-footer pay-gw-style pt-120 position-relative z-1">
          <div className="aiart-footer-top">
            <div className="container">
              <div className="bgc-white p-4 pt-40 rounded-3">
                <div className="row justify-content-between">
                  <div className="col-xl-3 col-lg-5">
                    <div className="footer-single-col">
                      <img src="/it_company/logo.png" alt="" />
                      <p className="flh-24 mt-20 mb-30">
                        Interactively disseminate client-based functionalities
                        and resource-leveling Competently network equity
                        invested web-readiness{" "}
                      </p>
                      <ul className="list-unstyled list-inline footer-social-list d-flex mb-0">
                        <li className="list-inline-item">
                          <Link
                            href="/payment-gateway-new"
                            className="pay-bg-two risk-color"
                          >
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link
                            href="/payment-gateway-new"
                            className="pay-bg-two risk-color"
                          >
                            <i className="fab fa-instagram"></i>
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link
                            href="/payment-gateway-new"
                            className="pay-bg-two risk-color"
                          >
                            <i className="fab fa-dribbble"></i>
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link
                            href="/payment-gateway-new"
                            className="pay-bg-two risk-color"
                          >
                            <i className="fab fa-github"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-5">
                    <div className="footer-single-col pl-40">
                      <h3 className="it-company-color">Pages</h3>
                      <ul className="list-unstyled footer-nav-list mb-lg-0">
                        <li>
                          <Link
                            href="/payment-gateway-new"
                            className="text-decoration-none"
                          >
                            Pricing
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/payment-gateway-new"
                            className="text-decoration-none"
                          >
                            Blog
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/payment-gateway-new"
                            className="text-decoration-none"
                          >
                            Blog Details
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/payment-gateway-new"
                            className="text-decoration-none"
                          >
                            Contact
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/payment-gateway-new"
                            className="text-decoration-none"
                          >
                            Career Single
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/payment-gateway-new"
                            className="text-decoration-none"
                          >
                            Services Single
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-5">
                    <div className="footer-single-col pr-20">
                      <h3 className="it-company-color">Contact</h3>
                      <ul className="list-unstyled footer-nav-list mb-lg-0">
                        <li>
                          <Link
                            href="/payment-gateway-new"
                            className="text-decoration-none"
                          >
                            hello@themetags.com
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/payment-gateway-new"
                            className="text-decoration-none"
                          >
                            123, Western Road, MelbourneNew York City, USA
                          </Link>
                        </li>
                        <li className="mt-30">
                          <Link href="/payment-gateway-new" className="">
                            View Google Map
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-5">
                    <div className="footer-single-col">
                      <h3 className="it-company-color">Newsletter</h3>
                      <p className="flh-24">
                        Sign up for our latest news &amp; articles. We won’t
                        give you spam mails.
                      </p>
                      <form className="ca-two-newsletter-form mt-40 position-relative">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your email"
                          name="email"
                          required=""
                          autoComplete="off"
                        />
                        <button
                          onClick={(e) => e.preventDefault()}
                          className="btn"
                        ></button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="rm-footer-bottom text-center pt-40">
                  <p className="it-company-color fs-16 ff-risk-pri flh-24 mb-0">
                    Copyright @2023 All Rights Reserved by
                    <Link
                      className="pay-gw-color fw-700"
                      href="/payment-gateway-new"
                    >
                      ThemeTags
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentGatewayNewFooter;
