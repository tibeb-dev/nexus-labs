"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NexusHeader() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    return (
        <header className="nx-header">
            <a className="nx-skip" href="#main-content">Skip to content</a>
            <div className="nx-container nx-nav">
                <Link href="/" aria-label="Nexus Technology home" className="nx-logo">
                    <svg viewBox="0 0 48 48" width="36" height="36" aria-hidden="true" fill="none"><path d="M7 40V8h9l16 32h9V8" stroke="currentColor" strokeWidth="6" strokeLinejoin="round"/><path d="M7 40L41 8" stroke="currentColor" strokeWidth="1"/></svg><span>nexus<span className="nx-logo-subtitle">TECHNOLOGY</span></span>
                </Link>
                <button className="nx-menu-toggle" aria-expanded={open} aria-controls="nexus-navigation" onClick={() => setOpen(!open)}>{open ? "Close −" : "Menu +"}</button>
                <nav id="nexus-navigation" aria-label="Main navigation" className={open ? "nx-navigation is-open" : "nx-navigation"}>
                    <a href="/#services" onClick={() => setOpen(false)}>What we do</a>
                    <Link href="/projects" aria-current={pathname === "/projects" ? "page" : undefined} onClick={() => setOpen(false)}>Our work</Link>
                    <a href="/#about" onClick={() => setOpen(false)}>About us</a>
                    <Link href="/contact-us" onClick={() => setOpen(false)} aria-current={pathname === "/contact-us" ? "page" : undefined} className="nx-nav-contact">Let’s talk <span aria-hidden="true">↗</span></Link>
                </nav>
            </div>
        </header>
    );
}
