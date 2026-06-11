import { LessonPackage } from "@/components/packages/LessonPackage";
import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";
import { THEME_COLOR } from "@/pages/_app";

const PriceCard = ({ lessonPackage }: { lessonPackage: LessonPackage }) => {
  const { title, subtitle, price, priceLabel, benefits, isPopular, ctaLabel } =
    lessonPackage;
  const bg = isPopular ? THEME_COLOR : "white";
  const textColor = isPopular ? "white" : "black";
  const subtitleColor = isPopular ? "whiteAlpha.800" : "gray.500";
  const btnBg = isPopular ? "white" : "black";
  const btnColor = isPopular ? "black" : "white";
  const btnHover = isPopular ? "gray.100" : "#222";

  return (
    <Box position="relative" paddingTop={isPopular ? "2" : "4em"}>
      {isPopular && (
        <Flex
          position="absolute"
          top={0}
          left="50%"
          transform="translateX(-50%)"
          backgroundColor={"white"}
          color={THEME_COLOR}
          border={THEME_COLOR}
          borderWidth={"2px"}
          borderRadius="full"
          paddingX="1.2em"
          paddingY="0.3em"
          zIndex={1}
        >
          <Text
            fontSize="xs"
            fontWeight="bold"
            letterSpacing="widest"
            textTransform="uppercase"
          >
            Most Popular
          </Text>
        </Flex>
      )}
      <Box
        backgroundColor={bg}
        borderRadius="2xl"
        padding="3em"
        width={{ base: "90%", lg: "15%" }}
        minWidth={{ base: "unset", lg: "300px" }}
        boxShadow="md"
        display="flex"
        flexDirection="column"
        gap="1.2em"
      >
        <Box>
          <Heading
            fontSize="3xl"
            fontWeight="bold"
            color={textColor}
            marginBottom="0.3em"
          >
            {title}
          </Heading>
          <Text fontSize="sm" color={subtitleColor}>
            {subtitle}
          </Text>
        </Box>

        <Flex alignItems="flex-end" gap="0.3em">
          <Heading
            fontSize="5xl"
            fontWeight="bold"
            color={textColor}
            lineHeight="1"
          >
            ${price}
          </Heading>
          <Text fontSize="sm" color={subtitleColor} marginBottom="0.4em">
            {priceLabel}
          </Text>
        </Flex>

        <Box>
          {benefits.map((benefit, i) => (
            <Flex key={i} alignItems="center" gap="0.6em" marginBottom="0.5em">
              <FaCheck color={isPopular ? "white" : THEME_COLOR} size={12} />
              <Text fontSize="sm" color={textColor}>
                {benefit}
              </Text>
            </Flex>
          ))}
        </Box>

        <Box
          as="button"
          marginTop="auto"
          backgroundColor={btnBg}
          color={btnColor}
          fontWeight="bold"
          fontSize="md"
          paddingY="0.9em"
          borderRadius="full"
          width="100%"
          textAlign="center"
          cursor="pointer"
          transition="background 0.2s"
          _hover={{ backgroundColor: btnHover }}
        >
          {ctaLabel}
        </Box>
      </Box>
    </Box>
  );
};

export default PriceCard;
