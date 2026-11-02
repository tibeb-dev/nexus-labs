import { IdProps } from "@/types/custom-dt";
import Image from "next/image";
import portfolioData from '@/data/portfolio-data';

const PortfolioDetailsThumb = ({ id }: IdProps) => {
    const portfolio = portfolioData.find((item) => item.id == id);

    // If portfolio is not found or has no banner, render the main image as banner
    if (!portfolio) {
        return null;
    }

    const hasBanner = !!portfolio.banner;
    const hasSmallImages = !!(portfolio.small1 || portfolio.small2 || portfolio.small3);

    // If no banner and no small images, show the main portfolio image as full-width
    if (!hasBanner && !hasSmallImages) {
        return (
            <div className="tp-pd-2-area pb-110">
                <div className="container-fluid p-0">
                    <div className="tp-pd-2-banner mb-20 scale-up-img">
                        <Image
                            style={{ width: "100%", height: "auto", objectFit: "contain" }}
                            width={1905}
                            height={950}
                            src={portfolio.image}
                            alt={portfolio.title}
                            data-speed=".8"
                            className="scale-up"
                        />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="tp-pd-2-area pb-110">
            <div className="container-fluid p-0">
                <div className="row gx-20">
                    {/* banner */}
                    {hasBanner && (
                    <div className="col-lg-12">
                        <div className="tp-pd-2-banner mb-20 scale-up-img">
                            <Image
                                style={{ width: "100%", height: "auto", objectFit: "contain" }}
                                width={1905}
                                height={950}
                                src={portfolio.banner || ""}
                                alt="Portfolio banner"
                                data-speed=".8"
                                className="scale-up"
                            />
                        </div>
                    </div>
                    )}

                    {/* thumbs */}
                    {portfolio.small1 && (
                    <div className="col-lg-4 col-md-6">
                        <div className="tp-pd-2-thumb-item scale-up-img mb-20">
                            <Image
                                style={{ width: "100%", height: "auto", objectFit: "contain" }}
                                width={943}
                                height={600}
                                src={portfolio.small1}
                                alt="Portfolio thumb 1"
                                data-speed=".8"
                                className="scale-up"
                            />
                        </div>
                    </div>
                    )}
                    {portfolio.small2 && (
                    <div className="col-lg-4 col-md-6">
                        <div className="tp-pd-2-thumb-item scale-up-img mb-20">
                            <Image
                                style={{ width: "100%", height: "auto", objectFit: "contain" }}
                                width={943}
                                height={600}
                                src={portfolio.small2}
                                alt="Portfolio thumb 2"
                                data-speed=".8"
                                className="scale-up"
                            />
                        </div>
                    </div>
                    )}
                    {portfolio.small3 && (
                    <div className="col-lg-4 col-md-6">
                        <div className="tp-pd-2-thumb-item scale-up-img mb-20">
                            <Image
                                style={{ width: "100%", height: "auto", objectFit: "contain" }}
                                width={943}
                                height={600}
                                src={portfolio.small3}
                                alt="Portfolio thumb 3"
                                data-speed=".8"
                                className="scale-up"
                            />
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PortfolioDetailsThumb;
