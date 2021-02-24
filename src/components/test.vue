<template>
  <div>
    <el-row>
      <el-button type="primary" @click="searchList">查询</el-button>
    </el-row>
    <el-table
      :data="tableData"
      style="width: 100%" >
      <el-table-column
        prop="id"
        label="日期"
        width="360">
      </el-table-column>
      <el-table-column
        prop="username"
        label="姓名"
        width="360">
      </el-table-column>
      <el-table-column
        prop="password"
        label="地址"
        width="360">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'test',
    data() {
      return {
        tableData: [{
          id: '',
          username: '',
          password: ''
        }]
      }},
    created() {
      // this.$axios({
      //   method: 'post',
      //   url: 'http://localhost:8086/test/selectById',
      //   data:{
      //     id:8
      //   }
      // }).then(function (response) {
      //   // _this.tableData=response.data;
      // })
      },
    methods:{
      searchList(){
        let _this=this;
        this.$axios.get("http://localhost:8086/test/hello")
          .then(function (response) {
            _this.tableData=response.data;
            console.log(response.data)
          }).catch(function (err) {
          console.log(err)
        })
      }
    }
      }
</script>

<style scoped>

</style>
