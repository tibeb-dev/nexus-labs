"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import Link from "next/link";

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const configured = /^G-[A-Z0-9]+$/.test(measurementId || "");
const preferenceKey = "nexus-analytics-consent";
type AnalyticsWindow = Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };

export function AnalyticsSettings() {
    return configured ? <button className="nx-privacy-settings" onClick={() => window.dispatchEvent(new Event("nexus:analytics-settings"))}>Analytics preferences</button> : <p>Optional analytics is currently disabled.</p>;
}

export default function Analytics() {
    const pathname = usePathname();
    const [consent, setConsent] = useState<string | null>(null);
    const [showChoice, setShowChoice] = useState(false);
    const [ready, setReady] = useState(false);
    const previousPage = useRef<string | null>(null);
    useEffect(() => {
        if (!configured) return;
        let saved: string | null = null;
        try { saved = localStorage.getItem(preferenceKey); } catch { /* Private browsers can block storage. */ }
        setConsent(saved);
        setShowChoice(saved !== "accepted" && saved !== "declined");
        const open = () => setShowChoice(true);
        window.addEventListener("nexus:analytics-settings", open);
        return () => window.removeEventListener("nexus:analytics-settings", open);
    }, []);
    function choose(value: "accepted" | "declined") {
        try { localStorage.setItem(preferenceKey, value); } catch { /* The choice still applies for this visit. */ }
        (window as unknown as Record<string, unknown>)[`ga-disable-${measurementId}`] = value !== "accepted";
        (window as AnalyticsWindow).gtag?.("consent", "update", { analytics_storage: value === "accepted" ? "granted" : "denied", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
        if (value === "declined") {
            previousPage.current = null;
            // Remove first-party GA cookies at host and parent-domain scopes.
            for (const cookie of document.cookie.split(";")) {
                const name = cookie.split("=")[0].trim();
                if (name === "_ga" || name.startsWith("_ga_")) {
                    document.cookie = `${name}=; Max-Age=0; path=/`;
                    const parts = location.hostname.split(".");
                    for (let i = 0; i < parts.length - 1; i++) document.cookie = `${name}=; Max-Age=0; path=/; domain=.${parts.slice(i).join(".")}`;
                }
            }
        }
        setConsent(value); setShowChoice(false);
    }
    useEffect(() => {
        if (!configured || !ready || consent !== "accepted") return;
        const analytics = window as AnalyticsWindow;
        const page = location.origin + pathname;
        if (previousPage.current === page) return;
        let referrer = previousPage.current || "";
        if (!referrer && document.referrer) { try { const url = new URL(document.referrer); referrer = url.origin + url.pathname; } catch { /* Ignore malformed referrers. */ } }
        analytics.gtag?.("event", "page_view", { page_location: page, page_title: document.title, page_referrer: referrer });
        previousPage.current = page;
    }, [pathname, ready, consent]);
    useEffect(() => {
        if (!configured || !ready || consent !== "accepted") return;
        const onClick = (event: MouseEvent) => {
            const link = event.target instanceof Element ? event.target.closest("a") : null;
            if (!link) return;
            const href = link.getAttribute("href") || "";
            const method = href.startsWith("mailto:") ? "email" : href.startsWith("tel:") ? "phone" : href.startsWith("https://wa.me/") ? "whatsapp" : null;
            if (method) (window as AnalyticsWindow).gtag?.("event", "contact_click", { contact_method: method });
        };
        document.addEventListener("click", onClick);
        return () => document.removeEventListener("click", onClick);
    }, [ready, consent]);
    if (!configured) return null;
    return <>
        {consent === "accepted" && <Script id="nexus-google-analytics" src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" onReady={() => {
            const analytics = window as AnalyticsWindow;
            analytics.dataLayer = analytics.dataLayer || [];
            analytics.gtag = analytics.gtag || function () { analytics.dataLayer!.push(arguments); };
            (window as unknown as Record<string, unknown>)[`ga-disable-${measurementId}`] = false;
            analytics.gtag("consent", "default", { analytics_storage: "granted", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
            analytics.gtag("js", new Date());
            analytics.gtag("config", measurementId, { send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false });
            setReady(true);
        }} />}
        {showChoice && <aside className="nx-consent" aria-label="Analytics preferences"><p>Help us understand what’s useful. With your permission, we use Google Analytics to measure visits and contact-link clicks. <Link href="/privacy">Read our privacy notice.</Link></p><div className="nx-consent-actions"><button onClick={() => choose("declined")}>No thanks</button><button onClick={() => choose("accepted")}>Allow analytics</button></div></aside>}
    </>;
}
