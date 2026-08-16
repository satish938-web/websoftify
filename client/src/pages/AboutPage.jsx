import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import About from '../components/About';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <SEO
        title="About Us | Websoftify - Software Development Company"
        description="Learn about Websoftify — a full-stack software company delivering websites, apps, CRM, ERP, AI, and cloud solutions across India."
        keywords="about websoftify, software company india, web development team"
        canonical="https://websoftify.com/about"
      />
      <Navbar />
      <main className="pt-20 sm:pt-24 pb-16">
        <About variant="page" />
      </main>
      <Footer />
    </div>
  );
}
