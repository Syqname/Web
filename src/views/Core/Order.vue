<template>
    <div>
      <h3 class="mt-3 mb-3">购买记录</h3>
       <el-table :data="items">
            <el-table-column prop="_id" label="ID"  width="230px"></el-table-column>
           
            <el-table-column prop="icon" label="图标" >
              <template slot-scope="scope">
                <img :src="scope.row.icon" alt="" style="height:3rem" >
                <!-- scope.row表示这一行数据 -->
              </template>
            </el-table-column>
            <el-table-column prop="name" label="名称" ></el-table-column>
            <el-table-column prop="jiage" label="价格" ></el-table-column>
            <el-table-column prop="dizhi" label="产地" ></el-table-column>
            <el-table-column prop="lianxi" label="联系方式" ></el-table-column>

           
          </el-table>
    </div>
  </template>
  <script>
  export default {
    data(){
      return{
        items:[]
      }
    },
    methods:{
      async fetchPeople() {
        const res = await this.$http.get("people");
        this.items = res.data.purchased;
      },
     
  
    },
    created(){
      this.fetchPeople()

    }
  }
  </script>
  