import { useState } from "react";
import { Dashboard } from "../components/Dashboard";
import { Header } from "../components/header";
import { NewTransactionModal } from "../components/Modal/NewTransaction";

export function HomePage() {
  const [showModal, setShowModal] = useState(false);
  function handleShowModalTransaction() {
    setShowModal(!showModal);
  }

  return (
    <>
      <Header handleShowModalTransaction={handleShowModalTransaction} />
      <Dashboard />
      <NewTransactionModal
        showModal={showModal}
        handleShowModalTransaction={handleShowModalTransaction}
      />
    </>
  );
}
