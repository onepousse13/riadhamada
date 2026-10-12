import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LocaleProvider } from './contexts/LocaleContext';
import SiteLayout from './components/SiteLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RoomsPage from './pages/RoomsPage';
import ExperiencesPage from './pages/ExperiencesPage';
import GalleryPage from './pages/GalleryPage';
import BookingPage from './pages/BookingPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import './styles/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LocaleProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="rooms" element={<RoomsPage />} />
            <Route path="experiences" element={<ExperiencesPage />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="booking" element={<BookingPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LocaleProvider>
  </StrictMode>
);
