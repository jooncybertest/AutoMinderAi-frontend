import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import Layout from "./layouts/layout";
import Feature from "./components/Feature";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/services"
        element={
          <Layout>
            <Feature />
          </Layout>
        }
      />
      <Route
        path="/product"
        element={
          <Layout>
            <Feature />
          </Layout>
        }
      />
      <Route
        path="/maintenance-history"
        element={
          <Layout>
            <Feature />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <Feature />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <Feature />
          </Layout>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
