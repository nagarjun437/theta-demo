import { lazy } from "react";
import { authRoles } from "app/auth/authRoles";

const ContactTable = lazy(() => import("./ContactTable"));

const UsersList = lazy(() => import("./UserList"));

const ContactCard = lazy(() => import("./ContactCard"));

const ContactDetails = lazy(() => import("./ContactDetails"));
const usersRoutes = [
  {
    path: "/users/table",
    component: ContactTable
  },
  {
    path: "/users/list",
    component: UsersList
  },
  {
    path: "/users/card",
    component: ContactCard
  },
  {
    path: "/users/details",
    component: ContactDetails
  }
];

export default usersRoutes;
