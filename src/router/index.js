import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "@/views/404.vue";
import nprogress from "nprogress";
import "nprogress/nprogress.css";

import USER from "./modules/user.js";
import FORM from "./modules/form.js";

Vue.use(VueRouter);

const routes = [
  ...USER,
  ...FORM,
  {
    path: "/",
    // component: { render: h => h('router-view') },
    component: () => import(/* webpackChunkName: "layouts" */ "@/layouts/BasicLayout.vue"),
    children: [
      {
        path: "/",
        redirect: "/dashboard/analysis",
      },
      {
        path: "/dashboard",
        name: "dashboard",
        component: { render: (h) => h("router-view") },
        children: [
          {
            path: "/dashboard/analysis",
            name: "analysis",
            component: () => import(/* webpackChunkName: "dashboard" */ "@/views/Dashboard/Analysis.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "*",
    name: "404",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, form, next) => {
  nprogress.start();
  next();
});
router.afterEach(() => {
  nprogress.done();
});
export default router;
