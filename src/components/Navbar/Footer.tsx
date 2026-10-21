import { Box, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { useWindowSize } from "@/components/WindowSize";

const Footer = () => {
  const { width } = useWindowSize();
  const BREAKPOINT = 768;

  if (width !== null && width <= BREAKPOINT) {
    return (
      <Box
        width={"100%"}
        height={"10%"}
        padding={"2em 1.5em"}
        backgroundColor={"green.600"}
        marginTop={"3em"}
        opacity={"0.8"}
      >
        <HStack
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={"0.5em"}
        >
          <Heading color={"white"} textStyle={"md"}>
            3-Icons Driving School
          </Heading>
          <VStack gap={"0.25em"}>
            <Text color={"white"} textStyle={"2xs"}>
              Copyright 3-Icons driving school 2026, all rights reserved©
            </Text>
            <Text color={"white"} textStyle={"2xs"}>
              Powered by AccessibleTech
            </Text>
          </VStack>
          <HStack wrap={"wrap"} gap={"0.5em"}>
            <Link asChild color={"white"} fontSize={"xs"}>
              <NextLink href={"/"} style={{ color: "white", fontSize: "12px" }}>
                Home
              </NextLink>
            </Link>
            <Link fontSize={"xs"} asChild color={"white"}>
              <NextLink
                href={"/about"}
                style={{ color: "white", fontSize: "12px" }}
              >
                About
              </NextLink>
            </Link>
            <Link asChild fontSize={"xs"} color={"white"}>
              <NextLink
                href={"/pricing"}
                style={{ color: "white", fontSize: "12px" }}
              >
                Pricing
              </NextLink>
            </Link>
            <Link asChild fontSize={"xs"} color={"white"}>
              <NextLink
                href={"/book"}
                style={{ color: "white", fontSize: "12px" }}
              >
                Book
              </NextLink>
            </Link>
          </HStack>
        </HStack>
      </Box>
    );
  } else {
    return (
      <Box
        width={"100%"}
        height={"20%"}
        padding={"2.5em 3em"}
        backgroundColor={"green.600"}
        marginTop={"3em"}
        opacity={"0.8"}
      >
        <HStack justifyContent={"space-between"} alignItems={"center"}>
          <Heading color={"white"} textStyle={"3xl"}>
            3-Icons Driving School
          </Heading>
          <VStack gap={"0.25em"}>
            <Text color={"white"} textStyle={"2xs"} backgroundColor={"green.600"}>
              © 2026 3-Icons Driving School. All rights reserved. Made in
              Melbourne
            </Text>
            <Text color={"white"} textStyle={"2xs"}>
              Powered by AccessibleTech
            </Text>
          </VStack>
          <HStack fontSize={"xs"}>
            <Link asChild color={"white"}>
              <NextLink href={"/"}>Home</NextLink>
            </Link>
            <Link asChild color={"white"}>
              <NextLink href={"/about"}>About</NextLink>
            </Link>
            <Link asChild color={"white"}>
              <NextLink href={"/pricing"}>Pricing</NextLink>
            </Link>
            <Link asChild color={"white"}>
              <NextLink href={"/book"}>Book</NextLink>
            </Link>
          </HStack>
        </HStack>
      </Box>
    );
  }
};
export default Footer;
