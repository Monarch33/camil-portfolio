import Section from '../components/Section';
import FadeIn from '../components/FadeIn';
import Card from '../components/Card';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { githubActivity } from '../data/content';

function GithubActivitySection() {
  return (
    <Section id="github" title="GitHub Activity" description="Public coding footprint and contribution trends.">
      <FadeIn>
        <Card hover={false}>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">GitHub profile</p>
              <h3 className="mt-1 font-display text-2xl text-zinc-100">{githubActivity.username}</h3>
              <p className="mt-2 text-sm text-zinc-400">{githubActivity.description}</p>
              <a href={githubActivity.profileLink} className="mt-3 inline-block text-sm text-zinc-300 transition-colors hover:text-[var(--accent)]">
                View Profile
              </a>
            </div>
            <div className="w-full md:w-80">
              <ImagePlaceholder label={githubActivity.imagePlaceholder} ratio="aspect-[16/7]" />
            </div>
          </div>
        </Card>
      </FadeIn>
    </Section>
  );
}

export default GithubActivitySection;
