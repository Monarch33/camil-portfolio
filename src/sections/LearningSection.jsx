import Section from '../components/Section';
import FadeIn from '../components/FadeIn';
import Card from '../components/Card';
import { learning } from '../data/content';

function LearningSection() {
  return (
    <Section
      id="learning"
      title="Learning / Reading"
      description="What I am currently learning, reading, and actively synthesizing."
    >
      <FadeIn>
        <Card hover={false}>
          <ul className="space-y-3">
            {learning.map((item, index) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-zinc-700">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-500" />
                <span>
                  {item}
                  <span className="ml-2 text-xs uppercase tracking-[0.14em] text-zinc-500">
                    ({String(index + 1).padStart(2, '0')})
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </Card>
      </FadeIn>
    </Section>
  );
}

export default LearningSection;
