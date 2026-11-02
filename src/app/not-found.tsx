import Link from "next/link";
import NexusShell from "@/components/nexus/NexusShell";
export default function NotFound() { return <NexusShell><main id="main-content" className="nx-container nx-page-intro"><span className="nx-eyebrow">404 / PAGE NOT FOUND</span><h1>A little off course.</h1><p>This page doesn’t exist. Explore our work or head back to the homepage.</p><Link href="/" className="nx-button" style={{ marginTop: 30 }}>Back to home <span aria-hidden="true">↗</span></Link></main></NexusShell>; }
