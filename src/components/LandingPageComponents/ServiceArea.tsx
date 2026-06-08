import {
  HStack,
  VStack,
  Text,
  Box,
  Heading,
  List,
  Icon,
} from "@chakra-ui/react";
import { FiMapPin } from "react-icons/fi";
import ServiceAreaMaps from "@/components/LandingPageComponents/ServiceAreaMaps";

export const suburbs = [
  "Preston",
  "Broadmeadows",
  "Epping",
  "Craigieburn",
  "Wollert",
  "Kalkallo",
  "Glenroy",
  "Lalor",
  "South Morang",
  "Roxburgh Park",
];

const ServiceArea = () => {
  return (
    <HStack width={"100%"} height={"80vh"} gap={"10vw"} paddingX={"4vw"}>
      <Box
        width={"50%"}
        flex={"4.5 1 0px"}
        backgroundColor={"gray.100"}
        borderRadius={"20px"}
        height={"80%"}
        padding={"1em"}
      >
        <ServiceAreaMaps />
      </Box>
      <VStack
        width={"30%"}
        height={"80%"}
        backgroundColor={"green.600"}
        borderRadius={"20px"}
        flex={"2 1 0px"}
        paddingY={"3em"}
        paddingX={"2.5em"}
        color={"white"}
        textAlign={"left"}
        alignItems={"flex-start"}
        gap={"1.5em"}
      >
        <Icon as={FiMapPin} boxSize={8} />
        <Heading textStyle={"3xl"} textAlign={"left"}>
          Suburbs we cover
        </Heading>
        <List.Root
          display={"grid"}
          gridTemplateColumns={"1fr 1fr"}
          gap={"1.25em 4em"}
          textStyle={"lg"}
          fontWeight={"medium"}
        >
          {suburbs.map((suburb) => (
            <List.Item key={suburb}>{suburb}</List.Item>
          ))}
        </List.Root>
        <Text color={"whiteAlpha.800"} textStyle={"sm"} marginTop={"auto"}>
          These are just some of the suburbs we cover. Not on the list? Get in
          touch — we often travel a little further for regulars.
        </Text>
      </VStack>
    </HStack>
  );
};

export default ServiceArea;
