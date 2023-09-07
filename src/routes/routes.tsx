import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import UserCard from "../features/houses/request-houses/user-card";
import UserDashboardLayout from "../layouts/dashboard-layout/user-dashboard-layout";
import HomeLayout from "../layouts/home-layout/home-layout";
import PublicLayout from "../layouts/public-layout/public-layout";
import FilterSidebar from "../layouts/sidebar/filter-sidebar.layout";
import ErrorPage from "../pages/error-page";
import routesConfig from "./routes.config";

const Home = lazy(() => import("../pages/home/home-page"));
const HousesPage = lazy(() => import("../pages/houses/houses-page"));
const SingleHouse = lazy(() => import("../features/houses/single-house"));
const CreateHouseRequest = lazy(
  () => import("../pages/houses/house-requests-page")
);
const AboutUsPage = lazy(() => import("../pages/home/about-us-page"));
const ContactUs = lazy(() => import("../pages/home/contact-us-page"));
const FAQsPage = lazy(() => import("../pages/faqs/faqs-page"));

const Login = lazy(() => import("../pages/auth/login"));
const Registration = lazy(() => import("../pages/auth/register"));
const ForgetPassword = lazy(() => import("../pages/auth/forgot-password"));
const ResetPassword = lazy(() => import("../pages/auth/reset-password"));
const VerifyEmail = lazy(() => import("../pages/auth/verify"));

const UserDashboardPage = lazy(
  () => import("../pages/dashboard/user-dashboard/user-dashboard")
);
const SubmitHousePage = lazy(
  () => import("../pages/dashboard/user-dashboard/create-house-post")
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
        path: routesConfig.SINGLE_HOUSE,
        element: <SingleHouse />,
      },

      {
        path: routesConfig.ABOUTUS,
        element: <AboutUsPage />,
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
  {
    path: "/house_requests",
    element: <CreateHouseRequest />,
    children: [
      {
        path: routesConfig.SINGLE_HOUSE_REQUEST,
        element: <UserCard />,
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
    ],
  },
  //Mess
  {
    path: "/",
    element: <UserDashboardLayout />,
    children: [
      {
        index: true,
        path: routesConfig.DASHBOARD,
        element: <UserDashboardPage />,
      },
      {
        path: routesConfig.CREATE_HOUSE_POST,
        element: <SubmitHousePage />,
      },
    ],
  },
]);

export default router;
