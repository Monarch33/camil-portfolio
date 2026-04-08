import Section from '../components/Section';
import FadeIn from '../components/FadeIn';
import Card from '../components/Card';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { education } from '../data/content';

function EducationSection() {
  return (
    <Section id="education" title="Education" description="Academic track, focus, and progression.">
      <div className="space-y-5">
        {education.map((item, index) => (
          <FadeIn key={item.school} delay={0.06 * index}>
            <Card className="md:p-7" hover={false}>
              <div className="flex flex-col gap-5 md:flex-row md:items-start">
                <div className="w-20 shrink-0">
                  <ImagePlaceholder label={item.logoPlaceholder} ratio="aspect-square" className="rounded-full" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-xl text-zinc-100">{item.school}</h3>
                    <span className="rounded-full border border-[rgba(131,166,255,0.35)] bg-[rgba(131,166,255,0.12)] px-3 py-1 text-xs text-zinc-200">
                      {item.badge}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-zinc-300">{item.degree}</p>
                  <ul className="mt-4 space-y-2">
                    {item.notes.map((note) => (
                      <li key={note} className="flex items-start gap-2 text-sm text-zinc-400">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-500" />
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

export default EducationSection;
