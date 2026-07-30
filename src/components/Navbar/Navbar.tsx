import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import Pages from "@/components/Navbar/Pages";
import { THEME_COLOR, THEME_HOVER } from "@/pages/_app";
import { useWindowSize } from "@/components/WindowSize";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { NAV_LINKS } from "@/components/Navbar/NavLinks";
import NextLink from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const { width } = useWindowSize();
  const BREAKPOINT = 768;
  const [open, setOpen] = useState<boolean>(false);
  const { pathname } = useRouter();

  if (width !== null && width <= BREAKPOINT) {
    return (
      <Box
        position={"fixed"}
        top={"1.2em"}
        left={"50%"}
        transform={"translateX(-50%)"}
        zIndex={200}
        width={"90vw"}
      >
        {/* Single shell — bar and drawer share one surface */}
        <Box
          bg={"rgba(255,255,255,0.6)"}
          backdropFilter={"blur(16px)"}
          borderRadius={"xl"}
          border={"1px solid rgba(0,0,0,0.07)"}
          boxShadow={"0 4px 24px rgba(0,0,0,0.10)"}
          overflow={"hidden"}
        >
          <Flex
            paddingX={"1.2em"}
            paddingY={"0.7em"}
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={"1em"}
          >
            <Image
              src="/logo_small.png"
              alt={"3 Icons driving school logo"}
              height={"2em"}
              onClick={() => (window.location.href = "/")}
              cursor={"pointer"}
            />
            <Box
              as="button"
              onClick={() => setOpen((v) => !v)}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              backgroundColor={THEME_COLOR}
              borderRadius={"md"}
              width={"3.2em"}
              height={"2.4em"}
              cursor={"pointer"}
              flexShrink={0}
            >
              {open
                ? <IoClose color="white" size="1.3em" />
                : <GiHamburgerMenu color="white" size="1.1em" />
              }
            </Box>
          </Flex>

          {/* Collapsing rail — height animates from the links' own size */}
          <Box
            display={"grid"}
            style={{
              gridTemplateRows: open ? "1fr" : "0fr",
              transition: "grid-template-rows 0.35s cubic-bezier(0.4,0,0.2,1)",
            }}
          >
            <Box overflow={"hidden"} minHeight={0}>
              <Box paddingX={"1.8em"} paddingBottom={"1.2em"}>
                {NAV_LINKS.map(({ label, href }) => {
                  const isActive = pathname === href;
                  return (
                    <Link
                      asChild
                      key={href}
                      display={"block"}
                      paddingY={"0.85em"}
                      borderTop={"1px solid rgba(0,0,0,0.07)"}
                      onClick={() => setOpen(false)}
                    >
                      <NextLink href={href}>
                        <Text
                          fontWeight={"bold"}
                          fontSize={"lg"}
                          color={isActive ? THEME_COLOR : "gray.700"}
                        >
                          {label}
                        </Text>
                      </NextLink>
                    </Link>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
  return (
    <Flex // Chakra Element
      flexDirection="horizontal"
      padding={"1.5em 1em 1.5em 1em"}
      width={"100%"}
      justifyContent={"space-evenly"}
      borderBottom={"0.1px solid lightgrey"}
      bg={"rgba(255,255,255,0.45)"}
      backdropFilter={"blur(12px)"}
      position={"fixed"}
      top={0}
      zIndex={100}
    >
      <Image
        src="/logo_small.png"
        alt={"3 Icons driving school logo"}
        onClick={() => (window.location.href = "/")}
        cursor={"pointer"}
      />
      <Pages />
      <Link
        href="/book"
        backgroundColor={THEME_COLOR}
        borderRadius={"3em"}
        width={"10rem"}
        minW={"5vw"}
        justifyContent={"center"}
        alignItems={"center"}
        fontWeight={"bold"}
        color={"white"}
        _hover={{
          backgroundColor: THEME_HOVER,
          transition: "all 0.2s",
        }}
      >
        Book a lesson
      </Link>
    </Flex>
  );
};
export default Navbar;
