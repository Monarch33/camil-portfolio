import Section from '../components/Section';
import FadeIn from '../components/FadeIn';
import Card from '../components/Card';
import { researchInterests } from '../data/content';

function ResearchSection() {
  return (
    <Section
      id="research"
      title="Research / Interests"
      description="Themes where AI, machine learning, economics, and business strategy intersect."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {researchInterests.map((interest, index) => (
          <FadeIn key={interest.title} delay={0.08 * index}>
            <Card>
              <h3 className="font-display text-lg text-zinc-100">{interest.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{interest.detail}</p>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

export default ResearchSection;
