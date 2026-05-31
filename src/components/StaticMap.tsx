import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

interface MapPinMarkerProps {
  label: string;
  top: string;
  left: string;
}

function MapPinMarker({ label, top, left }: MapPinMarkerProps) {
  return (
    <div
      className="absolute flex flex-col items-center"
      style={{ top, left, transform: 'translate(-50%, -100%)' }}
    >
      <div className="bg-secondary text-secondary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap shadow-md mb-1">
        {label}
      </div>
      <div className="w-3 h-3 bg-secondary rounded-full shadow-md border-2 border-white" />
      <div className="w-0.5 h-3 bg-secondary/60" />
    </div>
  );
}

export default function StaticMap() {
  return (
    <div className="relative">
      <div className="relative bg-card border border-border rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50">
          {/* Grid decorativo */}
          <svg className="absolute inset-0 w-full h-full opacity-20" aria-hidden="true">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="hsl(var(--border))"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* Calles / ruta simulada */}
          <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
            <line
              x1="0"
              y1="50%"
              x2="100%"
              y2="50%"
              stroke="hsl(var(--border))"
              strokeWidth="3"
              opacity="0.4"
            />
            <line
              x1="30%"
              y1="0"
              x2="30%"
              y2="100%"
              stroke="hsl(var(--border))"
              strokeWidth="2"
              opacity="0.3"
            />
            <line
              x1="65%"
              y1="0"
              x2="65%"
              y2="100%"
              stroke="hsl(var(--border))"
              strokeWidth="2"
              opacity="0.3"
            />
            <path
              d="M 20% 45% Q 35% 25% 50% 35% Q 65% 45% 75% 30% Q 85% 55% 70% 65% Q 55% 75% 40% 65%"
              fill="none"
              stroke="hsl(var(--secondary))"
              strokeWidth="2.5"
              strokeDasharray="8 4"
              opacity="0.7"
            />
          </svg>

          {/* Marcadores */}
          <MapPinMarker label="San Pedro" top="42%" left="22%" />
          <MapPinMarker label="San Juan" top="32%" left="72%" />
          <MapPinMarker label="Candelaria" top="28%" left="48%" />
          <MapPinMarker label="San José" top="62%" left="68%" />
          <MapPinMarker label="Del Valle" top="68%" left="38%" />
        </div>

        {/* Caja inferior */}
        <div className="absolute bottom-4 left-4 right-4 bg-card/90 backdrop-blur-sm rounded-xl p-3 border border-border/50">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold text-foreground">Zona Pastoral Valera</p>
              <p className="text-xs text-muted-foreground">
                Trujillo, Venezuela · 5 templos
              </p>
            </div>

            <Link
              to="/mapa"
              className="text-xs font-semibold text-accent hover:underline flex items-center gap-1 shrink-0"
            >
              Explorar <ArrowRight size={11} />
            </Link>
          </div>
        </div>
      </div>

      {/* Badge flotante */}
      <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-2xl px-4 py-2 shadow-lg">
        <div className="flex items-center gap-1.5">
          <Star size={13} className="fill-current" />
          <span className="text-xs font-bold">Ruta Recomendada</span>
        </div>
      </div>
    </div>
  );
}