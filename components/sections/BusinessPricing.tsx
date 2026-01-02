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

const businessPlans: PricingCard[] = [
  {
    id: 1,
    title: "Business Plan",
    price: "$99",
    period: "/year*",
    disclaimer: "*Cancel anytime",
    description:
      "Perfect for businesses, publishers, and professional authors who need high volume of illustrations and books without childbook.ai watermark.",
    features: [
      "Commercial license for all generated content",
      "2000 illustrations per month in our Childbook Illustrator™",
      "Up to 200 AI generated books per month with 24 pages",
      "Export without watermarks",
      "Upload your own illustrations for customization",
      "Priority queue for faster AI generation",
      "All features from Premium plan included",
    ],
    buttonText: "Get Business Plan",
  },
];

interface BusinessPricingProps {
  isYearly: boolean;
}

export function BusinessPricing({ isYearly }: BusinessPricingProps) {
  // isYearly is available for future pricing calculations
  void isYearly;
  return (
    <div className="flex justify-center items-start">
      {businessPlans.map((plan) => {
            // Split features into two columns
            const midPoint = Math.ceil(plan.features.length / 2);
            const leftColumnFeatures = plan.features.slice(0, midPoint);
            const rightColumnFeatures = plan.features.slice(midPoint);

            return (
              <div
                key={plan.id}
                className="flex justify-center items-start relative pb-20 z-10"
              >
                <CustomCard
                  width={650}
                  height={600}
                  fillColor="var(--blue-100)"
                  headerColor="#54E6ED"
                  svgVariant="business"
                  headerContent={
                    <div className="flex flex-col h-full text-foreground">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <h3 className="text-heading-sm font-bold text-foreground">
                            {plan.title}
                          </h3>
                          {plan.badge && (
                            typeof plan.badge === "string" ? (
                              <span className="text-2xl">{plan.badge}</span>
                            ) : (
                              <Image
                                src={plan.badge.image}
                                alt={plan.badge.alt}
                                width={24}
                                height={24}
                                className="shrink-0"
                              />
                            )
                          )}
                        </div>
                        {plan.disclaimer && (
                          <p className="text-sm text-foreground">
                            {plan.disclaimer}
                          </p>
                        )}
                      </div>

                      <div className="mb-2">
                        <span className="text-heading-xl font-bold text-foreground">
                          {plan.price}
                        </span>
                        {plan.period && (
                          <span className="text-body text-foreground ml-2">
                            {plan.period}
                          </span>
                        )}
                      </div>

                      {plan.description && (
                        <p className="text-body-sm text-foreground mb-6">
                          {plan.description}
                        </p>
                      )}
                    </div>
                  }
                >
                  <div className="flex flex-col h-full">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-2 -mt-12 mb-3">
                      {/* Left Column */}
                      <ul className="space-y-2">
                        {leftColumnFeatures.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-start text-body text-foreground py-2"
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
                        ))}
                      </ul>

                      {/* Right Column */}
                      <ul className="space-y-2">
                        {rightColumnFeatures.map((feature, index) => {
                          const isLast = index === rightColumnFeatures.length - 1;
                          return (
                            <li
                              key={index}
                              className={`flex items-start text-body text-foreground ${isLast ? "pt-2 pb-4" : "py-2"}`}
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
                    </div>

                    <AppButton
                      variant="primary"
                      size="md"
                      shadow
                      className="w-full text-heading-sm mt-8"
                    >
                      {typeof plan.buttonText === "string" ? plan.buttonText : plan.buttonText.text}
                    </AppButton>
                  </div>
                </CustomCard>
              </div>
            );
          })}
    </div>
  );
}

