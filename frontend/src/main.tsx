import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { QueryClient, QueryClientProvider } from "react-query";
import Auth0ProviderWithNavigate from "./auth/Auth0ProviderWithNavigate";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={new QueryClient()}>
        <Auth0ProviderWithNavigate>
          <AppRoutes />
          <Toaster visibleToasts={1} position="top-right" richColors />
        </Auth0ProviderWithNavigate>
      </QueryClientProvider>
    </Router>
  </React.StrictMode>
);
