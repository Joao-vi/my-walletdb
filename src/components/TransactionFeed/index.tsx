import { useTransaction } from "../../hooks/useCreateTransaction";
import { Container } from "./styles";

export function TransactionFeed() {
  const { transactions } = useTransaction();

  function renderTransaction(transaction: any) {
    return (
      <tr key={transaction.id}>
        <td className="title">{transaction.newTransaction.name} </td>
        <td
          style={{
            color:
              transaction.newTransaction.type === "deposit" ? "green" : "red",
          }}
          className="income"
        >
          {new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "BRL",
          }).format(transaction.newTransaction.price)}
        </td>
        <td>{transaction.newTransaction.category}</td>
        <td>{transaction.newTransaction.date}</td>
      </tr>
    );
  }
  function renderTransactionMobile(transaction: any) {
    return (
      <div key={transaction.id} className="card">
        <header>
          <h2>{transaction.newTransaction.name}</h2>
          <h2
            style={{
              color:
                transaction.newTransaction.type === "deposit" ? "green" : "red",
            }}
            className="price"
          >
            {new Intl.NumberFormat("ja-JP", {
              style: "currency",
              currency: "BRL",
            }).format(transaction.newTransaction.price)}
          </h2>
        </header>
        <footer>
          <span>{transaction.newTransaction.category}</span>
          <span>{transaction.newTransaction.date}</span>
        </footer>
      </div>
    );
  }

  return (
    <Container>
      <header className="mobile-header">
        <h1>Listagem</h1>
        <span>{transactions.length} itens</span>
      </header>
      {window.screen.width > 414 ? (
        <table>
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Valor</th>
              <th>Categoria</th>
              <th>Data</th>
            </tr>
          </thead>

          <tbody>{transactions.map((trans) => renderTransaction(trans))}</tbody>
        </table>
      ) : (
        <div className="container-cards-mobile">
          {transactions.map((trans) => renderTransactionMobile(trans))}
        </div>
      )}
    </Container>
  );
}
