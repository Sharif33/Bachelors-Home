import { createBrowserRouter } from "react-router-dom";
import SingleHouse from "../features/houses/single-house";
import FilterSidebar from "../layouts/sidebar/filter-sidebar.layout";
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
    element: <FilterSidebar />,
    children: [
      {
        path: routesConfig.DISCUSION,
        element: <Discusion />,
      },
      {
        path: "discusion/:_id",
        element: <SingleHouse />,
      },
    ],
  },
]);

export default router;
