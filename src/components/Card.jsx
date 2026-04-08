import { motion } from 'framer-motion';

const MotionArticle = motion.article;

function Card({ children, className = '', hover = true }) {
  return (
    <MotionArticle
      whileHover={
        hover
          ? {
              y: -4,
              borderColor: 'rgba(131,166,255,0.42)',
              boxShadow: '0 18px 40px -24px rgba(131,166,255,0.45)',
            }
          : undefined
      }
      transition={{ type: 'spring', stiffness: 270, damping: 28, mass: 0.7 }}
      className={`rounded-2xl border border-[rgba(255,255,255,0.12)] bg-[rgba(17,19,26,0.7)] p-6 backdrop-blur-sm ${className}`}
    >
      {children}
    </MotionArticle>
  );
}

export default Card;
