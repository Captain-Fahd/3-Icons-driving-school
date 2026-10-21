import {
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
  Link,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { THEME_COLOR, THEME_HOVER } from "@/pages/_app";
import emailjs from "@emailjs/browser";
import { useWindowSize } from "@/components/WindowSize";
import { HOUR_PACKAGES, BUNDLES } from "@/components/packages/Packages";

const BookingForm = () => {
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [licenseStage, setLicenseStage] = useState("");
  const [completedHazards, setCompletedHazards] = useState(false);
  const [packageType, setPackageType] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const windowSize = useWindowSize();
  const BREAKPOINT = 768;
  const router = useRouter();

  // Preselect from the query param (e.g. /book?package=single-lesson) until the user picks
  const queryPackage =
    typeof router.query.package === "string" ? router.query.package : "";
  const selectedPackage = packageType || queryPackage;

  // Disabled section headers, then packages and bundles listed accordingly
  const packageOptions = (
    <>
      <option value="" disabled>
        Select package
      </option>
      <option disabled>── Packages ──</option>
      {HOUR_PACKAGES.map((pkg) => (
        <option key={pkg.id} value={pkg.id}>
          {pkg.title} — ${pkg.price}
        </option>
      ))}
      <option disabled>── Bundles ──</option>
      {BUNDLES.map((bundle) => (
        <option key={bundle.id} value={bundle.id}>
          {bundle.title} — ${bundle.price}
        </option>
      ))}
      <option value="unsure">Not sure yet</option>
    </>
  );

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
          packageType: selectedPackage,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
      );
      console.log("EmailJS response:", response);
    } catch (error) {
      console.error("Error sending email:", error);
    }
    setIsSubmitted(true);
  };

  if (windowSize.width !== null && windowSize.width <= BREAKPOINT) {
    return (
      <Flex
        flexDirection={"column"}
        alignItems={"center"}
        paddingY={"10em"}
        paddingX={"1em"}
        width={"100%"}
      >
        <Heading
          fontSize={"5xl"}
          fontWeight={"bold"}
          margin={"auto"}
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
          width={"100%"}
          maxWidth={"450px"}
          backgroundColor={"white"}
          boxShadow="md"
          borderRadius="20px"
          padding="2em"
        >
          <Fieldset.Root width={"100%"} gap="1em">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
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
                      value={selectedPackage}
                      onChange={(e) => setPackageType(e.target.value)}
                    >
                      {packageOptions}
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
                >
                  Request booking
                </Button>
              </Flex>
            </form>
          </Fieldset.Root>
        </Flex>
      </Flex>
    );
  }
  return (
    <Flex
      flexDirection={"column"}
      padding={"10em"}
      width={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Heading
        fontSize={"6xl"}
        fontWeight={"bold"}
        margin={"auto"}
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
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
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
                    <Checkbox.Label>
                      <Link
                        href={
                          "https://www.vicroads.vic.gov.au/ls-and-ps/getting-your-ps/hazard-perception-test"
                        }
                      >
                        Completed Hazards Test?
                      </Link>
                    </Checkbox.Label>
                  </Checkbox.Root>
                </Field.Root>
              )}
              <Field.Root width={"80%"} margin={"auto"}>
                <Field.Label>Package</Field.Label>
                <NativeSelect.Root>
                  <NativeSelect.Field
                    value={selectedPackage}
                    onChange={(e) => setPackageType(e.target.value)}
                  >
                    {packageOptions}
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
              >
                Request booking
              </Button>
            </Flex>
          </form>
        </Fieldset.Root>
      </Flex>
    </Flex>
  );
};
export default BookingForm;
