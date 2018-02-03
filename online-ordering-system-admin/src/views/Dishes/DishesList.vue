<template>
  <div class="app-container">
    <div class="list-wrap">
      <el-table
        :data="tableData3"
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
          prop="createtime"
          label="添加时间"
          width="120">
        </el-table-column>
        <el-table-column
          label="操作"
          width="180">
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
  export default {
    components: {

    },
    data() {
      return {
        tableData3: [{
          id: 'item-200',
          name: '宫保鸡丁',
          price: '￥21',
          createtime: '2018-1-12',
          remark: ''
        }, {
          id: 'item-100',
          name: '辣子鸡',
          price: '￥20',
          createtime: '2017-12-12',
          remark: ''
        }, {
          id: 'item-101',
          name: '蚂蚁上树',
          price: '￥20',
          createtime: '2017-12-12',
          remark: ''
        }, {
          id: 'item-102',
          name: '烤串',
          price: '￥20',
          createtime: '2017-12-12',
          remark: ''
        }, {
          id: 'item-103',
          name: '汉堡',
          price: '￥20',
          createtime: '2017-12-12',
          remark: ''
        }, {
          id: 'item-104',
          name: '黄焖鸡',
          price: '￥20',
          createtime: '2017-12-12',
          remark: ''
        }, {
          id: 'item-105',
          name: '红烧茄子',
          price: '￥20',
          createtime: '2017-12-12',
          remark: ''
        }, {
          id: 'item-106',
          name: '小炒肉',
          price: '￥20',
          createtime: '2017-12-12',
          remark: ''
        }]
      }
    },
    methods: {
  
    }
  }
</script>

<style lang="scss" scoped>

 
</style>
