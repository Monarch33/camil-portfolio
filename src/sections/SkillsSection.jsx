import Section from '../components/Section';
import FadeIn from '../components/FadeIn';
import Card from '../components/Card';
import { languages, skills, technicalExpertiseCards } from '../data/content';

function SkillsSection() {
  return (
    <Section
      id="skills"
      title="Technical Expertise"
      description="Core skills across AI, software engineering, and applied mathematics."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {technicalExpertiseCards.map((card, index) => (
          <FadeIn key={card.title} delay={0.06 * index}>
            <Card>
              <h3 className="font-display text-lg text-zinc-100">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{card.description}</p>
            </Card>
          </FadeIn>
        ))}
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {Object.entries(skills).map(([category, items], index) => (
          <FadeIn key={category} delay={0.08 * index}>
            <Card>
              <h3 className="font-display text-lg text-zinc-100">{category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.04)] px-2.5 py-1 text-xs text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.2} className="mt-8">
        <Card hover={false}>
          <h3 className="font-display text-lg text-zinc-100">Languages</h3>
          <div className="mt-5 space-y-4">
            {languages.map((language) => (
              <div key={language.name}>
                <div className="mb-1 flex items-center justify-between text-sm text-zinc-300">
                  <span>{language.name}</span>
                  <span>{language.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-[rgba(255,255,255,0.08)]">
                  <div
                    className="h-2 rounded-full bg-[rgba(131,166,255,0.75)]"
                    style={{ width: `${language.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </FadeIn>
    </Section>
  );
}

export default SkillsSection;
