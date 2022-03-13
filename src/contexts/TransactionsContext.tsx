import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services";

interface TransactionsProviderProps {
  children: ReactNode;
}
interface TransactionType {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string;
}

type TransactionsInput = Omit<TransactionType, "id" | "createdAt">;

interface TransactionContextData {
  transactions: TransactionType[];
  createContext: (transaction: TransactionsInput) => void;
}

export const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export const TransactionProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransaction] = useState<TransactionType[]>([]);

  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransaction(response.data.transactions));
  }, []);

  const createContext = async (transactionInput: TransactionsInput) => {
    const response = await api.post("/transactions", {
      ...transactionInput,
      createdAt: new Date(),
    });

    const { transaction } = response.data;
    setTransaction([...transactions, transaction]);
  };

  return (
    <TransactionsContext.Provider value={{ transactions, createContext }}>
      {children}
    </TransactionsContext.Provider>
  );
};
