import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div
        className="relative w-full min-h-screen bg-repeat-y bg-no-repeat bg-top bg-center bg-auto"
        style={{ backgroundImage: "url('/background/bg-2.png')" }}      >
        <Navbar />
        <Hero />
        <Services />
      </div>
    </main>
  );
}


