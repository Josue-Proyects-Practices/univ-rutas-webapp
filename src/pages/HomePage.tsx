import { Helmet } from 'react-helmet-async';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Bus,
  ChevronRight,
  Clock,
  Compass,
  MapPin,
  Shirt,
} from 'lucide-react';
import { parroquias } from '../data/parroquias';
import StaticMap from '../components/StaticMap';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: 'easeOut' as const,
    },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const consejos = [
  {
    icon: Clock,
    titulo: 'Horarios de Visita',
    texto:
      'La mayoría de los templos abren de lunes a sábado de 7:00 a.m. a 12:00 m. y de 3:00 p.m. a 6:00 p.m.',
  },
  {
    icon: Shirt,
    titulo: 'Vestimenta Adecuada',
    texto:
      'Se recomienda ropa cubriente: hombros y rodillas tapados. Llevar un pañuelo o chal si lo necesitas.',
  },
  {
    icon: Bus,
    titulo: 'Cómo Llegar',
    texto:
      'Valera está conectada por carretera y dentro de la ciudad varios templos se pueden recorrer a pie.',
  },
  {
    icon: Compass,
    titulo: 'Mejor Época',
    texto:
      'Visita durante Semana Santa o festividades patronales para una experiencia cultural y espiritual completa.',
  },
];

const gallerySlots = [
  '/images/gallery-1.jpg',
  '/images/gallery-2.jpg',
  '/images/gallery-3.jpg',
  '/images/gallery-4.jpg',
  '/images/gallery-5.jpg',
  '/images/gallery-6.jpg',
];

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Route Holy Valera — Guía Turística Religiosa de Valera</title>
        <meta
          name="description"
          content="Descubre las 5 parroquias más visitadas de la Zona Pastoral Valera, Trujillo, Venezuela."
        />
      </Helmet>

      <main>
        <section
          className="relative min-h-[92vh] flex items-end overflow-hidden"
          aria-label="Presentación"
        >
          <div className="absolute inset-0">
            <img
              src="/images/principal.jpg"
              alt="Templo colonial de la Zona Pastoral Valera"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-amber-900/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-transparent" />
          </div>

          <div className="relative z-10 container mx-auto px-4 md:px-6 pb-16 md:pb-24 pt-32">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-3xl"
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <span className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest">
                  <MapPin size={12} />
                  Valera, Trujillo · Venezuela
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] mb-6"
              >
                Rutas
                <br />
                <span className="text-primary italic">Sagradas</span>
                <br />
                de Valera
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-white/80 text-lg md:text-xl max-w-xl leading-relaxed mb-10"
              >
                Cinco parroquias. Historia, fe y patrimonio en un recorrido espiritual y cultural
                por Valera.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/parroquias"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-base hover:opacity-90 transition-all duration-200 shadow-lg hover:-translate-y-0.5"
                >
                  Comenzar el Recorrido
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/mapa"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-white/20 transition-all duration-200"
                >
                  <MapPin size={18} />
                  Ver en el Mapa
                </Link>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-14 flex items-center gap-8 md:gap-12">
                {[
                  { value: '5', label: 'Parroquias' },
                  { value: '200+', label: 'Años de historia' },
                  { value: '1', label: 'Recorrido único' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-primary font-heading text-3xl md:text-4xl font-bold">
                      {stat.value}
                    </div>
                    <div className="text-white/60 text-xs uppercase tracking-wider mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-10" aria-hidden="true">
            <svg
              viewBox="0 0 1440 80"
              preserveAspectRatio="none"
              className="w-full h-12 md:h-20 block"
            >
              <polygon points="0,80 1440,0 1440,80" fill="hsl(var(--background))" />
            </svg>
          </div>
        </section>

        <section className="py-10 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12"
            >
              <motion.p
                variants={fadeInUp}
                className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed"
              >
                La <strong className="text-foreground">Zona Pastoral Valera</strong> alberga
                algunos de los templos más emblemáticos del estado Trujillo.
              </motion.p>

              <motion.div variants={fadeInUp}>
                <Link
                  to="/consejos"
                  className="inline-flex items-center gap-2 text-secondary font-semibold text-sm hover:gap-3 transition-all duration-200"
                >
                  Consejos para tu visita <ChevronRight size={16} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/40">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mb-12"
            >
              <motion.p
                variants={fadeInUp}
                className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3"
              >
                Las 5 Parroquias
              </motion.p>

              <motion.h2
                variants={fadeInUp}
                className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight max-w-lg"
              >
                Templos que cuentan <span className="text-primary italic">la historia</span>
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5"
            >
              {parroquias.slice(0, 2).map((p) => (
                <motion.div
                  key={p.id}
                  variants={fadeInUp}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="relative overflow-hidden rounded-2xl md:row-span-2 group"
                  style={{ minHeight: '380px' }}
                >
                  <img
                    src={p.imagen}
                    alt={p.nombre}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/85 via-gray-900/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      {p.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white/60 text-xs uppercase tracking-widest mb-1">
                      {p.subtitulo}
                    </p>
                    <h3 className="font-heading text-white text-2xl font-bold mb-2">
                      {p.nombre}
                    </h3>
                    <p className="text-white/75 text-sm leading-relaxed">
                      {p.descripcionCorta}
                    </p>
                    <Link
                      to={`/parroquias/${p.id}`}
                      className="mt-4 inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:gap-3 transition-all duration-200"
                    >
                      Explorar <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              ))}

              {parroquias.slice(2).map((p) => (
                <motion.div
                  key={p.id}
                  variants={fadeInUp}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="relative overflow-hidden rounded-2xl group"
                  style={{ minHeight: '220px' }}
                >
                  <img
                    src={p.imagen}
                    alt={p.nombre}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-secondary/90 text-secondary-foreground text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide">
                      {p.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-white/60 text-xs uppercase tracking-widest mb-0.5">
                      {p.subtitulo}
                    </p>
                    <h3 className="font-heading text-white text-xl font-bold mb-1">
                      {p.nombre}
                    </h3>
                    <p className="text-white/70 text-xs leading-relaxed line-clamp-2">
                      {p.descripcionCorta}
                    </p>
                    <Link
                      to={`/parroquias/${p.id}`}
                      className="mt-3 inline-flex items-center gap-1 text-primary text-xs font-semibold hover:gap-2 transition-all duration-200"
                    >
                      Ver ficha <ArrowRight size={12} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-8 text-center">
              <Link
                to="/parroquias"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                Ver todas las parroquias <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-background relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.p
                  variants={fadeInUp}
                  className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3"
                >
                  Mapa Interactivo
                </motion.p>

                <motion.h2
                  variants={fadeInUp}
                  className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6"
                >
                  Todos los templos <span className="text-primary italic">en un solo mapa</span>
                </motion.h2>

                <motion.p
                  variants={fadeInUp}
                  className="text-muted-foreground text-base leading-relaxed mb-8 max-w-md"
                >
                  Explora la ubicación de cada parroquia y planifica tu ruta por el casco histórico.
                </motion.p>

                <motion.div variants={fadeInUp}>
                  <Link
                    to="/mapa"
                    className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-full font-semibold text-sm hover:opacity-90 transition-all duration-200 shadow-md hover:-translate-y-0.5"
                  >
                    <MapPin size={16} />
                    Abrir Mapa Completo
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut' as const }}
              >
                <StaticMap />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-2">
                  Galería Visual
                </p>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                  Imágenes que <span className="text-primary italic">inspiran</span>
                </h2>
              </div>

              <Link
                to="/galeria"
                className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all duration-200"
              >
                Ver galería completa <ChevronRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              <div
                className="col-span-2 md:col-span-1 md:row-span-2 relative overflow-hidden rounded-2xl"
                style={{ minHeight: '280px' }}
              >
                <img
                  src={gallerySlots[0]}
                  alt="Galería 1"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {gallerySlots.slice(1).map((slot, i) => (
                <div
                  key={slot}
                  className="relative overflow-hidden rounded-2xl"
                  style={{ minHeight: i === 0 ? '200px' : '160px' }}
                >
                  <img
                    src={slot}
                    alt={`Galería ${i + 2}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 text-center">
              <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">
                Antes de Viajar
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground max-w-xl mx-auto leading-tight">
                Todo lo que necesitas <span className="text-primary italic">saber</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {consejos.map((consejo) => {
                const Icon = consejo.icon;

                return (
                  <div
                    key={consejo.titulo}
                    className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <h3 className="font-heading text-foreground font-bold text-lg mb-3">
                      {consejo.titulo}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {consejo.texto}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 text-center">
              <Link
                to="/consejos"
                className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all duration-200"
              >
                Guía completa de viaje <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
