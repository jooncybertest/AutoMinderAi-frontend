import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import Layout from "./layouts/layout";
import Feature from "./components/Feature";
import AboutUs from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import PageNotFound from "./pages/PageNotFound";
import UnAuthorizePage from "./pages/UnAuthorizePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <HomePage />
            <Footer />
          </>
        }
      />
      <Route path="/auth-callback" element={<AuthCallbackPage />} />
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
      <Route path="/unauthorized" element={<UnAuthorizePage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
