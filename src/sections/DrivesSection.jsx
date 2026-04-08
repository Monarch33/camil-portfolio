import Section from '../components/Section';
import FadeIn from '../components/FadeIn';
import Card from '../components/Card';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { drives } from '../data/content';

function DriveBlock({ item, delay = 0 }) {
  return (
    <FadeIn delay={delay}>
      <Card hover={false} className="md:p-7">
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h3 className="font-display text-2xl text-zinc-100">{item.title}</h3>
            <p className="mt-3 text-lg italic leading-relaxed text-zinc-300">"{item.quote}"</p>
            <div className="mt-4 space-y-3">
              {item.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-relaxed text-zinc-400">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <ImagePlaceholder label={item.imagePlaceholder} ratio="aspect-[5/4]" />
        </div>
      </Card>
    </FadeIn>
  );
}

function DrivesSection() {
  return (
    <Section id="drives" title="What & Who Drives Me" description="Principles, motivations, and people behind my work.">
      <div className="space-y-5">
        <DriveBlock item={drives.what} delay={0.05} />
        <DriveBlock item={drives.who} delay={0.1} />
      </div>
    </Section>
  );
}

export default DrivesSection;
