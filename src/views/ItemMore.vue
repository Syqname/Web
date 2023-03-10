
<template>
    <div class="bj-ft">
        <div class="bg-whit m-auto pb-3" style="width:90vw;background:whitesmoke;padding-top: 20px;">
            <div class="fs-g m-auto  bg-grey-1 mb-2" style="width: 85vw;height: 2px;  border-bottom;:1px solid black"></div>
        
            <m-card tag="div"  style="width:98%" title="市价公示" >
        <div class="d-flex flex-wrap ">
        <div class="d-flex " v-for='(d,i) in item ' :key="i">
            <div class="d-flex mt-1 jc-around ml-88" style=" border:1px solid bisque; width: 245px;">
                <div ><img :src="d.icon" alt="" style="height:5rem; width: 7rem;" ></div>
                <div class=" mt-4" >{{d.name}}</div>
                <div class=" mt-4" >{{d.price}}</div>
           </div>
         
        </div>
  
      </div>
    </m-card>
         
 
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
import dayjs from "dayjs";
export default {
  filters: {
    date(val) {
      return dayjs(val).format("MM/DD");
    },
  },
  data() {
    return {
      item: null,
    };
  },
  methods: {
    async fetchItemCats() {
      const res = await this.$http.get("items/list/more");
      this.item= res.data;
    },
  },
  created() {
    this.fetchItemCats();
  },
};
</script>
