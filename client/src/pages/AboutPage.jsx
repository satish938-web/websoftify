import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import About from '../components/About';
import HomeProcess from '../components/HomeProcess';
import HomeCTA from '../components/HomeCTA';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <SEO
        title="About Us | Websoftify - Software Development Company"
        description="Websoftify is a dedicated team of developers and designers in Delhi NCR building websites, CRM, mobile apps, and AI & WhatsApp automation for growing businesses."
        keywords="about websoftify, software company delhi ncr, web development team"
      />
      <Navbar />
      <main className="pt-20 sm:pt-24">
        <About />
        <HomeProcess />
        <HomeCTA />
      </main>
      <Footer />
    </div>
  );
}
