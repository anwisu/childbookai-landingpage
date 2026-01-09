/**
 * General type for decorative elements used across different sections.
 * Used for positioning images, SVGs, or other visual decorations with absolute positioning.
 */
export interface Decoration {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
  sizeClassName: string;
  responsive?: {
    hidden?: string;
    visible?: string;
  };
}
