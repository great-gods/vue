<template>
  <div class="slide-nav">
    <h1 id="logo-title">
      <img src="/src/assets/img/admin/logo.jpg" alt="">
      <span>管理システム</span>
    </h1>
    <el-menu
      active-text-color="#FFF"
      background-color="#211E55"
      text-color="#FFF"
      :default-active="activeRouter"
      class="el-menu-vertical-demo common-silde"
      @select="handleOpen"
      router
    >
      <template v-for="(first,index) in adminRouter.children" :key="index">
        <el-menu-item v-for="(second,i) in first.children" :key="i" :index="second.path" v-show="second.hidden">
          <div class='icon-img' v-if="second.meta.icon"><img :src="second.meta.icon" alt="" /></div>
          <span>{{second.meta.title}}</span>
        </el-menu-item>
      </template>
    </el-menu>
    <div class="login-out">
      <strong @click="loginOut">ログアウト</strong>
    </div>
  </div>
</template>

<script setup>
import adminRouter from '@/router/route-manage/admin-router.js'
import '@/assets/css/admin/SlideNav.scss'
import { ref } from 'vue'
import {useRouter} from 'vue-router'

let activeRouter = ref()
activeRouter.value = window.location.pathname
const handleOpen = (key) => {
  activeRouter.value = key
}

const router = useRouter()
// ログオンの終了
const loginOut = ()=>{
  router.push({path: '/admin/login'})
}
</script>

<style lang="scss" scoped>
.slide-nav{
  height: 100%;
  position: relative;
}
#logo-title {
  padding: 35px 10px 35px 30px;
  font-size: 18px;
  display: flex;
  align-items: center;
  img{
    margin-right: 18px;
  }
}
.common-silde{
  >.el-menu-item{
    font-size: 16px;
    font-weight: 500;
    padding: 0 30px !important;
    .icon-img {
      margin-right: 8px;
      flex-shrink: 0;
      img{
        vertical-align: middle;
      }
    }
    .icon-img+span{
      margin-top: 4px;
    }
    &:hover,&.is-active {
      background-color: rgba(#fff, 0.3) !important;
    }
  }
}
.login-out{
  width: var(--el-aside-width);
  position: absolute;
  left: 0;
  bottom: 62px;
  text-align: center;
  strong{
    font-size: 18px;
    color: #fff;
    text-decoration: underline;
    cursor: pointer;
    &:hover{
      text-decoration: none;
    }
  }
}

@media screen and (max-width:1440px){
  .el-container.is-vertical .el-main {
    padding: 32px 3% 60px;
  }
}
</style>
