import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--header-color);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2.4rem 1.5rem 9rem 1.5rem;

  button {
    font-size: 1.06rem;
    height: 3.2rem;
    padding: 0.8rem 2.4rem;
    color: #fff;
    background-color: var(--btn-color);
    outline: none;
    border: none;

    transition: filter 0.2s ease;

    &:hover {
      filter: opacity(0.9);
    }
  }

  @media (max-width: 414px) {
    & button {
      padding: 0.8rem 1.8rem;
    }
  }
`;
