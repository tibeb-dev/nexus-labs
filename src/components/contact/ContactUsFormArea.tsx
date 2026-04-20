import Image from "next/image";
import Link from "next/link";

const ContactUsFormArea = () => {
    return (
        <div id="contact" className="tp-contact-area pt-160 pb-110">
            <div className="container">
                <div className="tp-contact-bg">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="tp-contact-info mb-30">
                                <div className="mb-20">
                                    <Link className="tp-contact-tel" href="tel:+251974819263">Call Us: +251 974 819 263</Link>
                                    <br />
                                    <Link className="tp-contact-tel" href="https://wa.me/251909740768" target="_blank" style={{ fontSize: '18px', display: 'inline-block', marginTop: '10px' }}>WhatsApp: +251 909 740 768</Link>
                                </div>
                                <div className="mb-30">
                                    <Link className="tp-contact-mail" style={{ fontSize: '20px' }} href="mailto:info@nexustechnologyet.com">info@nexustechnologyet.com</Link>
                                </div>
                                <div className="tp-contact-address mb-30">
                                    <h4>Address</h4>
                                    <Link href="https://www.google.com/maps/search/Nexus+Technology+Addis+Ababa" className="common-underline" target="_blank">Yerer Bole,<br /> Addis Ababa, Ethiopia</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsFormArea;