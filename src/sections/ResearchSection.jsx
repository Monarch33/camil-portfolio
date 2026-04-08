import Section from '../components/Section';
import FadeIn from '../components/FadeIn';
import Card from '../components/Card';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { researchIntro, researchProjects } from '../data/content';

function ResearchSection() {
  return (
    <Section id="research" title="Research" description={researchIntro}>
      <div className="grid gap-6 md:grid-cols-2">
        {researchProjects.map((project, index) => (
          <FadeIn key={project.title} delay={0.07 * index}>
            <Card className="flex h-full flex-col">
              <ImagePlaceholder label={project.imagePlaceholder} ratio="aspect-[16/10]" className="mb-5" />
              <h3 className="font-display text-xl text-zinc-100">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.04)] px-2.5 py-1 text-xs text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                {project.links.map((link) => (
                  <a key={link.label} href={link.href} className="text-zinc-300 transition-colors hover:text-[var(--accent)]">
                    {link.label}
                  </a>
                ))}
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

export default ResearchSection;
