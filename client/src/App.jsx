import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ServicesList from './pages/ServicesList';
import ServicePage from './pages/ServicePage';
import WorkPage from './pages/WorkPage';
import WorkCategoryPage from './pages/WorkCategoryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-shell min-h-screen bg-black text-gray-100 overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesList />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:categorySlug" element={<WorkCategoryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
