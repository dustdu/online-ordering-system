<template>
  <div class="app-container">
    <div class="list-wrap">
      <el-table
        :data="messageData"
        border
        style="width: 100%"
      >
        <el-table-column
          prop="msgId"
          label="ID"
          width="80">
        </el-table-column>
        <el-table-column
          prop="title"
          label="标题"
          width="150">
        </el-table-column>
        <el-table-column
          prop="msgCount"
          label="内容">
        </el-table-column>
        <el-table-column
          prop="created_at"
          label="创建时间"
          width="120">
        </el-table-column>
        <!-- <el-table-column
          label="操作"
          width="100"
          fixed="right">
          <template slot-scope="scope">
            <el-button
              type="danger"
              @click="deleteMsg">
              删除消息
            </el-button>
          </template>
        </el-table-column> -->
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
      messageData: [{
        id: '21',
        title: '订单消息',
        content: '用户 user 下单成功，订单号：20180319090441773',
        createtime: '2018-4-19'
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
  created() {
    this.getMsg()
  },
  methods: {
    getMsg() {
      request(
        'getMessage'
      )
        .then(r => {
          console.log(r)

          this.messageData = r.data
        })
    },
    deleteMsg(msgId) {
      request(
        'deleteMsg',
        {
          msgId
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>

 
</style>
