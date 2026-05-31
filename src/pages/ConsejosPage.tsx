import type { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  AlertCircle,
  Banknote,
  Bus,
  Camera,
  Clock,
  Heart,
  MapPin,
  Phone,
  Shirt,
  Sun,
  Utensils,
} from 'lucide-react';
import PageHero from '../components/PageHero';

interface TipCard {
  icon: ReactNode;
  titulo: string;
  color: string;
  items: string[];
}

const consejos: TipCard[] = [
  {
    icon: <Clock size={22} />,
    titulo: 'Horarios y Visitas',
    color: 'bg-primary/10 text-primary border-primary/20',
    items: [
      'La mayoría de los templos abren de 7:00 a.m. a 12:00 m. y de 3:00 p.m. a 7:00 p.m.',
      'Las misas dominicales suelen ser el mejor momento para vivir la experiencia comunitaria.',
      'Evita visitar entre 12:00 m. y 3:00 p.m. si planeas entrar a varios templos.',
      'El recorrido completo puede tomar entre 3 y 4 horas caminando.',
    ],
  },
  {
    icon: <Shirt size={22} />,
    titulo: 'Vestimenta Apropiada',
    color: 'bg-secondary/10 text-secondary border-secondary/20',
    items: [
      'Cubre hombros y rodillas al entrar a cualquier templo.',
      'Lleva un pañuelo o chal ligero si usas ropa de manga corta.',
      'Usa calzado cómodo para caminar.',
      'Evita ropa con estampados o mensajes inapropiados.',
    ],
  },
  {
    icon: <Bus size={22} />,
    titulo: 'Cómo Llegar y Moverse',
    color: 'bg-accent/10 text-accent border-accent/20',
    items: [
      'Valera está conectada por carretera con otras ciudades de la región.',
      'Desde el terminal se puede llegar al centro histórico en taxi o transporte local.',
      'Varias parroquias están relativamente cerca entre sí.',
      'Los domingos suele haber menos tráfico en el centro.',
    ],
  },
  {
    icon: <Sun size={22} />,
    titulo: 'Mejor Época para Visitar',
    color: 'bg-primary/10 text-primary border-primary/20',
    items: [
      'Enero a marzo suele ser una buena época para recorridos al aire libre.',
      'Semana Santa es ideal para vivir el ambiente religioso.',
      'Las fiestas patronales ofrecen procesiones y actividades culturales.',
      'Consulta el clima antes de viajar.',
    ],
  },
  {
    icon: <Camera size={22} />,
    titulo: 'Fotografía y Respeto',
    color: 'bg-secondary/10 text-secondary border-secondary/20',
    items: [
      'Pide permiso antes de fotografiar personas en oración.',
      'Evita usar flash dentro de los templos.',
      'Respeta las señales que indiquen restricciones.',
      'Los atrios y fachadas suelen ofrecer grandes oportunidades fotográficas.',
    ],
  },
  {
    icon: <Banknote size={22} />,
    titulo: 'Presupuesto y Servicios',
    color: 'bg-accent/10 text-accent border-accent/20',
    items: [
      'Solo se pide un aporte de 5$ por persona para el recorrido completo.',
      'La entrada a los templos suele ser gratuita.',
      'Lleva efectivo por si algunos comercios no aceptan tarjeta.',
      'Puedes encontrar restaurantes y servicios cercanos en el centro.',
      'Las donaciones voluntarias siempre son bienvenidas.',
    ],
  },
];

const datosRapidos = [
  {
    icon: <MapPin size={16} />,
    label: 'Ubicación',
    valor: 'Valera, Estado Trujillo, Venezuela',
  },
  {
    icon: <Clock size={16} />,
    label: 'Duración',
    valor: '3–4 horas caminando',
  },
  {
    icon: <Sun size={16} />,
    label: 'Mejor época',
    valor: 'Temporada seca y festividades',
  },
  {
    icon: <Utensils size={16} />,
    label: 'Gastronomía',
    valor: 'Restaurantes en el centro',
  },
  {
    icon: <Phone size={16} />,
    label: 'Turismo',
    valor: 'Consulta con guías locales',
  },
  {
    icon: <Heart size={16} />,
    label: 'Entrada del recorrido',
    valor: 'Aporte de 5 dólares por persona',
  },
];

const alertas = [
  'Lleva agua para el recorrido, especialmente si caminas varias horas.',
  'Guarda tus pertenencias con atención en zonas concurridas.',
  'Consulta eventos o celebraciones especiales antes de tu visita.',
  'Verifica el estado del clima si viajas desde otra ciudad.',
];

export default function ConsejosPage() {
  return (
    <>
      <Helmet>
        <title>Consejos de Viaje — Route Holy Valera</title>
        <meta
          name="description"
          content="Consejos prácticos para recorrer las parroquias de Valera: horarios, vestimenta, transporte, fotografía y recomendaciones útiles."
        />
      </Helmet>

      <main>
        <PageHero
          eyebrow="Guía del Visitante"
          title="Consejos para tu"
          titleAccent="Recorrido"
          description="Todo lo que necesitas saber para vivir una experiencia espiritual y cultural auténtica."
          image="/images/gallery-3.jpg"
          currentLabel="Consejos de Viaje"
        />

        <section className="py-10 md:py-14 bg-background border-b border-border">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {datosRapidos.map((dato) => (
                <div
                  key={dato.label}
                  className="bg-card border border-border rounded-2xl p-4 flex flex-col gap-2"
                >
                  <div className="text-primary">{dato.icon}</div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide leading-tight">
                    {dato.label}
                  </p>
                  <p className="text-sm font-semibold text-foreground leading-snug">
                    {dato.valor}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
                Guía <span className="text-primary italic">Práctica</span>
              </h2>
              <p className="text-muted-foreground text-sm max-w-md mx-auto">
                Seis áreas clave para preparar tu visita.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {consejos.map((consejo) => (
                <article
                  key={consejo.titulo}
                  className="bg-card border border-border rounded-3xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div
                    className={`px-6 py-5 border-b border-border flex items-center gap-3 ${consejo.color}`}
                  >
                    <div className="shrink-0">{consejo.icon}</div>
                    <h3 className="font-heading font-bold text-base">
                      {consejo.titulo}
                    </h3>
                  </div>

                  <ul className="px-6 py-5 flex flex-col gap-3">
                    {consejo.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 bg-muted/40 border-t border-border">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center gap-2 mb-5">
              <AlertCircle size={18} className="text-primary" />
              <h2 className="font-heading text-xl font-bold text-foreground">
                Avisos del Viajero
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {alertas.map((alerta, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-card border border-border rounded-xl p-4"
                >
                  <AlertCircle size={14} className="text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {alerta}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-background border-t border-border">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              ¿Listo para comenzar?
            </h2>
            <p className="text-muted-foreground text-sm mb-8 max-w-sm mx-auto">
              Explora las parroquias, consulta el mapa y planifica tu recorrido espiritual.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/parroquias"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:opacity-90 transition-all duration-200 shadow-md"
              >
                Ver las 5 Parroquias
              </Link>

              <Link
                to="/mapa"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                <MapPin size={16} />
                Ver Mapa Interactivo
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}