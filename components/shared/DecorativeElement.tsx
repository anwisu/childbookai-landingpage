import Image from "next/image";
import type { Decoration } from "@/lib/types";

interface DecorativeElementProps {
  decoration: Decoration;
}

export function DecorativeElement({ decoration }: DecorativeElementProps) {
  return (
    <div
      className={`${decoration.className} ${decoration.responsive?.hidden || ""} ${decoration.responsive?.visible || ""}`}
    >
      <Image
        src={decoration.src}
        alt={decoration.alt}
        width={decoration.width}
        height={decoration.height}
        className={decoration.sizeClassName}
        style={{ objectFit: "contain" }}
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
