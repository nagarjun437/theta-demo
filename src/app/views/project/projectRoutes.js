import { lazy } from "react";
import { authRoles } from "app/auth/authRoles";

const CreateProjectForm = lazy(() => import("./CreateProjectForm"));


const projectRoutes = [
  {
    path: "/project/create",
    component: CreateProjectForm,
    auth: authRoles.admin
  }
];

export default projectRoutes;
