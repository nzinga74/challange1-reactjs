import React from "react";
import { Container, Content } from "./styles";
import { HeaderProps } from "./types";
const Header: React.FC<HeaderProps> = ({ onOpenNewTransactionModal }) => {
  return (
    <Container>
      <Content>
        <img src="" />
        <button type="button" onClick={() => onOpenNewTransactionModal()}>
          Nova Transação
        </button>
      </Content>
    </Container>
  );
};

export default Header;
