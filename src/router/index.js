import Vue from 'vue';
import VueRouter from 'vue-router';
import NotFound from '@/views/404.vue';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import USER from './modules/user.js';
import nProgress from 'nprogress';

Vue.use(VueRouter);

const routes = [
  ...USER,
  {
    path: '/',
    // component: { render: h => h('router-view') },
    component: () =>
      import(/* webpackChunkName: "layouts" */ '@/layouts/BasicLayout.vue'),
    children: [
      {
        path: '/',
        redirect: '/dashboard/analysis',
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        component: { render: h => h('router-view') },
        children: [
          {
            path: '/dashboard/analysis',
            name: 'analysis',
            component: () =>
              import(
                /* webpackChunkName: "dashboard" */ '@/views/Dashboard/Analysis.vue'
              ),
          },
        ],
      },
    ],
  },
  {
    path: '/form,',
    name: 'form',
    component: { render: h => h('router-view') },
    children: [
      {
        path: '/form/basic-form',
        name: 'basicform',
        component: () =>
          import(/* webpackChunkName: "form" */ '@/views/Forms/BasicForm.vue'),
      },
      {
        path: '/from/step-form',
        name: 'stepfrom',
        component: () =>
          import(
            /* webpackChunkName: "form" */ '@/views/Forms/StepForm/Step1.vue'
          ),
        children: [
          {
            path: '/from/step-form',
            redirect: '/from/step-form/info',
          },
          {
            path: '/from/step-form/info',
            name: 'info',
            component: () =>
              import(
                /* webpackChunkName: "form" */ '@/views/Forms/StepForm/Step1.vue'
              ),
          },
          {
            path: '/from/step-form/confrim',
            name: 'confrim',
            component: () =>
              import(
                /* webpackChunkName: "form" */ '@/views/Forms/StepForm/Step2.vue'
              ),
          },
          {
            path: '/from/step-form/result',
            name: 'result',
            component: () =>
              import(
                /* webpackChunkName: "form" */ '@/views/Forms/StepForm/Step3.vue'
              ),
          },
        ],
      },
    ],
  },
  {
    path: '*',
    name: '404',
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, form, next) => {
  nprogress.start();
  next();
});
router.afterEach(() => {
  nProgress.done();
});
export default router;
