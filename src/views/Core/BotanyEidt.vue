<template>
  <div class="about">
    <h3 class="mt-3 mb-3">{{ id ? "编辑" : "上架" }}商品</h3>
    <el-form label-width="120px" @submit.native.prevent="save">
      <!--.native原生表单 .prevent组织默认提交 -->
      <el-form-item label="图标">
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :headers="getAuthHeaders()"
          :show-file-list="false"
          :on-success="afterUpload"
        >
          <img v-if="model.icon" :src="model.icon" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>

      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="价格">
        <el-input v-model="model.jiage"></el-input>
      </el-form-item>
      <el-form-item label="预计收获时间">
        <el-input v-model="model.time"></el-input>
      </el-form-item>
      <el-form-item label="预计生产数量">
        <el-input v-model="model.number"></el-input>
      </el-form-item>
      <el-form-item label="产地">
        <el-input v-model="model.dizhi"></el-input>
      </el-form-item>
      <el-form-item label="联系方式">
        <el-input v-model="model.lianxi"></el-input>
      </el-form-item>
      <el-form-item label="简述">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">上架</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  props: {
    id: {},
  },
  data() {
    return {
      model: {},
      people:''
    };
  },
  methods: {
    afterUpload(res) {
      this.$set(this.model, "icon", res.url);
    },
    async save() {
        let res;
      if (this.id) {
        res = await this.$http.put(`botanies/${this.id}`, this.model);
      } else {
        this.model.author = this.people._id;
        res = await this.$http.post("botanies", this.model);
      }
 
      this.$router.push("/botanies/list");
      this.$message({
        type: "success",
        message: "上架成功",
      });
    },
    async fetchPeople() {
      const res = await this.$http.get("people");
      this.people = res.data;
    },
    async fetch() {
      const res = await this.$http.get(`botanies/${this.id}`);
      this.model = res.data;
    },
  },

  created() {
    this.fetchPeople();
    this.id && this.fetch()
  },
};
</script>
<style scoped >
img{
  width: 80px;
  height: 80px;
  border:1px solid black ;
  border-radius: 50%;

}
.avatar-uploader .el-upload {


  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
