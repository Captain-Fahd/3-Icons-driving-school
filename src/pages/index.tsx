import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/LandingPageComponents/Hero";
import {Flex} from "@chakra-ui/react";
import {LessonPackage} from "@/components/LandingPageComponents/LessonPackage";
import PriceCard from "@/components/LandingPageComponents/PriceCard";
import {Box} from "@chakra-ui/react"

export default function Home() {
    const PACKAGES: LessonPackage[] = [
        {
            title: "Single Lesson",
            subtitle: "Perfect for a top-up or a refresher",
            price: 60,
            priceLabel: "/hour",
            lessonLength: 60,
            numLessons: 1,
            benefits: ["60-minute lessons", "Expert Instruction", "Automatic Transmission"],
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
            benefits: [ "Save $50", "60-minute lessons", "Lesson Plan", "VicRoads Test Guide"],
            isPopular: true,
            ctaLabel: "Choose Single",
        }
    ]

  return (
    <Box width="100vw">
        <Navbar />
        <Hero />
        <Flex width="100vw" justifyContent={"space-evenly"}>
            {PACKAGES.map((lesson) => (
                <PriceCard key={lesson.title} lessonPackage={lesson} />
            ))}
        </Flex>
    </Box>
  );
}
