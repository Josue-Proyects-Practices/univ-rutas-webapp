import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, MapPin } from 'lucide-react';
import PageHero from '../components/PageHero';
import { parroquias } from '../data/parroquias';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const tagColors: Record<string, string> = {
  primary: 'bg-primary/10 text-primary border-primary/20',
  secondary: 'bg-secondary/10 text-secondary border-secondary/20',
  accent: 'bg-accent/10 text-accent border-accent/20',
};

export default function ParroquiasPage() {
  return (
    <>
      <Helmet>
        <title>Las 5 Parroquias — Route Holy Valera</title>
        <meta
          name="description"
          content="Descubre las parroquias más emblemáticas de Valera y conoce su historia, ubicación y horarios."
        />
      </Helmet>

      <main>
        <PageHero
          eyebrow="Zona Pastoral Valera"
          title="Las 5 Parroquias"
          titleAccent="del Recorrido"
          description="Cinco templos, cinco historias, una sola fe. emblemáticas de Valera."
          image="/images/principal.jpg"
          currentLabel="Parroquias"
        />

        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="flex flex-col gap-8 md:gap-10"
            >
              {parroquias.map((p, i) => (
                <motion.article
                  key={p.id}
                  variants={fadeInUp}
                  className="group"
                >
                  <Link to={`/parroquias/${p.id}`} className="block">
                    <div
                      className={`grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-border hover:shadow-xl transition-shadow duration-300 ${
                        i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
                      }`}
                    >
                      {/* Imagen */}
                      <div
                        className="relative overflow-hidden"
                        style={{ minHeight: '280px' }}
                      >
                        <img
                          src={`${import.meta.env.BASE_URL}${p.imagen}`}
                          alt={p.nombre}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
                        <div className="absolute top-4 left-4 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-heading font-bold text-lg shadow-lg">
                          {p.orden}
                        </div>
                      </div>

                      {/* Contenido */}
                      <div className="bg-card p-8 md:p-10 flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-4 flex-wrap">
                          <span
                            className={`text-xs font-bold px-3 py-1 rounded-full border ${tagColors[p.tagColor]}`}
                          >
                            {p.tag}
                          </span>
                          <span className="text-muted-foreground text-xs">
                            {p.fundacion}
                          </span>
                        </div>

                        <p className="text-muted-foreground text-xs uppercase tracking-widest mb-1">
                          {p.subtitulo}
                        </p>

                        <h2 className="font-heading text-foreground text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-200">
                          {p.nombre}
                        </h2>

                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                          {p.descripcionCorta}
                        </p>

                        <div className="flex flex-col gap-2 mb-6">
                          <div className="flex items-start gap-2 text-xs text-muted-foreground">
                            <Clock
                              size={13}
                              className="mt-0.5 shrink-0 text-primary"
                            />
                            <span>{p.horario}</span>
                          </div>

                          <div className="flex items-start gap-2 text-xs text-muted-foreground">
                            <MapPin
                              size={13}
                              className="mt-0.5 shrink-0 text-primary"
                            />
                            <span>{p.direccion}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                          Ver ficha completa <ArrowRight size={15} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-muted/40 border-t border-border">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              ¿Listo para planificar tu visita?
            </h2>

            <p className="text-muted-foreground text-base mb-8 max-w-md mx-auto">
              Usa el mapa interactivo para ver la ubicación exacta de cada parroquia.
            </p>

            <Link
              to="/mapa"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-base hover:opacity-90 transition-all duration-200 shadow-md"
            >
              <MapPin size={18} />
              Ver Mapa Interactivo
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}