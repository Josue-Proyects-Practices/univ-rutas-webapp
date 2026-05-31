import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight as ChevronRightIcon, X, ZoomIn } from 'lucide-react';
import PageHero from '../components/PageHero';

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
  visible: { transition: { staggerChildren: 0.07 } },
};

interface GalleryImage {
  slot: string;
  titulo: string;
  descripcion: string;
  parroquia?: string;
}

const imagenes: GalleryImage[] = [
  {
    slot: '/images/gallery-1.jpg',
    titulo: 'Fachada Principal Parroquia San José',
    descripcion: 'Vista panorámica del centro histórico con sus templos.',
    parroquia: 'San José',
  },
  {
    slot: '/images/gallery-2.jpg',
    titulo: 'Arte Sacro',
    descripcion: 'Detalles de imágenes y retablos que adornan los templos.',
    parroquia: 'San Juan Bautista',
  },
  {
    slot: '/images/gallery-3.jpg',
    titulo: 'Arquitectura Religiosa',
    descripcion: 'Fachadas y detalles que forman parte del patrimonio local.',
    parroquia: 'San Pedro Apóstol',
  },
  {
    slot: '/images/gallery-4.jpg',
    titulo: 'Historia de la Parroquia',
    descripcion: 'Personas importantes en la historia de la parroquia.',
    parroquia: 'San Pedro Apóstol',
  },
  {
    slot: '/images/parroquia-valle.jpg',
    titulo: 'Devoción Mariana',
    descripcion: 'Fieles en oración durante una celebración comunitaria.',
    parroquia: 'Ntra. Sra. del Valle',
  },
  {
    slot: '/images/gallery-6.jpg',
    titulo: 'Devoción Popular',
    descripcion: 'Reliquia del Doctor José Gregorio Hernández.',
    parroquia: 'Nuestra Señora de La Candelaria de La Beatriz',
  },
];

export default function GaleriaPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + imagenes.length) % imagenes.length : null));
  const nextImage = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % imagenes.length : null));

  const current = lightboxIndex !== null ? imagenes[lightboxIndex] : null;

  return (
    <>
      <Helmet>
        <title>Galería — Route Holy Valera</title>
      </Helmet>

      <main>
        <PageHero
          eyebrow="Imágenes que inspiran"
          title="Galería"
          titleAccent="Visual"
          description={`${imagenes.length} fotografías del recorrido religioso y cultural por Valera.`}
          image="/images/gallery-1.jpg"
          currentLabel="Galería"
        />

        <section className="py-12 md:py-20 bg-background">
          <div className="container">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {imagenes.map((img, i) => (
                <motion.div key={img.slot} variants={fadeInUp} className="break-inside-avoid">
                  <button
                    onClick={() => openLightbox(i)}
                    className="group relative w-full overflow-hidden rounded-2xl block focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    aria-label={`Ver imagen: ${img.titulo}`}
                  >
                    <img
                      src={`${import.meta.env.BASE_URL}${img.slot}`}
                      alt={img.titulo}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      width={600}
                      height={400}
                    />

                    <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/50 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
                        <ZoomIn size={28} className="text-white" />
                        <p className="text-white text-xs font-semibold px-3 text-center">{img.titulo}</p>
                      </div>
                    </div>

                    {img.parroquia && (
                      <div className="absolute bottom-3 left-3 bg-card/90 backdrop-blur-sm rounded-full px-2.5 py-1 text-xs font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {img.parroquia}
                      </div>
                    )}
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-12 bg-muted/30 border-t border-border">
          <div className="container text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              ¿Te inspiraron estas imágenes?
            </h2>
            <p className="text-muted-foreground text-sm mb-6 max-w-sm mx-auto">
              Planifica tu visita y vive la experiencia en persona.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/parroquias"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-semibold text-sm hover:opacity-90 transition-all duration-200 shadow-md"
              >
                Ver las Parroquias
              </Link>
              <Link
                to="/mapa"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                Ver en el Mapa
              </Link>
            </div>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {lightboxIndex !== null && current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label={`Imagen ampliada: ${current.titulo}`}
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2.5 transition-colors"
              aria-label="Cerrar galería"
            >
              <X size={20} className="text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
              aria-label="Imagen anterior"
            >
              <ChevronLeft size={22} className="text-white" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="max-w-4xl w-full flex flex-col items-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={`${import.meta.env.BASE_URL}${current.slot}`}
                alt={current.titulo}
                className="max-h-[70vh] w-auto max-w-full rounded-xl object-contain"
              />
              <div className="text-center">
                <p className="text-white font-semibold text-base">{current.titulo}</p>
                <p className="text-white/60 text-sm mt-1">{current.descripcion}</p>
                {current.parroquia && (
                  <p className="text-primary text-xs mt-1 font-medium">{current.parroquia}</p>
                )}
              </div>
              <p className="text-white/30 text-xs">
                {lightboxIndex + 1} / {imagenes.length}
              </p>
            </motion.div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
              aria-label="Imagen siguiente"
            >
              <ChevronRightIcon size={22} className="text-white" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}