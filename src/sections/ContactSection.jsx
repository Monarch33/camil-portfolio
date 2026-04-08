import Section from '../components/Section';
import FadeIn from '../components/FadeIn';
import Card from '../components/Card';
import { contact } from '../data/content';

function ContactSection() {
  return (
    <Section
      id="contact"
      title="Contact"
      description="Open to learning, collaboration, and ambitious AI + business conversations."
    >
      <FadeIn>
        <Card hover={false} className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.14em] text-zinc-500">Email</p>
          <a
            href={`mailto:${contact.email}`}
            className="mt-2 inline-block font-display text-2xl text-zinc-100 transition-colors hover:text-[var(--accent)]"
          >
            {contact.email}
          </a>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-zinc-300">
            <a href={contact.linkedin} className="transition-colors hover:text-[var(--accent)]">
              LinkedIn
            </a>
            <a href={contact.github} className="transition-colors hover:text-[var(--accent)]">
              GitHub
            </a>
          </div>
        </Card>
      </FadeIn>
    </Section>
  );
}

export default ContactSection;
