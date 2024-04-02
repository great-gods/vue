<template>
  <div class="commmon-header">
    <div class="user-id">ユーザーID</div>
  </div>
</template>

<script setup>
import '@/assets/css/admin/Header.scss'
</script>

<style lang="scss" scoped>
.el-header {
  --el-header-height: 103px;
}
.el-container .el-header {
  width: calc(100% - var(--el-aside-width));
  background-color: #fff;
  padding: 0;
  position: fixed;
  top: 0;
  z-index: 999;
}
.commmon-header {
  box-shadow: 0 3px 20px rgba($color: #000, $alpha: 0.16);
  height: 100%;
  @include row-end;
  .user-id{
    font-size: 20px;
    font-weight: 500;
    color: $mainColor;
    padding-right: 71px;
  }
}

@media screen and (max-width:1440px){
  .el-header {
    --el-header-height: 60px;
  }
  .commmon-header {
    .user-id{
      font-size: 16px;
    }
  }
}
</style>
