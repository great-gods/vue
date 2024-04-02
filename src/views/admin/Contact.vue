<template>
  <!-- お問い合わせ管理 -->
  <div class="page-result">
    <h1 class="page-title">お問い合わせ管理</h1>
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
        <!-- メールアドレス -->
        <el-table-column prop="mail" label="メールアドレス" width="200" />
        <!-- お名前 -->
        <el-table-column prop="address" label="お名前" width="100" />
        <!-- 会社名 -->
        <el-table-column prop="name" label="会社名" />
        <!-- お問い合わせ概要 -->
        <el-table-column prop="file" label="お問い合わせ概要" class-name="lf" show-overflow-tooltip>
          <template #default="scope">
            <p>{{scope.row.file}}</p>
          </template>
        </el-table-column>
        <!-- お問い合わせ日付 -->
        <el-table-column prop="date" label="お問い合わせ日付" width="150" />
        <!-- 詳細 -->
        <el-table-column label="詳細" width="60" class-name="detail">
          <template #default="scope">
            <p @click="handleDown(scope.$index, scope.row)">
              <font-awesome-icon :icon="['fas', 'file-lines']" />
            </p>
          </template>
        </el-table-column>
        <!-- 返信 -->
        <el-table-column label="返信" width="60" class-name="edit">
          <template #default="scope">
            <p @click="handleEdit(scope.$index, scope.row)">
              <img src="/src/assets/img/admin/email-back.svg" alt="">
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
      mail: 'ymdtr@example.co.jp',
      address: '山田太郎',
      name: '株式会社○○○○',
      file: 'テキストテキストテキストテキストテキストテキストテキストテキスト...',
      date: '2024-01-03',
    },
    {
      itemNo: 1,
      mail: 'ymdtr@example.co.jp',
      address: '山田太郎',
      name: '株式会社○○○○',
      file: 'テキストテキストテキストテキストテキストテキストテキストテキスト...',
      date: '2024-01-03',
    },
    {
      itemNo: 1,
      mail: 'ymdtr@example.co.jp',
      address: '山田太郎',
      name: '株式会社○○○○',
      file: 'テキストテキストテキストテキストテキストテキストテキストテキスト...',
      date: '2024-01-03',
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