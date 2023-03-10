<template>
 
  <div class="bj-ft">
      <div class="bg-whit m-auto pb-3" style="width:90vw;background:whitesmoke;padding-top: 20px;">
        <div class="fs-g m-auto  bg-grey-1 mt-2 " style="width: 85vw;height: 2px;  border-bottom;:1px solid black"></div> 
       <h3 class="mt-3 ml-3">商品详情</h3>
        
       <div class="d-flex jc-center" style="" v-if="model">
        
           <div class=" " style="width:300px;">
              <img class="mt-1" :src="model.icon" alt="" style="height:250px; width: 300px;" >
           </div>
           <div class="ml-2">
            <div class="fs-f mb-2 mt-3" style="font-family:'楷体';">名称:<span>{{model.name}}</span></div>
            <div class="fs-f mb-2" style="font-family:'楷体';">价格:<span>{{model.jiage}}</span></div>
            <div class="fs-f mb-2" style="font-family:'楷体';">预计收获时间:<span>{{model.time}}</span></div>
            <div class="fs-f mb-2" style="font-family:'楷体';">预计产出数量:<span>{{model.number}}</span></div>
            <div class="fs-f mb-2" style="font-family:'楷体'; ">产出地:<span>{{model.dizhi}}</span></div>
            <div class="fs-f mb-2" style="font-family:'楷体';">联系方式:<span>{{model.lianxi}}</span></div>
            <button @click="sure" class="ml-11 mt-1" style="width:100px; height:40px; background:antiquewhite; border-radius: 20px;">订购</button>
           </div>

      </div>
      <div class="fs-g m-auto  bg-grey-1 mt-2 " style="width: 85vw;height: 2px;  border-bottom;:1px solid black"></div> 
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
      model:null,
      people:"",
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
       const res = await this.$http.get(`mai/${this.id}`)
       this.model = res.data
  } ,
  async fetchPeople() {
        const res = await this.$http.get("people");
        this.people = res.data;
      },

  async sure() {
      this.$confirm(`确定购买`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(async () => {
      if (this.people.auth != true) {
        this.$router.push("/real_name");
        this.$message({
          type: "warning",
          message: "请先进行实名认证",
        });
      } else {
        this.people.purchased.push(this.id);
        const user = await this.$http.put(
          `people/edit/${this.people._id}`,
          this.people
        );
        this.$message({
          type: "success",
          message: "购买成功!",
        });
      }
      });
    },
  },

created(){
       this.fetch(),
       this.fetchPeople()
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
