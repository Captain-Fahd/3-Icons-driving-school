import {
  Box,
  Heading,
  Text,
  IconButtonProps,
  AspectRatio,
  Carousel,
  IconButton,
  Image,
  Flex,
} from "@chakra-ui/react";
import { Span } from "@chakra-ui/react";
import { useWindowSize } from "@/components/WindowSize";
import { forwardRef } from "react";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

const ActionButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function ActionButton(props, ref) {
    return (
      <IconButton
        {...props}
        ref={ref}
        size="xs"
        variant="outline"
        rounded="full"
        position="absolute"
        zIndex="1"
        bg="bg"
      />
    );
  },
);

const About = () => {
  const windowWidth = useWindowSize();
  console.log(windowWidth.width);
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
      <Flex flexDirection={"column"} alignItems={"center"} width={"100%"}>
        <Text
          textStyle={"4xl"}
          fontWeight={"bold"}
          marginTop={"1em"}
          width={"100vw"}
          textAlign={"center"}
          minWidth={"200px"}
        >
          Some of our <Span color={"green.600"}>Students</Span>...
        </Text>
        <Carousel.Root
          alignSelf={"center"}
          slideCount={13}
          width={
            windowWidth.width !== null && windowWidth.width <= BREAKPOINT
              ? "300px"
              : "full"
          }
          maxW={
            windowWidth.width !== null && windowWidth.width <= BREAKPOINT
              ? "300px"
              : "xl"
          }
          minW={"300px"}
          mx={"auto"}
          gap={"4"}
          position={"relative"}
          colorPalette={"green"}
          marginY={"5em"}
          autoplay={{ delay: 2000 }}
        >
          <Carousel.Control
            gap={"4"}
            width={
              windowWidth.width !== null && windowWidth.width <= BREAKPOINT
                ? "300px"
                : "full"
            }
            position={"relative"}
          >
            <Carousel.PrevTrigger asChild>
              <ActionButton insetStart={"4"}>
                <LuArrowLeft />
              </ActionButton>
            </Carousel.PrevTrigger>

            <Carousel.ItemGroup width={"full"}>
              {Array.from({ length: 13 }, (_, index) => (
                <Carousel.Item key={index} index={index}>
                  <AspectRatio
                    ratio={16 / 9}
                    maxH={"72vh"}
                    w={
                      windowWidth.width !== null &&
                      windowWidth.width <= BREAKPOINT
                        ? "300px"
                        : "full"
                    }
                  >
                    <Image
                      src={`/carouselImages/image_${index + 1}.jpg`}
                      alt={"image of student with license"}
                      objectFit="contain"
                      borderRadius={"20px"}
                    />
                  </AspectRatio>
                </Carousel.Item>
              ))}
            </Carousel.ItemGroup>

            <Carousel.NextTrigger asChild>
              <ActionButton insetEnd={"4"}>
                <LuArrowRight />
              </ActionButton>
            </Carousel.NextTrigger>

            <Box position={"absolute"} bottom={"6"} width={"full"}>
              <Carousel.Indicators
                transition={"width 0.2s ease-in-out"}
                transformOrigin={"center"}
                opacity={"0.5"}
                boxSize={"2"}
                _current={{
                  width: "10",
                  bg: "colorPalette.subtle",
                  opacity: 1,
                }}
              />
            </Box>
          </Carousel.Control>
        </Carousel.Root>
      </Flex>
    </Box>
  );
};
export default About;
