import { Box, Heading, HStack, Span, Text, VStack } from "@chakra-ui/react";
import Navbar from "@/components/Navbar/Navbar";
import PriceCard from "@/components/LandingPageComponents/PriceCard";
import { PACKAGES } from "@/components/packages/Packages";
import Footer from "@/components/Navbar/Footer";

export default function Pricing() {
  return (
    <Box width={"100vw"} height={"100vh"} backgroundColor={"#F6F8F6"}>
      <VStack width={"100%"} height={"100%"}>
        <Navbar />
        <Heading
          marginTop={"2.5em"}
          marginBottom={"1em"}
          textStyle={"5xl"}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          Simple <Span color={"green.600"}>Prices</Span>
        </Heading>
        <HStack justifyContent={"space-evenly"} width={"100%"}>
          {PACKAGES.map((lesson) => (
            <PriceCard key={lesson.title} lessonPackage={lesson} />
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
