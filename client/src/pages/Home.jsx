import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TechMarquee from '../components/TechMarquee';
import HomeStats from '../components/HomeStats';
import Services from '../components/Services';
import HomeWork from '../components/HomeWork';
import HomeProcess from '../components/HomeProcess';
import WhyUs from '../components/WhyUs';
import HomeTestimonials from '../components/HomeTestimonials';
import HomeFAQ from '../components/HomeFAQ';
import HomePricing from '../components/HomePricing';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <div className="home-page bg-black text-gray-100">
      <SEO
        title="Websoftify | Software Development Company - Websites, Apps, CRM, AI"
        description="Websoftify is a leading software development company in India. We build websites, mobile apps, CRM, ERP, AI chatbots, cloud call center, and complete digital solutions."
        keywords="websoftify, software development company, website development, mobile app, CRM, ERP, AI chatbot, call center software india"
      />
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <HomeStats />
        <Services />
        <HomeWork />
        <HomeProcess />
        <WhyUs />
        <HomeTestimonials />
        <HomePricing />
        <HomeFAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
