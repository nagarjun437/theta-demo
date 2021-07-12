import { lazy } from "react";
import { authRoles } from "app/auth/authRoles";

const JobsList = lazy(() => import("./JobsList"));

const jobsRoutes = [
  {
    path: "/jobs/view",
    component: JobsList,
    auth: authRoles.user
  }
];

export default jobsRoutes;
