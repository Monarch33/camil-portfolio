import Section from '../components/Section';
import FadeIn from '../components/FadeIn';
import Card from '../components/Card';
import { importantDocuments } from '../data/content';

function DocumentsSection() {
  return (
    <Section id="documents" title="Important Documents" description="Quick access to academic and professional documents.">
      <FadeIn>
        <Card hover={false}>
          <div className="flex flex-wrap gap-3">
            {importantDocuments.map((doc) => (
              <a
                key={doc.title}
                href={doc.href}
                className="rounded-full border border-[rgba(255,255,255,0.16)] bg-[rgba(255,255,255,0.04)] px-4 py-2 text-sm text-zinc-200 transition-colors hover:text-[var(--accent)]"
              >
                {doc.title}
              </a>
            ))}
          </div>
        </Card>
      </FadeIn>
    </Section>
  );
}

export default DocumentsSection;
