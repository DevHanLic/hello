<template>
  <div>
    <el-row style="text-align: left">
      <el-input
        placeholder="请输入内容"
        v-model="input"
        style="width: 30%"
        clearable>
      </el-input>
      <el-button type="primary" @click="searchList">查询</el-button>
      <el-button type="primary" @click='goToAdd()'>新增</el-button>
    </el-row>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        :formatter="dateFormat"
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

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="danger" @click='deleteById(scope.row.id)'>删除</el-button>
          <el-button type="primary" @click='updateById(scope.row)'>编辑</el-button>
        </template>
      </el-table-column>

    </el-table>

    <el-pagination
      background
      layout="total, sizes, prev, pager, next, jumper"
      @size-change="handleSizeChange"
      @current-change="headleCurrentChange"
      :current-page="currPage"
      :page-sizes="[3,5]"
      :page-size="pageSize"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>

  export default {
    name: 'test',
    data () {
      return {
        tableData: [],
        currPage: 0,
        pageSize: 5,
        total: 0,
        input: ''
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

      /*this.$axios.post('http://localhost:8086/test/selectById',
        {
          id:8
        })
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(_ => {
        // do something
      })*/
    },

    methods: {
      searchList () {
        let _this = this
        this.$axios.get('http://localhost:8086/test/hello', {
          params: {
            'currPage': _this.currPage,
            'pageSize': _this.pageSize,
            'input': _this.input
          }
        }).then(function (response) {
          _this.tableData = response.data.list
          _this.total = response.data.total
        }).catch(function (err) {
          console.log(err)
        },)
      },
      headleCurrentChange (val) {
        let _this = this
        _this.currPage = val
        _this.searchList()
      },
      handleSizeChange (val) {
        let _this = this
        _this.pageSize = val
        _this.searchList()
      },
      goToAdd () {
        //直接跳转
        this.$router.push('/add')
      },
      deleteById (val) {
        let _this = this
        this.$axios.post('http://localhost:8086/test/selectById', {
          id: val
        }).then(function (response) {
          if (response.status === 200) {
            alert('删除成功')
          } else {
            alert('删除失败')
          }
          _this.searchList()
        }).catch(function (err) {
            console.log(err)
          }
        )
      },
      updateById (row) {
        //直接跳转
        this.$router.push({
          name: 'update',
          params: {
            row: row
          }
        })
      },
      dateFormat (row, column, cellValue) {
        let date = row[column.property]
        if (date === undefined || date === '') {
          return ''
        }
        return cellValue.replace(/^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})$/, '$1-$2-$3 $4:$5:$6')
      }
    }
  }
</script>

<style scoped>

</style>
