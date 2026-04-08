import Section from '../components/Section';
import FadeIn from '../components/FadeIn';
import Card from '../components/Card';
import { projects } from '../data/content';

function ProjectsSection() {
  return (
    <Section
      id="projects"
      title="Projects"
      description="A selection of projects across AI, machine learning, and strategy-oriented execution."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <FadeIn key={project.title} delay={0.07 * index}>
            <Card className="flex h-full flex-col">
              <h3 className="font-display text-xl text-zinc-900">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-300 bg-zinc-100 px-2.5 py-1 text-xs text-zinc-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-3 text-sm">
                <a href={project.github} className="text-zinc-800 underline-offset-4 hover:underline">
                  GitHub
                </a>
                <a href={project.demo} className="text-zinc-800 underline-offset-4 hover:underline">
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
