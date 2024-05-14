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
        path="/feature"
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
        path="/marketplace"
        element={
          <Layout>
            <Feature />
          </Layout>
        }
      />
      <Route
        path="/company"
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
