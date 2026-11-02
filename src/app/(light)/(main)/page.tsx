import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/site";
import portfolioData from "@/data/portfolio-data";

export const metadata = pageMetadata("Software & AI Development in Addis Ababa, Ethiopia", "Nexus Technology designs and builds websites, mobile apps, and AI-powered systems. Based in Addis Ababa, building for businesses everywhere.", "/");

const services = [
    { title: "Web & mobile development", text: "Fast, intuitive websites and applications. Built around your users, ready to grow with your business.", detail: "Web platforms / Mobile apps / E-commerce" },
    { title: "AI & business automation", text: "Make the repetitive work automatic. Connect your tools, simplify workflows, and put AI to practical use.", detail: "AI integration / SaaS products / Workflows" },
    { title: "Product strategy & design", text: "Turn a promising idea into a clear, useful experience. From the first sketch to the details that make it feel right.", detail: "UI/UX design / Prototyping / Product thinking" },
];
const projects = [500, 501, 502].flatMap(id => {
    const project = portfolioData.find(item => item.id === id);
    return project ? [project] : [];
});

export default function HomePage() {
    return (
        <main id="main-content">
            <section className="nx-hero nx-container" aria-labelledby="hero-title">
                <div className="nx-hero-copy">
                    <span className="nx-eyebrow"><span className="nx-dot" /> TECHNOLOGY WITH PURPOSE</span>
                    <h1 id="hero-title">Big ideas.<br />Thoughtfully<br /><em>built.</em></h1>
                    <p>We turn complex challenges into simple digital experiences. Websites, apps, and intelligent systems that move your business forward.</p>
                    <div className="nx-hero-actions"><Link className="nx-button" href="/contact-us">Start a conversation <span aria-hidden="true">↗</span></Link><a className="nx-text-link" href="#work">Explore our work <span aria-hidden="true">↓</span></a></div>
                </div>
                <div className="nx-visual" aria-hidden="true">
                    <div className="nx-visual-top"><span>THE NEXUS CONNECTION</span><span>01 — ∞</span></div>
                    <svg viewBox="0 0 480 480" className="nx-symbol" fill="none"><defs><linearGradient id="nexus-ink" x1="70" y1="70" x2="420" y2="410" gradientUnits="userSpaceOnUse"><stop stopColor="#7379d5" /><stop offset="1" stopColor="#30377e" /></linearGradient></defs><circle cx="240" cy="240" r="198" stroke="#d4d5e2" strokeDasharray="2 7" /><path d="M112 355V125h65l126 230h65V125" stroke="url(#nexus-ink)" strokeWidth="48" strokeLinejoin="round" /><path d="M112 355L368 125" stroke="#f5f5f1" strokeWidth="2" /><circle cx="112" cy="355" r="8" fill="#c7ed9c" /><circle cx="368" cy="125" r="8" fill="#c7ed9c" /></svg>
                    <div className="nx-visual-bottom"><span>Ideas meet execution.</span><span className="nx-cross">+</span></div>
                </div>
                <div className="nx-hero-note"><span>Built in Ethiopia. Made for everywhere.</span><span>Strategy. Design. Development.</span></div>
            </section>
            <section id="services" className="nx-section nx-container" aria-labelledby="services-title">
                <div className="nx-section-heading"><span className="nx-eyebrow">01 / WHAT WE DO</span><div><h2 id="services-title">The right technology.<br />Without the complexity.</h2><p>One team, from the first conversation to the final product.</p></div></div>
                <div className="nx-services">{services.map((service, index) => <article key={service.title} className="nx-service"><span className="nx-service-number">0{index + 1}</span><h3>{service.title}</h3><p>{service.text}</p><span className="nx-service-detail">{service.detail}</span></article>)}</div>
            </section>
            <section id="work" className="nx-work nx-section" aria-labelledby="work-title"><div className="nx-container">
                <div className="nx-work-heading"><div><span className="nx-eyebrow">02 / SELECTED WORK</span><h2 id="work-title">Ideas out in the world.</h2></div><Link href="/projects" className="nx-text-link">All projects <span aria-hidden="true">↗</span></Link></div>
                <div className="nx-projects">{projects.map((project, index) => <Link href={`/portfolio-details/${project.id}`} key={project.id} className="nx-project"><div className={`nx-project-image nx-project-image-${index}`}><Image src={project.image} alt={`${project.title} project preview`} width={780} height={620} sizes="(max-width: 700px) 100vw, 33vw" /><span className="nx-project-arrow" aria-hidden="true">↗</span></div><div className="nx-project-caption"><h3>{project.title}</h3><span>{project.platform}</span></div></Link>)}</div>
            </div></section>
            <section id="about" className="nx-section nx-container nx-about" aria-labelledby="about-title"><div><span className="nx-eyebrow">03 / THE WAY WE WORK</span><h2 id="about-title">Small details.<br />Shared ambition.</h2><p>We’re Nexus Technology, a software team based in Addis Ababa. We bring design and engineering together to help businesses build what comes next.</p><Link href="/contact-us" className="nx-text-link">Meet your next technology partner <span aria-hidden="true">↗</span></Link></div><div className="nx-process">{[
                ["Understand first", "We start with your business, your users, and the problem worth solving."],
                ["Build with intention", "Clear design, thoughtful engineering, and room for your feedback along the way."],
                ["Move forward together", "Launch with confidence, then keep improving as your business evolves."],
            ].map(([title, description], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></section>
        </main>
    );
}
