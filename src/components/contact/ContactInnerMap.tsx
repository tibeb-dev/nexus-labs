import Image from "next/image";

const ContactInnerMap = () => {
    return (
        <div className="tp-contact-map-ptb p-relative">
            <div className="tp-contact-map-wrapper p-relative">
                <div className="tp-contact-map-icon-box">
                    <div className="tp-contact-map-icon">
                        <span><Image width={24} height={24} src="/assets/img/contact/map-icon.svg" alt="map-icon" /></span>
                    </div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.6799560663376!2d38.81593531048799!3d9.00156779102138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b851cec7299ad%3A0x81ed6e558aa09df0!2sNexus%20Technology!5e0!3m2!1sen!2set!4v1775335619539!5m2!1sen!2set" width="100%" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default ContactInnerMap;