"use client";
import { BehanceIcon, CroseIcon, DribbleIcon, InstragramIcon, YoutubeIcon } from '@/svg';
import BrandLogo from '@/components/common/BrandLogo';
import useGlobalContext from '@/hooks/useContext';
import MobileMenus from '../layout/MobileMenus';
import Link from 'next/link';

const OffCanvasPanel = () => {
    const { isPrimaryOffcanvasOpen, togglePrimaryOffcanvas } = useGlobalContext();

    return (
        <>
            <div className="tp-offcanvas-area">
                <div className={`tp-offcanvas ${isPrimaryOffcanvasOpen ? "opened" : ""}`}>
                    <div className="tp-offcanvas-top d-flex align-items-center justify-content-between">
                        <div className="tp-offcanvas-logo">
                            <BrandLogo />
                        </div>
                        <div className="tp-offcanvas-close-btn">
                            <button onClick={togglePrimaryOffcanvas} className="close-btn">
                                <CroseIcon />
                            </button>
                        </div>
                    </div>
                    <div className="tp-offcanvas-content">
                        <h3 className="tp-offcanvas-title">Welcome to Nexus Technology</h3>
                        <p>Scalable software & AI systems for modern businesses.</p>
                    </div>
                    <div className="tp-offcanvas-menu">
                        <nav>
                            <MobileMenus />
                        </nav>
                    </div>
                    <div className="tp-offcanvas-contact">
                        <h3 className="tp-offcanvas-title sm">Information</h3>
                        <ul>
                            <li><Link href="tel:+251974819263">+251 974 81 92 63</Link></li>
                            <li><Link href="mailto:info@nexustechnologyet.com">info@nexustechnologyet.com</Link></li>
                            <li><Link href="/contact-us">Nexus Technology, Addis Ababa, Ethiopia</Link></li>
                        </ul>
                    </div>
                    <div className="tp-offcanvas-social">
                        <h3 className="tp-offcanvas-title sm">Follow Us</h3>
                        <ul>
                            <li>
                                <Link href="https://web.facebook.com/profile.php?id=61593705504286" target="_blank" rel="noopener noreferrer"><InstragramIcon /></Link>
                            </li>
                            <li>
                                <Link href="https://www.linkedin.com/company/nexus-ethiopia-tech" target="_blank" rel="noopener noreferrer"><DribbleIcon /></Link>
                            </li>
                            <li>
                                <Link href="https://www.instagram.com/nexustechnologyet/" target="_blank" rel="noopener noreferrer"><BehanceIcon /></Link>
                            </li>
                            <li>
                                <Link href="https://www.tiktok.com/@nexus_technology0" target="_blank" rel="noopener noreferrer"><YoutubeIcon /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* overlay */}
            <div
                onClick={togglePrimaryOffcanvas}
                className={`body-overlay ${isPrimaryOffcanvasOpen ? "apply" : ""}`}
            />
        </>
    );
};

export default OffCanvasPanel;