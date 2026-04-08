import Section from '../components/Section';
import FadeIn from '../components/FadeIn';
import Card from '../components/Card';
import { currentFocus } from '../data/content';

function CurrentFocusSection() {
  return (
    <Section
      id="focus"
      title="Current Focus"
      description="What I am currently building, testing, and prioritizing."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {currentFocus.map((item, index) => (
          <FadeIn key={item.title} delay={0.08 * index}>
            <Card>
              <p className="mb-3 text-xs uppercase tracking-[0.14em] text-zinc-500">Focus {(index + 1).toString().padStart(2, '0')}</p>
              <h3 className="font-display text-xl text-zinc-100">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.description}</p>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

export default CurrentFocusSection;
