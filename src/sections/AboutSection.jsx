import Section from '../components/Section';
import FadeIn from '../components/FadeIn';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { aboutContent } from '../data/content';

function AboutSection() {
  return (
    <Section
      id="about"
      title="About"
      description="A short overview of background, direction, and long-term ambition."
    >
      <div className="grid items-center gap-6 md:grid-cols-[1.1fr_0.9fr]">
        <FadeIn delay={0.08}>
          <div className="rounded-2xl border border-[rgba(255,255,255,0.14)] bg-[rgba(17,19,26,0.55)] p-6 md:p-7">
            <p className="text-base leading-relaxed text-zinc-300 md:text-lg">{aboutContent}</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.14}>
          <ImagePlaceholder
            label="About Section Photo Placeholder (workspace, portrait, or context visual)."
            ratio="aspect-[5/4]"
          />
        </FadeIn>
      </div>
    </Section>
  );
}

export default AboutSection;
