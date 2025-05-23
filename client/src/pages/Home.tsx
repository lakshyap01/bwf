import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Sponsors from '@/components/Sponsors';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen font-montserrat text-dark bg-light">
      <Navbar />
      <Hero />
      <Sponsors />
      <Footer />
    </div>
  );
}
