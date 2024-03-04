import Contact from "./components/Contact";
import EventForm from "./components/EventForm";
import Test from "./components/Test";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {/* <Test /> */}
        {/* <Contact></Contact> */}
        <EventForm />
      </div>
    </main>
  );
}
