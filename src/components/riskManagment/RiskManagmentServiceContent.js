import Link from "next/link";

const RiskManagmentServiceContent = () => {
  return (
    <>
      <div className="rm-service-content-area pt-60 pb-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="position-relative">
                <h6 className="risk-sub-text fs-16 ff-risk-pri fw-700 mb-20">
                  Explore How Can I Help You
                </h6>
                <h2 className="risk-title risk-color fs-42 ff-risk-pri flh-56 fw-800 mb-20">
                  Connect Across Business Areas to
                  <span className="risk-gd-text">Prioritize Risk</span>
                </h2>
                <p className="risk-color-two ff-dmsans fs-16 flh-28 mb-0 fch-50">
                  Our software was purpose built to be interconnected across
                  enterprise governance areas and our clients’ core systems –
                  serving as a single source of truth for your Organizations.
                  Identify high-risk zones for management, and finance.
                  LogicManager facilitates inter-departmental collaboration,
                  offering analytical insights that paint a vivid risk landscape
                  you can allocate your resources strategically.
                </p>
                <Link
                  href="/services"
                  className="btn risk-outline-btn mt-40 risk-color ff-risk-pri fs-14 fw-700"
                >
                  Start Free Trial
                </Link>
                <img
                  src="/risk_managment/shape/service_content.png"
                  alt=""
                  className="s-one position-absolute"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src="/risk_managment/service_content.png"
                alt=""
                className="risk-sc-img img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RiskManagmentServiceContent;
