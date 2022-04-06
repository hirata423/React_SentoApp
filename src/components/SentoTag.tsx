import { CheckCircleIcon, StarIcon } from "@chakra-ui/icons";
import { Badge, Box, HStack, Image, useToast } from "@chakra-ui/react";
import { useState } from "react";

export const SentoTag = (props) => {
  const { id, name, address, cost, imageUrl, flag } = props;
  const toast = useToast();

  const [changeColor, setChangeColor] = useState("gray.400");
  const [like, setLike] = useState(false);

  const onClickStar = () => {
    if (changeColor) {
      setChangeColor("yellow.400");
      setLike(true);
      if (!like) {
        toast({
          position: "bottom-left",
          render: () => (
            <Box color="white" p={3} bg="green.500">
              {<CheckCircleIcon mr="2px" mb="3px" />}
              {" お気に入りリストに追加されました！"}
            </Box>
          ),
        });
      }
    }

    //booleanの型を定義、jsonをimportする、mapで

    console.log(like);
    if (changeColor === "yellow.400") {
      setChangeColor("gray.400");
      setLike(false);
      if (like) {
        toast({
          position: "bottom-left",
          render: () => (
            <Box color="white" p={3} bg="orange.500">
              {<CheckCircleIcon mr="5px" mb="3px" />}
              {"お気に入りリストから削除されました！"}
            </Box>
          ),
        });
      }
    }
  };

  return (
    <>
      <Box
        w="265px"
        h="280"
        p="2px"
        mx={2}
        mt="20px"
        borderWidth="1px"
        borderRadius="10px"
        shadow="md"
        key={id}
      >
        <Image src={imageUrl} alt="サンプル" />
        <Box p="17px" pt="-1px">
          <Box>
            <HStack spacing="170px">
              <Badge borderRadius="full" px="2" colorScheme="teal">
                New
              </Badge>
              <StarIcon
                color={changeColor}
                onClick={onClickStar}
                focusable={flag}
              />
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

export default SentoTag;
