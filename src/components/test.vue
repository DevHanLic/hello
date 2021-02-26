<template>
  <div>
    <el-row>
      <el-button type="primary" @click="searchList">查询</el-button>
    </el-row>
    <el-table
      :data="tableData"
      style="width: 100%">
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
    <el-pagination
      background
      layout="total, sizes, prev, pager, next, jumper"
      @size-change="handleSizeChange"
      @current-change="headleCurrentChange"
      :current-page="currPage"
      :page-sizes = "[3,5]"
      :page-size = "pageSize"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    name: 'test',
    data () {
      return {
        tableData: [{
          id: '',
          username: '',
          password: '',
        }],
        currPage: 0,
        pageSize: 5,
        total: 0
      }
    },
    created () {
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
    methods: {
      searchList () {
        let _this = this
        this.$axios.get('http://localhost:8086/test/hello',{ params:{
            'currPage': _this.currPage,
            'pageSize': _this.pageSize
          }
        })
          .then(function (response) {
            _this.tableData = response.data.list
            _this.total = response.data.total;
            // console.log(response.data.total)
          }).catch(function (err) {
          console.log(err)
        })
      },
      headleCurrentChange(val) {
        let _this = this
        _this.currPage = val;
        _this.searchList();
      },
      handleSizeChange(val){
        let _this = this
        _this.pageSize = val;
        _this.searchList();
      }
    }
  }
</script>

<style scoped>

</style>
