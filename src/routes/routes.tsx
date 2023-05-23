import { createBrowserRouter } from "react-router-dom";
import ContactUs from "../pages/home/contact-us-page";
import Home from "../pages/home/home-page";
import routesConfig from "./routes.config";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: routesConfig.CONTACTUS,
        element: <ContactUs />,
      },
    ],
  },
]);

export default router;
