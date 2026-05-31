import { useEffect, useRef } from 'react';
import type { Parroquia } from '../data/parroquias';

interface DynamicMapProps {
  parroquias: Parroquia[];
  selected: Parroquia | null;
  onSelect: (parroquia: Parroquia) => void;
}

export default function DynamicMap({ parroquias, selected, onSelect }: DynamicMapProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);

  useEffect(() => {
    let mounted = true;

    async function init() {
      if (!mapRef.current || mapInstanceRef.current) return;

      const L = await import('leaflet');
      if (!mounted || !mapRef.current) return;

      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      });

      const map = L.map(mapRef.current, {
        center: [9.3241, -70.6065],
        zoom: 15,
        zoomControl: true,
        scrollWheelZoom: true,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(map);

      mapInstanceRef.current = map;

      const colors: Record<Parroquia['tagColor'], string> = {
        primary: '#C4820A',
        secondary: '#a9c40a',
        accent: '#0a4cc4',
      };

      parroquias.forEach((p) => {
        const color = colors[p.tagColor] ?? '#C4820A';

        const icon = L.divIcon({
          className: '',
          html: `
            <div style="
              width:36px;height:44px;position:relative;cursor:pointer;
              filter:drop-shadow(0 2px 6px rgba(0,0,0,0.35));
            ">
              <svg viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
                <path d="M18 2C10.268 2 4 8.268 4 16c0 10.5 14 26 14 26S32 26.5 32 16C32 8.268 25.732 2 18 2z"
                  fill="${color}" stroke="white" stroke-width="2"/>
                <circle cx="18" cy="16" r="6" fill="white" opacity="0.9"/>
                <text x="18" y="20" text-anchor="middle" font-size="9" font-weight="bold" fill="${color}">${p.orden}</text>
              </svg>
            </div>`,
          iconSize: [36, 44],
          iconAnchor: [18, 44],
          popupAnchor: [0, -46],
        });

        const marker = L.marker([p.coordenadas.lat, p.coordenadas.lng], { icon })
          .addTo(map)
          .bindPopup(
            `
            <div style="font-family:system-ui,sans-serif;min-width:180px;padding:4px 0">
              <p style="font-size:10px;color:#888;margin:0 0 2px;text-transform:uppercase;letter-spacing:.05em">${p.subtitulo}</p>
              <h3 style="font-size:14px;font-weight:700;margin:0 0 4px;color:#1a1a1a">${p.nombre}</h3>
              <p style="font-size:11px;color:#555;margin:0 0 6px;line-height:1.4">${p.descripcionCorta.slice(0, 90)}…</p>
              <a href="/univ-rutas-webapp/parroquias/${p.id}" style="font-size:11px;color:${color};font-weight:600;text-decoration:none">Ver ficha →</a>
            </div>
            `,
            { maxWidth: 220 },
          );

        marker.on('click', () => onSelect(p));
        markersRef.current.push({ id: p.id, marker });
      });

      const routeCoords = [...parroquias]
        .sort((a, b) => a.orden - b.orden)
        .map((p) => [p.coordenadas.lat, p.coordenadas.lng] as [number, number]);

      L.polyline(routeCoords, {
        color: '#C4820A',
        weight: 2.5,
        opacity: 0.6,
        dashArray: '8 6',
      }).addTo(map);
    }

    void init();

    return () => {
      mounted = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
        markersRef.current = [];
      }
    };
  }, [onSelect, parroquias]);

  useEffect(() => {
    if (!selected || !mapInstanceRef.current) return;

    mapInstanceRef.current.flyTo(
      [selected.coordenadas.lat, selected.coordenadas.lng],
      16,
      { duration: 1.2 },
    );

    const selectedMarker = markersRef.current.find((m) => m.id === selected.id);
    if (selectedMarker) {
      selectedMarker.marker.openPopup();
    }
  }, [selected]);

  return <div ref={mapRef} className="w-full h-full" />;
}