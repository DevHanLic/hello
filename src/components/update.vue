<template>

  <div>
    <el-form ref="form" :model="tableData" label-width="80px" style="width: 20%">
      <H1>更新</H1>
      <el-form-item label="姓名">
        <el-input v-model="tableData.username"></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="tableData.password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button  type="primary" @click="onSubmit">更新</el-button>
        <el-button @click="goToHome">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

  export default {
    name: 'update',
    data () {
      return {
        tableData: {
          id: '',
          username: '',
          password: '',
        },
        info:{
          message:'',
          type:'',
        }
      }
    },
    mounted () {
      this.tableData = this.$route.params.row;
    },
    methods: {
      onSubmit () {
        let _this = this
        this.$axios.post('http://localhost:8086/test/update', _this.tableData
        ).then(function (response) {
          if (response.status === 200) {
            _this.messageInfo('更新成功','success');
          } else {
            _this.messageInfo('更新失败','error');
          }
          _this.goToHome()
        }).catch(function (err) {
          console.log(err)
        })
      },
      messageInfo(message,type){
        this.$message({
          message: message,
          type: type
        });
      },
      goToHome () {
        //直接跳转
        this.$router.push('/test')
      }
    }
  }
</script>

<style scoped>

</style>
