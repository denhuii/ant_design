export default [
  {
    path: '/user',
    // component: { render: h => h('router-view') },
    component: () =>
      import(/* webpackChunkName: "layouts" */ '@/layouts/UserLayout.vue'),
    children: [
      {
        path: '/user',
        redirect: '/user/login',
      },
      {
        path: '/user/login',
        name: 'login',
        component: () =>
          import(/* webpackChunkName: "user" */ '@/views/User/Login.vue'),
      },
      {
        path: '/user/register',
        name: 'register',
        component: () =>
          import(/* webpackChunkName: "user" */ '@/views/User/Register.vue'),
      },
    ],
  },
];
