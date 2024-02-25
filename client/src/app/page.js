import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import PopularEvents from "./components/PopularEvents";
import FeaturedEvents from "./components/FeaturedEvents";
import VipCard from "./components/VipCard";
import HeroSection from "./components/HeroSection";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="bg-white text-gray-800 dark:bg-gray-950 dark:text-white">
      <NavBar />
      <HeroSection />
      <PopularEvents />
      <FeaturedEvents />
      <VipCard />
      <Footer />
      <Contact />
    </main>
  );
}
