"use client";

import Image from "next/image";
import { CustomCard } from "@/components/shared/CustomCard";
import { AppButton } from "@/components/shared/AppButton";

interface PricingCard {
  id: number;
  title: string;
  price: string;
  period?: string;
  disclaimer?: string;
  description?: string;
  features: string[];
  popular?: boolean;
  badge?: string | { image: string; alt: string };
  buttonText: string | { text: string; icon: string };
}

const individualPlans: PricingCard[] = [
  {
    id: 1,
    title: "Single Credit",
    price: "$2.5",
    period: "/1 credit",
    description:
      "You can buy a single credit to create a personalized book or use it to generate a book from a template. Illustrator is not included in the single credit purchase.",
    features: [
      "Listen to books come alive with text-to-speech feature",
      "Books in your language and voiceover",
      "Edit or change your illustrations up to 16 times",
      "Limitless editing with canva integration",
      "Personalized and unique characters",
      "Up to 12 pages per AI generated book",
      "One personalized book or a template generation",
    ],
    buttonText: "Buy a Single Book",
  },
  {
    id: 2,
    title: "Premium Plan",
    price: "$29",
    period: "/year*",
    disclaimer: "*Cancel anytime",
    description:
      "Premium plan is the best option for those who want to create a lot of personalized children's books with AI or want to illustrate their own story with our Childbook Illustrator™",
    features: [
      "Access to Childbook Illustrator™ and Illustrate your Children's Book with AI - without pages limitation",
      "500 illustrations per month",
      "Up to 100 personalized AI generated books per month",
      "Limitless editing with canva integration",
      "Books in your language",
      "Your name on the book cover",
      "Edit the story and illustrations to your liking",
      "Option for more text content per page",
      "Up to 20 pages per generated book",
      "Premium book cover that you can generate",
      "Personalized and unique characters, illustrations and stories",
      "Listen to books come alive with text-to-speech Feature",
    ],
    popular: true,
    badge: { image: "/illustrations/gold-crown-icon.svg", alt: "Crown" },
    buttonText: "Get Premium",
  },
  {
    id: 3,
    title: "Hobby Plan",
    price: "$19",
    period: "/year*",
    disclaimer: "*Cancel anytime",
    description:
      "Hobby plan is the best option for those who want to create a few personalized children's books with AI or want to illustrate a short story with our AI Illustrator™",
    features: [
      "Access to Childbook Illustrator™ and Illustrate your Children's Book with AI- without pages limitation",
      "100 illustrations per month",
      "Up to 20 ai generated books per month",
      "Books in your language",
      "Limitless editing with canva integration",
      "Your name on the book cover",
      "Option for more text content per page",
      "Up to 16 pages per generated book",
      "Personalized and unique characters, illustrations and stories",
      "Listen to books come alive with text-to-speech Feature",
    ],
    badge: { image: "/illustrations/silver-crown-icon.svg", alt: "Crown" },
    buttonText: "Buy Hobby Plan",
  },
];

interface IndividualPricingProps {
  isYearly: boolean;
}

export function IndividualPricing({ isYearly }: IndividualPricingProps) {
  // isYearly is available for future pricing calculations
  void isYearly;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center items-start">
      {individualPlans.map((plan, index) => {
            const isAlternate = index % 2 === 1;
            const headerColor = isAlternate
              ? "var(--blue-800)"
              : "var(--blue-400)";
            const textColorClass = isAlternate
              ? "text-white"
              : "text-foreground";
            // Calculate height based on content - popular card is taller
            const baseHeight = 930;
            const cardHeight = plan.popular ? 1060 : baseHeight;
            return (
              <div
                key={plan.id}
                className={`flex justify-center items-start ${
                  plan.popular ? "relative z-20" : "relative z-10"
                }`}
              >
                <CustomCard
                  width={400}
                  height={cardHeight}
                  fillColor="var(--blue-100)"
                  headerColor={headerColor}
                  svgVariant={index % 2 === 0 ? "first" : "second"}
                  className={plan.popular ? " origin-top" : ""}
                  headerContent={
                    <div className={`flex flex-col h-full ${textColorClass}`}>
                      {plan.popular && <div></div>}

                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <h3
                            className={`text-heading-sm font-bold ${textColorClass}`}
                          >
                            {plan.title}
                          </h3>
                          {plan.badge &&
                            (typeof plan.badge === "string" ? (
                              <span className="text-2xl">{plan.badge}</span>
                            ) : (
                              <Image
                                src={plan.badge.image}
                                alt={plan.badge.alt}
                                width={24}
                                height={24}
                                className="shrink-0"
                              />
                            ))}
                        </div>
                        {plan.disclaimer && (
                          <p
                            className={`text-sm ${
                              isAlternate ? "text-white" : "text-foreground"
                            }`}
                          >
                            {plan.disclaimer}
                          </p>
                        )}
                      </div>

                      <div className="mb-2">
                        <span
                          className={`text-heading-xl font-bold ${textColorClass}`}
                        >
                          {plan.price}
                        </span>
                        {plan.period && (
                          <span
                            className={`text-body ${
                              isAlternate ? "text-white" : "text-foreground"
                            } ml-2`}
                          >
                            {plan.period}
                          </span>
                        )}
                      </div>

                      {plan.description && (
                        <p
                          className={`text-body-sm ${
                            isAlternate ? "text-white" : "text-foreground"
                          } mb-6`}
                        >
                          {plan.description}
                        </p>
                      )}
                    </div>
                  }
                >
                  <div className="flex flex-col h-full">
                    <ul className="space-y-2 -mt-12 mb-3">
                      {plan.features.map((feature, index) => {
                        const isLast = index === plan.features.length - 1;
                        return (
                          <li
                            key={index}
                            className={`flex items-start text-body text-foreground ${
                              isLast ? "pt-2 pb-4" : "py-2"
                            }`}
                          >
                            <Image
                              src="/illustrations/check-icon.svg"
                              alt=""
                              width={20}
                              height={20}
                              className="mr-2 shrink-0 mt-0.5"
                            />
                            <span>{feature}</span>
                          </li>
                        );
                      })}
                    </ul>

                    <AppButton
                      variant="primary"
                      size="md"
                      shadow
                      className="w-full text-heading-sm"
                    >
                      {typeof plan.buttonText === "string"
                        ? plan.buttonText
                        : plan.buttonText.text}
                    </AppButton>
                  </div>
                </CustomCard>
              </div>
            );
          })}
    </div>
  );
}
