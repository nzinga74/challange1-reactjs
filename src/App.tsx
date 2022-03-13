import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import TransactionsTable from "./components/TransactionsTable";
import { GlobalStyle } from "./styles/global";
import { createServer, Model } from "miragejs";
import { useState } from "react";
import TransactionsModal from "./components/TransactionsModal";
import {
  TransactionsContext,
  TransactionProvider,
} from "./contexts/TransactionsContext";

function App() {
  /*
    & My mirageJs configuration
  */

  createServer({
    models: {
      transaction: Model,
    },
    seeds(server) {
      server.db.loadData({
        transactions: [
          {
            id: 1,
            title: "Freelance de Website",
            type: "deposit",
            category: "Dev",
            amount: 6000,
            createdAt: new Date("2021-01-12 09:00:00"),
          },
          {
            id: 2,
            title: "Aluguel",
            type: "withdraw",
            category: "Casa",
            amount: 1100,
            createdAt: new Date("2021-01-14 11:00:00"),
          },
        ],
      });
    },
    routes() {
      this.namespace = "api";
      this.get("/transactions", () => {
        return this.schema.all("transaction");
      });

      this.post("/transactions", (schema, request) => {
        const data = JSON.parse(request.requestBody);
        return schema.create("transaction", data);
      });
    },
  });

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);
  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <TransactionProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <GlobalStyle />
      <Dashboard />
      <TransactionsTable />
      <TransactionsModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </TransactionProvider>
  );
}

export default App;
