import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, MapPin, X } from 'lucide-react';
import DynamicMap from '../components/DynamicMap';
import PageHero from '../components/PageHero';
import { parroquias, type Parroquia } from '../data/parroquias';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: 'easeOut' as const,
    },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function MapaPage() {
  const [selected, setSelected] = useState<Parroquia | null>(null);

  return (
    <>
      <Helmet>
        <title>Mapa Interactivo — Route Holy Valera</title>
        <meta
          name="description"
          content="Explora el mapa interactivo de las parroquias de la Zona Pastoral Valera."
        />
      </Helmet>

      <main className="flex flex-col">
        <PageHero
          eyebrow="Zona Pastoral Valera"
          title="Mapa"
          titleAccent="Interactivo"
          description="Haz clic en cada parroquia para ver información detallada y planificar tu recorrido."
          image="/images/hero.jpg"
          currentLabel="Mapa"
        />

        {/* MAPA + LISTA */}
        <section className="bg-background py-8 md:py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* LISTADO */}
              <aside className="lg:col-span-1 flex flex-col gap-3">
                <h2 className="font-heading text-lg font-bold text-foreground mb-2">
                  Las 5 Parroquias
                </h2>

                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={stagger}
                  className="flex flex-col gap-3"
                >
                  {parroquias.map((p) => (
                    <motion.button
                      key={p.id}
                      variants={fadeInUp}
                      onClick={() =>
                        setSelected(selected?.id === p.id ? null : p)
                      }
                      className={`text-left rounded-2xl border p-4 transition-all duration-200 hover:shadow-md ${
                        selected?.id === p.id
                          ? 'border-primary bg-primary/5 shadow-md'
                          : 'border-border bg-card hover:border-primary/40'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 mt-0.5"
                          style={{
                            backgroundColor:
                              p.tagColor === 'primary'
                                ? '#C4820A'
                                : p.tagColor === 'secondary'
                                ? '#a9c40a'
                                : '#0a4cc4',
                          }}
                        >
                          {p.orden}
                        </div>

                        <div className="min-w-0">
                          <p className="text-xs text-muted-foreground mb-0.5">
                            {p.subtitulo}
                          </p>

                          <h3 className="font-semibold text-foreground text-sm leading-tight">
                            {p.nombre}
                          </h3>

                          <div className="flex items-center gap-1 mt-1.5 text-xs text-muted-foreground">
                            <Clock size={11} />
                            <span className="truncate">
                              {p.horario.split('|')[0].trim()}
                            </span>
                          </div>
                        </div>
                      </div>

                      {selected?.id === p.id && (
                        <div className="mt-3 pt-3 border-t border-border/60">
                          <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                            {p.descripcionCorta}
                          </p>

                          <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                            <MapPin size={11} />
                            <span>{p.direccion}</span>
                          </div>

                          <Link
                            to={`/parroquias/${p.id}`}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:gap-2 transition-all"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Ver ficha completa <ArrowRight size={12} />
                          </Link>
                        </div>
                      )}
                    </motion.button>
                  ))}
                </motion.div>
              </aside>

              {/* MAPA */}
              <div className="lg:col-span-2">
                <div
                  className="relative rounded-3xl overflow-hidden border border-border shadow-xl"
                  style={{ height: '560px' }}
                >
                  <DynamicMap
                    parroquias={parroquias}
                    selected={selected}
                    onSelect={setSelected}
                  />

                  {/* Botón cerrar selección */}
                  {selected && (
                    <button
                      onClick={() => setSelected(null)}
                      className="absolute top-4 right-4 z-[1000] bg-card/90 backdrop-blur-sm rounded-full p-2 border border-border shadow-md"
                    >
                      <X size={14} />
                    </button>
                  )}

                  {/* Leyenda */}
                  <div className="absolute bottom-4 left-4 bg-card/95 backdrop-blur-sm rounded-xl px-4 py-3 border border-border shadow-md z-[1000]">
                    <p className="text-xs font-bold text-foreground mb-2">
                      Leyenda
                    </p>

                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-5 h-0.5 border-t-2 border-dashed border-primary/50" />
                        Ruta sugerida
                      </div>

                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-3 h-3 rounded-full bg-primary" />
                        Parroquia
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground mt-2 text-right">
                  Mapa basado en OpenStreetMap
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ORDEN DEL RECORRIDO */}
        <section className="py-12 md:py-16 bg-muted/30 border-t border-border">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
                Orden del <span className="text-primary italic">Recorrido</span>
              </h2>

              <p className="text-muted-foreground text-sm max-w-md mx-auto">
                Ruta sugerida para visitar las cinco parroquias.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
              {parroquias.map((p, i) => (
                <div key={p.id} className="flex items-center">
                  <Link
                    to={`/parroquias/${p.id}`}
                    className="flex flex-col items-center gap-2 hover:scale-105 transition-transform"
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-md"
                      style={{
                        backgroundColor:
                          p.tagColor === 'primary'
                            ? '#C4820A'
                            : p.tagColor === 'secondary'
                            ? '#a9c40a'
                            : '#0a4cc4',
                      }}
                    >
                      {p.orden}
                    </div>

                    <p className="text-xs font-semibold text-foreground text-center max-w-[90px] leading-tight">
                      {p.nombre}
                    </p>
                  </Link>

                  {i < parroquias.length - 1 && (
                    <div className="w-6 md:w-10 h-0.5 bg-border mx-2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}