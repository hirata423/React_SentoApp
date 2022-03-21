import styled from "styled-components";

export const MenuBar = () => {
  return (
    <>
      <h4>
        <SMenu>
          <Sp>銭湯ガイド</Sp>
          <Sp>サウナ</Sp>
          <Sp> スーパー銭湯</Sp>
          <Sp>近くの銭湯</Sp>
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
