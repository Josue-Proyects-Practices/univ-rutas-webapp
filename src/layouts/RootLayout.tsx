import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Website from '../layouts/Website';
import Header from '../layouts/parts/Header';
import Footer from '../layouts/parts/Footer';

export default function RootLayout() {
  return (
    <Website>
      <Helmet>
        <title>Route Holy Valera — Guía Turística Religiosa</title>
        <meta
          name="description"
          content="Descubre las 5 parroquias más visitadas de la Zona Pastoral Valera, Trujillo, Venezuela."
        />
        <meta property="og:site_name" content="Route Holy Valera" />
        <meta name="theme-color" content="#C4820A" />
      </Helmet>

      <ScrollRestoration />
      <Header />
      <Outlet />
      <Footer />
    </Website>
  );
}