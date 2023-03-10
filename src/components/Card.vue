<template>
    <div class="card p-1 bg-white mt-1">
       <div class="card-header d-flex ai-center pb-1">
           <i class="iconfont" :class="`icon-${icon}`"> </i>
               <div class="fs-f flex-1 px-2" style="font-family:黑体">{{title}}</div>
               <div><router-link :to="`${to}`"> <i class="iconfont " >{{name}}</i></router-link></div>
       </div>
       <div class="card-body ">
           <slot></slot>
       </div>
   </div>
</template>
<script>
export default {
   props:{
       title:{type:String},
       icon:{type:String},
       to:{type:String},
       name:{type:String}
   }
}
</script>
<style lang="scss">
@import '../../src/scss/style.scss';
.card{
.card-header{
   border-bottom:1px solid $border-color;
}
border-bottom:1px solid $border-color;
}
</style>