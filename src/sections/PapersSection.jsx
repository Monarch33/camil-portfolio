import Section from '../components/Section';
import FadeIn from '../components/FadeIn';
import Card from '../components/Card';
import { recentPaper } from '../data/content';

function PapersSection() {
  return (
    <Section
      id="papers"
      title="Recent Paper"
      description="Academic papers and technical reports representing my current research focus."
    >
      <FadeIn>
        <Card>
          <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.14em] text-zinc-500">
            <span>{recentPaper.type}</span>
            <span>•</span>
            <span>{recentPaper.date}</span>
          </div>
          <h3 className="mt-3 font-display text-2xl text-zinc-100">{recentPaper.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">{recentPaper.summary}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {recentPaper.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.04)] px-2.5 py-1 text-xs text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <a href={recentPaper.link} className="mt-5 inline-block text-sm text-zinc-300 transition-colors hover:text-[var(--accent)]">
            Open PDF in new tab
          </a>
        </Card>
      </FadeIn>
    </Section>
  );
}

export default PapersSection;
