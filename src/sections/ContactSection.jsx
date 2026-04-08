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
          <p className="text-sm text-zinc-500">Email</p>
          <a
            href={`mailto:${contact.email}`}
            className="mt-1 inline-block font-display text-xl text-zinc-900 underline-offset-4 hover:underline"
          >
            {contact.email}
          </a>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-zinc-700">
            <a href={contact.linkedin} className="underline-offset-4 hover:underline">
              LinkedIn
            </a>
            <a href={contact.github} className="underline-offset-4 hover:underline">
              GitHub
            </a>
          </div>
        </Card>
      </FadeIn>
    </Section>
  );
}

export default ContactSection;
