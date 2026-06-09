import { LessonPackage } from "@/components/packages/LessonPackage";

export const PACKAGES: LessonPackage[] = [
  {
    title: "Single Lesson",
    subtitle: "Perfect for a top-up or a refresher",
    price: 60,
    priceLabel: "/hour",
    lessonLength: 60,
    numLessons: 1,
    benefits: [
      "60-minute lessons",
      "Expert Instruction",
      "Automatic Transmission",
      "Male and Female Intructors",
    ],
    isPopular: false,
    ctaLabel: "Choose Single",
  },
  {
    title: "Starter Package",
    subtitle: "Crafted for first-timers and new learners",
    price: 250,
    priceLabel: "/5 hours",
    lessonLength: 60,
    numLessons: 5,
    benefits: [
      "Save $50",
      "60-minute lessons",
      "Lesson Plan",
      "VicRoads Test Guide",
    ],
    isPopular: true,
    ctaLabel: "Choose Starter",
  },
  {
    title: "Test-Ready",
    subtitle: "From Zero to Exam-Ready",
    price: 450,
    priceLabel: "/10 hours",
    lessonLength: 60,
    numLessons: 10,
    benefits: [
      "Save $150",
      "Become Test Ready",
      "VicRoads test routes",
      "Automatic Transmission",
    ],
    isPopular: false,
    ctaLabel: "Choose Test-Ready",
  },
];
