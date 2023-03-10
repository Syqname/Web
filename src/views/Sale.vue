<template>
    <div class="bj-ft">
        <div class="bg-whit m-auto pb-3" style="width:90vw;background:whitesmoke;padding-top: 20px;">
            <div class="fs-g m-auto  bg-grey-1 mb-2" style="width: 85vw;height: 2px;  border-bottom;:1px solid black"></div>
         
            
    <div tag="div text-center jc-center"  style="width:98%;" >
        <div class="d-flex flex-wrap " style="margin-left:2%;">
        <div class="d-flex mt-2 mr-1" style="" v-for='(d,i) in item ' :key="i">
            <div class=" mt-1 jc-around  bg-white ml-2" style=" width: 235px;height: 300px; box-shadow: 1px 1px 2px burlywood;">
                <div class=" " style="width:180px; margin: 0 auto;">
                    <img class="mt-1" :src="d.icon" alt="" style="height:8rem; width: 180px;" >
                </div>
                <div class=" d-flex  jc-center mt-2">
                <div class="mr-1 fs-e" style="font-family:'Aa醒狮体';color:black;">{{d.zili}}</div>
                <div>|</div>
                <div class="ml-1" style="font-family:'楷体'font-weight:bold;color:black;">{{d.name}}</div>
               
                </div>
                <div class="text-center mt-2 fs-c" style="color:grey;font-family:'宋体'" >本次采购量总计为：{{d.number}}</div>
                <div class="text-center mt-2 fs-f" style="color:#db9e3f">{{d.jiage}}</div>
<div>
    <div v-if="d.state == true" class="text-center d-flex mt-2">
      <i class="iconfont icon-vip fs-xxl text-red"></i>
      <strong class="text-price">该信息已被锁定，交涉进行中</strong>>
    </div>
   <router-link :to="`/salexxs/${d._id}`"><button  v-if="d.state != true" class="ml-11 mt-1" style="width:100px; height:40px; background:antiquewhite; border-radius: 20px;">查看详情</button></router-link></div>
                 
</div>
         
        </div>
      </div>
    </div>

            <div class="fs-g m-auto  bg-grey-1 mt-2 " style="width: 85vw;height: 2px;  border-bottom;:1px solid black">        </div>
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
            item:null,
 
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
      
        async fetchItemCats(){
          const res= await this.$http.get('demandes')
          this.item = res.data
        },

    },
    created(){
        this.fetchItemCats()

    }
}

</script>
<style lang="scss" >
@import '../scss/reset.css';
@import '../scss/style.scss';
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
</style>