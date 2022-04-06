import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, HStack, Image } from "@chakra-ui/react";
import { useState } from "react";

export const SentoPageData = (props) => {
  const { id, name, address, cost } = props;
  const [changeColor, setChangeColor] = useState("gray.400");

  const onClickStar = () => {
    if (changeColor) {
      setChangeColor("yellow.400");
    }
    if (changeColor === "yellow.400") {
      setChangeColor("gray.400");
    }
  };

  return (
    <>
      <Box
        w="265px"
        h="auto"
        p="2px"
        m={2}
        borderWidth="1px"
        borderRadius="10px"
        shadow="md"
        key={id}
      >
        {/* <Image src={item.imageUrl} alt="サンプル" /> */}
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ95uJF4wKRUvnFAbTyCGR6CSI_hm9FaLpitw&usqp=CAU"
          alt="サンプル"
        />
        <Box p="17px" pt="-1px">
          <Box>
            <HStack spacing="170px">
              <Badge borderRadius="full" px="2" colorScheme="teal">
                New
              </Badge>
              <StarIcon color={changeColor} onClick={onClickStar} />
            </HStack>
            <Box color="gray.500" fontSize="xs" ml="2"></Box>
          </Box>
          <Box mt="1" as="h4">
            {name}
          </Box>
          <HStack spacing="20px">
            <Box>
              {address}
              <Box as="span" color="gray.600" fontSize="sm">
                /日本
              </Box>
            </Box>
            <Box>
              {cost}
              {"円"}
            </Box>
          </HStack>
        </Box>
      </Box>
    </>
  );
};

export default SentoPageData;
