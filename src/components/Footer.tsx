import { Box, Heading } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <>
      <Box backgroundColor="gray.300" p="0.5px" h="50px">
        <Heading textAlign="center" fontSize="18px" pt="15px">
          &copy; 2022 SentoKensaku Portfolio{" "}
        </Heading>
      </Box>
    </>
  );
};
