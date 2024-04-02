import { createRouter, createWebHistory } from 'vue-router'
import adminRouter from './route-manage/admin-router.js'
import userRouter from './route-manage/user-router.js'

/* ルートを登録する */
const routes = [
  /* 管理側 */
  adminRouter,

  /* クライアント */
  userRouter,
];

const router = createRouter({
  /* ルーティング モードhistory */
  history: createWebHistory(),
  routes
});

export default router;

