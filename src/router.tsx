import { createBrowserRouter } from "react-router-dom";
import Landing from "./pages/LandingPage";
import Contact from "./pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default router;
