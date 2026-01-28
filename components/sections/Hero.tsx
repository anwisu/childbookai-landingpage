import { HeroCarousel } from "./HeroCarousel";

export function Hero() {
  return (
    <section className="relative pt-0 pb-0">
      <div className="max-w-[1440px] mx-auto px-0 sm:px-6">
        <HeroCarousel />
      </div>
    </section>
  );
}
