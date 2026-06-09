import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/LandingPageComponents/Hero";
import { Flex } from "@chakra-ui/react";
import PriceCard from "@/components/LandingPageComponents/PriceCard";
import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ServiceArea from "@/components/LandingPageComponents/ServiceArea";
import Footer from "@/components/Navbar/Footer";
import { PACKAGES } from "@/components/packages/Packages";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        css={{
          "@keyframes bounce": {
            "0%, 100%": { transform: "translateX(-50%) translateY(0)" },
            "50%": { transform: "translateX(-50%) translateY(8px)" },
          },
          animation: "bounce 1.4s ease-in-out infinite",
        }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ color: "#718096" }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </Box>
      <Flex
        width="100vw"
        marginY={"15%"}
        justifyContent={"space-evenly"}
        flexDirection={{ base: "column", lg: "row" }}
        alignItems={{ base: "center", lg: "flex-start" }}
        gap={{ base: "2em", lg: "0" }}
      >
        {PACKAGES.map((lesson) => (
          <PriceCard key={lesson.title} lessonPackage={lesson} />
        ))}
      </Flex>
      <ServiceArea />
      <Footer />
    </Box>
  );
}
