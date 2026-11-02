"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { portfolioDT } from "@/types/portfolio-dt";

const filters = [{ id: "all", name: "All work" }, { id: "ai", name: "AI & automation" }, { id: "fintech", name: "Fintech" }, { id: "ecommerce", name: "E-commerce" }, { id: "company", name: "Company websites" }, { id: "other", name: "Other platforms" }];
export default function ProjectGrid({ projects }: { projects: portfolioDT[] }) {
    const [active, setActive] = useState("all");
    const available = filters.filter(filter => filter.id === "all" || projects.some(project => project.filterCategory?.includes(filter.id)));
    const visible = projects.filter(project => active === "all" || project.filterCategory?.includes(active));
    return <>
        <div className="nx-filters" role="group" aria-label="Filter projects">{available.map(filter => <button key={filter.id} onClick={() => setActive(filter.id)} aria-pressed={active === filter.id}>{filter.name}</button>)}</div>
        <p className="nx-result-count" aria-live="polite">{visible.length} {visible.length === 1 ? "project" : "projects"} · {available.find(filter => filter.id === active)?.name}</p>
        <div className="nx-projects nx-projects-all">{visible.map(project => <Link href={`/portfolio-details/${project.id}`} key={project.id} className="nx-project"><div className="nx-project-image"><Image src={project.image} alt={`${project.title} website and product design`} width={780} height={620} sizes="(max-width: 700px) 100vw, 50vw" /><span className="nx-project-arrow" aria-hidden="true">↗</span></div><div className="nx-project-caption"><h2>{project.title}</h2><span>{project.platform}</span></div><p>{project.brandOverview}</p></Link>)}</div>
    </>;
}
