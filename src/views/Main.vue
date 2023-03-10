<template>
    <div>
        <div class="mybj topbar">
        <div class="  py-1 px-3 d-flex text-white ai-center mb-3">
            
            <div class="ml-6 text-black" style="width:30%; font-family:'宋体';font-weight: bold;">您好！欢迎来到泾阳县蔬菜信息公共服务网</div>   
            <div class=" d-flex ai-center jc-around ml-10"  style="width:40%">
           
            </div> 
            
        </div>

        <div class="  ">
            
            <div class="nav d-flex text-black ai-center jc-around mr-9 fs-g  " style="font-family:'楷体';font-weight:bold; ">
                <div class=""> <img src="../assets/logo.png" alt="" width="50%"></div>
                <div class="panel active " ><router-link class="nav-link" tag="div" to="/" style="cursor:pointer;">首页</router-link></div>
                <div class="panel "><router-link class="nav-link" tag="div" to="/mais" style="cursor:pointer;">商城</router-link></div>
                <div class="panel"><router-link class="nav-link" tag="div" to="/sales" style="cursor:pointer;">求购</router-link></div>
                <div class="panel"><router-link class="nav-link" tag="div" to="/cores" style="cursor:pointer;">个人中心</router-link></div>
            </div>
            
        </div>
    </div>
        <router-view></router-view>
    </div>
</template>
<script> 
const panels = document.querySelectorAll(".panel");
panels.forEach((panel)=>{
    panel.addEventListener("click",()=>{
        qq();
        panel.classList.add("active");
    });
});
function qq(){
panels.forEach((panel)=>{
    panel.classList.remove("active");
});
}

</script>
<style lang="scss">
@import '../scss/style.scss';


</style>