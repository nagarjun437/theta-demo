import { lazy } from "react";
import { authRoles } from "app/auth/authRoles";

const CreateProjectForm = lazy(() => import("./CreateProjectForm"));

const ViewProject = lazy(() => import("./ViewProject"));

const ViewProjectForm = lazy(() => import("./ViewProject"));


const projectRoutes = [
  {
    path: "/project/create",
    component: CreateProjectForm,
    auth: authRoles.admin
  },
  {
      path: "/project/view",
      component: ViewProject,
      auth: authRoles.admin
    },
   {
       path: "/project/viewForm",
       component: ViewProjectForm,
       auth: authRoles.admin
     }
];

export default projectRoutes;
