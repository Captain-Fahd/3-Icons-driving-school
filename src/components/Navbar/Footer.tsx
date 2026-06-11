import { Box, Heading, HStack, Link, Text } from "@chakra-ui/react";
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
        padding={"1em"}
        backgroundColor={"green.600"}
        marginTop={"3em"}
        opacity={"0.6"}
      >
        <HStack justifyContent={"space-between"} alignItems={"center"}>
          <Heading color={"white"} textStyle={"xl"}>
            3-Icons Driving School
          </Heading>
          <Text color={"white"} textStyle={"sm"}>
            Copyright 3-Icons driving school 2026, all rights reserved©
          </Text>
          <HStack>
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
  } else {
    return (
      <Box
        width={"100%"}
        height={"20%"}
        padding={"1.3em"}
        backgroundColor={"green.600"}
        marginTop={"3em"}
      >
        <HStack justifyContent={"space-between"} alignItems={"center"}>
          <Heading color={"white"} textStyle={"3xl"}>
            3-Icons Driving School
          </Heading>
          <Text color={"white"} textStyle={"2xs"} backgroundColor={"green.600"}>
            © 2026 3-Icons Driving School. All rights reserved. Made in
            Melbourne
          </Text>
          <HStack>
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
