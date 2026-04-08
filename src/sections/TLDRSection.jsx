import Section from '../components/Section';
import FadeIn from '../components/FadeIn';
import Card from '../components/Card';
import { tldr } from '../data/content';

function TLDRSection() {
  return (
    <Section id="tldr" title="TL;DR" description="Quick snapshot of what I am doing now and what I was doing previously.">
      <div className="grid gap-5 md:grid-cols-2">
        <FadeIn>
          <Card hover={false}>
            <h3 className="font-display text-xl text-zinc-100">Currently I am…</h3>
            <ul className="mt-4 space-y-2">
              {tldr.current.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-zinc-400">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </FadeIn>

        <FadeIn delay={0.08}>
          <Card hover={false}>
            <h3 className="font-display text-xl text-zinc-100">Previously, I was…</h3>
            <ul className="mt-4 space-y-2">
              {tldr.previous.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-zinc-400">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </FadeIn>
      </div>
    </Section>
  );
}

export default TLDRSection;
