<template>
 
    <div class="bj-ft">
        <div class="bg-light m-auto pb-3" style="width:90vw;background:whitesmoke;padding-top: 20px;">
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
export default {
  filters:{
        date(val){
            return dayjs(val).format('MM/DD')
        }
    },
  props:{
    id:{required:true}
  },
  data(){
      return{
        model:null
      }
  },
  watch:{
    id:'fetch',
    id(){
      this.fetch()
    }
  },
   methods:{
   async fetch(){
         const res = await this.$http.get(`detaills/${this.id}`)
         this.model = res.data
    } 
  },
  created(){
         this.fetch()
  }
}
</script>
<style lang="scss">
.page-article{
  .body{
   img{
    max-width: 100%;
    height: auto;
   }
   iframe{
    width: 100%;
   }
  }
}</style>
