<template>
  <div class="about">
    <h3 class="mt-3 mb-3">{{ id ? "编辑" : "上架" }}求购</h3>
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
      <el-form-item label="求购时间">
        <el-input v-model="model.time"></el-input>
      </el-form-item>
      <el-form-item label="求购数量">
        <el-input v-model="model.number"></el-input>
      </el-form-item>
      <el-form-item label="资历证明">
        <el-form-item label="">
          <el-upload
            class="avatar-uploader"
            :action="uploadUrl"
            :headers="getAuthHeaders()"
            :show-file-list="false"
            :on-success="bfterUpload"
          >
            <img v-if="model.zhengming" :src="model.zhengming" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-input v-model="model.zili">描述</el-input>
      </el-form-item>
      <el-form-item label="联系方式">
        <el-input v-model="model.lianxi"></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-switch
          style="display: block;margin-top:0.6rem"
          v-model="model.state"
          active-color="#13ce66"
          inactive-color="#ff4949"
          active-text="供应交涉"
          inactive-text="正在求购"
        >
        </el-switch>
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
      people: "",
    };
  },
  methods: {
    afterUpload(res) {
      this.$set(this.model, "icon", res.url);
    },
    bfterUpload(res) {
      this.$set(this.model, "zhengming", res.url);
    },
    async save() {
        let res;
      if (this.id) {
        res = await this.$http.put(`demands/${this.id}`, this.model);
      } else {
        this.model.state=false;
        this.model.author = this.people._id;
        res = await this.$http.post("demands", this.model);
      }
      this.$router.push("/demands/list");
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
      const res = await this.$http.get(`demands/${this.id}`);
      this.model = res.data;
    },
  },

  created() {
    this.fetchPeople();
    this.id && this.fetch() 
  },
};
</script>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
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
