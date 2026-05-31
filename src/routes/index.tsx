import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import HomePage from '../pages/HomePage';
import ParroquiasPage from '../pages/ParroquiasPage';
import ParroquiaDetallePage from '../pages/ParroquiaDetallePage';
import MapaPage from '../pages/MapaPage';
import GaleriaPage from '../pages/GaleriaPage';
import ConsejosPage from '../pages/ConsejosPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'parroquias', element: <ParroquiasPage /> },
      { path: 'parroquias/:id', element: <ParroquiaDetallePage /> },
      { path: 'mapa', element: <MapaPage /> },
      { path: 'galeria', element: <GaleriaPage /> },
      { path: 'consejos', element: <ConsejosPage /> },
    ],
  },
]);