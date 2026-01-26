"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Edit2, Trash } from "iconsax-react";

export type Character = {
  id: number;
  name: string;
  description: string;
  avatarSrc: string;
};

export interface CharacterCardProps {
  character: Character;
  onEdit?: () => void;
  onDelete?: () => void;
  className?: string;
}

export function CharacterCard({
  character,
  onEdit,
  onDelete,
  className,
}: CharacterCardProps) {
  return (
    <Card
      className={`w-72 items-center border-none bg-blue-100 px-6 py-8 shadow-sm ${className || ""}`}
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
            onClick={onEdit}
            className="inline-flex items-center gap-1 hover:text-teal-700"
          >
            <Edit2 size={24} color="#30a0a6" variant="Bold" />
          </button>
          <button
            type="button"
            onClick={onDelete}
            className="inline-flex items-center gap-1 hover:text-teal-700"
          >
            <Trash size={24} color="#30a0a6" variant="Bold" />
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
