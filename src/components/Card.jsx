import { motion } from 'framer-motion';

const MotionArticle = motion.article;

function Card({ children, className = '', hover = true }) {
  return (
    <MotionArticle
      whileHover={hover ? { y: -5, scale: 1.01 } : undefined}
      transition={{ type: 'spring', stiffness: 250, damping: 24, mass: 0.7 }}
      className={`rounded-2xl border border-zinc-300/80 bg-zinc-100/80 p-6 shadow-[0_10px_40px_-24px_rgba(0,0,0,0.35)] backdrop-blur ${className}`}
    >
      {children}
    </MotionArticle>
  );
}

export default Card;
