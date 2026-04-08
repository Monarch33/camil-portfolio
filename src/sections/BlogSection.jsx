import Section from '../components/Section';
import FadeIn from '../components/FadeIn';
import Card from '../components/Card';
import { recentBlogPost } from '../data/content';

function BlogSection() {
  return (
    <Section
      id="blog"
      title="Recent Blog Post"
      description="Writing and research help me explore ideas in depth and share discoveries with others."
    >
      <FadeIn>
        <Card>
          <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.14em] text-zinc-500">
            <span>{recentBlogPost.type}</span>
            <span>•</span>
            <span>{recentBlogPost.date}</span>
          </div>
          <h3 className="mt-3 font-display text-2xl text-zinc-100">{recentBlogPost.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">{recentBlogPost.summary}</p>
          <div className="mt-5 flex items-center gap-4 text-sm">
            <span className="rounded-full border border-[rgba(255,255,255,0.15)] px-3 py-1 text-zinc-300">{recentBlogPost.tag}</span>
            <a href={recentBlogPost.link} className="text-zinc-300 transition-colors hover:text-[var(--accent)]">
              Read more
            </a>
          </div>
        </Card>
      </FadeIn>
    </Section>
  );
}

export default BlogSection;
