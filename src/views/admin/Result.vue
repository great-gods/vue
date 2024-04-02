<template>
  <!-- 診断結果管理 -->
  <div class="page-result">
    <h1 class="page-title">診断結果管理</h1>
    <div class="common-search">
      <el-input v-model="serach" placeholder="メールアドレスを入力してください" clearable />
      <el-button type="primary" class="small">検索</el-button>
      <el-button type="primary" class="large">一覧ダウンロード</el-button>
    </div>
    <div class="common-tableData">
      <el-table
        :data="tableData"
        style="width: 100%"
        border
        :cell-style="{ textAlign: 'center' }"
        :header-cell-style="{textAlign: 'center'}"
        class="common-table"
        ref="multipleTableRef"
        @selection-change="handleSelectionChange"
        >
        <el-table-column type="selection" width="50" />
        <!-- 番号 -->
        <el-table-column prop="itemNo" label="番号" width="60" />
        <!-- 結果概要 -->
        <el-table-column prop="mail" label="結果概要" class-name="lf" />
        <!-- 承継方法 -->
        <el-table-column prop="address" label="承継方法" width="240" />
        <!-- 追加日付 -->
        <el-table-column prop="date" label="追加日付" width="186" />
        <!-- 詳細 -->
        <el-table-column label="詳細" width="60" class-name="detail">
          <template #default="scope">
            <p @click="handleDown(scope.$index, scope.row)">
              <font-awesome-icon :icon="['fas', 'file-lines']" />
            </p>
          </template>
        </el-table-column>
        <!-- ダウンロード -->
        <el-table-column label="ダウンロード" width="120" class-name="edit">
          <template #default="scope">
            <p @click="handleEdit(scope.$index, scope.row)">
              <font-awesome-icon :icon="['fas', 'download']" />
            </p>
          </template>
        </el-table-column>
      </el-table>
      <Pagination
        :page="params.page"
        :size="params.size"
        :count="count"
        @pagination="onPagination"
      />
    </div>
  </div>
</template>

<script setup>
import '@/assets/css/admin/common.scss'
import { ref, reactive, toRefs } from "vue"
import Pagination from '@/components/admin/Pagination.vue'

const serach = ref()

const state = reactive({
  tableData: [
    {
      itemNo: 1,
      mail: '概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト',
      address: '贈与、個人間売買、HD化',
      date: '2024-01-03 15:36:04',
    },
    {
      itemNo: 1,
      mail: '概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト',
      address: '贈与、個人間売買、HD化',
      date: '2024-01-03 15:36:04',
    }
  ],
  params: {
    size: 20,
    page: 1
  },
  count: 100
})
const { tableData, params, count } = toRefs(state)

const multipleTableRef = ref()
const handleSelectionChange = (val) => {
  multipleTableRef.value = val
}

/* 改ページ */
const onPagination = (size) => {
  state.params = size;
}

</script>

<style lang="scss" scoped>

</style>