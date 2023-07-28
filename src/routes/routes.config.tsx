const routesConfig = {
  // public route
  HOME: "/",
  LOGIN: "/login",
  REGISTRATION: "/registration",
  CONTACTUS: "/contact_us",
  ABOUTUS: "/about_us",
  // private route
  HOUSES: "/houses",
  SINGLE_HOUSE: "houses/:_id",
  FAQ: "/faq",
  DASHBOARD: "/dashboard",
  PROFILE: "/profile",
  // private route
  ADMIN: "/admin",
  ADMIN_DASHBOARD: "/admin/dashboard",
  ADMIN_PROFILE: "/admin/profile",
  ADMIN_USERS: "/admin/users",
  ADMIN_USER: "/admin/user/:id",
  ADMIN_USER_EDIT: "/admin/user/:id/edit",
  ADMIN_USER_DELETE: "/admin/user/:id/delete",
  ADMIN_USER_CREATE: "/admin/user/create",
  ADMIN_USER_UPDATE: "/admin/user/:id/update",
};

export default routesConfig;
