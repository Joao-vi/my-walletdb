import styled from "styled-components";
import TextField, { HelperText, Input } from "@material/react-text-field";

export const Content = styled.form`
  width: 34.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  padding: 4.26rem 3.2rem;
  background-color: var(--bg-color);
  border-radius: 5px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.04);

  header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    span {
      display: block;
      font-size: 1.6rem;
      color: var(--primaray-txt);
      font-weight: 600;
    }
    img {
      cursor: pointer;
    }
  }

  .submit-btn {
    width: 100%;
    padding: 0.8rem 0;
    color: white;
    font-weight: 600;
    font-size: 1rem;
    background-color: var(--green);
    border: none;
    border-radius: 5px;
  }
  @media (max-width: 414px) {
    & {
      width: 28.4rem;
      padding: 4.26rem 1.2rem;
    }
  }
`;

export const StyledTextField = styled(TextField)`
  background-color: #e7e9ee !important;
  color: var(--primary-txt);
  font-size: 1rem;
  font-weight: 400;
  width: 100%;
`;

export const ContainerTypeBtns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  width: 100%;
`;

type RadioTypeProps = {
  isActive: boolean;
  activeColor: "green" | "red";
};

const color = {
  red: "rgba(229, 46, 77, 0.1)",
  green: "rgba(18, 164, 84, 0.1)",
};

export const RadioType = styled.button<RadioTypeProps>`
  background-color: ${(props) =>
    props.isActive ? color[props.activeColor] : "transparent"};

  display: flex;
  width: 1fr;
  gap: 8px;
  align-items: center;
  justify-content: center;
  border: 1.5px solid #969cb3;
  height: 3rem;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 400;
  color: var(--primary-txt);
`;
