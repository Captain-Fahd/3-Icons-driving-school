import { Box, Heading, HStack, Span, Text, VStack } from "@chakra-ui/react";
import Navbar from "@/components/Navbar/Navbar";
import PriceCard from "@/components/LandingPageComponents/PriceCard";
import { BUNDLES, HOUR_PACKAGES } from "@/components/packages/Packages";
import Footer from "@/components/Navbar/Footer";

export default function Pricing() {
  return (
    <Box width={"100%"} height={"100%"} backgroundColor={"#F6F8F6"}>
      <VStack width={"100%"} height={"100%"}>
        <Navbar />
        <Heading
          marginTop={"2.5em"}
          marginBottom={"2em"}
          textStyle={"5xl"}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          Simple, Clear <Span color={"green.600"}>Pricing</Span>
        </Heading>
        <Heading
          textStyle={"4xl"}
          fontWeight={"bold"}
          textAlign={"center"}
          marginBottom={"1em"}
        >
          Our Lesson <Span color={"green.600"}>Packages</Span>
        </Heading>
        <HStack
          justifyContent={"space-evenly"}
          width={"100%"}
          overflowX={"scroll"}
          gap={"2em"}
          paddingX={{ base: "10%", lg: "none" }}
        >
          {HOUR_PACKAGES.map((lesson) => (
            <PriceCard key={lesson.title} lessonPackage={lesson} />
          ))}
        </HStack>
        <Heading
          textStyle={"4xl"}
          fontWeight={"bold"}
          textAlign={"center"}
          marginTop={"2em"}
          marginBottom={"1em"}
        >
          Our <Span color={"green.600"}>Bundles</Span>
        </Heading>
        <HStack
          width={"50%"}
          justifyContent={"space-evenly"}
          minWidth={"300px"}
          overflowX={"scroll"}
          gap={"2em"}
        >
          {BUNDLES.map((bundle) => (
            <PriceCard key={bundle.title} lessonPackage={bundle} />
          ))}
        </HStack>
        <Text textAlign={"center"} marginTop={"2em"} textStyle={"sm"}>
          Simple, clear pricing. No hidden fees or charges.
        </Text>
        <Footer />
      </VStack>
    </Box>
  );
}
