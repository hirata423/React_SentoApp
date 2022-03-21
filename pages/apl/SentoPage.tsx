import Link from "next/link";
import styled from "styled-components";

export const SentoPage = () => {
  return (
    <>
      <Sdiv>
        <dl>
          <Sdt>銭湯名：</Sdt>
          <Sdd>〇〇湯</Sdd>
          <br />
          <Sdt>住　所：</Sdt>
          <Sdd>〇〇県〇〇市</Sdd>
          <br />
          <Sdt>料　金：</Sdt>
          <Sdd>〇〇円</Sdd>
        </dl>
        <Link href="/">テスト</Link>
      </Sdiv>
    </>
  );
};

const Sdiv = styled.div`
  border: solid gray 1px;
  border-radius: 10px;
  width: 40vh;
  background-color: green;
  padding: 8px;
  margin: 6px;
`;

const Sdt = styled.dt`
  float: left;
`;

const Sdd = styled.dd`
  margin-left: 80px;
`;
