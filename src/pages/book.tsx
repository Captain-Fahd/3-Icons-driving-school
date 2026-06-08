import { Box } from "@chakra-ui/react";
import Navbar from "@/components/Navbar/Navbar";
import BookingForm from "@/components/BookingForm";

export default function Book() {
  return (
    <Box width={"100%"} height={"100%"}>
      <Navbar />
      <Box>
        <BookingForm />
      </Box>
    </Box>
  );
}
