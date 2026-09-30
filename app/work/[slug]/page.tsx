import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ProjectDetailView } from "@/components/work/ProjectDetailView";
import { PROJECT_DETAILS_BY_SLUG } from "@/lib/project-details-data";

interface ProjectDetailPageProps {
  readonly params: {
    readonly slug: string;
  };
}

export function generateStaticParams() {
  return Object.keys(PROJECT_DETAILS_BY_SLUG).map((slug) => ({
    slug,
  }));
}

export function generateMetadata({
  params,
}: ProjectDetailPageProps): Metadata {
  const project = PROJECT_DETAILS_BY_SLUG[params.slug];
  if (!project) {
    return {
      title: "Project Not Found — Guru Mahesh Kandukuri",
    };
  }

  const fullTitle = `${project.displayName} — ${project.subtitle} | Guru Mahesh Kandukuri`;

  return {
    title: fullTitle,
    description: project.intro.lead,
    openGraph: {
      title: fullTitle,
      description: project.intro.lead,
      type: "article",
      siteName: "Guru Mahesh Kandukuri",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: project.intro.lead,
    },
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = PROJECT_DETAILS_BY_SLUG[params.slug];

  if (!project) {
    notFound();
  }

  return (
    <div id="top" className="min-h-dvh bg-background text-foreground">
      <Header />
      <main id="main-content">
        <ProjectDetailView project={project} />
      </main>
      <Footer />
    </div>
  );
}
