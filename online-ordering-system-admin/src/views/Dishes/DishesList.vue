<template>
  <div class="app-container">
    <div class="list-wrap">
      <el-table
        :data="dishesList"
        border
        style="width: 100%"
      >
        <el-table-column
          prop="id"
          label="商品编号"
          width="80">
        </el-table-column>
        <el-table-column
          prop="name"
          label="商品名称"
          width="120">
        </el-table-column>
        <!-- <el-table-column
          prop="img"
          label="图片"
          width="180">
        </el-table-column> -->
        <el-table-column
          prop="price"
          label="价格"
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
          prop="created_at"
          label="添加时间"
          width="140">
        </el-table-column>
        <el-table-column
          label="操作"
          width="150">
          <template slot-scope="scope">
            <el-button
              type="primary">
              编辑
            </el-button>
            <el-button
              type="danger">
              下架
            </el-button>
          </template>
        </el-table-column>
        <el-table-column
          prop="remark"
          label="备注">
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
      dishesList: []
    }
  },
  created() {
    this.getDishes()
  },
  methods: {
    getDishes() {
      request(
        'getDishes',
        {
          activeFlg: -1
        },
        r => {
          console.log(r)
          this.dishesList = r.data
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.img {
  width: 100%;
}
 
</style>
