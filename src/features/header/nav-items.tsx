import routesConfig from "../../routes/routes.config";

export interface NavItem {
  title: string;
  path: string;
}

export const navItems: NavItem[] = [
  {
    title: "Home",
    path: routesConfig.HOME,
  },
  {
    title: "FAQs",
    path: routesConfig.FAQs,
  },
  {
    title: "Available Houses",
    path: routesConfig.HOUSES,
  },
  {
    title: "House Requests",
    path: routesConfig.HOUSE_REQUESTS,
  },
];
