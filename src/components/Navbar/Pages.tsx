import { Box, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { NAV_LINKS } from "@/components/Navbar/NavLinks";

const Pages = () => {
  const { pathname } = useRouter();

  return (
    <Flex bg={"#099331/10"} borderRadius="40px" padding="0.5em" gap="4">
      {NAV_LINKS.map(({ label, href }) => {
        const isActive = pathname === href;
        return (
          <Box
            key={href}
            backgroundColor={isActive ? "white" : "transparent"}
            borderRadius="40px"
            paddingX="1em"
            paddingY="0.5em"
          >
            <Link
              asChild
              fontWeight="bold"
              color={isActive ? "#054c19" : "#054c1988"}
            >
              <NextLink href={href}>{label}</NextLink>
            </Link>
          </Box>
        );
      })}
    </Flex>
  );
};

export default Pages;
