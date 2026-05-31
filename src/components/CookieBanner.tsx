import { useEffect, useState } from 'react';

const STORAGE_KEY = 'holy-valera-cookie-consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) setVisible(true);
  }, []);

  const accept = () => {
    window.localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
  };

  const reject = () => {
    window.localStorage.setItem(STORAGE_KEY, 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[9999] md:left-auto md:max-w-md">
      <div className="bg-card border border-border rounded-2xl shadow-xl p-5">
        <h3 className="font-heading text-lg font-bold text-foreground mb-2">Uso de cookies</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Este sitio usa cookies y almacenamiento local para mejorar tu experiencia de navegación.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={accept}
            className="bg-primary text-primary-foreground px-4 py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition"
          >
            Aceptar
          </button>
          <button
            onClick={reject}
            className="border border-border px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-muted transition"
          >
            Rechazar
          </button>
        </div>
      </div>
    </div>
  );
}