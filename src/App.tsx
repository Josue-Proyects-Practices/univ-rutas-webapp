import { RouterProvider } from 'react-router-dom';
import CookieBanner from './components/CookieBanner';
import CookieBannerErrorBoundary from './components/CookieBannerErrorBoundary';
import { router } from './routes';

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <CookieBannerErrorBoundary>
        <CookieBanner />
      </CookieBannerErrorBoundary>
    </>
  );
}