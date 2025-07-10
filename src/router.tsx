import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Contact from "./pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default router;
