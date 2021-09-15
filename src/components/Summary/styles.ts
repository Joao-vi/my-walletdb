import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
  margin-top: -3rem;

  div {
    height: 9.06rem;
    border-radius: 8px;
    padding: 1.66rem 2.1rem;
    background-color: var(--card-color);

    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.04);

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      font-size: 1.06rem;

      h3 {
        font-size: 1.06rem;
        font-weight: 400;
        color: var(--primary-txt);
      }
    }
    span {
      display: block;
      padding: 0.8rem 0;
      font-size: 2.4rem;
      color: var(--primary-txt);
    }
  }
  .balence {
    background-color: var(--green);
    header {
      h3 {
        color: #fff;
      }
    }
    span {
      color: #fff;
    }
  }

  @media (max-width: 414px) {
    & {
      overflow-y: hidden;
      column-gap: 1rem;
    }

    & div {
      width: 300px;
      height: 200px;

      header {
        h3 {
          font-size: 1.5rem;
        }
      }
      span {
        margin-top: 3rem;
      }
    }
  }
`;
