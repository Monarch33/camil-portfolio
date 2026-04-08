import Section from '../components/Section';
import FadeIn from '../components/FadeIn';
import Card from '../components/Card';
import { aboutParagraphs } from '../data/content';

function AboutSection() {
  return (
    <Section
      id="about"
      title="About"
      description="I am passionate about solving difficult problems at the intersection of AI, machine learning, and real-world applications."
    >
      <FadeIn delay={0.08}>
        <Card hover={false} className="space-y-4">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-zinc-300 md:text-lg">
              {paragraph}
            </p>
          ))}
        </Card>
      </FadeIn>
    </Section>
  );
}

export default AboutSection;
