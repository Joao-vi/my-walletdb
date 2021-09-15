import { Container, Content } from "./style";

import logoImg from "../../assets/logo.svg";

type HeaderProps = {
  handleShowModalTransaction: () => void;
};

export function Header({ handleShowModalTransaction }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo" />
        <button type="button" onClick={handleShowModalTransaction}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
