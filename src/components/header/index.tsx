import { Container, Content } from "./style";

import logoImg from "../../assets/myLogo.svg";

type HeaderProps = {
  handleShowModalTransaction: () => void;
};

export function Header({ handleShowModalTransaction }: HeaderProps) {
  return (
    <Container>
      <Content>
        <div className="logo">
          <img src={logoImg} alt="Logo" />
          <h1>My WalletDB</h1>
        </div>
        <button type="button" onClick={handleShowModalTransaction}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
