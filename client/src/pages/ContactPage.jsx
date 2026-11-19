import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <SEO
        title="Contact Us | Websoftify"
        description="Contact Websoftify for websites, mobile apps, CRM, ERP, AI chatbots, and custom software. Get a free consultation today."
        keywords="contact websoftify, software development quote, hire developers india"
      />
      <Navbar />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
