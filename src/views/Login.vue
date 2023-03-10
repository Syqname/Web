<template>
    <div class="bigBox">
    <!-- 注册 -->
    <div class="container right-panel-active">
        <div class="container_form container--signup">
            <form action="#" class="form" id="form1"  @submit.prevent="save">
                <h2 class="form_title">注册</h2>
            
          

                <input type="text"  v-model="items.username" placeholder="用户" class="input">
                <input type="password"  v-model="items.password" placeholder="密码" class="input">
                <button class="btn"  type="primary" native-type="submit">注册</button>
            </form>
        </div>
   
    <!-- 登录 -->
    <div class="container_form container--signin">
        <el-form action="#" class="form" id="form2" @submit.native.prevent="login">
            <h2 class="form_title">登录</h2>
            <input v-model="model.username" type="user" placeholder="用户名" class="input">
            <input v-model="model.password" type="password" placeholder="密码" class="input">
            <a href="#" class="link">忘记密码?</a>
            <button class="btn" type="primary" native-type="submit">登录</button>
        </el-form>
    </div>

    <!-- 浮层 -->
    <div class="container_overlay">
        <div class="overlay">

            <div class="overlay_panel overlay--left">
                <button class="btn" id="signIn">登录</button>
            </div> 
            <div class="overlay_panel overlay--right">
                <button class="btn" id="signUp">注册</button>
            </div> 
        </div>
    </div>
</div>
    </div>
</template>
<script>
 export default{
    props:{
       id:{}
    },
    data(){
        return{
            model:{},
            items:{}
        }
    },
    methods:{
    async login(){
      const res = await this.$http.post('login',this.model)
      localStorage.token = res.data.token
     this.$router.push('/')
     this.$message({
      type:'success',
      message:'登录成功'
     })
    },

    async save(){
        let res 
        if(this.id){
            res = await this.$http.put(`web_users/${this.id}`,this.items)
        }
        else{
            res = await this.$http.post("web_users",this.items)
        }
          
         this.$router.push('/')
        //  this.$message({
        //     type:'success',
        //     message:'保存成功'       
        //  })
        },
        async fetch(){
            const res = await this.$http.get(`web_users/${this.id}`)
            this.items= res.data
        },
    },
    created(){
        
        this.id && this.fetch()
    }
  }

window.onload=function(){
const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const firstForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");
 signInBtn.addEventListener("click",()=>{
    container.classList.remove("right-panel-active");
 });
 signUpBtn.addEventListener("click",()=>{
    container.classList.add("right-panel-active");
 });
 firstForm.addEventListener("submit",(e)=>e.preventDefault());
 secondForm.addEventListener("submit",(e)=>e.preventDefault());

}


</script>
<style scoped>
@import '../scss/dl.css';

.avatar-uploader .el-upload {
    border: 1px solid #000000;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #35c76a;
  }
  .avatar-uploader-icon {
  
    color: #8c939d;
    width: 90px;
    height: 90px;
    line-height: 90px;
    text-align: center;
  }
  .avatar {
    width: 90px;
    height: 90px;
    display: block;
  }
</style>