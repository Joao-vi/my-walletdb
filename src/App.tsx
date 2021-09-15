import React, { useState } from "react";
import { GlobalStyle } from "./styles/global";
import "@material/react-material-icon/dist/material-icon.css";

import { TransactionProvider } from "./hooks/useCreateTransaction";
import { HomePage } from "./pages/home";
function App() {
  return (
    <TransactionProvider>
      <GlobalStyle />
      <HomePage />
    </TransactionProvider>
  );
}

export default App;
