<template>
  <div>
    <el-form label-width="100px" @submit.native.prevent="save" class="p-2">
      <el-form-item label="图标">
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :headers="getAuthHeaders()"
          :show-file-list="false"
          :on-success="afterUpload"
        >
          <img v-if="people.avatar" :src="people.avatar" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="people.username"></el-input>
      </el-form-item>
      <el-form-item label="联系方式">
        <el-input v-model="people.tele"></el-input>
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
      this.$set(this.people, "avatar", res.url);
    },
    async fetchPeople() {
      const res = await this.$http.get("people");
      this.people = res.data;
    },
    async save() {
      const res = await this.$http.put(`people/edit/${this.id}`, this.people);
      this.$router.push("/cores");
      this.$message({
        
        type: "success",
        message: "修改成功",
      });
    },
  },
  created() {
    this.fetchPeople();
  },
};
</script>
