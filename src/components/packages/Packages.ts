import { LessonPackage } from "@/components/packages/LessonPackage";

export const HOUR_PACKAGES: LessonPackage[] = [
  {
    title: "Single Lesson",
    subtitle: "Perfect for a starter or top-up",
    price: 65,
    priceLabel: "/1 hour",
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
    title: "Extended Session",
    subtitle: "Crafted for first-timers and new learners",
    price: 90,
    priceLabel: "/1.5 hours",
    lessonLength: 90,
    numLessons: 1,
    benefits: [
      "Great for first-timers",
      "90-minute lesson",
      "Amazing Value",
      "Guided Instruction",
    ],
    isPopular: true,
    ctaLabel: "Choose Starter",
  },
  {
    title: "Double Time",
    subtitle: "Start off with 2x 1-hour lessons",
    price: 115,
    priceLabel: "/2 hours",
    lessonLength: 60,
    numLessons: 2,
    benefits: [
      "More than 10% off",
      "Start with 2x 1-hour lessons",
      "A Head Start on the Syllabus",
      "Tailored Lesson Plans",
    ],
    isPopular: false,
    ctaLabel: "Choose Test-Ready",
  },
];

export const BUNDLES: LessonPackage[] = [
  {
    title: "Test Day",
    subtitle: "To get you ready for your exam",
    price: 250,
    priceLabel: "/1hr + test day",
    lessonLength: 60,
    numLessons: 1,
    benefits: [
      "Final test preparation",
      "Test day",
      "Expert Guidance",
      "VicRoads test routes",
    ],
    isPopular: false,
    ctaLabel: "Choose Test Day",
  },
  {
    title: "10-hour Bundle",
    subtitle: "The Ultimate Bundle",
    price: 600,
    priceLabel: "/10 hours",
    lessonLength: 60,
    numLessons: 10,
    benefits: [
      "10-hour lesson",
      "Expert Guidance",
      "VicRoads test routes",
      "Amazing Value",
    ],
    isPopular: false,
    ctaLabel: "Choose 10-hour Bundle",
  },
];
