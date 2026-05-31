import { Helmet } from 'react-helmet-async';
import { motion, type Variants } from 'framer-motion';
import { Link, Navigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Clock,
  Info,
  MapPin,
} from 'lucide-react';
import { getParroquiaById, parroquias } from '../data/parroquias';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut' as const,
    },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const tagBg: Record<string, string> = {
  primary: 'bg-primary/10 text-primary border-primary/20',
  secondary: 'bg-secondary/10 text-secondary border-secondary/20',
  accent: 'bg-accent/10 text-accent border-accent/20',
};

export default function ParroquiaDetallePage() {
  const { id } = useParams<{ id: string }>();
  const parroquia = id ? getParroquiaById(id) : undefined;

  if (!parroquia) {
    return <Navigate to="/parroquias" replace />;
  }

  const currentIndex = parroquias.findIndex((p) => p.id === id);
  const prev = currentIndex > 0 ? parroquias[currentIndex - 1] : null;
  const next = currentIndex < parroquias.length - 1 ? parroquias[currentIndex + 1] : null;

  return (
    <>
      <Helmet>
        <title>{parroquia.nombre} — Route Holy Valera</title>
        <meta name="description" content={parroquia.descripcionCorta} />
      </Helmet>

      <main>
        <section className="relative h-[55vh] md:h-[65vh] overflow-hidden">
          <img
            src={`${import.meta.env.BASE_URL}${parroquia.imagen}`}
            alt={parroquia.nombre}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-transparent" />

          {/* Breadcrumb */}
          <div className="absolute top-6 left-0 right-0 z-10">
            <div className="container mx-auto px-4 md:px-6">
              <nav
                className="flex items-center gap-2 text-white/60 text-sm"
                aria-label="Ruta de navegación"
              >
                <Link to="/" className="hover:text-white transition-colors">
                  Inicio
                </Link>
                <ChevronRight size={14} />
                <Link to="/parroquias" className="hover:text-white transition-colors">
                  Parroquias
                </Link>
                <ChevronRight size={14} />
                <span className="text-white/90">{parroquia.nombre}</span>
              </nav>
            </div>
          </div>

          {/* Hero content */}
          <div className="absolute bottom-0 left-0 right-0 z-10 pb-10 md:pb-14">
            <div className="container mx-auto px-4 md:px-6">
              <motion.div initial="hidden" animate="visible" variants={stagger}>
                <motion.div
                  variants={fadeInUp}
                  className="flex items-center gap-3 mb-3 flex-wrap"
                >
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full border ${tagBg[parroquia.tagColor]}`}
                  >
                    {parroquia.tag}
                  </span>
                  <span className="text-white/60 text-xs">{parroquia.fundacion}</span>
                  <span className="text-white/40 text-xs">·</span>
                  <span className="text-white/60 text-xs">{parroquia.estilo}</span>
                </motion.div>

                <motion.p
                  variants={fadeInUp}
                  className="text-white/70 text-sm uppercase tracking-widest mb-1"
                >
                  {parroquia.subtitulo}
                </motion.p>

                <motion.h1
                  variants={fadeInUp}
                  className="font-heading text-4xl md:text-6xl font-bold text-white leading-tight max-w-2xl"
                >
                  {parroquia.nombre}
                </motion.h1>
              </motion.div>
            </div>
          </div>

          {/* Bottom cut */}
          <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
            <svg
              viewBox="0 0 1440 40"
              preserveAspectRatio="none"
              className="w-full h-8 block"
            >
              <polygon points="0,40 1440,0 1440,40" fill="hsl(var(--background))" />
            </svg>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
              {/* Columna izquierda */}
              <div className="lg:col-span-2 flex flex-col gap-10">
                {/* Historia */}
                <motion.div initial="hidden" animate="visible" variants={stagger}>
                  <motion.h2
                    variants={fadeInUp}
                    className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-5 flex items-center gap-2"
                  >
                    <span className="w-1 h-7 bg-primary rounded-full shrink-0" />
                    Historia
                  </motion.h2>

                  <motion.p
                    variants={fadeInUp}
                    className="text-muted-foreground leading-relaxed text-base"
                  >
                    {parroquia.historia}
                  </motion.p>
                </motion.div>

                {/* Recomendaciones */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={stagger}
                >
                  <motion.h2
                    variants={fadeInUp}
                    className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-5 flex items-center gap-2"
                  >
                    <span className="w-1 h-7 bg-secondary rounded-full shrink-0" />
                    Recomendaciones del Visitante
                  </motion.h2>

                  <motion.ul variants={stagger} className="flex flex-col gap-3">
                    {parroquia.recomendaciones.map((rec, i) => (
                      <motion.li
                        key={i}
                        variants={fadeInUp}
                        className="flex items-start gap-3 bg-card border border-border rounded-xl p-4"
                      >
                        <CheckCircle
                          size={16}
                          className="text-primary shrink-0 mt-0.5"
                        />
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {rec}
                        </p>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>

                {/* Datos de interés */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={stagger}
                >
                  <motion.h2
                    variants={fadeInUp}
                    className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-5 flex items-center gap-2"
                  >
                    <span className="w-1 h-7 bg-accent rounded-full shrink-0" />
                    Datos de Interés
                  </motion.h2>

                  <motion.div
                    variants={stagger}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                  >
                    {parroquia.datosInteresantes.map((dato) => (
                      <motion.div
                        key={dato.titulo}
                        variants={fadeInUp}
                        className="bg-card border border-border rounded-xl p-4 flex items-start gap-3"
                      >
                        <Info size={14} className="text-accent shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">
                            {dato.titulo}
                          </p>
                          <p className="text-sm font-semibold text-foreground">
                            {dato.valor}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15, ease: 'easeOut' as const }}
                  className="sticky top-28 flex flex-col gap-4"
                >
                  <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
                    <div className="bg-primary/10 border-b border-border px-5 py-4">
                      <h3 className="font-heading font-bold text-foreground text-base">
                        Información Práctica
                      </h3>
                    </div>

                    <div className="px-5 py-5 flex flex-col gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
                          <Clock size={12} />
                          Horario de Visita
                        </p>
                        <p className="text-sm text-foreground font-medium leading-relaxed">
                          {parroquia.horario}
                        </p>
                      </div>

                      <div className="border-t border-border pt-4">
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
                          <Clock size={12} />
                          Horario de Misas
                        </p>
                        <p className="text-sm text-foreground font-medium leading-relaxed">
                          {parroquia.misa}
                        </p>
                      </div>

                      <div className="border-t border-border pt-4">
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
                          <MapPin size={12} />
                          Dirección
                        </p>
                        <p className="text-sm text-foreground leading-relaxed">
                          {parroquia.direccion}
                        </p>
                      </div>
                    </div>

                    <div className="px-5 pb-5">
                      <Link
                        to="/mapa"
                        className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-all duration-200"
                      >
                        <MapPin size={15} />
                        Ver en el Mapa
                      </Link>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-2xl px-5 py-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-3">
                      Parada en el recorrido
                    </p>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-lg shrink-0">
                        {parroquia.orden}
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {parroquia.nombre}
                        </p>
                        <p className="text-xs text-muted-foreground">de 5 parroquias</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </aside>
            </div>
          </div>
        </section>

        <section className="py-10 bg-muted/30 border-t border-border">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between gap-4">
              {prev ? (
                <Link
                  to={`/parroquias/${prev.id}`}
                  className="group flex items-center gap-3 bg-card border border-border rounded-2xl px-5 py-4 hover:border-primary/40 hover:shadow-md transition-all duration-200 max-w-xs"
                >
                  <ArrowLeft
                    size={18}
                    className="text-muted-foreground group-hover:text-primary transition-colors shrink-0"
                  />
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">Anterior</p>
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      {prev.nombre}
                    </p>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              <Link
                to="/parroquias"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors hidden md:block"
              >
                Ver todas las parroquias
              </Link>

              {next ? (
                <Link
                  to={`/parroquias/${next.id}`}
                  className="group flex items-center gap-3 bg-card border border-border rounded-2xl px-5 py-4 hover:border-primary/40 hover:shadow-md transition-all duration-200 max-w-xs text-right"
                >
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">Siguiente</p>
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      {next.nombre}
                    </p>
                  </div>
                  <ArrowRight
                    size={18}
                    className="text-muted-foreground group-hover:text-primary transition-colors shrink-0"
                  />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
