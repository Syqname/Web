<template>
    <div>
        <m-card :icon="icon" :title="title">
        <div class="nav jc-between">
            <div class="nav-item " :class="{active:active===i}" 
            v-for="(category,i) in categories" :key="i"
            @click="$refs.list.swiper.slideTo(i)">
                
                <div class="nav-link">{{category.name}}</div>
            </div>          
        </div>
        <div class="pt-3">
            <swiper ref="list" :options="{autoHeight:true}"
            @slide-chang="()=>active = $refs.list.swiper.realIndex">
            <swiper-slide v-for="(category,i) in categories" :key="i">
               <slot name="items" :category="category"></slot>
            </swiper-slide>
        </swiper>
      </div>
</m-card>
    </div>
</template>
<script>
export default {
    props:{
    icon:{type:String},
    title:{type:String},
    categories:['三农要闻','农业资讯','违规警告','市价公示'],
    },
    data(){
        return{
            active:0
        }
    }
}
</script>