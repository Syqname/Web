<template>
    <div class="bj-ft">
        <div class="bg-light m-auto pb-3" style="min-height:80vh; width:90vw;background:whitesmoke;padding-top: 20px;">
            <div class="fs-g m-auto  bg-grey-1 mb-2" style="width: 85vw;height: 2px;  border-bottom;:1px solid black"></div>
            <div class="d-flex jc-around m-auto " style="width:80%;">

            <div class="mt-1" >  
            <el-dropdown >
                <span class="el-dropdown-link p-1 m-1">个人信息<i class="el-icon-arrow-down el-icon--right"></i></span>
            <el-dropdown-menu slot="dropdown">
           
            <el-dropdown-item><router-link :to="`/peoples/create/${people._id}`">信息编辑</router-link></el-dropdown-item>
            <el-dropdown-item><router-link :to="`/mima/${people._id}`">修改密码</router-link></el-dropdown-item>
            <el-dropdown-item><router-link to="/real_name">实名认证</router-link></el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown></div>
            <div class="mt-1">
                <el-dropdown>
                    <span class="el-dropdown-link p-1 m-1">我的商品<i class="el-icon-arrow-down el-icon--right"></i></span>
            <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><router-link to="/botanies/create">上架商品</router-link></el-dropdown-item>
            <el-dropdown-item><router-link to="/botanies/list">上架商品列表</router-link></el-dropdown-item>
            
            </el-dropdown-menu>
            </el-dropdown></div>
            <div class="mt-1">
                <el-dropdown >
                    <span class="el-dropdown-link p-1 m-1">我的求购<i class="el-icon-arrow-down el-icon--right"></i></span>
            <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><router-link to="/demands/create">上架求购</router-link></el-dropdown-item>
            <el-dropdown-item><router-link to="/demands/list">上架求购列表</router-link></el-dropdown-item>
            
            </el-dropdown-menu>
            </el-dropdown></div>
            <div class="mt-1">
                <el-dropdown>
                    <span class="el-dropdown-link p-1 m-1">订单管理<i class="el-icon-arrow-down el-icon--right"></i></span>
            <el-dropdown-menu slot="dropdown">
              
                <el-dropdown-item><router-link to="/orders">我的订单</router-link></el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown></div>
            </div>
            
            <div class="fs-g m-auto  bg-grey-1 mt-2 " style="width: 85vw;height: 2px;  border-bottom;:1px solid black">        </div>
           
                <router-view></router-view>       
       
 
        </div>
        <div class="banquan text-center pt-5" style="width:100%;height: 200px;line-height: 20px;line-height: 30px;background: gainsboro; opacity: .4;">
        <p>主管单位：泾阳县xxxx办公室 承办单位：泾阳县xxxxx中心</p>
        <div>地址：泾阳县中心街xxxx号  邮编：71xx00  技术运维：029-xxxxx88</div>
        <div>陕公网安备61xxxx00119号  网站标识码：61042xxxx01</div>
        <div>陕ICP备130xxxx83号</div>
        </div>

    </div>
   

        
</template> 
<script>
import dayjs from 'dayjs'
export default {
    filters:{
        date(val){
            return dayjs(val).format('MM/DD')
        }
    },
    data(){
        return {
            items:[],
            notice: null,
            item:null,
            thing:null,
            warning:null,
           people:"",
            swiperOption: {
            pagination: {
                el: ".pagination-home",
             },
            loop: true,
            autoplay: {
               delay: 3000,
               disableOnInteraction: false, // 当用户滑动图片后继续自动轮播
            },
            },
            newCats:[],
            heroCats:[],
        };
    },
    methods:{
        async fetchPeople() {
      const res = await this.$http.get("people");
      this.people = res.data;
    },
       

    },
    created(){
        this.fetchPeople();
      
    }
}

</script>
      <style lang="scss">
      @import '../scss/reset.css';
      @import '../scss/style.scss';
      .el-dropdown-link {
    cursor: pointer;
    font-size: 24px;
    font-family:'宋体';
    color: #000000;
    

  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
.pagination-home{
    .swiper-pagination-bullet{
        border-radius: 0.1538rem;
        opacity: 1;
        background-color:#fff;
        &.swiper-pagination-bullet-active{
            background:map-get($colors,'info' );
        }
    }
}
.nav-icons{
    border-top:1px solid $border-color;
    border-bottom:1px solid $border-color;
    .nav-item{
        width: 25%;
        border-left: 1px solid $border-color;
        &:nth-child(4n){
            border-right: none;
        }
    }
}
        .el-header {
          background-color: #B3C0D1;
          color: #333;
          line-height: 60px;
        }
        
        .el-aside {
          color: #333;
        }
      </style>
