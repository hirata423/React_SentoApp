import styled from "styled-components";
import Link from "next/link";

export const MenuBar = () => {
  return (
    <>
      <h4>
        <SMenu>
          <Link href="/components/links/SentoPage">
            <Sp>銭　湯</Sp>
          </Link>
          <Link href="/components/links/SaunaPage">
            <Sp>サウナ</Sp>
          </Link>
          <Link href="/components/links/SuperSentoPage">
            <Sp> スーパー銭湯</Sp>
          </Link>
          <Link href="/components/links/NearSentoPage">
            <Sp>近くの銭湯</Sp>
          </Link>
          <Link href="/components/links/GuidePage">
            <Sp>ガイド</Sp>
          </Link>
        </SMenu>
      </h4>
    </>
  );
};

const Sp = styled.p`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: blue;
  }
`;

const SMenu = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  border-bottom: solid 1px black;
  padding-bottom: 6px;
`;
