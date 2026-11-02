import ProjectGrid from "@/components/nexus/ProjectGrid";
import StructuredData from "@/components/nexus/StructuredData";
import { absoluteUrl, pageMetadata, projects } from "@/lib/site";

export const metadata = pageMetadata("Our Work — Software & AI Projects", "Explore websites, AI platforms, fintech products, and e-commerce experiences built by Nexus Technology in Addis Ababa, Ethiopia.", "/projects");
export default function ProjectsPage() {
    return <main id="main-content" className="nx-container">
        <StructuredData data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Nexus Technology projects", url: absoluteUrl("/projects"), mainEntity: { "@type": "ItemList", itemListElement: projects.map((project, index) => ({ "@type": "ListItem", position: index + 1, name: project.title, url: absoluteUrl(`/portfolio-details/${project.id}`) })) } }} />
        <section className="nx-page-intro"><span className="nx-eyebrow">IDEAS INTO REALITY</span><h1>Good thinking.<br /><em>Real-world work.</em></h1><p>A closer look at the platforms, products, and digital experiences we build. Different challenges. The same thoughtful approach.</p></section>
        <section className="nx-work-list" aria-label="Our projects"><ProjectGrid projects={projects} /></section>
    </main>;
}
