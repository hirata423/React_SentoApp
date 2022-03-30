import styled from "styled-components";
import frontimg from "../public/fronpage.jpg";
import { useState } from "react";
import { Box, Button, Input } from "@chakra-ui/react";

export const Front = () => {
  const [keyWord, setKeyWord] = useState("");
  const onChange = (event) => setKeyWord(event.target.value);

  const onClick = () => {
    setKeyWord("");
    console.log(keyWord);
  };

  return (
    <SFrontBackGround>
      <Box textAlign="center" position="relative" top="130px">
        <Input
          placeholder="   キーワードを入力"
          w={{ md: "510px", sm: "250px" }}
          h={{ md: "50px", sm: "39px" }}
          borderRadius="999px"
          fontSize="18px"
          mr="13px"
          p="8px"
          border="none"
          backgroundColor="white"
          _hover={{ backgroundColor: "green.300" }}
          onChange={onChange}
          value={keyWord}
        />
        <Button
          w={{ md: "80px", sm: "60px" }}
          h={{ md: "50px", sm: "25px" }}
          p="20px"
          fontSize="15px"
          borderRadius="999px"
          border="none"
          backgroundColor="gray.300"
          _hover={{ backgroundColor: "green.300" }}
          onClick={onClick}
        >
          検索
        </Button>
      </Box>
    </SFrontBackGround>
  );
};

const SFrontBackGround = styled.div`
  background-image: url(${frontimg.src});
  height: 80vh;
  width: 100%;
`;
