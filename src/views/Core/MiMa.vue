<template>
    <div>
      <el-form label-width="80px" @submit.native.prevent="save" class="p-2">
        <el-form-item label="新密码" class="mt-3 text-center" >
          <el-input
            type="password"
            show-password
            v-model="people.password"
            style="width:90%"
          ></el-input>
        </el-form-item>
        <el-form-item class="text-center">
          <el-button type="primary" native-type="submit">保存</el-button>
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
        people: "",
      };
    },
    methods: {
      afterUpload(res) {
        /* this.$set(this.model,'icon',res.url) */ /* 显式赋值 */
        this.people.avatar = res.url;
      },
      async fetchPeople() {
        const res = await this.$http.get("people");
        this.people = res.data;
      },
      async save() {
        const res = await this.$http.put(`people/password/edit/${this.id}`, this.people)
        this.$message({
          type: "success",
          message: "修改成功,请重新登录",
        });
        localStorage.clear();
        this.$router.push('/login')
      },
    },
    created() {
      this.fetchPeople();
    },
  };
  </script>
  