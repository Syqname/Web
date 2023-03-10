<template>
 <div>
  <h3>个人信息</h3>
  <div class="d-flex ai-center flex-column usermessage">
    
   <img :src="people.avatar" alt="" />
    <h4 class="m-0 mt-3 ai-left ">用户名：{{ people.username }}</h4>
    <h4 class="m-0 mt-3 ai-left fs-xxl">联系方式:{{ people.tele }}</h4>
    <div v-if="people.auth == true" class="text-center d-flex mt-2">
      <h4 class="text-price">实名状态：已实名</h4>
    </div>
    <div v-if="people.auth !=true" class="text-center d-flex mt-2">
      <h4 class="text-price">实名状态：未实名</h4>
    </div>
  
   
    <button class="btn mt-3 " type="button" @click="quit">退出登录</button>
  </div>
</div>
</template>
<script>
import dayjs from "dayjs";
export default {
  filters: {
    date(val) {
      return dayjs(val).format("YYYY/MM/DD");
    },
  },
  data() {
    return {
      people: "",
    };
  },
  methods: {
    async fetchPeople() {
      const res = await this.$http.get("people");
      this.people = res.data;
    },
    quit() {
      localStorage.clear();
      this.$router.push("/login");
      this.$message({
        type: "success",
        message: "退出成功，返回登录页",
      });
    },
  },
  created() {
    this.fetchPeople();
  },
};
</script>
<style scoped>
img{
  width: 80px;
  height: 80px;
  border:1px solid black ;
  border-radius: 50%;

}
</style>
