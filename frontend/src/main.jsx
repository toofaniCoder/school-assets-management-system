import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// setup axios
import axios from "axios";
axios.defaults.baseURL = "http://localhost:1337";

// import fonts Roboto
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { CssBaseline, GlobalStyles } from "@mui/material";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <GlobalStyles styles={{ body: { backgroundColor: "#f5f5f5" } }} />
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
