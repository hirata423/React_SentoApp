import styled from "styled-components";
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
    <>
      <SFrontBackGround>
        <Box textAlign="center" position="relative" top="130px">
          <Input
            placeholder="   キーワードを入力"
            w={{ base: "200px", sm: "400px", md: "510px" }}
            h={{ base: "25px", sm: "35px", md: "50px" }}
            fontSize={{ base: "11px", sm: "15px", md: "18px" }}
            p="8px"
            mr="13px"
            borderRadius="999px"
            border="none"
            backgroundColor="white"
            _hover={{ backgroundColor: "green.300" }}
            onChange={onChange}
            value={keyWord}
          />
          {/* <InputParts onChange={onChange} value={keyWord} /> */}
          <Button
            w={{ base: "40px", sm: "55px", md: "80px" }}
            h={{ base: "26px", sm: "34px", md: "50px" }}
            fontSize={{ base: "5px", sm: "12px", md: "14px" }}
            p="10px"
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
      <Box
        bgImage="url('/frontpage.jpg')"
        bgPosition="center"
        bgRepeat="no-repeat"
      />
    </>
  );
};

const SFrontBackGround = styled.div`
  background-image: url("/frontpage.jpg");
  height: 80vh;
  width: 100%;
`;
