import { Box } from "@chakra-ui/react";
import Navbar from "@/components/Navbar/Navbar";
import About from "@/components/About";

export default function about() {
  return (
    <Box width={"100vw"} height={"100vh"} backgroundColor={"#F6F8F6"}>
      <Navbar />
      <About />
    </Box>
  );
}
