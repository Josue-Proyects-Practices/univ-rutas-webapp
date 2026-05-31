import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  description: string;
  image: string;
  currentLabel: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09 },
  },
};

export default function PageHero({
  eyebrow,
  title,
  titleAccent,
  description,
  image,
  currentLabel,
}: PageHeroProps) {
  return (
    <section
      className="bg-foreground py-16 md:py-24 relative overflow-hidden"
      aria-label="Encabezado"
    >
      <div className="absolute inset-0 opacity-15" aria-hidden="true">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className="absolute inset-0 bg-foreground/85"
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <nav
          className="flex items-center gap-2 text-background/50 text-sm mb-6"
          aria-label="Ruta de navegación"
        >
          <Link to="/" className="hover:text-background transition-colors">
            Inicio
          </Link>
          <ChevronRight size={14} />
          <span className="text-background/80">{currentLabel}</span>
        </nav>

        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.p
            variants={fadeInUp}
            className="text-primary font-semibold text-sm uppercase tracking-widest mb-3"
          >
            {eyebrow}
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            className="font-heading text-5xl md:text-6xl font-bold text-background leading-tight mb-4 max-w-3xl"
          >
            {title}{' '}
            {titleAccent && (
              <span className="text-primary italic">{titleAccent}</span>
            )}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-background/65 text-base max-w-xl leading-relaxed"
          >
            {description}
          </motion.p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg
          viewBox="0 0 1440 40"
          preserveAspectRatio="none"
          className="w-full h-8 block"
        >
          <polygon
            points="0,40 1440,0 1440,40"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
}