<template>
  <div class="app-container">
    <el-card class="box-card">
      <el-form 
        ref="form" 
        :model="form"
        :rules="rules"
        label-width="80px" 
        class="dishes-form"
      >
        <el-form-item label="餐品名称" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="餐品价格" prop="price">
          <el-input-number 
            v-model="form.price" 
            controls-position="right" 
            @change="handleChange" 
            :min="0"
          >
          </el-input-number>
        </el-form-item>
        <el-form-item label="优惠价格" prop="discountPrice">
          <el-input-number 
            v-model="form.discountPrice" 
            controls-position="right" 
            @change="handleChange" 
            :min="0"
          >
          </el-input-number>
        </el-form-item>
        <el-form-item label="上架">
          <el-radio-group v-model="form.activeFlag">
            <el-radio :label="1">是</el-radio>
            <el-radio :label="0">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="推荐">
          <el-radio-group v-model="form.recommend">
            <el-radio :label="1">是</el-radio>
            <el-radio :label="0">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="优惠">
          <el-radio-group v-model="form.discount">
            <el-radio :label="1">是</el-radio>
            <el-radio :label="0">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="餐品预览图">
          <el-upload
            action="http://localhost:3000/upload"
            list-type="picture-card"
            :on-change="fileChange"
            name="uploadfile"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <!-- <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog> -->
        </el-form-item>
        <el-form-item label="商品信息">
          <el-input
            type="textarea"
            :rows="3"
            placeholder="请输入内容"
            v-model="form.des"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="商品备注">
          <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            v-model="form.remark"
          >
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="addDishes" v-if="isAdd">立即添加</el-button>
          <el-button type="primary" @click="editDishes" v-else>确认更改</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { request } from '../../util/request'
export default {
  components: {

  },
  data() {
    return {
      form: {
        name: '',
        price: '',
        discountPrice: '',
        activeFlag: 1,
        recommend: 0,
        discount: 0,
        des: '',
        remark: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入餐品名称', trigger: 'blur' }
        ]
      },
      isAdd: true,
      updataFile: ''
    }
  },
  created() {
    if (this.$route.params.dishesId) {
      this.getDishesDetail()
      this.isAdd = false
    }
  },
  methods: {
    addDishes() {
      this.$refs.form.validate(v => {
        v && request(
          'addDishes',
          this.form
        )
          .then(r => {
            this.$notify({
              title: '成功',
              message: '添加餐品成功！',
              type: 'success'
            })
          })
      })
    },
    // 编辑餐品
    editDishes() {
      this.$refs.form.validate(v => {
        this.form.dishesId = this.$route.params.dishesId
        v && request(
          'updataDishes',
          this.form
        )
          .then(r => {
            this.$notify({
              title: '成功',
              message: '餐品信息更新成功！',
              type: 'success'
            })
          })
      })
    },
    handleChange(v) {
      console.log(v)
    },
    getDishesDetail() {
      request(
        'getDishesDetail',
        {
          dishesId: this.$route.params.dishesId
        }
      )
        .then(r => {
          console.log(r)
          this.form = r.data
        })
    },
    fileChange(file, fileList) {
      console.log(file)
      console.log(fileList)
      this.updataFile = file
    },
    uploadImage() {
      const fd = new FormData()
      console.log(this.updataFile)

      fd.append('upload', 1)
      fd.append('uploadImage', this.updataFile)
      fd.append('context', String(Date.parse(new Date())))
      console.log(fd)
      // this.$axios({
      //   method: 'post',
      //   data: fd,
      //   baseURL: '',
      //   url: 'http://localhost:3000',
      //   headers: { 'Content-Type': false }
      // })
      //   .then(r => {
      //     // this.$emit('uploadCallBack', r.data.data.url)
      //     console.log(r)
      //   })
      //   .catch(error => {
      //     console.log('上传出错:' + error.message)
      //   })
    }

  }
}
</script>

<style lang="scss" scoped>
.form {
  background-color: #fff;
  
}
 
</style>
