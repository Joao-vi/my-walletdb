import { createContext, ReactNode, useContext, useState } from "react";
import { contextType } from "react-modal";
import { api } from "../services/api";
type TransactionContextProps = {
  transactions: TransactionType[];
  createTransaction: (newTransaction: TransactionType) => Promise<any>;
};

export const TransactionContext = createContext({} as TransactionContextProps);

type TransactionProviderProps = {
  children: ReactNode;
};

type TransactionType = {
  id?: string;

  name: string;
  price: number;
  type: string;
  category: string;
  date: string;
};

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<any[]>([]);

  async function createTransaction(newTransaction: any) {
    const response = await api.post("/transactions", {
      newTransaction,
    });
    const { transaction } = response.data;
    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransaction() {
  const context = useContext(TransactionContext);
  return context;
}
