<template>
  <div>
    <el-form ref="form" :model="login" label-width="80px" style="width: 20%">
      <el-form-item label="姓名">
        <el-input v-model="login.username"></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="login.password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button @click="goToHome">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'Useradd',
    data () {
      return {
        login: {
          username: '',
          password: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit () {
        let _this = this
        this.$axios.post('http://localhost:8086/test/insert', _this.login
        ).then(function (response) {
          if (response.status === 200) {
            alert('新增成功')
          } else {
            alert('新增失败')
          }
          _this.goToHome()
        }).catch(function (err) {
          console.log(err)
        })
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
