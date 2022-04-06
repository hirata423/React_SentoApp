import { Input } from "@chakra-ui/react";

export const InputParts = (props) => {
  const { onChange, keyWord } = props;

  return (
    <>
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
    </>
  );
};
