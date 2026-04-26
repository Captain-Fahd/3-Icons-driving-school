import {Box, Image, Heading, Flex, Text, Link} from "@chakra-ui/react"
import { FaArrowRight } from "react-icons/fa";
import Router from "next/router";
import {THEME_COLOR, THEME_HOVER} from "@/pages/_app";

const Hero = () => {
    const router = Router;
    const handleBook = () => {router.push("/book")}
    const handlePrice= () => {router.push("/pricing")}
    return (
        <Box position="relative" marginTop="6em" width={"100vw"} height={"70vh"}>
            <style>{`
                @keyframes dot-ping {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }
                @keyframes dot-ping-ring {
                    0% { transform: scale(1); opacity: 0.8; }
                    100% { transform: scale(2.5); opacity: 0; }
                }
            `}</style>
            <Box position="absolute" inset={0}>
                <Image src="/hero.jpg" alt={"hero image"} opacity={"10%"} width={"100%"} height={"100%"} objectFit="cover"/>
            </Box>
            <Box
                position="absolute"
                bottom={0}
                left={0}
                right={0}
                height="50%"
                style={{ background: "linear-gradient(to bottom, transparent, white)" }}
                zIndex={1}
            />
            <Flex
                position="relative"
                zIndex={2}
                height={"100%"}
                alignItems={"center"}
                paddingX={"8vw"}
            >
                <Box>
                    <Flex
                        display={"inline-flex"}
                        alignItems={"center"}
                        gap={"0.5em"}
                        backgroundColor={"green.50"}
                        borderRadius={"full"}
                        paddingX={"1em"}
                        paddingY={"0.4em"}
                        marginBottom={"1em"}
                        border={"1px solid"}
                        borderColor={"green.200"}
                    >
                        <Box position="relative" width={"8px"} height={"8px"}>
                            <Box position="absolute" inset={0} borderRadius={"full"} backgroundColor={THEME_COLOR}
                                style={{animation: "dot-ping 1.5s ease-in-out infinite"}} />
                            <Box position="absolute" inset={0} borderRadius={"full"} backgroundColor={THEME_COLOR}
                                style={{animation: "dot-ping-ring 1.5s ease-in-out infinite"}} />
                        </Box>
                        <Text fontSize={"xs"} fontWeight={"semibold"} color={THEME_COLOR} letterSpacing={"widest"} textTransform={"uppercase"}>
                            Northern Melbourne
                        </Text>
                    </Flex>
                    <Text fontSize={"xl"} fontWeight={"semibold"} color={"gray.600"} letterSpacing={"widest"} textTransform={"uppercase"} marginBottom={"0.5em"}>
                        3 Icons Driving School
                    </Text>
                    <Heading fontSize={"8xl"} fontWeight={"bold"} lineHeight={"1.1"}>
                        Learn to Drive with
                    </Heading>
                    <Flex marginTop={"1.7em"} marginBottom={"6em"}>
                        <Heading fontSize={"8xl"} fontWeight={"bold"} color={THEME_COLOR}>Confidence</Heading>
                    </Flex>
                    <Flex gap={15} alignItems="center">
                        <Flex
                            onClick={() => handleBook()}
                            display={"inline-flex"}
                            backgroundColor={THEME_COLOR}
                            color={"white"}
                            fontWeight={"bold"}
                            fontSize={"md"}
                            paddingX={"2em"}
                            paddingY={"1.2em"}
                            borderRadius={"full"}
                            _hover={{ backgroundColor: THEME_HOVER, textDecoration: "none" }}
                            flexDirection="row"
                            alignItems="center"
                            gap={"0.5em"}
                            cursor="pointer"
                        >
                            <span>Book Your First Lesson</span>
                            <FaArrowRight />
                        </Flex>
                        <Flex
                            onClick={() => handlePrice()}
                            display={"inline-flex"}
                            alignItems={"center"}
                            backgroundColor={"white"}
                            paddingX={"2em"}
                            paddingY={"1.2em"}
                            borderRadius={"full"}
                            fontWeight={"bold"}
                            _hover={{}}
                        >
                            See pricing
                        </Flex>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}
export default Hero;