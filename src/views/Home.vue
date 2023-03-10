<template>
  <div class="bj-ft">
    <div
      class="bg-light m-auto pb-3"
      style="width: 90vw; background: whitesmoke; padding-top: 20px"
    >
      <div
        class="fs-g m-auto bg-grey-1 mb-2"
        style="width: 85vw;height: 2px;  border-bottom;:1px solid black"
      ></div>
      <div class="d-flex jc-center">
        <div class="">
          <swiper
            class=""
            style="width: 800px; height: 400px"
            :options="swiperOption"
          >
            <!-- slides -->
            <swiper-slide>
              <img
                class=""
                style="width: 800px; height: 400px"
                src="../assets/pexels-burak-the-weekender-1340863.jpg"
                alt=""
              />
            </swiper-slide>
            <swiper-slide>
              <img
                class=""
                style="width: 800px; height: 400px"
                src="../assets/pexels-ella-olsson-1640770.jpg"
                alt=""
              />
            </swiper-slide>
            <swiper-slide>
              <img
                class=""
                style="width: 800px; height: 400px"
                src="../assets/pexels-markus-spiske-175414.jpg"
                alt=""
              />
            </swiper-slide>

            <!-- Optional controls -->
            <div
              class="swiper-pagination pagination-home text-right px-3 pb-2"
              slot="pagination"
            ></div>
          </swiper>
        </div>
        <div class="ml-5 bg-info bt-2" style="border-radius: 2%">
          <iframe
            width="400"
            scrolling="no"
            height="300"
            frameborder="0"
            allowtransparency="true"
            src="//i.tianqi.com/index.php?c=code&id=55&$icon=1&py=xian&color=%44FFFFF&site=16"
          ></iframe>
          <!-- &id=19样式  &py=xian位置  $icon=1图例风格 &color=%23FFFFF颜色 &site=12字体大小-->
        </div>
      </div>

      <div class="mt-2 ml-3 mr-3 d-flex jc-around">
        <m-card
          tag="div"
          icon="cc-menu-circle"
          style="width: 31%"
          title="三农要闻"
          to="/noticemore"
          name="更多"
        >
          <router-link
            tag="div"
            :to="`/details/${a._id}`"
            v-for="(a, i) in notice"
            :key="i"
            class="d-flex"
          >
            <div
              class="fs-c mt-1 text-ellipsis"
              style="width: 80%; cursor: pointer"
            >
              <strong><span class="iconfont icon-dian"></span></strong
              >{{ a.title }}
            </div>
            <div style="width: 20%" class="text-right mt-1">
              {{ a.createdAt | date }}
            </div>
          </router-link>
        </m-card>

        <m-card
          tag="div"
          icon="cc-menu-circle"
          style="width: 31%"
          title="农业资讯"
          to="thingmore"
          name="更多"
        >
          <router-link
            tag="div"
            :to="`/detaills/${b._id}`"
            v-for="(b, i) in thing"
            :key="i"
            class="d-flex"
          >
            <div
              class="fs-c mt-1 text-ellipsis"
              style="width: 80%; cursor: pointer"
            >
              <strong><span class="iconfont icon-dian"></span></strong
              >{{ b.title }}
            </div>
            <div style="width: 20%" class="text-right mt-1">
              {{ b.createdAt | date }}
            </div>
          </router-link>
        </m-card>

        <m-card
          tag="div"
          icon="cc-menu-circle"
          style="width: 31%"
          title="违规警告"
          to="/warningmore"
          name="更多"
        >
          <div v-for="(c, i) in warning" :key="i" class="d-flex jc-between">
            <div class="fs-c mt-1 text-ellipsis" style="width: 80%">
              <strong><span class="iconfont icon-dian"></span></strong
              >{{ c.title }}
            </div>
            <div style="width: 20%" class="text-right mt-1">
              {{ c.createdAt | date }}
            </div>
          </div>
        </m-card>
      </div>
      <div class="mt-2 ml-3 mr-3 d-flex jc-around">
        <m-card
          tag="div"
          icon="cc-menu-circle"
          style="width: 98%"
          title="市价公示"
          to="/itemmore"
          name="更多"
        >
          <div class="d-flex flex-wrap">
            <div class="d-flex" v-for="(d, i) in item" :key="i">
              <div
                class="d-flex mt-1 jc-around ml-88"
                style="border: 1px solid bisque; width: 235px"
              >
                <div>
                  <img :src="d.icon" alt="" style="height: 5rem; width: 7rem" />
                </div>
                <div class="mt-4">{{ d.name }}</div>
                <div class="mt-4">{{ d.price }}</div>
              </div>
            </div>
          </div>
        </m-card>
      </div>
      <div
        class="fs-g m-auto bg-grey-1 mt-2"
        style="width: 85vw;height: 2px;  border-bottom;:1px solid black"
      ></div>
    </div>
    <div
      class="banquan text-center pt-5"
      style="
        width: 100%;
        height: 200px;
        line-height: 20px;
        line-height: 30px;
        background: gainsboro;
        opacity: 0.4;
      "
    >
      <div></div>
      <p>主管单位：泾阳县xxxx办公室 承办单位：泾阳县xxxxx中心</p>
      <div>地址：泾阳县中心街xxxx号 邮编：71xx00 技术运维：029-xxxxx88</div>
      <div>陕公网安备61xxxx00119号 网站标识码：61042xxxx01</div>
      <div>陕ICP备130xxxx83号</div>
      <div></div>
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
      notice: null,
      item: null,
      thing: null,
      warning: null,

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
      newCats: [],
      heroCats: [],
    };
  },
  methods: {
    async fetchNoticeCats() {
      const res = await this.$http.get("notices/list");
      this.notice = res.data;
    },
    async fetchThingCats() {
      const res = await this.$http.get("things/list");
      this.thing = res.data;
    },
    async fetchItemCats() {
      const res = await this.$http.get("items/list");
      this.item = res.data;
    },
    async fetchWarningCats() {
      const res = await this.$http.get("warnings/list");
      this.warning = res.data;
    },
  },
  created() {
    this.fetchNoticeCats();
    this.fetchThingCats();
    this.fetchWarningCats();
    this.fetchItemCats();
  },
};
</script>
<style lang="scss">
@import "../scss/style.scss";
.pagination-home {
  .swiper-pagination-bullet {
    border-radius: 0.1538rem;
    opacity: 1;
    background-color: #fff;
    &.swiper-pagination-bullet-active {
      background: map-get($colors, "info");
    }
  }
}
.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-left: 1px solid $border-color;
    &:nth-child(4n) {
      border-right: none;
    }
  }
}
</style>
