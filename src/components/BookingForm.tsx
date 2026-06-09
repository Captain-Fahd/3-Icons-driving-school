import {
  Box,
  Field,
  Fieldset,
  Heading,
  Input,
  NumberInput,
  NativeSelect,
  Checkbox,
  Span,
  Flex,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { THEME_COLOR, THEME_HOVER } from "@/pages/_app";
import emailjs from "@emailjs/browser";

const BookingForm = () => {
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [licenseStage, setLicenseStage] = useState("");
  const [completedHazards, setCompletedHazards] = useState(false);
  const [packageType, setPackageType] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async () => {
    console.log("Form submitted:", {
      name,
      mobileNumber,
      email,
      licenseStage,
      completedHazards,
      packageType,
    });
    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        {
          name,
          mobileNumber,
          email,
          licenseStage,
          completedHazards:
            licenseStage === "learner" ? completedHazards : "N/A",
          packageType,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
      );
      console.log("EmailJS response:", response);
    } catch (error) {
      console.error("Error sending email:", error);
    }
    setIsSubmitted(true);
  };

  return (
    <Box padding={"10em"} width={"100%"}>
      <Heading
        fontSize={"6xl"}
        fontWeight={"bold"}
        lineHeight={"1.1"}
        width={"100%"}
        minWidth={"200px"}
        paddingBottom={"1em"}
        textAlign={"center"}
      >
        <Span color={"green.600"}>Book</Span> a lesson
      </Heading>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        justifySelf={"center"}
        gap={"3em"}
        flexDirection={"column"}
        width={"40%"}
        minWidth={"400px"}
        backgroundColor={"white"}
        boxShadow="md"
        borderRadius="20px"
        padding="3em"
      >
        <Fieldset.Root width={"100%"} gap="1em">
          <form>
            <Flex flexDirection={"column"} gap={"1em"} alignItems={"center"}>
              <Field.Root
                required
                width={"80%"}
                invalid={isSubmitted && name.length < 2}
              >
                <Field.Label>
                  Name <Field.RequiredIndicator />
                </Field.Label>
                <Input
                  placeholder={"John Doe"}
                  onChange={(e) => setName(e.target.value)}
                />
                <Field.ErrorText>Please enter a valid name</Field.ErrorText>
              </Field.Root>
              <Field.Root
                required
                width={"80%"}
                invalid={isSubmitted && mobileNumber.length < 10}
              >
                <NumberInput.Root
                  width={"100%"}
                  formatOptions={{
                    minimumIntegerDigits: 10,
                    useGrouping: false,
                  }}
                  onValueChange={(details) => setMobileNumber(details.value)}
                  invalid={isSubmitted && mobileNumber.length < 10}
                  inputMode="decimal"
                  required
                >
                  <Field.Label>
                    Mobile Number <Field.RequiredIndicator />
                  </Field.Label>
                  <NumberInput.Input placeholder={"0400000000"} />
                  <Field.ErrorText>
                    Please enter a valid phone number
                  </Field.ErrorText>
                </NumberInput.Root>
              </Field.Root>
              <Field.Root
                width={"80%"}
                required
                margin={"auto"}
                invalid={
                  isSubmitted &&
                  email.length < 1 &&
                  email.match(/^\S+@\S+$/) === null
                }
                _invalid={{
                  borderColor: "red.500",
                  boxShadow: "0 0 0 1px red.500",
                }}
                _hover={{
                  borderColor: "red.500",
                  boxShadow: "0 0 0 1px red.500",
                }}
              >
                <Field.Label>
                  Email <Field.RequiredIndicator />
                </Field.Label>
                <Input
                  type={"email"}
                  placeholder={"john@example.com"}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Field.Root>
              <Field.Root required width={"80%"} margin={"auto"}>
                <Field.Label>License Stage</Field.Label>
                <NativeSelect.Root>
                  <NativeSelect.Field
                    defaultValue=""
                    width={"100%"}
                    onChange={(e) => setLicenseStage(e.target.value)}
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="learner">Learners</option>
                    <option value="probationary">Probationary</option>
                  </NativeSelect.Field>
                  <NativeSelect.Indicator />
                </NativeSelect.Root>
              </Field.Root>
              {licenseStage === "learner" && (
                <Field.Root width={"80%"} margin={"auto"}>
                  <Checkbox.Root
                    colorPalette="green"
                    width={"100%"}
                    onChange={() => setCompletedHazards(!completedHazards)}
                  >
                    <Checkbox.HiddenInput />
                    <Checkbox.Control />
                    <Checkbox.Label>Completed Hazards Test?</Checkbox.Label>
                  </Checkbox.Root>
                </Field.Root>
              )}
              <Field.Root width={"80%"} margin={"auto"}>
                <Field.Label>Package</Field.Label>
                <NativeSelect.Root>
                  <NativeSelect.Field
                    defaultValue="basic"
                    onChange={(e) => setPackageType(e.target.value)}
                  >
                    <option value="" disabled>
                      Select package
                    </option>
                    <option value="single">Single Lesson $75</option>
                    <option value="starter">
                      Starter Package (5 lessons) $250
                    </option>
                    <option value="test-ready">
                      Test-Ready (10 lessons + Test day) $450
                    </option>
                    <option value="unsure">Not sure yet</option>
                  </NativeSelect.Field>
                  <NativeSelect.Indicator />
                </NativeSelect.Root>
              </Field.Root>
              <Button
                marginTop={"2em"}
                type="submit"
                width={"30%"}
                minWidth={"150px"}
                backgroundColor={THEME_COLOR}
                _hover={{
                  bg: THEME_HOVER,
                  scale: 1.02,
                  transition: "all 0.2s",
                }}
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                Request booking
              </Button>
            </Flex>
          </form>
        </Fieldset.Root>
      </Flex>
    </Box>
  );
};
export default BookingForm;
