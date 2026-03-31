"use client";
import OffCanvasPanelTwo from "@/components/offcanvus/OffCanvasPanelTwo";
import OffCanvasPanel from "@/components/offcanvus/OffCanvasPanel";
import BrandLogo from "../../components/common/BrandLogo";
import HeaderMenu from "@/components/layout/HeaderMenu";
import useStickyHeader from "@/hooks/useStickyHeader";
import { PageHeaderProps } from "@/types/header-dt";
import useGlobalContext from "@/hooks/useContext";
import { SearchIcon } from "@/svg/SearchIcons";
import Image from "next/image";
import SmartLink from "@/components/common/SmartLink";
import { ButtonArrowIcon } from "@/svg";


const PageHeader = ({ hideMainMenu = false, sideColumnClass = "col-xl-3 col-6", useSecondaryMenu = false,
    styleVariant = "default",
    logoType = "brand",
}: PageHeaderProps) => {
    const { toggleSearch, togglePrimaryOffcanvas, toggleSecondaryOffcanvas } = useGlobalContext();
    const isSticky = useStickyHeader(20);

    // decide which toggle to use for the action button
    const handleMenuToggle = useSecondaryMenu ? toggleSecondaryOffcanvas : togglePrimaryOffcanvas;

    return (
        <>
            <header>
                {/* -- header area start -- */}
                <div className={`tp-header-area tp-header-spacing ${styleVariant === "cs" ? "cs-header-style" : ""} header-transparent`}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className={sideColumnClass}>
                                <div className="tp-header-logo">
                                    {logoType === "brand" ? (
                                        <BrandLogo />
                                    ) : (
                                        <Image
                                            width={140}
                                            height={34}
                                            src="/assets/img/logo/logo-white.png"
                                            alt="Logo White"
                                        />
                                    )}
                                </div>
                            </div>
                            <div
                                className={`col-xl-6 ${hideMainMenu ? "d-none" : "d-none d-xl-block"
                                    }`}
                            >
                                <div className="tp-main-menu d-flex justify-content-center">
                                    <nav className="tp-mobile-menu-active">
                                        <HeaderMenu />
                                    </nav>
                                </div>
                            </div>
                            {/* Actions */}
                            <div className={sideColumnClass}>
                                <div className="tp-header-right d-flex justify-content-end align-items-center">
                                    <SmartLink className="tp-btn" href="/contact-us">
                                        <span>
                                            <span className="text-1">Book Appointment</span>
                                            <span className="text-2">Book Appointment</span>
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
                {/* -- header area end -- */}
                {/* -- header area end -- */}
            </header>

            {/* ---------------- Offcanvas Panels ---------------- */}
            {/* Default: render both */}
            {!useSecondaryMenu && (
                <>
                    <OffCanvasPanel />
                    <OffCanvasPanelTwo />
                </>
            )}

            {/* If useSecondaryMenu: render only secondary */}
            {useSecondaryMenu && <OffCanvasPanelTwo />}

        </>
    );
};

export default PageHeader;