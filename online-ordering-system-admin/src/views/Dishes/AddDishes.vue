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
        <el-form-item label="餐品名称：" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="上架">
          <el-radio-group v-model="form.activeFlag">
            <el-radio :label="1">是</el-radio>
            <el-radio :label="0">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="餐品价格：" prop="price">
          <el-input-number 
            v-model="form.price" 
            controls-position="right" 
            @change="priceChange" 
            :min="0"
          >
          </el-input-number>
        </el-form-item>
        <el-form-item label="优惠：">
          <el-radio-group v-model="form.discount">
            <el-radio :label="1">是</el-radio>
            <el-radio :label="0">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="优惠价格：" prop="discountPrice">
          <el-input-number 
            v-model="form.discountPrice" 
            controls-position="right"
            :min="0"
            :disabled="form.discount === 0"
          >
          </el-input-number>
        </el-form-item>
        <el-form-item label="推荐：">
          <el-radio-group v-model="form.recommend">
            <el-radio :label="1">是</el-radio>
            <el-radio :label="0">否</el-radio>
          </el-radio-group>
        </el-form-item>
        
        <el-form-item label="餐品预览图：">
          <el-upload
            class="avatar-uploader"
            :show-file-list="false"
            action="http://localhost:3000/upload"
            name="uploadfile"
            :on-success="uploadSuccess"
          >
            <img v-if="form.imgThumb" :src="form.imgThumb" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <!-- <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog> -->
        </el-form-item>
        <el-form-item label="商品信息：">
          <el-input
            type="textarea"
            :rows="3"
            placeholder="请输入内容"
            v-model="form.des"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="商品备注：">
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
  components: {},
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
        remark: '',
        imgThumb: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入餐品名称', trigger: 'blur' }
        ]
      },
      isAdd: true
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
    priceChange(v) {
      if (this.form.discount === 0) {
        this.form.discountPrice = v
      }
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
    uploadSuccess(res, file, fileList) {
      console.log(res)
      this.form.imgThumb = res.data.url
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  background-color: #fff;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    &:hover {
      border: 1px dashed #409EFF;
    }
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
    border-radius: 6px;
  }
</style>
