import Section from '../components/Section';
import FadeIn from '../components/FadeIn';
import Card from '../components/Card';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { projects } from '../data/content';

function ProjectsSection() {
  return (
    <Section
      id="projects"
      title="Projects"
      description="A curated set of projects across AI, machine learning, and strategy-oriented execution."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <FadeIn key={project.title} delay={0.07 * index}>
            <Card className="group flex h-full flex-col">
              <ImagePlaceholder
                label={project.imagePlaceholder}
                ratio="aspect-[16/10]"
                className="mb-5"
              />

              <h3 className="font-display text-xl text-zinc-100 transition-colors duration-200 group-hover:text-[var(--accent)]">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.04)] px-2.5 py-1 text-xs text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-4 text-sm">
                <a href={project.github} className="text-zinc-300 transition-colors hover:text-[var(--accent)]">
                  GitHub
                </a>
                <a href={project.demo} className="text-zinc-300 transition-colors hover:text-[var(--accent)]">
                  Demo
                </a>
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

export default ProjectsSection;
