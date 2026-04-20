type ShopAgencyTestiItemProps = {
    id: number;
    comment: string;
    name: string;
    brand: string;
    role: string;
    initials?: string;
    img?: string;
};

const ShopAgencyTestiItem = ({ id, comment, name, role, initials, img }: ShopAgencyTestiItemProps) => {
    return (
        <div key={id} className="swiper-slide">
            <div className="shop-testimonial-item text-center">
                <h4 className="shop-testimonial-comment tp-ff-jost fw-500 mb-40" style={{ fontSize: "clamp(18px, 2vw, 24px)", lineHeight: 1.5, color: "#555", fontStyle: "italic" }}>
                    &ldquo;{comment}&rdquo;
                </h4>
                <div className="shop-testimonial-brand-name mt-20 d-flex flex-column align-items-center gap-3">
                    {img ? (
                        <img 
                            src={img}
                            alt={name}
                            style={{
                                width: "52px",
                                height: "52px",
                                borderRadius: "50%",
                                objectFit: "cover",
                                flexShrink: 0,
                            }}
                        />
                    ) : (
                        <div style={{
                            width: "52px",
                            height: "52px",
                            borderRadius: "50%",
                            background: "var(--tp-theme-primary)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#fff",
                            fontWeight: 700,
                            fontSize: "16px",
                            letterSpacing: "0.05em",
                            flexShrink: 0,
                        }}>
                            {initials}
                        </div>
                    )}
                    <div>
                        <b className="fw-700 d-block" style={{ fontSize: "18px", letterSpacing: "-0.02em" }}>{name}</b>
                        <span className="d-block" style={{ fontSize: "14px", opacity: 0.55, marginTop: "4px" }}>{role}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopAgencyTestiItem;

