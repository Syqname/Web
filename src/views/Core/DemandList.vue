<template>
  <div>
    <h3 class="mt-3 mb-3">求购列表</h3>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="230px"></el-table-column>

      <el-table-column prop="icon" label="图标">
        <template slot-scope="scope">
          <img :src="scope.row.icon" alt="" style="height: 3rem" />
          <!-- scope.row表示这一行数据 -->
        </template>
      </el-table-column>
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="jiage" label="价格"></el-table-column>
     
      <el-table-column prop="state" label="状态">
        <template slot-scope="scope">
           <el-switch
          style="display: block;"
          v-model="scope.row.state"
          active-color="#13ce66"
          inactive-color="#ff4949"
          active-text="供应交涉"
          inactive-text="正在求购"
          disabled
        >
        </el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="lianxi" label="联系方式"></el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="small"
            @click="$router.push(`/demands/edit/${scope.row._id}`)"
            >编辑</el-button
          >
          <el-button type="primary" size="small" @click="remove(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("people/demand");
      this.items = res.data;
    },
    async remove(row) {
      this.$confirm(`是否确定要下架该求购`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(async () => {
        const res = await this.$http.delete(`people/demand/${row._id}`);
        this.$message({
          type: "success",
          message: "删除成功!",
        });
        this.fetch();
      });
    },
  },
  created() {
    this.fetch();
  },
};
</script>
