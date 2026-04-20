"use client";

import { useEffect } from "react";

const CalendlyBooking = () => {
    useEffect(() => {
        // Load Calendly script
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup script if component unmounts
            const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
            if (existingScript) {
                document.body.removeChild(existingScript);
            }
        };
    }, []);

    return (
        <div id="schedule-consultation" className="calendly-booking-section">
            <div className="calendly-header mb-40">
                <h3 className="tp-section-title-3 mb-20">Schedule a Consultation</h3>
                <p className="mb-30" style={{ color: "#666", fontSize: "16px", lineHeight: "1.6" }}>
                    Book a free consultation with our team to discuss your project requirements and discover how we can help transform your business.
                </p>
                
                <div className="contact-info-integrated mb-40">
                    <div className="contact-details">
                        <div className="mb-15">
                            <a href="tel:+251974819263" className="d-flex align-items-center" style={{ color: "#666", textDecoration: "none" }}>
                                <span className="me-2">📞</span>
                                <span style={{ marginLeft: "10px" }}>+251 974 819 263</span>
                            </a>
                        </div>
                        <div className="mb-15">
                            <a href="https://wa.me/251909740768" target="_blank" className="d-flex align-items-center" style={{ color: "#666", textDecoration: "none" }}>
                                <span className="me-2">💬</span>
                                <span style={{ marginLeft: "10px" }}>WhatsApp: +251 909 740 768</span>
                            </a>
                        </div>
                        <div className="mb-15">
                            <a href="mailto:info@nexustechnologyet.com" className="d-flex align-items-center" style={{ color: "#666", textDecoration: "none" }}>
                                <span className="me-2">✉️</span>
                                <span style={{ marginLeft: "10px" }}>info@nexustechnologyet.com</span>
                            </a>
                        </div>
                        <div className="mb-15">
                            <a href="https://www.google.com/maps/search/Nexus+Technology+Addis+Ababa" target="_blank" className="d-flex align-items-center" style={{ color: "#666", textDecoration: "none" }}>
                                <span className="me-2">📍</span>
                                <span style={{ marginLeft: "10px" }}>Yerer Bole, Addis Ababa, Ethiopia</span>
                            </a>
                        </div>
                    </div>
                </div>
            
            <div 
                className="calendly-inline-widget"
                data-url="https://calendly.com/nexustechnology/45min?back=1&month=2026-04"
                style={{
                    minWidth: '320px',
                    height: '700px',
                    borderRadius: '10px',
                    overflow: 'hidden'
                }}
            ></div>
            </div>

            <style jsx>{`
                .calendly-booking-section {
                    background: #f8f9fa;
                    padding: 60px 40px;
                    border-radius: 15px;
                    margin-top: 30px;
                }

                .calendly-header {
                    text-align: center;
                }

                .calendly-inline-widget {
                    background: white;
                    border-radius: 10px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                }

                @media (max-width: 768px) {
                    .calendly-booking-section {
                        padding: 40px 20px;
                    }
                    
                    .calendly-inline-widget {
                        height: '600px';
                    }
                }
            `}</style>
        </div>
    );
};

export default CalendlyBooking;
