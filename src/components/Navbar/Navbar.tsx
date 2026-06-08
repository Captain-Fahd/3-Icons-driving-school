import { Flex, Image, Link } from "@chakra-ui/react";
import Pages from "@/components/Navbar/Pages";
import { THEME_COLOR, THEME_HOVER } from "@/pages/_app";

const Navbar = () => {
  return (
    <Flex
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
        _hover={{ backgroundColor: THEME_HOVER }}
      >
        Book a lesson
      </Link>
    </Flex>
  );
};
export default Navbar;
