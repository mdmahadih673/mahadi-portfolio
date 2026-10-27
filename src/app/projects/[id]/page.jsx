import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react';
import { projectsData } from '@/data/projects';

export function generateStaticParams() {
  return projectsData.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projectsData.find((item) => item.id === id);

  return {
    title: project ? `${project.title} — Mahadi Hasan` : 'Project — Mahadi Hasan',
    description: project?.overview,
  };
}

export default async function ProjectDetailsPage({ params }) {
  const { id } = await params;
  const project = projectsData.find((item) => item.id === id);

  if (!project) notFound();

  return (
    <main className="min-h-screen bg-black px-6 pb-24 pt-32 text-[#FFFBD4] md:px-12 md:pt-40">
      <article className="mx-auto max-w-6xl">
        <Link href="/#works" className="mb-10 inline-flex items-center gap-2 font-mono-code text-xs uppercase tracking-widest text-[#A8A8A8] transition-colors hover:text-[#FFFBD4]">
          <ArrowLeft className="h-4 w-4" /> Back to projects
        </Link>

        <div className="mb-10 flex flex-wrap items-end justify-between gap-5 border-b border-[#262626] pb-8">
          <div>
            <p className="mb-3 font-mono-code text-xs uppercase tracking-widest text-[#A90E02]">{project.category} · {project.year}</p>
            <h1 className="font-display text-5xl uppercase leading-[0.9] sm:text-7xl md:text-8xl">{project.title}</h1>
            <p className="mt-4 font-editorial text-base text-[#A8A8A8] md:text-lg">{project.tagline}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#A90E02] px-5 py-3 font-mono-code text-xs font-bold uppercase tracking-wider hover:bg-[#850b02]">
              <ExternalLink className="h-4 w-4" /> Live project <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-[#444] px-5 py-3 font-mono-code text-xs uppercase tracking-wider hover:border-[#FFFBD4]">
              GitHub repository <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="relative mb-14 aspect-[16/9] w-full overflow-hidden border border-[#262626] bg-[#0D0D0D]">
          <Image src={project.image} alt={`${project.title} project screenshot`} fill priority sizes="(max-width: 1024px) 100vw, 1152px" className="object-cover object-top" />
        </div>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.8fr)]">
          <div className="space-y-12">
            <section>
              <h2 className="mb-4 font-display text-3xl uppercase">Project overview</h2>
              <p className="max-w-3xl font-editorial text-base leading-relaxed text-[#A8A8A8]">{project.overview}</p>
            </section>
            <section>
              <h2 className="mb-5 font-display text-3xl uppercase">Challenges</h2>
              <ul className="space-y-3">
                {project.challenges.map((item) => <li key={item} className="border-l-2 border-[#A90E02] bg-[#0D0D0D] px-4 py-3 font-editorial text-sm leading-relaxed text-[#C8C8C8]">{item}</li>)}
              </ul>
            </section>
            <section>
              <h2 className="mb-5 font-display text-3xl uppercase">Future improvements</h2>
              <ul className="space-y-3">
                {project.futurePlans.map((item) => <li key={item} className="border-l-2 border-[#A90E02] bg-[#0D0D0D] px-4 py-3 font-editorial text-sm leading-relaxed text-[#C8C8C8]">{item}</li>)}
              </ul>
            </section>
          </div>

          <aside className="h-fit border border-[#262626] bg-[#0D0D0D] p-6">
            <h2 className="mb-5 font-display text-2xl uppercase">Technology stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => <span key={tech} className="border border-[#303030] bg-black px-3 py-2 font-mono-code text-[11px] uppercase tracking-wide text-[#FFFBD4]">{tech}</span>)}
            </div>
            <h3 className="mb-4 mt-8 font-display text-2xl uppercase">Key features</h3>
            <ul className="space-y-3">
              {project.features.map((feature) => <li key={feature} className="font-editorial text-sm leading-relaxed text-[#A8A8A8]">• {feature}</li>)}
            </ul>
          </aside>
        </div>
      </article>
    </main>
  );
}
