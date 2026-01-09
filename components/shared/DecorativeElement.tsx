import Image from "next/image";
import type { Decoration } from "@/lib/types";

interface DecorativeElementProps {
  decoration: Decoration;
}

export function DecorativeElement({ decoration }: DecorativeElementProps) {
  // Decorative images should have empty alt and aria-hidden
  const isDecorative = !decoration.alt || decoration.alt.trim() === "";
  
  return (
    <div
      className={`${decoration.className} ${decoration.responsive?.hidden || ""} ${decoration.responsive?.visible || ""}`}
      aria-hidden={isDecorative ? "true" : undefined}
    >
      <Image
        src={decoration.src}
        alt={isDecorative ? "" : decoration.alt}
        width={decoration.width}
        height={decoration.height}
        className={decoration.sizeClassName}
        style={{ objectFit: "contain" }}
        aria-hidden={isDecorative ? "true" : undefined}
      />
    </div>
  );
}

interface DecorativeElementsProps {
  decorations: Decoration[];
}

export function DecorativeElements({ decorations }: DecorativeElementsProps) {
  return (
    <>
      {decorations.map((decoration) => (
        <DecorativeElement key={decoration.id} decoration={decoration} />
      ))}
    </>
  );
}
