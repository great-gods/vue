/*
* ストア側のルーティング構成
*/
const adminRouter =
  {
    path: '/admin',
    component: ()=>import('@/views/admin/AdminIndex.vue'),
    redirect: '/login',
    children: [
      {
        path: '/login',
        name: 'aLogin',
        component: ()=>import('@/views/admin/Login.vue'),
        meta: {
          title: 'ログイン',
          hide: false
        } 
      },
      {
        path: '/admin/home',
        component: ()=>import('@/views/admin/HomeIndex.vue'),
        children: [
          {
            path: '/home',
            name: 'aHome',
            component: ()=>import('@/views/admin/Home.vue'),
            meta: {
              title: 'トップページ',
              icon: '/src/assets/img/admin/house-solid.svg',
              hide: true
            }
          }, {
            path: '/result',
            name: 'aResult',
            component: ()=>import('@/views/admin/Result.vue'),
            meta: {
              title: '診断結果管理',
              icon: '/src/assets/img/admin/result-solid.svg',
              hide: true
            }
          }, {
            path: '/report',
            name: 'aReport',
            component: ()=>import('@/views/admin/Report.vue'),
            meta: {
              title: '報告書作成管理',
              icon: '/src/assets/img/admin/report-solid.svg',
              hide: true
            }
          }, {
            path: '/contact',
            name: 'aContact',
            component: ()=>import('@/views/admin/Contact.vue'),
            meta: {
              title: 'お問い合わせ管理',
              icon: '/src/assets/img/admin/comments-solid.svg',
              hide: true
            }
          }
        ]
      }
    ]
  }
  
export default adminRouter
