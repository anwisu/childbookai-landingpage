import type { Decoration } from "@/lib/types";

// Decorative elements for HeroCarousel
// Add your decorative elements here - they will be rendered automatically
export const heroCarouselDecorations: Decoration[] = [
  // child-img.svg - top right of the carousel
  {
    id: "child-img",
    src: "/illustrations/child-img.svg",
    alt: "",
    width: 120,
    height: 120,
    className:
      "absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 lg:top-18 lg:right-20 xl:top-20 xl:right-22 z-20 pointer-events-none",
    sizeClassName: "w-20 h-auto sm:w-14 md:w-22 lg:w-24 xl:w-30",
    responsive: { hidden: "hidden", visible: "sm:block" },
  },
  // confetti.svg - top center of the carousel
  {
    id: "confetti",
    src: "/illustrations/confetti.svg",
    alt: "",
    width: 20,
    height: 54,
    className:
      "absolute sm:top-16 sm:left-[40%] md:top-24 md:left-[42%] lg:top-4 lg:left-[46%] -translate-x-1/2 sm:top-6 md:top-8 lg:top-30 z-20 pointer-events-none",
    sizeClassName: "w-16 h-auto sm:w-4 md:w-8 lg:w-12",
    responsive: { hidden: "hidden", visible: "sm:block" },
  },
  // crown.svg - left of the ellipse
  {
    id: "crown",
    src: "/illustrations/crown.svg",
    alt: "",
    width: 60,
    height: 60,
    className:
      "absolute top-[45%] right-[25%] sm:top-[54%] sm:right-[30%] md:top-[55%] md:right-[26%] lg:top-[54%] lg:right-[25%] xl:top-[53%] xl:right-[23%] z-20 pointer-events-none",
    sizeClassName: "w-8 h-auto sm:w-12 md:w-16 lg:w-20 xl:w-24",
    responsive: { hidden: "hidden", visible: "sm:block" },
  },
  // Ellipse 10.svg - right of the crown, bottom of the child-img
  {
    id: "ellipse-10",
    src: "/illustrations/Ellipse 10.svg",
    alt: "",
    width: 183,
    height: 190,
    className:
      "absolute top-[50%] right-[20%] sm:top-[18%] sm:right-[7%] md:top-[30%] md:right-[8%] lg:top-[32%] lg:right-[10%] xl:top-[35%] z-14 pointer-events-none",
    sizeClassName:
      "w-auto h-auto sm:h-40 sm:h-20 md:h-38 md:h-42 lg:h-46 xl:h-50",
    responsive: { hidden: "hidden", visible: "sm:block" },
  },
  // leaf.svg - bottom of the confetti
  {
    id: "leaf",
    src: "/illustrations/leaf.svg",
    alt: "",
    width: 50,
    height: 50,
    className:
      "absolute top-[25%] left-[55%] sm:top-[34%] sm:left-[38%] md:top-[36%] md:left-[36%] lg:top-[38%] lg:left-[40%] z-20 pointer-events-none",
    sizeClassName: "w-8 h-auto sm:w-18 md:w-28 lg:w-32",
    responsive: { hidden: "hidden", visible: "sm:block" },
  },
  // star.svg (start.svg) - bottom of leaf
  {
    id: "star",
    src: "/illustrations/start.svg",
    alt: "",
    width: 40,
    height: 40,
    className:
      "absolute top-[32%] left-[58%] sm:top-[70%] sm:left-[38%] md:top-[70%] md:left-[35%] lg:top-[70%] lg:left-[35%] z-20 pointer-events-none",
    sizeClassName: "w-6 h-auto sm:w-8 md:w-10 lg:w-14 xl:w-18",
    responsive: { hidden: "hidden", visible: "sm:block" },
  },
  // heart.svg - bottom right of the carousel
  {
    id: "heart",
    src: "/illustrations/heart.svg",
    alt: "",
    width: 50,
    height: 50,
    className:
      "absolute bottom-4 right-4 sm:bottom-14 sm:right-[14%] md:bottom-20 md:right-[12%] lg:bottom-22 xl:bottom-18 z-20 pointer-events-none",
    sizeClassName: "w-8 h-auto sm:w-8 md:w-12 lg:w-16 xl:w-20",
    responsive: { hidden: "hidden", visible: "sm:block" },
  },
];
