<template>
  <div class="top-serach" @click="top">
    <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
    <span>検索</span>
  </div>
</template>

<script setup>
import {ref} from 'vue'

let timer = ref(null)
const top = ()=>{
  let height = document.documentElement || document.body
  timer.value = setInterval(function(){
    height.scrollTop -= 5    
    if(height.scrollTop  === 0){
      clearInterval(timer.value)
    }
  }, 1)  
}
</script>

<style lang="scss" scoped>
.top-serach{
  width: 61px;
  height: 61px;
  border-radius: 50%;
  background-color: #00B9EF;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  position: fixed;
  right: 30px;
  top: 60vh;
  z-index: 9999;
  cursor: pointer;
  span{
    font-size: 12px;
  }
}
</style>