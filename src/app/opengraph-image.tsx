import { ImageResponse } from "next/og";
export const alt = "Nexus Technology — Software, thoughtfully built.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
    return new ImageResponse(<div style={{ width: "100%", height: "100%", background: "#f8f8f4", color: "#20232d", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "70px 80px", fontFamily: "sans-serif" }}><div style={{ display: "flex", color: "#383f8f", fontSize: 30 }}>nexus / TECHNOLOGY</div><div style={{ display: "flex", flexDirection: "column", fontSize: 85, lineHeight: 1.05, letterSpacing: -4 }}><span>Big ideas.</span><span>Thoughtfully built.</span></div><div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #dedfd9", paddingTop: 25, fontSize: 20 }}><span>Web · Mobile · AI & automation</span><span>Addis Ababa, Ethiopia</span></div></div>, size);
}
