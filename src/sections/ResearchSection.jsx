import Section from '../components/Section';
import FadeIn from '../components/FadeIn';
import { researchInterests } from '../data/content';

function ResearchSection() {
  return (
    <Section
      id="research"
      title="Research / Interests"
      description="Themes that connect AI, machine learning, economics, and business thinking."
    >
      <FadeIn>
        <div className="flex flex-wrap gap-3">
          {researchInterests.map((interest, index) => (
            <span
              key={interest}
              className="rounded-full border border-zinc-300 bg-zinc-100/80 px-4 py-2 text-sm text-zinc-700 transition-colors duration-300 hover:bg-zinc-200"
              style={{ transitionDelay: `${index * 30}ms` }}
            >
              {interest}
            </span>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}

export default ResearchSection;
