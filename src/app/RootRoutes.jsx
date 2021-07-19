import React from "react";
import { Redirect } from "react-router-dom";
import dashboardRoutes from "./views/dashboard/dashboardRoutes";
import projectRoutes from "./views/project/projectRoutes"
import jobsRoutes from "./views/jobs/jobsRoutes";
import tasksRoutes from "./views/tasks/tasksRoutes";
import contactRoutes from "./views/app/contact/contactRoutes";
import usersRoutes from "./views/users/usersRoutes";

import sessionsRoutes from "./views/sessions/sessionsRoutes";
import AuthGuard from "./auth/AuthGuard";

import uiKitsRoutes from "./views/ui-kits/uiKitsRoutes";
import formsRoutes from "./views/forms/formsRoutes";
import widgetsRoute from "./views/widgets/widgetsRoute";
import chartsRoute from "./views/charts/chartsRoute";
import dataTableRoute from "./views/dataTable/dataTableRoute";
import extraKitsRoutes from "./views/extra-kits/extraKitsRoutes";
import pagesRoutes from "./views/pages/pagesRoutes";
import iconsRoutes from "./views/icons/iconsRoutes";
import invoiceRoutes from "./views/app/invoice/invoiceRoutes";
import inboxRoutes from "./views/app/inbox/inboxRoutes";
import chatRoutes from "./views/app/chat/chatRoutes";
import calendarRoutes from "./views/app/calendar/calendarRoutes";
import taskManagerRoutes from "./views/app/task-manager/taskManagerRoutes";
import ecommerceRoutes from "./views/app/ecommerce/ecommerceRoutes";

const redirectRoute = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/session/signin" />
  }
];

const errorRoute = [
  {
    component: () => <Redirect to="/session/404" />
  }
];

const routes = [
  ...sessionsRoutes,
  {
    path: "/",
    component: AuthGuard,
    routes: [
      ...dashboardRoutes,
      ...projectRoutes,
      ...jobsRoutes,
      ...tasksRoutes,
      ...usersRoutes,
      ...uiKitsRoutes,
      ...formsRoutes,
      ...widgetsRoute,
      ...chartsRoute,
      ...dataTableRoute,
      ...extraKitsRoutes,
      ...pagesRoutes,
      ...iconsRoutes,
      ...invoiceRoutes,
      ...inboxRoutes,
      ...chatRoutes,
      ...taskManagerRoutes,
      ...calendarRoutes,
      ...ecommerceRoutes,
      ...contactRoutes,
      ...redirectRoute,
      ...errorRoute
    ]
  }
];

export default routes;
