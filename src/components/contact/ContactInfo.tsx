"use client";

const ContactInfo = () => {
    const contactItems = [
        {
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
            ),
            label: "Call Us",
            value: "+251 974 819 263",
            href: "tel:+251974819263",
        },
        {
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
            ),
            label: "WhatsApp",
            value: "+251 909 740 768",
            href: "https://wa.me/251909740768",
        },
        {
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                </svg>
            ),
            label: "Email Us",
            value: "info@nexustechnologyet.com",
            href: "mailto:info@nexustechnologyet.com",
        },
        {
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
            ),
            label: "Visit Us",
            value: "Yerer Bole, Addis Ababa, Ethiopia",
            href: "https://www.google.com/maps/search/Nexus+Technology+Addis+Ababa",
        },
    ];

    return (
        <section id="contact" className="tp-contact-info-section pt-80 pb-60">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="text-center mb-60">
                            <h3 className="tp-section-title tp-ff-sequel-semi-bold">
                                Let&apos;s Connect
                            </h3>
                            <p style={{ color: "#666", fontSize: "16px", maxWidth: "500px", margin: "0 auto" }}>
                                Reach out to us through any of these channels. We&apos;re always happy to hear from you.
                            </p>
                        </div>

                        <div className="row g-4">
                            {contactItems.map((item, index) => (
                                <div className="col-md-6 col-lg-3" key={index}>
                                    <a
                                        href={item.href}
                                        target={item.href.startsWith("http") ? "_blank" : undefined}
                                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                        className="tp-contact-card d-block text-center h-100"
                                        style={{
                                            textDecoration: "none",
                                            color: "inherit",
                                            border: "1px solid #eee",
                                            borderRadius: "12px",
                                            transition: "all 0.3s ease",
                                        }}
                                    >
                                        <div
                                            className="tp-contact-icon mb-20 mx-auto"
                                            style={{
                                                width: "60px",
                                                height: "60px",
                                                borderRadius: "50%",
                                                backgroundColor: "var(--tp-theme-primary)",
                                                color: "#fff",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            {item.icon}
                                        </div>
                                        <h5
                                            className="tp-ff-sequel-semi-bold mb-10"
                                            style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.05em" }}
                                        >
                                            {item.label}
                                        </h5>
                                        <p
                                            style={{
                                                color: "#333",
                                                fontSize: "15px",
                                                margin: 0,
                                                wordBreak: "break-word",
                                            }}
                                        >
                                            {item.value}
                                        </p>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .tp-contact-card {
                    padding: 45px 25px;
                }
                .tp-contact-card:hover {
                    border-color: var(--tp-theme-primary) !important;
                    transform: translateY(-4px);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
                }
                .tp-contact-card:hover .tp-contact-icon {
                    transform: scale(1.1);
                }
                .tp-contact-icon {
                    transition: transform 0.3s ease;
                }
                @media (max-width: 768px) {
                    .tp-contact-info-section {
                        padding-top: 40px !important;
                        padding-bottom: 40px !important;
                    }
                    .tp-contact-card {
                        padding: 35px 20px;
                    }
                }
            `}</style>
        </section>
    );
};

export default ContactInfo;
