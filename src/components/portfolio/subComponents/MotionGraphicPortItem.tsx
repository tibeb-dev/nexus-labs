import SmartLink from '@/components/common/SmartLink';
import { portfolioDT } from '@/types/portfolio-dt';
import Image from 'next/image';
import Link from 'next/link';

interface portfolioPropsDT {
    item: portfolioDT;
    theme?: "dark" | "light";
}

const PortfolioTags = ({ tags, theme }: { tags: string[], theme?: "dark" | "light" }) => (
    <ul>
        {tags.map((tag, index) => (
            <li key={index}>
                <Link href="#" className={theme === "dark" ? "text-white" : ""}>{tag}</Link>
            </li>
        ))}
    </ul>
);

const MotionGraphicPortItem: React.FC<portfolioPropsDT> = ({ item, theme }) => {
    return (
        <div className="mg-portfolio-item anim-zoomin-wrap mb-55">
            <div
                className="mg-portfolio-thumb anim-zoomin not-hide-cursor"
                data-cursor="View<br/>Demo"
            >
                <SmartLink className="cursor-hide" href={`/portfolio-details/${item.id}`}>
                    <Image style={{ width: "100%", height: "auto" }} width={940} height={618} className="w-100" src={item.image} alt={item.title} />
                </SmartLink>
            </div>

            <div className="mg-portfolio-content cs-portfolio-content d-flex align-items-center flex-wrap justify-content-between">
                <h3 className={`cs-portfolio-title tp-title-anim fix mr-20 tp-ff-sequel-semi-bold ${theme === "dark" ? "text-white" : ""}`}>
                    <SmartLink href={`/portfolio-details/${item.id}`} className={`tp-title-text ${theme === "dark" ? "text-white" : ""}`}>
                        {item.title}
                    </SmartLink>
                </h3>

                <div className="cs-portfolio-tag">
                    <PortfolioTags tags={item.tags ?? []} theme={theme} />
                </div>
            </div>
        </div>
    );
};

export default MotionGraphicPortItem;