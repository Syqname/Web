
<template>
    <div class="bj-ft">
        <div class="bg-whit m-auto pb-3" style="width:90vw;background:whitesmoke;padding-top: 20px;">
            <div class="fs-g m-auto  bg-grey-1 mb-2" style="width: 85vw;height: 2px;  border-bottom;:1px solid black"></div>
        
            <m-card  style="width: 100%" title="违规警告">
      <div v-for="(c, i) in warning" :key="i" class="d-flex jc-between mb-2">
        <div class="fs-c mt-1 text-ellipsis" style="width: 80%">
          <strong><span class="iconfont icon-dian"></span></strong>{{ c.title }}
        </div>
        <div style="width: 20%" class="text-right mt-1">
          {{ c.createdAt | date }}
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
      warning: null,
    };
  },
  methods: {
    async fetchWarningCats() {
      const res = await this.$http.get("warnings/list/more");
      this.warning = res.data;
    },
  },
  created() {
    this.fetchWarningCats();
  },
};
</script>
