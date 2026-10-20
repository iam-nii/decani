import { createBrowserRouter } from "react-router-dom";
import SiteLayout from "./components/layouts/SiteLayout";
import LandingPage from "./pages/LandingPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SiteLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default router;
