import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import routesConfig from "../routes/routes.config";

interface IPageTitles {
  [key: string]: string;
}

const pageTitles: IPageTitles = {
  [routesConfig.HOME]: "Bachelors Home",
  [routesConfig.CONTACTUS]: "Contact Us",
  [routesConfig.LOGIN]: "Log In",
  [routesConfig.REGISTRATION]: "Registration",
};

const useTitles = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = pageTitles[location.pathname] ?? "404";
  }, [location]);

  return pageTitles;
};

export default useTitles;
