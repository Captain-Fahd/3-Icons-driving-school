import { Box } from "@chakra-ui/react";
import Navbar from "@/components/Navbar/Navbar";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Navbar/Footer";

export default function Book() {
  return (
    <Box width={"100%"} height={"100%"} backgroundColor={"#F6F8F6"}>
      <Navbar />
      <Box>
        <BookingForm />
      </Box>
      <Footer />
    </Box>
  );
}
