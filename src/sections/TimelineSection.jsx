import Section from '../components/Section';
import FadeIn from '../components/FadeIn';
import { timeline } from '../data/content';

function TimelineSection() {
  return (
    <Section
      id="timeline"
      title="Timeline"
      description="Education and key milestones in chronological order."
    >
      <div className="relative pl-6 md:pl-10">
        <div className="absolute left-1.5 top-0 h-full w-px bg-zinc-300 md:left-3" />

        <div className="space-y-10">
          {timeline.map((item, index) => (
            <FadeIn key={`${item.year}-${item.title}`} delay={0.1 * index}>
              <div className="relative">
                <span className="absolute -left-[1.08rem] top-1 h-3 w-3 rounded-full border border-zinc-400 bg-zinc-100 md:-left-[2.05rem]" />
                <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">{item.year}</p>
                <h3 className="mt-2 font-display text-xl text-zinc-900">{item.title}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600">{item.detail}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default TimelineSection;
