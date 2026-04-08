import Section from '../components/Section';
import FadeIn from '../components/FadeIn';
import Card from '../components/Card';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { learning } from '../data/content';

function LearningSection() {
  return (
    <Section
      id="learning"
      title="Learning / Reading"
      description="What I am currently learning, reading, and actively synthesizing."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {learning.map((item, index) => (
          <FadeIn key={item.title} delay={0.07 * index}>
            <Card className="flex h-full gap-4" hover>
              <div className="w-24 shrink-0">
                <ImagePlaceholder label={item.coverPlaceholder} ratio="aspect-[3/4]" className="rounded-xl" />
              </div>

              <div className="flex-1">
                <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">{item.type}</p>
                <h3 className="mt-2 font-display text-lg text-zinc-100">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.note}</p>
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

export default LearningSection;
