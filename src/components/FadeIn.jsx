import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const MotionDiv = motion.div;

function FadeIn({ children, delay = 0, className = '' }) {
  return (
    <MotionDiv
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={fadeInUp}
      custom={delay}
    >
      {children}
    </MotionDiv>
  );
}

export default FadeIn;
