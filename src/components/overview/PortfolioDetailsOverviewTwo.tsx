import portfolioData from "@/data/portfolio-data";
import { IdProps } from "@/types/custom-dt";

const PortfolioDetailsOverviewTwo = ({ id }: IdProps) => {
    const portfolio = portfolioData.find((item) => item.id == id);
    return (
        <div className="tp-pd-2-overview-ptb pb-25">
            <div className="container">
                <div className="tp-about-border pt-70">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="tp-pd-2-overview-heading tp_fade_anim" data-delay=".3">
                                <h3 className="tp-pd-2-overview-title reveal-text">Brand overview</h3>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6">
                        <div className="tp-pd-2-overview-wrap mr-100">
                            <p>{portfolio?.brandOverview || "Brand overview and description goes here. It provides a quick summary of the service."}</p>
                            
                            {portfolio?.keyFeatures && portfolio.keyFeatures.length > 0 && (
                                <ul className="mt-30">
                                    {portfolio.keyFeatures.map((feature, idx) => (
                                        <li key={idx}>{feature}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioDetailsOverviewTwo;