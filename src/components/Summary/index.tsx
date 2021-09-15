import { useEffect, useState } from "react";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import balancoImg from "../../assets/total.svg";
import { useTransaction } from "../../hooks/useCreateTransaction";

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useTransaction();
  console.log(transactions);

  const summary = transactions.reduce(
    (acc, { newTransaction }: any) => {
      if (newTransaction.type === "deposit") {
        acc.deposits += parseInt(newTransaction.price);
        acc.total += parseInt(newTransaction.price);
      } else {
        acc.withdraws += parseInt(newTransaction.price);
        acc.total -= parseInt(newTransaction.price);
      }
      console.log(acc.total);

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <h3>Entradas</h3>
          <img src={incomeImg} alt="Entradas." />
        </header>
        <span>
          {new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "BRL",
          }).format(summary.deposits)}
        </span>
      </div>
      <div>
        <header>
          <h3>Saídas</h3>
          <img src={outcomeImg} alt="Saídas." />
        </header>
        <span>
          {new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "BRL",
          }).format(summary.withdraws)}
        </span>
      </div>
      <div className="balence">
        <header>
          <h3>Balanço</h3>
          <img src={balancoImg} alt="Total em conta." />
        </header>
        <span>
          {new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </span>
      </div>
    </Container>
  );
}
