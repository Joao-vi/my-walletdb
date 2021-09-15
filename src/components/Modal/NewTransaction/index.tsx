import {
  Content,
  StyledTextField,
  RadioType,
  ContainerTypeBtns,
} from "./styles";

import { FormEvent, useContext, useState } from "react";

import { useTransaction } from "../../../hooks/useCreateTransaction";

import { Input } from "@material/react-text-field";
import Modal from "react-modal";
import toast, { Toaster } from "react-hot-toast";
import "@material/react-text-field/dist/text-field.css";

import incomeImg from "../../../assets/income.svg";
import outcomeImg from "../../../assets/outcome.svg";
import closeBtn from "../../../assets/close.svg";

type CompoProps = {
  showModal: boolean;
  handleShowModalTransaction: () => void;
};

export function NewTransactionModal({
  showModal,
  handleShowModalTransaction,
}: CompoProps) {
  const [inputName, setInputName] = useState("");
  const [inputPrice, setInputPrice] = useState(0);
  const [inputCategoria, setInputCategoria] = useState("");
  const [type, setType] = useState("deposit");
  let on = false;
  const { createTransaction } = useTransaction();
  async function handleSubmitForm(e: FormEvent) {
    e.preventDefault();
    if (
      inputName.trim() === "" ||
      inputPrice === 0 ||
      inputCategoria.trim() === ""
    ) {
      toast.error("Preencher todos os campos!");
      return;
    }
    const loading = toast.loading("Aguarde..");
    const date = new Date();
    await createTransaction({
      name: inputName,
      price: inputPrice,
      category: inputCategoria,
      type: type,
      date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
    });
    toast.success("Finalizado!", {
      id: loading,
    });
    setTimeout(() => {
      handleShowModalTransaction();
      setInputName("");
      setInputCategoria("");
      setInputPrice(0);
      on = false;
    }, 1000);
  }
  Modal.setAppElement("#root");
  return (
    <Modal
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      isOpen={showModal}
      onRequestClose={handleShowModalTransaction}
    >
      <Toaster />
      <Content onSubmit={handleSubmitForm}>
        <header>
          <span>Cadastrar transação</span>
          <img
            src={closeBtn}
            alt="Fechar."
            onClick={handleShowModalTransaction}
          />
        </header>
        <StyledTextField outlined label="Nome">
          <Input
            onChange={(e: any) => setInputName(e.target.value)}
            value={inputName}
          />
        </StyledTextField>
        <StyledTextField outlined label="Preço">
          <Input
            type="number"
            onChange={(e: any) => setInputPrice(e.target.value)}
            value={inputPrice}
          />
        </StyledTextField>
        <ContainerTypeBtns>
          <RadioType
            type="button"
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" /> Entrada
          </RadioType>
          <RadioType
            type="button"
            onClick={() => setType("with-draw")}
            isActive={type === "with-draw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" /> Saída
          </RadioType>
        </ContainerTypeBtns>
        <StyledTextField outlined label="Categoria">
          <Input
            onChange={(e: any) => setInputCategoria(e.target.value)}
            value={inputCategoria}
          />
        </StyledTextField>

        <button className="submit-btn" type="submit">
          Cadastrar
        </button>
      </Content>
    </Modal>
  );
}
