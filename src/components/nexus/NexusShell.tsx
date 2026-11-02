import NexusHeader from "@/components/nexus/NexusHeader";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/data/footer-data";
import "./nexus.scss";

export default function NexusShell({ children }: { children: React.ReactNode }) {
    return (
        <div className="nx-site">
            <NexusHeader />
            {children}
            <footer className="nx-footer">
                <div className="nx-container">
                    <div className="nx-footer-top">
                        <div><span className="nx-eyebrow">YOUR NEXT CHAPTER</span><h2>Have something<br />in mind?</h2></div>
                        <div><Link href="/contact-us" className="nx-button nx-button-light">Let’s build it together <span aria-hidden="true">↗</span></Link><a className="nx-email" href="mailto:info@nexustechnologyet.com">info@nexustechnologyet.com</a></div>
                    </div>
                    <div className="nx-footer-bottom"><span>© {new Date().getFullYear()} Nexus Technology · <Link href="/privacy">Privacy</Link></span><span>Addis Ababa, Ethiopia · Working everywhere</span><div>{SOCIAL_LINKS.slice(0, 3).map(social => <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer">{social.name}<span className="nx-sr-only"> (opens in a new tab)</span></a>)}</div></div>
                </div>
            </footer>
        </div>
    );
}
