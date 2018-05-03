<template>
  <div class="app-container">
    <div class="list-wrap">
      <el-table
        :data="userList"
        border
        style="width: 100%"
      >
        <el-table-column
          prop="id"
          label="用户ID"
          width="80">
        </el-table-column>
        <el-table-column
          prop="userName"
          label="用户名"
          width="120">
        </el-table-column>
        <!-- <el-table-column
          prop="img"
          label="图片"
          width="180">
        </el-table-column> -->
        <el-table-column
          prop="mobile"
          label="手机"
          width="120">
        </el-table-column>
        <el-table-column
          prop="created_at"
          label="注册时间"
          width="120">
        </el-table-column>
        <!-- <el-table-column
          label="操作"
          width="90">
          <template slot-scope="scope">
            <el-button
              type="primary">
              查看
            </el-button>
          </template>
        </el-table-column> -->
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
      userList: []
    }
  },
  created() {
    this.getUserList()
  },
  methods: {
    getUserList() {
      request(
        'getUsers'
      )
        .then(
          r => {
            console.log(r)
            this.userList = r.data
          }
        )
    }
  }
}
</script>

<style lang="scss" scoped>

 
</style>
