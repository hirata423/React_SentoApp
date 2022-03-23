import styled from "styled-components";
import frontimg from "../../public/fronpage.jpg";
import { useState } from "react";

export const FrontPage = () => {
  const [keyWord, setKeyWord] = useState("");
  const onChange = (event) => setKeyWord(event.target.value);

  const onClick = () => {
    setKeyWord("");
    console.log(keyWord);
  };

  return (
    <SFront>
      <SFront2>
        <SText
          placeholder={"キーワードを入力"}
          onChange={onChange}
          value={keyWord}
        />
        <SButton onClick={onClick}>検索</SButton>
      </SFront2>
    </SFront>
  );
};

const SFront = styled.div`
  background-image: url(${frontimg.src});
  height: 80vh;
  width: 100%;
`;

const SFront2 = styled.div`
  text-align: center;
  position: relative;
  top: 130px;
`;

const SText = styled.input`
  width: 510px;
  height: 45px;
  border-radius: 9999px;
  border: none;
  margin-right: 13px;
  font-size: 18px;
  padding: 8px;
  &:hover {
    background-color: yellowgreen;
  }
`;

const SButton = styled.button`
  width: 80px;
  height: 46px;
  border-radius: 9999px;
  border: none;
  font-size: 15px;
  padding: 8px;
  background-color: #7777;
  &:hover {
    background-color: yellowgreen;
  }
`;
