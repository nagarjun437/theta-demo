import { lazy } from "react";
import { authRoles } from "app/auth/authRoles";

const Project = lazy(() => import("./project/Project"));

const Jobs = lazy(() => import("./job/Jobs"));

const Tasks = lazy(() => import("./tasks/Tasks"));

// const UploadTaskImage = lazy(() => import("././tasks/UploadTaskImage"));

const dashboardRoutes = [
  {
    path: "/dashboard/project",
    component: Project,
    auth: authRoles.admin
  },
  {
    path: "/dashboard/jobs",
    component: Jobs,
    auth: authRoles.admin
  },
  {
    path: "/dashboard/tasks",
    component: Tasks,
    auth: authRoles.user
  },
  // {
  //   path: "/tasks/upload",
  //   component: UploadTaskImage,
  //   auth: authRoles.admin
  // }
];

export default dashboardRoutes;
