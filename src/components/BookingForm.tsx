import {
  Box,
  Field,
  Fieldset,
  Heading,
  HStack,
  Input,
  NumberInput,
  NativeSelect,
  Checkbox,
} from "@chakra-ui/react";
import { useState } from "react";

const BookingForm = () => {
  const [isLeaner, setIsLearner] = useState(false);

  return (
    <Box padding={"10em"} width={"100%"}>
      <Heading
        fontSize={"6xl"}
        fontWeight={"bold"}
        lineHeight={"1.1"}
        width={"100%"}
        paddingBottom={"1em"}
        textAlign={"center"}
      >
        Book a lesson
      </Heading>
      <Fieldset.Root
        marginLeft={"20%"}
        marginRight={"20%"}
        backgroundColor={"gray.100"}
        width={"60%"}
        borderRadius="20px"
        padding="2em"
        gap="1em"
      >
        <HStack gap="1em" justifyContent="space-evenly">
          <Field.Root required width={"30%"}>
            <Field.Label>
              Name <Field.RequiredIndicator />
            </Field.Label>
            <Input placeholder={"John Doe"} />
          </Field.Root>
          <Field.Root required width={"30%"}>
            <NumberInput.Root width={"100%"}>
              <Field.Label>
                Mobile Number <Field.RequiredIndicator />
              </Field.Label>
              <NumberInput.Input />
            </NumberInput.Root>
          </Field.Root>
        </HStack>
        <Field.Root width={"75%"} required margin={"auto"}>
          <Field.Label>
            Email <Field.RequiredIndicator />
          </Field.Label>
          <Input type={"email"} placeholder={"john@example.com"} />
        </Field.Root>
        <Field.Root required width={"75%"} margin={"auto"}>
          <Field.Label>What stage are you at?</Field.Label>
          <NativeSelect.Root>
            <NativeSelect.Field
              defaultValue=""
              width={"100%"}
              onChange={(e) => setIsLearner(e.target.value === "learner")}
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="learner">Learners</option>
              <option value="probationary">Probationary</option>
            </NativeSelect.Field>
          </NativeSelect.Root>
        </Field.Root>
        {isLeaner && (
          <Field.Root width={"75%"} margin={"auto"}>
            <Checkbox.Root colorPalette="green" width={"100%"}>
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>Completed Hazards Test?</Checkbox.Label>
            </Checkbox.Root>
          </Field.Root>
        )}
      </Fieldset.Root>
    </Box>
  );
};
export default BookingForm;
