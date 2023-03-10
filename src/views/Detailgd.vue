<template>
 
    <div class="bj-ft">
        <div class="bg-whit m-auto pb-3" style="width:90vw;background:whitesmoke;padding-top: 20px;">
          <div class="page-article" v-if="model">
          <div class="d-flex py-3 px-2 border-bottom">
          <router-link tag="div" to="/" style="cursor:pointer;"> 返回</router-link>
          <strong class="flex-1 text-ellipsis text-blue pl-2" >
           {{model.title}}
          </strong>
          </div>
         <div v-html="model.body" class="px-3 body fs-lg" ></div>
         <div class="px-3 border-top py-3">
  
        </div>
        </div>
        <div class="fs-g m-auto  bg-grey-1 mt-2 " style="width: 85vw;height: 2px;  border-bottom;:1px solid black">        </div>

      </div>
<div class="banquan text-center pt-5" style="width:100%;height: 200px;line-height: 20px;line-height: 30px;background: gainsboro; opacity: .4;">
        <p>主管单位：泾阳县xxxx办公室 承办单位：泾阳县xxxxx中心</p>
        <div >地址：泾阳县中心街xxxx号  邮编：71xx00  技术运维：029-xxxxx88</div>
        <div >陕公网安备61xxxx00119号  网站标识码：61042xxxx01</div>
        <div >陕ICP备130xxxx83号</div>
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
            notice: null,
           
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
        async fetchNoticeCats(){
          const res= await this.$http.get('detailgds')
          this.notice = res.data
        },
    },
    created(){
        this.fetchNoticeCats()
      
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