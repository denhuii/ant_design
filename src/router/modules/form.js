export default [
  {
    path: "/form,",
    name: "form",
    component: { render: (h) => h("router-view") },
    children: [
      {
        path: "/form/basic-form",
        name: "basicform",
        component: () => import(/* webpackChunkName: "form" */ "@/views/Forms/BasicForm.vue"),
      },
      {
        path: "/from/step-form",
        name: "stepfrom",
        component: () => import(/* webpackChunkName: "form" */ "@/views/Forms/StepForm/Step1.vue"),
        children: [
          {
            path: "/from/step-form",
            redirect: "/from/step-form/info",
          },
          {
            path: "/from/step-form/info",
            name: "info",
            component: () => import(/* webpackChunkName: "form" */ "@/views/Forms/StepForm/Step1.vue"),
          },
          {
            path: "/from/step-form/confrim",
            name: "confrim",
            component: () => import(/* webpackChunkName: "form" */ "@/views/Forms/StepForm/Step2.vue"),
          },
          {
            path: "/from/step-form/result",
            name: "result",
            component: () => import(/* webpackChunkName: "form" */ "@/views/Forms/StepForm/Step3.vue"),
          },
        ],
      },
    ],
  },
];
