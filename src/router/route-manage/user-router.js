/*
* ユーザー側・ルーティング構成
*/
const userRouter =
  {
    path: '/user',
    name: 'uHome',
    component: () => import('@/views/user/home.vue'),
    redirect: '/user/home',
  }

export default userRouter
