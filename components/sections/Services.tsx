import Image from "next/image";

interface ServiceCard {
  id: number;
  image: string;
  title: string;
  description: string;
}

const Blue2 = () => (
  <Image src="/illustrations/blue-2.svg" alt="" width={56} height={56} aria-hidden />
);

const services: ServiceCard[] = [
  {
    id: 1,
    image: "/illustrations/step-1.svg",
    title: "Create Your Book",
    description:
      "If you have an idea for a book and want to create it based on a short description - use Create Button.",
  },
  {
    id: 2,
    image: "/illustrations/step-2.svg",
    title: "Illustrations For Your Content",
    description:
      "If you want to generate a lot of different illustrations with your defined characters - use Illustrator Feature.",
  },
  {
    id: 3,
    image: "/illustrations/step-3.svg",
    title: "Templates For Your Book",
    description:
      "Create books even faster - Choose one of the ready-made book templates and replace the character with your own.",
  },
  {
    id: 4,
    image: "/illustrations/step-4.svg",
    title: "Order Physical Book",
    description:
      "If you want to buy the book you generated in paper version - click the basket button.",
  },
];

export function Services() {
  return (
    <section className="relative w-full py-20 min-h-[500px]">
      {/* Services Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background/services-bg.svg"
          alt=""
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-display">
            <span className="inline-flex items-baseline text-foreground">
              We&nbsp;
              <span className="inline-flex items-center">
                <Blue2 />
              </span>
              <span className="text-primary">ffer</span>
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center text-center"
            >
              <div className="relative w-64 h-64 mb-6">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="text-heading-sm font-bold text-foreground">
                {service.title}
              </h3>

              <p className="text-foreground text-body-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

