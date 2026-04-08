import Section from '../components/Section';
import FadeIn from '../components/FadeIn';
import Card from '../components/Card';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { workExperience } from '../data/content';

function ExperienceSection() {
  return (
    <Section
      id="experience"
      title="Work Experience"
      description="Roles across research, engineering, and product execution."
    >
      <div className="space-y-5">
        {workExperience.map((item, index) => (
          <FadeIn key={`${item.organization}-${item.period}`} delay={0.07 * index}>
            <Card className="md:p-7">
              <div className="flex flex-col gap-5 md:flex-row md:items-start">
                <div className="w-20 shrink-0">
                  <ImagePlaceholder label={item.logoPlaceholder} ratio="aspect-square" className="rounded-full" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
                    <div>
                      <h3 className="font-display text-xl text-zinc-100">{item.organization}</h3>
                      <p className="mt-1 text-sm text-[var(--accent)]">{item.role}</p>
                    </div>
                    <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">{item.period}</p>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-zinc-400">{item.description}</p>

                  {item.highlights.length > 0 ? (
                    <ul className="mt-4 space-y-2">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-sm text-zinc-400">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-500" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {item.links.length > 0 ? (
                    <div className="mt-4 flex flex-wrap gap-3 text-xs">
                      {item.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          className="rounded-full border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.03)] px-3 py-1.5 text-zinc-300 transition-colors hover:text-[var(--accent)]"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

export default ExperienceSection;
