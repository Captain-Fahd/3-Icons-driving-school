import { Box } from "@chakra-ui/react";
import Navbar from "@/components/Navbar/Navbar";
import About from "@/components/About";
import Footer from "@/components/Navbar/Footer";

export default function about() {
  return (
    <Box width={"100%"} height={"100%"} backgroundColor={"#F6F8F6"}>
      <Navbar />
      <About />
      <Footer />
    </Box>
  );
}
