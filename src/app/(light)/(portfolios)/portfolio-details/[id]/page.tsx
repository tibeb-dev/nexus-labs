import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import StructuredData from "@/components/nexus/StructuredData";
import { absoluteUrl, pageMetadata, projects } from "@/lib/site";

type Props = { params: Promise<{ id: string }> };
function getProject(id: string) { const project = projects.find(item => String(item.id) === id); if (!project) notFound(); return project; }
export function generateStaticParams() { return projects.map(project => ({ id: String(project.id) })); }
export async function generateMetadata({ params }: Props) { const project = getProject((await params).id); return pageMetadata(`${project.title} — ${project.platform}`, project.brandOverview || `${project.title}, a project by Nexus Technology.`, `/portfolio-details/${project.id}`); }
export default async function ProjectPage({ params }: Props) {
    const project = getProject((await params).id);
    const related = projects.filter(item => item.id !== project.id).slice(0, 2);
    return <main id="main-content" className="nx-container">
        <StructuredData data={{ "@context": "https://schema.org", "@graph": [
            { "@type": "CreativeWork", name: project.title, description: project.brandOverview, url: absoluteUrl(`/portfolio-details/${project.id}`), image: absoluteUrl(project.image), creator: { "@id": `${absoluteUrl("/")}#organization` } },
            { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") }, { "@type": "ListItem", position: 2, name: "Our work", item: absoluteUrl("/projects") }, { "@type": "ListItem", position: 3, name: project.title, item: absoluteUrl(`/portfolio-details/${project.id}`) }] },
        ] }} />
        <section className="nx-page-intro nx-case-intro"><nav aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true"> / </span><Link href="/projects">Our work</Link><span aria-hidden="true"> / </span><span aria-current="page">{project.title}</span></nav><span className="nx-eyebrow">{project.platform}</span><h1>{project.title}</h1><p>{project.brandOverview}</p></section>
        <div className="nx-case-cover"><Image src={project.banner || project.image} alt={`${project.title} product overview`} width={1600} height={900} sizes="(max-width: 700px) 100vw, 90vw" priority /></div>
        <section className="nx-section nx-case-overview"><div><span className="nx-eyebrow">THE PROJECT</span><h2>Built around<br />a clear purpose.</h2><p>{project.brandOverview}</p>{project.liveSite?.startsWith("https://") && <a href={project.liveSite} target="_blank" rel="noopener noreferrer" className="nx-text-link">Visit live website <span aria-hidden="true">↗</span><span className="nx-sr-only"> (opens in a new tab)</span></a>}</div><div><dl className="nx-project-facts"><div><dt>Our role</dt><dd>{project.role}</dd></div><div><dt>Services</dt><dd>{project.services}</dd></div>{project.timeline && <div><dt>Project timeline</dt><dd>{project.timeline}</dd></div>}</dl><h3>Key features</h3><ul className="nx-feature-list">{project.keyFeatures?.map(feature => <li key={feature}>{feature}</li>)}</ul></div></section>
        <section className="nx-case-gallery" aria-label={`${project.title} design details`}>{[project.small1, project.small2, project.small3].filter((image): image is string => Boolean(image)).map((image, index) => <Image key={image} src={image} alt={`${project.title} interface detail ${index + 1}`} width={960} height={720} sizes="(max-width: 700px) 100vw, 33vw" />)}</section>
        <section className="nx-section"><div className="nx-work-heading"><h2>Keep exploring.</h2><Link className="nx-text-link" href="/projects">All projects <span aria-hidden="true">↗</span></Link></div><div className="nx-projects nx-projects-all">{related.map(item => <Link className="nx-project" key={item.id} href={`/portfolio-details/${item.id}`}><div className="nx-project-image"><Image src={item.image} alt={`${item.title} project preview`} width={780} height={620} sizes="(max-width: 700px) 100vw, 50vw" /></div><div className="nx-project-caption"><h3>{item.title}</h3><span>{item.platform}</span></div></Link>)}</div></section>
    </main>;
}
