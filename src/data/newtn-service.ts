export type NewtnServiceType = {
  id: number;
  image: string;
  title: string;
  description: string;
  tools: string[];
};

export const NewtnService: NewtnServiceType[] = [
  {
    id: 1,
    image: "/assets/images/home/development.webp",
    title: "Development",
    description:
      "Crafting responsive, user-friendly websites and building intuitive, high-performance mobile apps for iOS and Android, tailored to your business needs.",
    tools: [
      "Back-end",
      "iOS",
      "Android",
      "Cross-platform",
      "Front-end",
      "Website",
    ],
  },
  {
    id: 2,
    image: "/assets/images/home/design.webp",
    title: "Design",
    description:
      "Creating stunning app and web designs, strong brand identities, and high-quality 2D & 3D assets with engaging motion graphics, all driven by in-depth UX research.",
    tools: [
      "App Design",
      "Web Design",
      "Branding",
      "3D Asset",
      "2D Motion",
      "2D Asset",
      "UX Research",
    ],
  },
];
