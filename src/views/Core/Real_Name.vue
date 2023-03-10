<template>
    <div>
      <el-form label-width="100px" @submit.native.prevent="save" class="p-2">
      
        <el-form-item label="姓名">
          <el-input v-model="fake"></el-input>
        </el-form-item>
        <el-form-item label="身份证号">
          <el-input v-model="real"></el-input>
        </el-form-item>
        <el-form-item class="text-center">
          <el-button type="primary" native-type="submit">立即验证</el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>
<script>
export default {
  data() {
    return {
      model: null,
      fake:"",
      real:''
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("people");
      this.model = res.data;
    },
    async save() {
        this.model.auth = true;
        const res = await this.$http.put(`people/edit/${this.model._id}`, this.model);
        this.$message({
          type: "success",
          message: "实名验证成功",
        });
        this.$router.push("/cores");
    },
  },
  created() {
    this.fetch();
  },
};
</script>