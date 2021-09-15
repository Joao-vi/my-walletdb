import { Container } from "./styles";
import { Summary } from "../Summary";
import { TransactionFeed } from "../TransactionFeed";
export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionFeed />
    </Container>
  );
}
