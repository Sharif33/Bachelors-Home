const routesConfig = {
  // public route
  HOME: "/",
  LOGIN: "/login",
  REGISTRATION: "/registration",
  FORGET_PASSWORD: "/forget_password",
  RESET_PASSWORD: "/reset_password",
  VERIFY_EMAIL: "/verify_email",
  CONTACTUS: "/contact_us",
  ABOUTUS: "/about_us",
  FAQs: "/faqs",
  // private route
  HOUSES: "/houses",
  SINGLE_HOUSE: "houses/:_id",
  HOUSE_REQUESTS: "/house_requests",
  SINGLE_HOUSE_REQUEST: "house_request/:_id",
  CREATE_HOUSE_REQUEST: "/create_house_request",
  DASHBOARD: "/dashboard",
  PROFILE: "/profile",
  //mess route
  MESS_DASHBOARD: "dashboard/mess",
  MESS_SUMMARY: "dashboard/mess_summary",
  MESS_ACCOUNT: "dashboard/mess_account",
  MESS_DETAILS: "/details/:_id",
  MESS_CREATE: "/create",
  MESS_EDIT: "/edit/:_id",
  MESS_DELETE: "/delete/:_id",

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
