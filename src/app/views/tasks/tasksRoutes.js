import { lazy } from "react";
import { authRoles } from "app/auth/authRoles";

const UploadTaskImage = lazy(() => import("./UploadTaskImage"));

const TasksList = lazy(() => import("./TasksList"));

const CreateTaskForm = lazy(() => import("./CreateTaskForm"));

const ViewEditTask = lazy(() => import("./ViewEditTask"));


const tasksRoutes = [
  {
    path: "/tasks/view",
    component: TasksList,
    auth: authRoles.user
  },
  {
    path: "/tasks/create",
    component: CreateTaskForm,
    auth: authRoles.user
  },
  {
    path: "/tasks/upload",
    component: UploadTaskImage,
    auth: authRoles.user
  },
  {
    path: "/tasks/edit",
    component: ViewEditTask,
    auth: authRoles.user
  },
 {
   path: "/tasks/viewTask",
   component: ViewEditTask,
   auth: authRoles.user
 }
];

export default tasksRoutes;
