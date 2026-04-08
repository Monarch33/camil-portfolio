import Section from '../components/Section';
import FadeIn from '../components/FadeIn';
import Card from '../components/Card';
import { currentFocus } from '../data/content';

function CurrentFocusSection() {
  return (
    <Section
      id="focus"
      title="Current Focus"
      description="What I am currently working on and where I am investing attention."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {currentFocus.map((item, index) => (
          <FadeIn key={item.title} delay={0.08 * index}>
            <Card>
              <h3 className="font-display text-xl text-zinc-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">{item.description}</p>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

export default CurrentFocusSection;
