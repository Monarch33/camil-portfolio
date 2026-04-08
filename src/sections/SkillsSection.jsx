import Section from '../components/Section';
import FadeIn from '../components/FadeIn';
import Card from '../components/Card';
import { skills } from '../data/content';

function SkillsSection() {
  return (
    <Section
      id="skills"
      title="Skills"
      description="Core capabilities grouped across technical and business dimensions."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {Object.entries(skills).map(([category, items], index) => (
          <FadeIn key={category} delay={0.08 * index}>
            <Card>
              <h3 className="font-display text-lg text-zinc-900">{category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-zinc-300 bg-zinc-100 px-2.5 py-1 text-xs text-zinc-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

export default SkillsSection;
