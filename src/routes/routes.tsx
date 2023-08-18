import { createBrowserRouter } from "react-router-dom";
// import SingleHouse from "../features/houses/single-house";
import HomeLayout from "../layouts/home-layout/home-layout";
import FilterSidebar from "../layouts/sidebar/filter-sidebar.layout";
import ErrorPage from "../pages/error-page";
import ContactUs from "../pages/home/contact-us-page";
// import Home from "../pages/home/home-page";
// import HousesPage from "../pages/houses/houses-page";
import { lazy } from "react";
import MessDashboardLayout from "../layouts/dashboard-layout/mess-dashboard-layout";
import MessDashboardPage from "../pages/dashboard/mess-dashboard/mess-dashboard-page";
import routesConfig from "./routes.config";

const Home = lazy(() => import("../pages/home/home-page"));
const HousesPage = lazy(() => import("../pages/houses/houses-page"));
const SingleHouse = lazy(() => import("../features/houses/single-house"));
const FAQsPage = lazy(() => import("../pages/faqs/faqs-page"));

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
      {
        path: routesConfig.FAQs,
        element: <FAQsPage />,
      },
    ],
  },
  //Houses
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
  //Mess
  {
    path: "/",
    element: <MessDashboardLayout />,
    children: [
      {
        index: true,
        path: routesConfig.MESS_DASHBOARD,
        element: <MessDashboardPage />,
      },
    ],
  },
]);

export default router;
