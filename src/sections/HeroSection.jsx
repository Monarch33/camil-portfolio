import { motion } from 'framer-motion';
import Container from '../components/Container';
import ButtonLink from '../components/ButtonLink';
import { heroContent } from '../data/content';

const enter = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const MotionP = motion.p;
const MotionH1 = motion.h1;
const MotionDiv = motion.div;

function HeroSection() {
  return (
    <section id="hero" className="scroll-mt-24 pb-24 pt-24 md:pb-32 md:pt-36">
      <Container>
        <div className="max-w-4xl">
          <MotionP
            className="mb-6 inline-flex rounded-full border border-zinc-300 bg-zinc-100/80 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-zinc-700"
            initial="hidden"
            animate="visible"
            variants={enter}
            custom={0.05}
          >
            {heroContent.status}
          </MotionP>

          <MotionH1
            className="font-display text-5xl font-semibold tracking-tight text-zinc-900 md:text-7xl"
            initial="hidden"
            animate="visible"
            variants={enter}
            custom={0.15}
          >
            {heroContent.name}
          </MotionH1>

          <MotionP
            className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-700 md:text-2xl"
            initial="hidden"
            animate="visible"
            variants={enter}
            custom={0.25}
          >
            {heroContent.headline}
          </MotionP>

          <MotionP
            className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 md:text-lg"
            initial="hidden"
            animate="visible"
            variants={enter}
            custom={0.35}
          >
            {heroContent.description}
          </MotionP>

          <MotionDiv
            className="mt-10 flex flex-wrap gap-3"
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
      </Container>
    </section>
  );
}

export default HeroSection;
