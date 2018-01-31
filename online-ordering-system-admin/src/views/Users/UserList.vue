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
          label="用户ID"
          width="80">
        </el-table-column>
        <el-table-column
          prop="nickname"
          label="昵称"
          width="120">
        </el-table-column>
        <!-- <el-table-column
          prop="img"
          label="图片"
          width="180">
        </el-table-column> -->
        <el-table-column
          prop="truename"
          label="真实姓名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="registertime"
          label="注册时间"
          width="120">
        </el-table-column>
        <el-table-column
          label="操作"
          width="90">
          <template slot-scope="scope">
            <el-button
              type="primary">
              查看
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
          id: 'user-100',
          nickname: '小李',
          truename: '李刚',
          registertime: '2017-12-12',
          remark: ''
        }, {
          id: 'user-101',
          nickname: '小王',
          truename: '王刚',
          registertime: '2017-12-12',
          remark: ''
        }, {
          id: 'user-102',
          nickname: '小红',
          truename: '王红',
          registertime: '2017-12-12',
          remark: ''
        }, {
          id: 'user-103',
          nickname: '小刘',
          truename: '刘海',
          registertime: '2017-12-12',
          remark: ''
        }, {
          id: 'user-104',
          nickname: '小马',
          truename: '马刚',
          registertime: '2017-12-12',
          remark: ''
        }, {
          id: 'user-105',
          nickname: '小白',
          truename: '白白',
          registertime: '2017-12-12',
          remark: ''
        }, {
          id: 'user-106',
          nickname: '小兰',
          truename: '李兰',
          registertime: '2017-12-12',
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
