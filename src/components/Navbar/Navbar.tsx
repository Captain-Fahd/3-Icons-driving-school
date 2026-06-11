import { Button, Flex, Image, Link, Menu, Portal } from "@chakra-ui/react";
import Pages from "@/components/Navbar/Pages";
import { THEME_COLOR, THEME_HOVER } from "@/pages/_app";
import { useWindowSize } from "@/components/WindowSize";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NAV_LINKS } from "@/components/Navbar/NavLinks";
import NextLink from "next/link";

const Navbar = () => {
  const { width } = useWindowSize();
  const BREAKPOINT = 768;
  const [open, setOpen] = useState<boolean>(false);

  if (width !== null && width <= BREAKPOINT) {
    return (
      <Flex // Chakra Element
        flexDirection="horizontal"
        padding={"1.5em 1em 1.5em 1em"}
        width={"100vw"}
        justifyContent={"space-between"}
        borderBottom={"0.1px solid lightgrey"}
        bg={"rgba(255,255,255,0.6)"}
        backdropFilter={"blur(10px)"}
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
        <Menu.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
          <Menu.Trigger asChild>
            <Button
              backgroundColor={"green.600"}
              _hover={{}}
              _active={{}}
              marginTop={"0.7em"}
            >
              <GiHamburgerMenu color={"white"} size={"2em"} />
            </Button>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                <Menu.ItemGroup>
                  {NAV_LINKS.map(({ label, href }) => (
                    <Menu.Item
                      asChild
                      key={href}
                      value={href}
                      onClick={() => setOpen(false)}
                    >
                      <Link
                        asChild
                        color={"black"}
                        fontWeight={"bold"}
                        _hover={{
                          textDecoration: "none",
                          color: THEME_HOVER,
                        }}
                      >
                        <NextLink
                          href={href}
                          style={{ color: "black", fontWeight: "light" }}
                        >
                          {label}
                        </NextLink>
                      </Link>
                    </Menu.Item>
                  ))}
                </Menu.ItemGroup>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      </Flex>
    );
  }
  return (
    <Flex // Chakra Element
      flexDirection="horizontal"
      padding={"1.5em 1em 1.5em 1em"}
      width={"100%"}
      justifyContent={"space-evenly"}
      borderBottom={"0.1px solid lightgrey"}
      bg={"rgba(255,255,255,0.6)"}
      backdropFilter={"blur(10px)"}
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
