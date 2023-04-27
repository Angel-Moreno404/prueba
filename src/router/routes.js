const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "typography",
        name: "typography",
        component: () => import("pages/typePografy.vue"),
      },
      {
        path: "flex",
        name: "flex",
        component: () => import("pages/FlexPage.vue"),
      },
      {
        path: "crud",
        name: "crud",
        component: () => import("pages/CrudPage.vue"),
      },
      {
        path: "curriculum",
        name: "curriculum",
        component: () => import("pages/CurriculumAngel.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
