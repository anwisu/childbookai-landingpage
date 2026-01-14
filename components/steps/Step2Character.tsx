import { HeadingText } from "../typography";
import { ParagraphText } from "../typography";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { AppButton } from "../shared/AppButton";
import { PenLine, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

export type Step2CharacterProps = {
  onNext?: () => void;
};

const CHARACTERS = [
  {
    id: 1,
    name: "Emilia",
    description: "5 years old red haired female",
    avatarSrc: "/images/child-1.png",
  },
  {
    id: 2,
    name: "David",
    description: "7 years old blond haired male",
    avatarSrc: "/images/child-1.png",
  },
];

export default function Step2Character({}: Step2CharacterProps) {
   const cardColumnsClass =
     CHARACTERS.length <= 1
       ? "md:grid-cols-1 lg:grid-cols-1"
       : CHARACTERS.length === 2
       ? "md:grid-cols-2 lg:grid-cols-2"
       : "md:grid-cols-3 lg:grid-cols-3";

  return (
    <div className="relative w-full flex flex-col items-center justify-center gap-8">
      <div className="flex flex-col items-center gap-4">
        <HeadingText
          variant="h1"
          title="Create Your Story"
          className="text-center font-bold"
        />
        <ParagraphText
          as="p"
          variant="text"
          className="text-center font-medium max-w-xl text-slate-600"
        >
          Characters you have already added to the story. It is advisable to use
          no more than 3 characters.
        </ParagraphText>
      </div>

      <div
        className={cn(
          "grid grid-cols-1 justify-center justify-items-center gap-5",
          cardColumnsClass
        )}
      >
        {CHARACTERS.map((character) => (
          <Card
            key={character.id}
            className="w-72 items-center border-none bg-blue-100 px-6 py-8 shadow-sm"
          >
            <CardContent className="flex flex-col items-center gap-4 px-0">
              <Avatar className="size-24 shadow-md">
                <AvatarImage src={character.avatarSrc} alt={character.name} />
                <AvatarFallback className="bg-blue-800/10 text-primary font-semibold">
                  {character.name.charAt(0)}
                </AvatarFallback>
              </Avatar>

              <div className="flex flex-col items-center gap-1 text-center">
                <p className="text-lg font-semibold text-foreground">
                  {character.name}
                </p>
                <p className="text-md text-foreground">
                  {character.description}
                </p>
              </div>

              <div className="mt-3 flex items-center gap-4">
                <button
                  type="button"
                  className="inline-flex items-center gap-1 text-sm font-medium text-blue-800 hover:text-[#27858b]"
                >
                  <PenLine size={16} strokeWidth={2.5} />
                </button>
                <button
                  type="button"
                  className="inline-flex items-center gap-1 text-sm font-medium text-blue-800 hover:text-[#27858b]"
                >
                  <Trash2 size={16} strokeWidth={2.5} />
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
        <AppButton
          type="button"
          variant="secondary"
          size="md"
          shadow
          className="font-semibold text-foreground"
        >
          Add a character
        </AppButton>

        <AppButton
          size="md"
          shadow
          className="w-full sm:w-auto sm:min-w-[190px] text-heading-sm min-h-[44px]"
        >
          Next Step
        </AppButton>
      </div>
    </div>
  );
}
