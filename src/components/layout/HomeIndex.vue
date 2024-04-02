<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="224px">
        <SlideNav />
      </el-aside>
      <el-container>
        <el-header><Header/></el-header>
        <el-main>
          <router-view v-if="isRouterAlive" />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import SlideNav from '@/components/admin/SlideNav.vue'
import Header from '@/components/admin/Header.vue'
import {ref, nextTick, provide} from 'vue'

let isRouterAlive= ref(true)
const reload = ()=>{
  isRouterAlive.value = false
  nextTick(()=>{
    isRouterAlive.value = true
  })
}
provide('reload', reload)
</script>
