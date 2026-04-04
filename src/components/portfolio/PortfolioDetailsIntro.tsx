import { IdProps } from '@/types/custom-dt';
import SmartLink from '../common/SmartLink';
import { ButtonArrowIcon } from '@/svg';
import portfolioData from '@/data/portfolio-data';

const PortfolioDetailsIntro = ({ id }: IdProps) => {
    const portfolio = portfolioData.find((item) => item.id == id)

    return (
        <div className="tp-pd-2-ptb tp-pd-3-style pt-175 pb-55">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tp-pd-2-top pb-45 jump-anim text-center">
                            <h3 className="tp-pd-3-title tp-ff-sequel-bold-head text-uppercase lh-1 tp_fade_anim" data-delay=".5">{portfolio?.title || "Olivia Rivers"}</h3>
                        </div>
                    </div>
                    <div className="col-xl-10">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="tp-pd-2-bottom-item mb-20">
                                    <span>Role</span>
                                    <h6>{portfolio?.role || "Full-Stack Development, AI Integration"}</h6>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="tp-pd-2-bottom-item mb-20">
                                    <span>Platform / Industry</span>
                                    <h6>{portfolio?.platform || "AI-Powered SaaS Platform"}</h6>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="tp-pd-2-bottom-item mb-20">
                                    <span>Timeline</span>
                                    <h6>{portfolio?.timeline || "6–8 Weeks"}</h6>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="tp-pd-2-bottom-item mb-20">
                                    <span>Team</span>
                                    <h6>{portfolio?.team || "Nexus Labs"}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2">
                        <div className="text-xl-end">
                            <SmartLink className="tp-btn tp-btn-border" href={portfolio?.liveSite || "#"}>
                                <span>
                                    <span className="text-1">Visit Site</span>
                                    <span className="text-2">Visit Site</span>
                                </span>
                                <i>
                                    <ButtonArrowIcon />
                                    <ButtonArrowIcon />
                                </i>
                            </SmartLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioDetailsIntro;