import { Link } from 'react-router-dom';
import { Heart, MapPin } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/parroquias', label: 'Parroquias' },
  { href: '/mapa', label: 'Mapa Interactivo' },
  { href: '/galeria', label: 'Galería' },
  { href: '/consejos', label: 'Consejos de Viaje' },
];

const parroquiasFooter = [
  'San Pedro Apóstol',
  'San Juan Bautista',
  'Ntra. Sra. de La Candelaria de La Beatriz',
  'San José',
  'Ntra. Sra. del Valle de San Luis',
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background mt-auto">
      {/* Corte diagonal superior */}
      <div
        className="w-full overflow-hidden leading-none"
        style={{ marginTop: '-2px' }}
      >
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-16 block"
          aria-hidden="true"
        >
          <polygon
            points="0,60 1440,0 1440,60"
            fill="hsl(var(--foreground))"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-2 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Marca */}
          <div className="flex flex-col gap-5">
            <Link to="/" aria-label="Route Holy Valera - Inicio">
              <img
                src="/images/icono-cruz2.png"
                alt="Route Holy Valera"
                className="h-10 w-auto object-contain shrink-0 self-start brightness-0 invert"
              />
              Route Holy Valera
            </Link>

            <p className="text-background/70 text-sm leading-relaxed max-w-xs">
              Descubre la riqueza espiritual y cultural de la Zona Pastoral Valera.
              Cinco parroquias, una experiencia única.
            </p>

            <div className="flex items-center gap-2 text-primary text-sm font-medium">
              <MapPin size={14} />
              <span>Valera, Trujillo, Venezuela</span>
            </div>

            {/* Redes */}
            <div className="flex items-center gap-3 mt-1">
              <a
                href="#"
                aria-label="Instagram"
                className="p-2 rounded-full bg-background/10 hover:bg-primary/20 transition-colors"
              >
                <FaInstagram className="text-background/80" size={16} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="p-2 rounded-full bg-background/10 hover:bg-primary/20 transition-colors"
              >
                <FaFacebookF className="text-background/80" size={16} />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="p-2 rounded-full bg-background/10 hover:bg-primary/20 transition-colors"
              >
                <FaYoutube className="text-background/80" size={16} />
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-background font-semibold text-sm uppercase tracking-widest mb-5 opacity-60">
              Navegación
            </h3>

            <nav
              className="flex flex-col gap-3"
              aria-label="Navegación del pie de página"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-background/70 hover:text-primary text-sm transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Lista de parroquias */}
          <div>
            <h3 className="text-background font-semibold text-sm uppercase tracking-widest mb-5 opacity-60">
              Las 5 Parroquias
            </h3>

            <ul className="flex flex-col gap-3">
              {parroquiasFooter.map((p) => (
                <li
                  key={p}
                  className="flex items-center gap-2 text-background/70 text-sm"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"
                    aria-hidden="true"
                  />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-12 pt-6 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-background/40 text-xs">
            © {currentYear} Route Holy Valera. Todos los derechos reservados.
          </p>

          <p className="text-background/40 text-xs flex items-center gap-1">
            Hecho con{' '}
            <Heart
              size={11}
              className="text-secondary fill-secondary"
              aria-hidden="true"
            />{' '}
            para la Zona Pastoral Valera
          </p>
        </div>
      </div>
    </footer>
  );
}