import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/error-page";
import ContactUs from "../pages/home/contact-us-page";
import Discusion from "../pages/home/discusion.page";
import Home from "../pages/home/home-page";
import routesConfig from "./routes.config";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: routesConfig.CONTACTUS,
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "/",
    element: <Discusion />,
    children: [
      {
        path: routesConfig.DISCUSION,
        element: <Discusion />,
      },
    ],
  },
]);

export default router;
