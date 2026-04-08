import { motion } from 'framer-motion';
import Container from '../components/Container';
import ButtonLink from '../components/ButtonLink';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { heroContent } from '../data/content';

const enter = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const MotionP = motion.p;
const MotionH1 = motion.h1;
const MotionDiv = motion.div;

function HeroSection() {
  return (
    <section id="hero" className="scroll-mt-28 pb-20 pt-16 md:pb-28 md:pt-20">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-12">
          <div>
            <MotionP
              className="mb-6 inline-flex rounded-full border border-[rgba(131,166,255,0.3)] bg-[rgba(131,166,255,0.12)] px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-zinc-200"
              initial="hidden"
              animate="visible"
              variants={enter}
              custom={0.05}
            >
              {heroContent.status}
            </MotionP>

            <MotionH1
              className="font-display text-5xl font-semibold tracking-tight text-zinc-50 md:text-7xl"
              initial="hidden"
              animate="visible"
              variants={enter}
              custom={0.15}
            >
              {heroContent.name}
            </MotionH1>

            <MotionP
              className="mt-7 max-w-3xl text-lg leading-relaxed text-zinc-200 md:text-2xl"
              initial="hidden"
              animate="visible"
              variants={enter}
              custom={0.25}
            >
              {heroContent.headline}
            </MotionP>

            <MotionP
              className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg"
              initial="hidden"
              animate="visible"
              variants={enter}
              custom={0.35}
            >
              {heroContent.description}
            </MotionP>

            <MotionDiv
              className="mt-9 flex flex-wrap gap-3"
              initial="hidden"
              animate="visible"
              variants={enter}
              custom={0.45}
            >
              <ButtonLink href="#contact" variant="primary">
                Contact
              </ButtonLink>
              <ButtonLink href="#projects" variant="secondary">
                View Projects
              </ButtonLink>
            </MotionDiv>
          </div>

          <MotionDiv initial="hidden" animate="visible" variants={enter} custom={0.28}>
            <ImagePlaceholder label={heroContent.portraitPlaceholder} ratio="aspect-[4/5]" />
          </MotionDiv>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
