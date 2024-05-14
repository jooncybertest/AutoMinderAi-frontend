import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import Layout from "./layouts/layout";
import Feature from "./components/Feature";
import AboutUs from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";

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
            <AboutUs />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <ContactPage />
          </Layout>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
