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
import { GetYourCarInfoPage } from "./pages/GetYourCarInfoPage";
import ProtectedRoute from "./auth/ProtectedRoute";
import { AiPredictPage } from "./pages/AiPredictPage";
import { Spinner } from "@nextui-org/spinner";
import { useState } from "react";

export const AppRoutes = () => {
  const [loading, setLoading] = useState(false);
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
        path="/get-your-car-info"
        element={
          <Layout>
            <GetYourCarInfoPage />
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
      <Route element={<ProtectedRoute />}>
        <Route
          path="/contact"
          element={
            <Layout>
              <ContactPage />
            </Layout>
          }
        />
        <Route
          path="/ai-predictor"
          element={
            <Layout>
              {loading ? <Spinner size="lg" /> : <AiPredictPage />}
            </Layout>
          }
        />
      </Route>
      <Route path="/unauthorized" element={<UnAuthorizePage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
