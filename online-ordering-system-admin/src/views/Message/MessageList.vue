<template>
  <div class="app-container">
    <div class="list-wrap">
      <el-table
        :data="messageData"
        border
        style="width: 100%"
      >
        <el-table-column
          prop="id"
          label="ID"
          width="80">
        </el-table-column>
        <el-table-column
          prop="title"
          label="标题"
          width="150">
        </el-table-column>
        <el-table-column
          prop="content"
          label="内容">
        </el-table-column>
        <el-table-column
          prop="createtime"
          label="创建时间"
          width="120">
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
        messageData: [{
          id: 'item-100',
          title: '订单消息',
          content: '用户 小红 下单',
          createtime: '2017-12-12'
        }, {
          id: 'item-101',
          title: '用户消息',
          content: '用户 小刘 注册',
          createtime: '2017-12-12'
        }, {
          id: 'item-102',
          title: '后台消息',
          content: '添加餐品 小炒肉',
          createtime: '2017-12-12'
        }, {
          id: 'item-103',
          title: '后台消息',
          content: '小炒肉 售尽',
          createtime: '2017-12-12'
        }, {
          id: 'item-104',
          title: '后台消息',
          content: '蚂蚁上树 售尽',
          createtime: '2017-12-12'
        }, {
          id: 'item-105',
          title: '用户消息',
          content: '用户 小王 注册',
          createtime: '2017-12-12'
        }, {
          id: 'item-106',
          title: '用户消息',
          content: '用户 小李 注册',
          createtime: '2017-12-12'
        }]
      }
    },
    methods: {
  
    }
  }
</script>

<style lang="scss" scoped>

 
</style>
