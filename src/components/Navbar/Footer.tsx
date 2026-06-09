import { Box, Heading, HStack, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

const Footer = () => {
  return (
    <Box
      width={"100%"}
      height={"20%"}
      padding={"2.5em"}
      backgroundColor={"green.600"}
    >
      <HStack justifyContent={"space-between"} alignItems={"center"}>
        <Heading color={"white"} textStyle={"3xl"}>
          3-Icons Driving School
        </Heading>
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
};
export default Footer;
