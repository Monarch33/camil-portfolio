import Section from '../components/Section';
import FadeIn from '../components/FadeIn';
import { aboutContent } from '../data/content';

function AboutSection() {
  return (
    <Section
      id="about"
      title="About"
      description="A short overview of background, direction, and long-term vision."
    >
      <FadeIn className="max-w-3xl" delay={0.1}>
        <p className="text-base leading-relaxed text-zinc-700 md:text-lg">{aboutContent}</p>
      </FadeIn>
    </Section>
  );
}

export default AboutSection;
