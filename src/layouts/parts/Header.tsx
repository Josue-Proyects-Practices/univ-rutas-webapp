import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Menu, X } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Inicio' },
  { href: '/parroquias', label: 'Parroquias' },
  { href: '/mapa', label: 'Mapa' },
  { href: '/galeria', label: 'Galería' },
  { href: '/consejos', label: 'Consejos' },
];

export default function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-card/95 backdrop-blur-md shadow-md border-b border-border'
          : 'bg-card/80 backdrop-blur-sm border-b border-border/50'
      }`}
    >
      <div className="container">
        <div className="flex h-20 md:h-24 items-center justify-between">
          <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="Ir al inicio">
            <img
            
              src={`${import.meta.env.BASE_URL}images/icono-cruz.png`}
              alt="Route Holy Valera"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1" aria-label="Navegación principal">
            {navItems.map((item) => {
              const active = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-200 ${
                    active
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-foreground/70 hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/mapa"
              className="flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <MapPin size={15} />
              Ver Mapa
            </Link>
          </div>

          <button
            className="md:hidden p-2.5 hover:bg-muted rounded-xl transition-colors"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            aria-label={isMobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMobileOpen && (
          <div className="md:hidden border-t border-border py-4 pb-6">
            <nav className="flex flex-col gap-1" aria-label="Navegación móvil">
              {navItems.map((item) => {
                const active = location.pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      active
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground/70 hover:text-foreground hover:bg-muted'
                    }`}
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <Link
                to="/mapa"
                className="mt-3 flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-5 py-3 rounded-xl text-sm font-semibold"
                onClick={() => setIsMobileOpen(false)}
              >
                <MapPin size={15} />
                Ver Mapa Interactivo
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}