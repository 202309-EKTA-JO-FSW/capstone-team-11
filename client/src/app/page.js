import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import PopularEvents from "./components/PopularEvents";
import FeaturedEvents from "./components/FeaturedEvents";
import VipCard from "./components/VipCard";
import HeroSection from "./components/HeroSection";
import Contact from "./components/Contact";
import AboutUsSection from "./components/AboutUsSection/AboutUsSection";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import EventForm from "./components/EventForm";

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
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex">
          <EventForm />
          <AboutUsSection/>
         <ProfilePage/>
         <LoginPopup/>
      </div>
    </main>
  );
}
