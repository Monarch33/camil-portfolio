import Section from '../components/Section';
import FadeIn from '../components/FadeIn';
import Card from '../components/Card';
import { socials } from '../data/content';

function SocialsSection() {
  return (
    <Section
      id="socials"
      title="Socials"
      description="Beyond work and research, I share snapshots of what I am currently building and learning."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {socials.map((social, index) => (
          <FadeIn key={social.platform} delay={0.07 * index}>
            <Card>
              <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">{social.platform}</p>
              <h3 className="mt-2 font-display text-xl text-zinc-100">{social.handle}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{social.description}</p>
              <div className="mt-4 flex gap-4 text-xs text-zinc-400">
                <span>{social.posts} Posts</span>
                <span>{social.followers} Followers</span>
              </div>
              <a href={social.link} className="mt-5 inline-block text-sm text-zinc-300 transition-colors hover:text-[var(--accent)]">
                Follow
              </a>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

export default SocialsSection;
