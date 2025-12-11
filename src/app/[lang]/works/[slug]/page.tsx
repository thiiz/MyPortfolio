import { SectionTitle } from "@/components/section_title";
import { getGitHubProjects, getProjectBySlug } from "@/services/github";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaExternalLinkAlt, FaGithub, FaStar } from "react-icons/fa";

export async function generateMetadata({
  params,
}: {
  params: { lang: string; slug: string };
}): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export async function generateStaticParams() {
  const projects = await getGitHubProjects();

  const params = [];
  const langs = ['en', 'pt', 'es'];

  for (const lang of langs) {
    for (const project of projects) {
      params.push({
        lang,
        slug: project.slug,
      });
    }
  }

  return params;
}

export default async function ProjectPage({
  params,
}: {
  params: { lang: string; slug: string };
}) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link
        href={`/${params.lang}/works`}
        className="inline-flex items-center gap-2 mb-8 text-gray-400 hover:text-primary transition-colors"
      >
        ← Back to Projects
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div>
          <SectionTitle>{project.title}</SectionTitle>

          <p className="text-gray-300 text-lg mt-6 mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="inline-block bg-gray-800 rounded-full px-4 py-2 text-sm font-semibold text-gray-200 border border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mb-8">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-black transition-colors"
              >
                <FaExternalLinkAlt />
                Live Demo
              </Link>
            )}
            <Link
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white transition-colors"
            >
              <FaGithub />
              View Code
            </Link>
          </div>

          {project.stars > 0 && (
            <div className="flex items-center gap-2 text-yellow-500">
              <FaStar />
              <span className="text-gray-300">{project.stars} stars</span>
            </div>
          )}
        </div>

        <div className="relative aspect-video rounded-lg overflow-hidden border-2 border-gray-700">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {project.liveUrl && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Live Preview</h2>
          <div className="relative w-full bg-gray-900 rounded-lg overflow-hidden border-2 border-gray-700">
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 mx-4 px-3 py-1 bg-gray-900 rounded text-sm text-gray-400 truncate">
                {project.liveUrl}
              </div>
            </div>
            <iframe
              src={project.liveUrl}
              className="w-full h-[600px] md:h-[700px] lg:h-[800px]"
              title={`${project.title} preview`}
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
            />
          </div>
        </div>
      )}
    </div>
  );
}
