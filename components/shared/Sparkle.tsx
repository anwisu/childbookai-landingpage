import Image from "next/image";

export interface SparkleProps {
  width?: number;
  height?: number;
  className?: string;
}

export function Sparkle({ width = 24, height = 24, className }: SparkleProps) {
  return (
    <Image
      src="/illustrations/sparkle.png"
      alt=""
      width={width}
      height={height}
      aria-hidden
      className={className}
    />
  );
}

