import { ImageResponse } from "next/og";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";
export default function AppleIcon() { return new ImageResponse(<div style={{ width: "100%", height: "100%", background: "#383f8f", color: "#f8f8f4", display: "flex", justifyContent: "center", alignItems: "center", fontSize: 130, fontFamily: "sans-serif", fontWeight: 700 }}>N</div>, size); }
