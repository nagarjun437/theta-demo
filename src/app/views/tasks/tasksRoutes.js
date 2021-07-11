import { lazy } from "react";
import { authRoles } from "app/auth/authRoles";

const UploadTaskImage = lazy(() => import("./UploadTaskImage"));

const tasksRoutes = [
  {
    path: "/tasks/upload",
    component: UploadTaskImage,
    auth: authRoles.admin
  }
];

export default tasksRoutes;
