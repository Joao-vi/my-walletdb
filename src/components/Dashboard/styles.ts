import styled from "styled-components";

export const Container = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (max-width: 414px) {
    & {
      padding: 0 0 0 1.2rem;
    }
  }
`;
