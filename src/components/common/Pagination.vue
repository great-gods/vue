<template>
  <el-pagination
    v-model:current-page="curPage"
    v-model:page-size="pageSize"
    :page-sizes="common.pageSizes"
    layout="prev, pager, next"
    :total="props.count"
    :pager-count="11"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  >
    <div class="custom-sizes">
      <strong>表示件数</strong>
      <el-select v-model="pageSize" @change="handleSizeChange">
        <el-option
          v-for="(item,i) in common.pageSizes"
          :key="i"
          :label="item"
          :value="item">
        </el-option>
      </el-select>
    </div>
  </el-pagination>
</template>

<script setup>
import {computed} from 'vue'
import common from '@/utils/common'

const props = defineProps({
  page: {
    type: Number,
    default: 1
  },
  size: {
    type: Number,
    default: 10
  },
  count: {
    type: Number,
    default: 0
  }
})

const pageSize = computed({
  get: () => props.size,
  set: (val) => {
    return val
  }
})

const curPage = computed({
  get: () => props.page,
  set: (val) => {
    return val
  }
})

const emit = defineEmits(['pagination'])

const handleSizeChange = (size)=> {
  emit('pagination', {page: curPage.value, size: size})
}

const handleCurrentChange = (page)=> {
  emit('pagination', {page: page, size: pageSize.value})
}

</script>

<style lang="scss" scoped>
.el-pagination {
  justify-content: center;
  padding: 17px 0;
  margin-top: 8px;
  .el-pager li{
    font-weight: 500;
    color: #211E55;
    margin: 0 16px;
  }
  .el-pager li.is-active {
    border: 1px solid #211E55;
    background-color: #EFEFF9;
    border-radius: 4px;
  }
  button{
    width: 26px;
    height: 26px;
    min-width: 26px;
    padding: 0;
    .el-icon{
      display: none;
    }
  }
  .btn-prev.is-first{
    background: url(/src/assets/img/admin/circle-arrow-left-solid.svg) no-repeat !important;
    background-size: 26px 26px !important;
    margin-right: 16px;
  }
  .btn-next.is-last{
    background: url(/src/assets/img/admin/circle-arrow-right-solid.svg) no-repeat !important;
    background-size: 26px 26px !important;
    margin-left: 16px;
  }
}
</style>