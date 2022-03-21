import styled from "styled-components";

export const Footer = () => {
  return (
    <>
      <SFooterCover>
        <SFotterBar>&copy; 2022 SentoKensaku Portfolio </SFotterBar>
      </SFooterCover>
    </>
  );
};

const SFooterCover = styled.div`
  background-color: #7777;
  padding: 0.5px;
`;

const SFotterBar = styled.h5`
  text-align: center;
`;
