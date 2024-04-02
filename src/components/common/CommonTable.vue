<template>
  <div class="drag-table">
    <el-table
      :data="props.tableData"
      style="width: 100%"
      border
      :default-sort="{
        prop: 'itemNo',
        prop: 'name',
        prop: 'basePrice',
        prop: 'categoryName',
        prop: 'makerName',
        prop: 'insDate',
        order: 'descending'
      }"
      :cell-style="{ textAlign: 'center' }"
      :header-cell-style="{textAlign: 'center'}"
      class="common-table order-table items-table"
      >
      <!-- 表示順位 -->
      <el-table-column label="表示順位" width="100">
        <template #default="scope">
          <div class="flex-start">
            <div class="posi-sign"><span></span></div>
            <p>{{ scope.row.showOrder }}</p>
          </div>
        </template>
      </el-table-column>
      <!-- 商品No. -->
      <el-table-column prop="itemNo" label="商品No." sortable width="80" />
      <!-- 商品名称 -->
      <el-table-column prop="name" label="商品名称" sortable class-name="item-hidden">
        <template #default="scope">
          <el-popover
            placement="bottom-start"
            :width="520"
            trigger="hover"
            :content="scope.row.name"
            class="common-popper"
          >
            <template #reference>
              <p class="">{{ scope.row.name }}</p>
            </template>
          </el-popover>
        </template>
      </el-table-column>
      <!-- 価格 -->
      <el-table-column prop="basePrice" label="価格" sortable width="100" class-name="rg" />
      <!-- カテゴリー -->
      <el-table-column prop="categoryName" label="カテゴリー" sortable class-name="lf" />
      <!-- メーカー -->
      <el-table-column prop="makerName" label="メーカー" sortable class-name="lf" />
      <!-- ステータス -->
      <el-table-column prop="itemStatus" label="ステータス" width="100" />
      <!-- 登録日 -->
      <el-table-column prop="insDate" label="登録日" sortable width="110" />
      <!-- 新商品 -->
      <el-table-column label="新商品" width="80">
        <template #default="scope">
          <el-button type="primary" @click="handleDown(scope.$index, scope.row)">
            <span>取下</span>
            <el-icon><Upload /></el-icon>
          </el-button>
        </template>
      </el-table-column>
      <!-- 編集 -->
      <el-table-column width="60" class-name="edit">
        <template #default="scope">
          <el-button type="primary" @click="handleEdit(scope.$index, scope.row)">
            <span>編集</span>
            <el-icon><Edit /></el-icon>
          </el-button>
        </template>
      </el-table-column>
      <!-- 複製 -->
      <el-table-column width="60" class-name="copy">
        <template #default="scope">
          <el-button type="success" @click="handleCopy(scope.$index, scope.row)">
            <span>複製</span>
            <el-icon><Edit /></el-icon>
          </el-button>
        </template>
      </el-table-column>
      <!-- 削除 -->
      <el-table-column width="60">
        <template #default="scope">
          <el-button type="danger" @click="handleDelete(scope.$index)">
            <span>削除</span>
            <el-icon><Delete /></el-icon>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { Delete, Edit, Upload } from '@element-plus/icons-vue'
import { onMounted } from 'vue'
import Sortable from 'Sortablejs'

const props = defineProps({
  tableData: {
    type: Array
  }
})

const tableData = props.tableData;

const handleDown = (index, row) => {
  console.log(index, row)
}
const handleEdit = (index, row) => {
  console.log(index, row)
}
const handleCopy = (index, row) => {
  console.log(index, row)
}
const handleDelete = (index) => {
  console.log(index,)
}

const rowDrop = () => {
  const tbody = document.querySelector(".el-table__body-wrapper tbody");
  Sortable.create(tbody, {
    animation: 180,
    onEnd({ newIndex, oldIndex }) {
      const currRow = tableData.splice(oldIndex, 1)[0];
      tableData.splice(newIndex, 0, currRow);
    },
  });
};

onMounted(()=>{
  rowDrop()
})

</script>

<style lang="scss" scoped>

</style>

