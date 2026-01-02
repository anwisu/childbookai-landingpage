"use client";

import { useState } from "react";
import Image from "next/image";
import { ButtonGroup } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DecorativeText } from "@/components/typography/DecorativeText";
import { cn } from "@/lib/utils";
import { IndividualPricing } from "./IndividualPricing";
import { BusinessPricing } from "./BusinessPricing";

export function Pricing() {
  const [activeTab, setActiveTab] = useState<"individual" | "business">(
    "individual"
  );
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section className="relative w-full py-24 min-h-[500px] overflow-visible">
      {/* SvgWideCard Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-visible">
        <svg
          viewBox="0 0 1440 1200"
          className="w-full h-full"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M1440 80.0008C1440 34.8075 1402.59 -1.41424 1357.42 0.0424087L77.4214 41.3202C34.2648 42.7119 0 78.0997 0 121.279V948.643C0 991.531 33.8195 1026.79 76.6696 1028.57L1356.67 1081.91C1402.12 1083.8 1440 1047.47 1440 1001.98V80.0008Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Decorative Elements - Behind Cards */}
      <div
        className="absolute inset-0 pointer-events-none overflow-visible"
        style={{ zIndex: 5 }}
      >
        {activeTab === "individual" ? (
          <>
            {/* Money Bag - Upper Right */}
            <div className="absolute top-8 right-8">
              <Image
                src="/illustrations/money-bag.svg"
                alt=""
                width={280}
                height={280}
                className="object-contain"
              />
            </div>

            {/* Coins - Bottom Left */}
            <div className="absolute bottom-16 left-12">
              <Image
                src="/illustrations/coins.svg"
                alt=""
                width={220}
                height={220}
                className="object-contain"
              />
            </div>
          </>
        ) : (
          <>
            {/* Money Bag - Different position for business */}
            <div className="absolute top-16 right-[300px]">
              <Image
                src="/illustrations/money-bag.svg"
                alt=""
                width={250}
                height={250}
                className="object-contain"
              />
            </div>

            {/* Coins - Different position for business */}
            <div className="absolute bottom-6 left-[300px]">
              <Image
                src="/illustrations/coins.svg"
                alt=""
                width={250}
                height={250}
                className="object-contain"
              />
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
        <div className="text-center mb-12">
          <h1 className="text-heading-xl max-w-5xl mx-auto mb-8">
            <span className="inline-flex items-baseline">
              <DecorativeText
                text="Customers"
                replace={[{ pattern: "o", variant: "blue1", occurrence: 1 }]}
                className="text-primary"
              />
              <span className="text-foreground ml-2">Pricing</span>
            </span>
          </h1>

          {/* Tab Buttons and Yearly Toggle */}
          <div className="flex items-center justify-center gap-4">
            <ButtonGroup
              orientation="horizontal"
              className="rounded-md border-2 border-blue-800"
            >
              <Button
                onClick={() => setActiveTab("individual")}
                className={cn(
                  "px-6 py-3 font-semibold text-body transition-all rounded-l-sm rounded-r-none border-0",
                  activeTab === "individual"
                    ? "bg-blue-800 text-white hover:bg-blue-800"
                    : "bg-white text-foreground hover:bg-white"
                )}
              >
                Individual
              </Button>
              <Button
                onClick={() => setActiveTab("business")}
                className={cn(
                  "px-6 py-3 font-semibold text-body transition-all rounded-r-sm rounded-l-none border-0",
                  activeTab === "business"
                    ? "bg-blue-800 text-white hover:bg-blue-800"
                    : "bg-white text-foreground hover:bg-white"
                )}
              >
                Business
              </Button>
            </ButtonGroup>

            {/* Yearly Checkbox */}
            <label
              className={cn(
                "px-3 py-[6px] rounded-md font-semibold text-body transition-all border-2 border-blue-800 flex items-center gap-2 bg-white text-forefround cursor-pointer hover:bg-white"
              )}
            >
              <Checkbox
                checked={isYearly}
                onCheckedChange={(checked) => setIsYearly(checked === true)}
                className="border-blue-800 data-[state=checked]:bg-blue-800 data-[state=checked]:border-blue-800 text-white"
              />
              <span>Yearly</span>
            </label>
          </div>
        </div>

        {/* Render appropriate pricing component based on active tab */}
        {activeTab === "individual" ? (
          <IndividualPricing isYearly={isYearly} />
        ) : (
          <BusinessPricing isYearly={isYearly} />
        )}
      </div>
    </section>
  );
}

