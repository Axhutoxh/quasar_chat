
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Page_user.vue') },
      { path: '/chat/:otherUserId', component: () => import('pages/Page_chat.vue') },
      { path: '/auth', component: () => import('pages/Page_Auth.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
