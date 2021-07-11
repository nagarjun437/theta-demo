export const navigations = [
  {
    name: "Dashboard",
    description: "Project Dashboard for Admin",
    type: "link",
    icon: "i-Bar-Chart",
    path: "/dashboard/project",
    tooltip: "Projects Dashboard for Admin"
  },
  {
    name: "Apps",
    description: "Lorem ipsum dolor sit.",
    type: "dropDown",
    icon: "i-Computer-Secure",

    sub: [
      { icon: "i-Email", name: "Inbox", path: "/inbox", type: "link" },
      { icon: "i-Speach-Bubble-3", name: "Chat", path: "/chat", type: "link" },
      { icon: "i-Calendar", name: "Calendar", path: "/calendar", type: "link" },
      {
        icon: "i-Address-Book",
        name: "Contact",
        type: "dropDown",
        sub: [
          {
            icon: "i-Business-Mens",
            name: "Contact Table",
            type: "link",
            path: "/contact/table"
          },
          {
            icon: "i-Business-Mens",
            name: "Contact List",
            type: "link",
            path: "/contact/list"
          },
          
          {
            icon: "i-Find-User",
            name: "Contact Details",
            type: "link",
            path: "/contact/details"
          }
        ]
      }
    ]
  },
  {
    name: "Sessions",
    description: "Lorem ipsum dolor sit.",
    type: "dropDown",
    icon: "nav-icon i-Administrator",
    sub: [
      {
        icon: "i-Checked-User",
        name: "Signin",
        path: "/session/signin",
        type: "link"
      },
      {
        icon: "i-Add-User",
        name: "Signup",
        path: "/session/signup",
        type: "link"
      },
      {
        icon: "i-Find-User",
        name: "Forgot Password",
        path: "/session/forgot-password",
        type: "link"
      },
      {
        icon: "i-Error-404-Window",
        name: "Error 404",
        path: "/session/404",
        type: "link"
      }
    ]
  },
  {
    name: "Forms",
    description: "Lorem ipsum dolor sit.",
    type: "dropDown",
    icon: "i-File-Clipboard-File--Text",
    sub: [
      {
        icon: "i-File-Clipboard-Text--Image",
        name: "Basic components",
        path: "/forms/basic",
        type: "link"
      },
      {
        icon: "i-File-Clipboard-Text--Image",
        name: "Action Bar Form",
        path: "/forms/action-bar",
        type: "link"
      },
      {
        icon: "i-Split-Vertical",
        name: "Form layouts",
        path: "/forms/layouts",
        type: "link"
      },
      {
        icon: "i-Split-Vertical",
        name: "Multi Column Forms",
        path: "/forms/multi-column-forms",
        type: "link"
      },
      {
        icon: "i-Receipt-4",
        name: "Input Group",
        path: "/forms/input-group",
        type: "link"
      },
      {
        icon: "i-File-Edit",
        name: "Form Validation",
        path: "/forms/form-validation",
        type: "link"
      },
      {
        icon: "i-Tag-2",
        name: "Tag Input",
        path: "/forms/tag-input",
        type: "link"
      },
      {
        icon: "i-Width-Window",
        name: "Wizard",
        path: "/forms/forms-wizard",
        type: "link"
      },
      {
        icon: "i-Crop-2",
        name: "Rich Editor",
        path: "/forms/form-editor",
        type: "link"
      }
    ]
  },
  {
    name: "Icons",
    description: "600+ premium icons",
    type: "link",
    icon: "i-Cloud-Sun",
    path: "/icons"
  }
];
