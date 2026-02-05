"use client";

import { Navbar } from "@/components/layout";
import { Hero, Services, CreateABook } from "@/sections";
import dynamic from "next/dynamic";
import { LoadingProvider, useLoading } from "@/components/providers/LoadingProvider";

// Lazy load below-the-fold components
const Steps = dynamic(() => import("@/sections/Steps").then((mod) => mod.Steps), {
  loading: () => <div className="min-h-[400px]" />,
});

const Pricing = dynamic(() => import("@/sections/Pricing").then((mod) => mod.Pricing), {
  loading: () => <div className="min-h-[500px]" />,
});

const Features = dynamic(() => import("@/sections/Features").then((mod) => mod.Features), {
  loading: () => <div className="min-h-[600px]" />,
});

const Footer = dynamic(() => import("@/components/layout/Footer").then((mod) => mod.Footer));

function HomeContent() {
  const { heroLoaded } = useLoading();

  return (
    <main id="main-content" className="min-h-screen flex flex-col bg-blue-800 overflow-x-hidden">
      <div className="relative w-full min-h-screen bg-hero">
        <Navbar />
        <Hero />
        {heroLoaded && (
          <>
            <Services />
            <CreateABook />
          </>
        )}
      </div>
      {heroLoaded && (
        <>
          <div className="relative w-full min-h-screen bg-blue-800 -top-2 sm:-top-4">
            <Steps />
            <Pricing />
          </div>
          <div className="relative w-full min-h-screen bg-contain bg-center mt-12 sm:mt-16 lg:mt-24 bg-footer">
            <Features />
            <Footer />
          </div>
        </>
      )}
    </main>
  );
}

export default function Home() {
  return (
    <LoadingProvider>
      <HomeContent />
    </LoadingProvider>
  );
}
