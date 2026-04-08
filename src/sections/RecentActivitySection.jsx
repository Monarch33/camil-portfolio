import Section from '../components/Section';
import FadeIn from '../components/FadeIn';
import Card from '../components/Card';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { recentActivity } from '../data/content';

function RecentActivitySection() {
  return (
    <Section id="activity" title="Recent Activity" description="Latest highlighted work and current momentum.">
      <FadeIn>
        <Card className="md:p-7">
          <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
            <ImagePlaceholder label={recentActivity.imagePlaceholder} ratio="aspect-[4/3]" />

            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">{recentActivity.subtitle}</p>
              <h3 className="mt-2 font-display text-2xl text-zinc-100">{recentActivity.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{recentActivity.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {recentActivity.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.04)] px-2.5 py-1 text-xs text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex gap-4 text-sm">
                {recentActivity.links.map((link) => (
                  <a key={link.label} href={link.href} className="text-zinc-300 transition-colors hover:text-[var(--accent)]">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </FadeIn>
    </Section>
  );
}

export default RecentActivitySection;
