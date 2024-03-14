import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import PopularEvents from "./components/PopularEvents";
import FeaturedEvents from "./components/FeaturedEvents";
import VipCard from "./components/VipCard";
import HeroSection from "./components/HeroSection";
import Contact from "./components/Contact";
import AboutUsSection from "./components/AboutUsSection/AboutUsSection";
import LoginForm from './components/LoginForm/LoginForm';
import ProfilePage from "./components/ProfilePage/ProfilePage";
import EventForm from "./components/EventForm";
import Reservation from "./components/Reservation";

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
        <div className="w-full items-center justify-between font-mono text-sm">
          <EventForm />
          <Reservation/>
          <AboutUsSection/>
         <ProfilePage/>
         <LoginForm/>
      
      </div>
    </main>
  );
}
