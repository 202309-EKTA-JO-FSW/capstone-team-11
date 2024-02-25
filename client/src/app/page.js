import Test from "./components/Test";
import AboutUsSection from "./components/AboutUsSection/AboutUsSection";
import ProfilePage from "./components/ProfilePage/ProfilePage";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex">
        {/* <Test /> */}
        <AboutUsSection/>
       <ProfilePage/>
      </div>
    </main>
  );
}
