<template>
  <div>
    <h1>分类列表</h1>
    <el-table
      :data="items"
      stripe
      style="width: 100%"
    >
      <el-table-column
        prop="_id"
        label="ID"
        width="260"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="分类名称"
      >
      </el-table-column>
      <el-table-column
        label="上级分类"
      >
        <template slot-scope="scope">
          <img :src="scope.row.icon" style="width: 50px;height: 50px"/>
        </template>

      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="180">
        <template slot-scope="scope">
          <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button> -->          <el-button type="text" size="small" @click="$router.push(`/items/edit/${scope.row._id}`)">编辑</el-button>
          <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>

        </template>
    </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    }
  },
  methods: {
    async fetch() {
      const res = await this.$http.get('rest/items');
      this.items = res.data;
    },
    remove(row) {
      this.$confirm(`此操作将删除分类${row.name}`, '是否继续', "提示", {
        confirmButtonText: '确定',
        cancleButtonText: '取消',
        type: 'warning'
      })
      .then(async () => {
        const res = await this.$http.delete(`rest/items/${row._id}`)
        if (res) {
          this.fetch();
          this.$message({
            type: 'success',
            message: '删除成功'
          })
        }
      })
    }
  },
  created() {
    this.fetch();
  }
}
</script>

<style>
</style>