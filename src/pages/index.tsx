import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/LandingPageComponents/Hero";
import {Flex} from "@chakra-ui/react";
import {LessonPackage} from "@/components/LandingPageComponents/LessonPackage";
import PriceCard from "@/components/LandingPageComponents/PriceCard";
import {Box} from "@chakra-ui/react"
import {useState, useEffect} from "react";

export default function Home() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll, {passive: true});
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const PACKAGES: LessonPackage[] = [
        {
            title: "Single Lesson",
            subtitle: "Perfect for a top-up or a refresher",
            price: 60,
            priceLabel: "/hour",
            lessonLength: 60,
            numLessons: 1,
            benefits: ["60-minute lessons", "Expert Instruction", "Automatic Transmission", "Male and Female Intructors"],
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
            ctaLabel: "Choose Starter",
        },
        {
            title: "Test-Ready",
            subtitle: "From Zero to Exam-Ready",
            price: 450,
            priceLabel: "/10 hours",
            lessonLength: 60,
            numLessons: 10,
            benefits: ["Save $150", "Become Test Ready", "VicRoads test routes", "Automatic Transmission"],
            isPopular: false,
            ctaLabel: "Choose Test-Ready",
        }
    ]

  return (
    <Box width="100vw">
        <Navbar />
        <Hero />
        <Box
            position="fixed"
            bottom="2rem"
            left="50%"
            transform="translateX(-50%)"
            zIndex={10}
            opacity={scrolled ? 0 : 1}
            transition="opacity 0.4s ease"
            pointerEvents="none"
            sX={{
                "@keyframes bounce": {
                    "0%, 100%": {transform: "translateX(-50%) translateY(0)"},
                    "50%": {transform: "translateX(-50%) translateY(8px)"},
                },
                animation: "bounce 1.4s ease-in-out infinite",
            }}
        >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{color: "#718096"}}>
                <polyline points="6 9 12 15 18 9" />
            </svg>
        </Box>
        <Flex width="100vw" marginY={"15%"} justifyContent={"space-evenly"} flexDirection={{ base: "column", lg: "row" }} alignItems={{ base: "center", lg: "flex-start" }} gap={{ base: "2em", lg: "0" }}>
            {PACKAGES.map((lesson) => (
                <PriceCard key={lesson.title} lessonPackage={lesson} />
            ))}
        </Flex>
    </Box>
  );
}
