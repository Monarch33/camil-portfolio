import Section from '../components/Section';
import FadeIn from '../components/FadeIn';
import Card from '../components/Card';
import { experience } from '../data/content';

function ExperienceSection() {
  return (
    <Section
      id="experience"
      title="Experience"
      description="Roles and engagements that shaped my approach to building and problem solving."
    >
      <div className="space-y-4">
        {experience.map((item, index) => (
          <FadeIn key={`${item.role}-${item.period}`} delay={0.08 * index}>
            <Card className="md:p-7">
              <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
                <div>
                  <h3 className="font-display text-xl text-zinc-900">{item.role}</h3>
                  <p className="mt-1 text-sm text-zinc-600">{item.organization}</p>
                </div>
                <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">{item.period}</p>
              </div>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-600">{item.description}</p>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

export default ExperienceSection;
