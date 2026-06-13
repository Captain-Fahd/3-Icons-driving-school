import { Box, Heading, Text } from "@chakra-ui/react";
import { Span } from "@chakra-ui/react";
import { useWindowSize } from "@/components/WindowSize";

const About = () => {
  const windowWidth = useWindowSize();
  const BREAKPOINT = 768;
  return (
    <Box height={"100%"} width={"100%"} paddingY={"7em"}>
      <Heading textStyle={"5xl"} textAlign={"center"} fontWeight={"bold"}>
        About <Span color={"green.600"}>Us</Span>
      </Heading>
      <Text
        textStyle={"4xl"}
        fontWeight={"bold"}
        marginY={"1em"}
        width={"100vw"}
        textAlign={"center"}
      >
        Founded in <Span color={"green.600"}>2017</Span>... <br />
      </Text>
      <Box
        margin={"auto"}
        width={"40%"}
        minWidth={"350px"}
        height={"fit-content"}
        minHeight={"300px"}
        backgroundColor={"white"}
        borderRadius={"20px"}
        padding={
          windowWidth.width !== null && windowWidth.width <= BREAKPOINT
            ? "1em"
            : "2em"
        }
      >
        <Text textStyle={"lg"} width={"100%"} minWidth={"250px"}>
          3 Icons Driving School has been proudly serving learner drivers across
          the northern suburbs of Melbourne. Our mission is simple: to build
          confident, safe, and responsible drivers through patient, professional
          instruction tailored to each student&#39;s needs. Whether you&#39;re
          just starting out on your L&#39;s or preparing for your licence test,
          our experienced instructors are committed to making every lesson a
          positive step toward the road ahead. At 3 Icons Driving School, we
          believe that learning to drive is more than just passing a test —
          it&#39;s about gaining skills for life.
        </Text>
      </Box>
    </Box>
  );
};
export default About;
