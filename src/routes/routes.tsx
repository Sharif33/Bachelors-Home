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
import PublicLayout from "../layouts/public-layout/public-layout";
import MessDashboardPage from "../pages/dashboard/mess-dashboard/mess-dashboard-page";
import routesConfig from "./routes.config";

const Home = lazy(() => import("../pages/home/home-page"));
const HousesPage = lazy(() => import("../pages/houses/houses-page"));
const SingleHouse = lazy(() => import("../features/houses/single-house"));
const FAQsPage = lazy(() => import("../pages/faqs/faqs-page"));
const Login = lazy(() => import("../pages/auth/login"));
const Registration = lazy(() => import("../pages/auth/register"));
const ForgetPassword = lazy(() => import("../pages/auth/forgot-password"));
const ResetPassword = lazy(() => import("../pages/auth/reset-password"));
const VerifyEmail = lazy(() => import("../pages/auth/verify"));

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
  //auth(public)
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: routesConfig.LOGIN,
        element: <Login />,
      },
      {
        path: routesConfig.REGISTRATION,
        element: <Registration />,
      },
      {
        path: routesConfig.FORGET_PASSWORD,
        element: <ForgetPassword />,
      },
      {
        path: routesConfig.RESET_PASSWORD,
        element: <ResetPassword />,
      },
      {
        path: routesConfig.VERIFY_EMAIL,
        element: <VerifyEmail />,
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
