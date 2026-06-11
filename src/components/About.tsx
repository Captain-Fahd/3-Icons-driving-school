import { Box, Heading, Text } from "@chakra-ui/react";
import { Span } from "@chakra-ui/react";

const About = () => {
  return (
    <Box height={"100%"} width={"100%"} padding={"7em"}>
      <Heading textStyle={"5xl"} textAlign={"flex-start"} fontWeight={"bold"}>
        About <Span color={"green.600"}>Us</Span>
      </Heading>
      <Span textStyle={"4xl"} fontWeight={"bold"} marginTop={"1em"}>
        Founded in <Span color={"green.600"}>2017</Span>... <br />
      </Span>
      <Text
        textStyle={"xl"}
        width={"55%"}
        minWidth={"300px"}
        textIndent={"16em"}
      >
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
  );
};
export default About;
