const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('views/Dashboard.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [
      {
        path: '/404',
        name: 'not-found',
        component: () => import('views/NotFound.vue'),
      }
    ]
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404',
  },
]

export default routes;