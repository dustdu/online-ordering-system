<template>
  <div class="app-container">
    <el-card class="box-card">
      <el-form 
        ref="form" 
        :model="form"
        :rules="rules"
        label-width="120px" 
        class="dishes-form"
      >
        <el-form-item label="管理员名称：" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="登录密码：" prop="name">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="备注：">
          <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            v-model="form.remark"
          >
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="addAdmain">立即添加</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { request } from '../../util/request'
export default {
  components: {},
  data() {
    return {
      form: {
        name: '',
        remark: '',
        password: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入管理员名称', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    addAdmain() {
      this.$refs.form.validate(v => {
        v && request(
          'addAdmain',
          this.form
        )
          .then(r => {
            this.$notify({
              title: '成功',
              message: '添加管理员成功！',
              type: 'success'
            })
          })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  background-color: #fff;
}
</style>
