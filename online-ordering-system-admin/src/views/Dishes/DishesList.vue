<template>
  <div class="app-container">
    <div class="list-wrap">
      <div class="radio">
        <el-radio-group v-model="radioValue" @change="radioChange">
          <el-radio-button label="all">所有餐品</el-radio-button>
          <el-radio-button label="off">未上架</el-radio-button>
          <el-radio-button label="shelve">已上架</el-radio-button>
          <el-radio-button label="discount">优惠餐品</el-radio-button>
          <el-radio-button label="recommend">推荐餐品</el-radio-button>
        </el-radio-group>
      </div>
      <el-table
        :data="dishesList"
        border
        style="width: 100%"
      >
        <el-table-column
          prop="dishesId"
          label="商品编号"
          width="80">
        </el-table-column>
        <el-table-column
          prop="name"
          label="商品名称"
          width="120">
        </el-table-column>
        <el-table-column
          label="餐品图"
          width="120">
          <template slot-scope="scope">
            <img class="img" :src="scope.row.imgThumb" alt="">
          </template>
        </el-table-column>
        <el-table-column
          prop="price"
          label="价格"
          width="120">
        </el-table-column>
        <el-table-column
          prop="discountPrice"
          label="优惠价格"
          width="120">
        </el-table-column>
        <el-table-column
          prop="des"
          label="餐品描述">
        </el-table-column>
        <el-table-column
          prop="remark"
          label="备注"
          width="140">
        </el-table-column>
        <el-table-column
          prop="created_at"
          label="添加时间"
          width="140">
        </el-table-column>
        <el-table-column
          label="操作"
          width="150"
          fixed="right">
          <template slot-scope="scope">
            <el-button
              type="primary"
              @click="editDishes(scope.row)"
            >
              编辑
            </el-button>
            <el-button
              type="danger">
              下架
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { request } from '../../util/request'
export default {
  components: {

  },
  data() {
    return {
      dishesList: [],
      radioValue: 'all'
    }
  },
  created() {
    this.radioChange('all')
  },
  methods: {
    radioChange(v) {
      request(
        'getDishes',
        {
          dishesState: v
        }
      ).then(r => {
        this.dishesList = r.data
      })
    },
    editDishes(row) {
      this.$router.push({ name: 'EditDishes', params: { dishesId: row.dishesId } })
    }
  }
}
</script>

<style lang="scss" scoped>
.img {
  width: 100%;
}
.radio {
  text-align: center;
  padding: 15px 0;
}
 
</style>
