/**
 * Character constants
 * Character creation options including types, ethnicities, genders, colors, and hair lengths
 */

export const CHARACTER_TYPES = ["Human", "Animal", "Fantasy"] as const;

export const ETHNICITIES = [
  "Latino",
  "Asian",
  "African",
  "Caucasian",
  "Middle Eastern",
  "Mixed",
] as const;

export const GENDERS = ["Male", "Female", "Non-Binary"] as const;

export const HAIR_COLORS = {
  primary: [
    "#FFFCEC", // Light cream
    "#B5B3B1", // Medium gray
    "#EBC299", // Light peach
    "#E67D14", // Orange
    "#96591D", // Medium brown
    "#4A2F15", // Dark brown
    "#2B1A09", // Very dark brown/black
  ],
  extended: [
    "#FFFCEC", // Light cream
    "#B5B3B1", // Medium gray
    "#EBC299", // Light peach
    "#E67D14", // Orange
    "#96591D", // Medium brown
    "#4A2F15", // Dark brown
    "#2B1A09", // Very dark brown/black
    "#E36965", // Muted reddish-pink/coral
    "#FCE55F", // Bright yellow
    "#62E551", // Vibrant lime green
    "#0380A6", // Deep teal
    "#E365C0", // Bright magenta/fuchsia
  ],
} as const;

export const EYE_COLORS = {
  primary: [
    { name: "Light Yellow", color: "#FFFCEC", svg: "Light Yellow" },
    { name: "Light Gray", color: "#B5B3B1", svg: "Light Gray" },
    { name: "Blue", color: "#4A90E2", svg: "Blue" },
    { name: "Green", color: "#62E551", svg: "Green" },
    { name: "Brown", color: "#96591D", svg: "Brown" },
    { name: "Dark Brown", color: "#4A2F15", svg: "Dark Brown" },
  ],
  extended: [
    { name: "Light Yellow", color: "#FFFCEC", svg: "Light Yellow" },
    { name: "Light Gray", color: "#B5B3B1", svg: "Light Gray" },
    { name: "Blue", color: "#63A5E6", svg: "Blue" },
    { name: "Green", color: "#42C576", svg: "Green" },
    { name: "Brown", color: "#96591D", svg: "Brown" },
    { name: "Medium Brown", color: "#4A2F15", svg: "Medium Brown" },
    { name: "Dark Brown", color: "#2B1A09", svg: "Dark Brown" },
    { name: "Black", color: "#0A0501", svg: "Black" },
  ],
} as const;

export const HAIR_LENGTHS = [
  { value: "very-short", label: "Very Short" },
  { value: "short", label: "Short" },
  { value: "pixie", label: "Pixie" },
  { value: "below-ear", label: "Below Ear" },
  { value: "medium", label: "Medium" },
  { value: "shoulder", label: "Shoulder" },
  { value: "chest", label: "Chest" },
  { value: "long", label: "Long" },
  { value: "very-long", label: "Very Long" },
] as const;

export const ATTRIBUTES = [
  "Braces",
  "Belt",
  "Glasses",
  "Suspender",
  "Hoop",
  "Mohawk",
  "Wheelchair",
  "Freckles",
  "Tie",
  "Earrings",
] as const;
