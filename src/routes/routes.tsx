import { createBrowserRouter } from "react-router-dom";
// import SingleHouse from "../features/houses/single-house";
import HomeLayout from "../layouts/home-layout/home-layout";
import FilterSidebar from "../layouts/sidebar/filter-sidebar.layout";
import ErrorPage from "../pages/error-page";
import ContactUs from "../pages/home/contact-us-page";
// import Home from "../pages/home/home-page";
// import HousesPage from "../pages/houses/houses-page";
import routesConfig from "./routes.config";

//const Home = lazy(() => import("../pages/home/home-page"));/
const { default: Home } = await import("../pages/home/home-page");
const { default: HousesPage } = await import("../pages/houses/houses-page");
const { default: SingleHouse } = await import(
  "../features/houses/single-house"
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: routesConfig.HOME,
        element: <Home />,
      },
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
        path: routesConfig.HOUSES,
        element: <HousesPage />,
      },
      {
        path: routesConfig.SINGLE_HOUSE,
        element: <SingleHouse />,
      },
    ],
  },
]);

export default router;
