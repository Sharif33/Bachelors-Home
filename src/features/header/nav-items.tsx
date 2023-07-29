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
    title: "FAQ",
    path: routesConfig.FAQ,
  },
];
