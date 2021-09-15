import styled from "styled-components";

export const Container = styled.section`
  padding: 4.26rem 1.5rem 2rem 1.5rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    thead {
      th {
        color: var(--secondary-txt);
        text-align: left;
        font-weight: 400;
        padding: 1rem 2rem;
      }
    }

    td {
      background-color: var(--card-color);
      padding: 1rem;
      color: var(--secondary-txt);

      &.with-draw {
        color: var(--red);
      }

      &.income {
        color: var(--green);
      }
    }
    .title {
      color: var(--primary-txt);
      font-weight: 600;
    }
  }

  @media (min-width: 414px) {
    & .mobile-header {
      display: none;
    }
  }

  @media (max-width: 414px) {
    & {
      padding: 4.26rem 1.5rem 2rem 0rem;
    }
    & .mobile-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      h1 {
        font-size: 1.5rem;
        color: var(--primary-txt);
      }
      span {
        font-size: 1rem;
        font-weight: 500;
        color: var(--secondary-txt);
      }
    }
    & table {
      display: none;
    }
  }

  .container-cards-mobile {
    display: flex;
    gap: 10px;
    flex-direction: column;

    .card {
      display: flex;
      flex-direction: column;
      padding: 17px 24px;

      background-color: var(--card-color);
      border-radius: 5px;

      header {
        display: flex;
        flex-direction: column;
        gap: 10px;

        h2 {
          font-size: 17px;
          font-weight: 400;
          color: var(--primary-txt);
        }
        .price {
          font-size: 18px;
          font-weight: 500;
        }
      }

      footer {
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
        color: var(--secondary-txt);
      }
    }
  }
`;
