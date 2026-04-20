import { ArrowIconEight, ArrowIconFive } from "@/svg/ArrowIcons";
import SmartLink from "../common/SmartLink";

const processData = [
    {
        num: "01.",
        title: "Discovery",
        description: "We understand your business, users, and goals to define the right solution."
    },
    {
        num: "02.",
        title: "System Design",
        description: "We design scalable architectures and user-focused experiences."
    },
    {
        num: "03.",
        title: "Development",
        description: "We build high-performance systems using modern technologies."
    },
    {
        num: "04.",
        title: "Deployment & Scaling",
        description: "We launch, optimize, and scale your platform for growth."
    }
];

const MotionGraphicAward = () => {
    return (
        <div className="cs-awards-area pt-130 pb-160">
            <div className="container-fluid container-1886">
                {/* Header */}
                <div className="row align-items-end">
                    <div className="col-lg-3">
                        <div className="mg-awards-subtitle-wrap mb-80 tp_fade_anim" data-delay=".3">
                            <div className="tp-service-subtitle-wrap tp-about-border pt-25 justify-content-start mb-50">
                                <span className="tp-section-subtitle tp-ff-sequel-roman">Process</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mg-awards-title-wrap ml-20 mb-20">
                            <h2 className="mg-awards-title tp-ff-sequel-bold-head lh-1 reveal-text fs-100" style={{ fontSize: "110px" }}>How We Work</h2>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div
                            className="mg-awards-title mb-80 d-flex justify-content-lg-end tp_fade_anim"
                            data-delay=".5"
                            data-fade-from="bottom"
                            data-ease="bounce"
                        >
                            <div className="tp-btn-group">
                                <SmartLink className="tp-btn-circle" style={{ backgroundColor: "transparent", color: "var(--tp-common-black)", border: "1px solid var(--tp-border-1)" }} href="/contact-us">
                                    <ArrowIconFive />
                                </SmartLink>
                                <SmartLink className="tp-btn z-index-1" style={{ backgroundColor: "transparent", color: "var(--tp-common-black)", borderTop: "1px solid var(--tp-border-1)", borderBottom: "1px solid var(--tp-border-1)", padding: "0 20px" }} href="/contact-us">
                                    Get in touch
                                </SmartLink>
                                <SmartLink className="tp-btn-circle" style={{ backgroundColor: "transparent", color: "var(--tp-common-black)", border: "1px solid var(--tp-border-1)" }} href="/contact-us">
                                    <ArrowIconFive />
                                </SmartLink>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Awards list */}
                <div className="row">
                    <div className="col-xxl-9 offset-xxl-3">
                        <div className="mg-awards-item-wrap ml-20 mp-awards-item-wrap pt-30 cs-awards-item-wrap fix">
                            {processData.map((step, index) => (
                                <div key={index} className="right-item-animetion tp_fade_anim" data-delay={`.${index + 7}`} data-fade-from="bottom">
                                    <div className="mp-awards-item">
                                        <div className="row w-100 align-items-center m-0">
                                            <div className="col-12 col-md-5 col-lg-5 p-0">
                                                <div className="mp-awards-left mb-20 mb-md-0 d-flex align-items-center">
                                                    <span className="count d-flex align-items-center flex-shrink-0" style={{ width: "auto", marginRight: "20px", fontSize: "22px" }}>
                                                        <ArrowIconEight />
                                                        {step.num}
                                                    </span>
                                                    <span className="flex-grow-1" style={{ fontWeight: 700, fontSize: "22px", color: "var(--tp-common-black)" }}>{step.title}</span>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-7 col-lg-7 p-0 pl-md-4">
                                                <div className="mp-awards-right mb-20 mb-md-0 text-start pe-4">
                                                    <span style={{ fontSize: "16px", textTransform: "none", fontWeight: 400, opacity: 0.8, lineHeight: "1.6" }}>{step.description}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MotionGraphicAward;