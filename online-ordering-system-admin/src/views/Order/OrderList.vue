<template>
  <div class="app-container">
    <div class="list-wrap">
      <div class="radio-group">
        <el-radio-group v-model="selectType" size="medium">
          <el-radio-button
            v-for="item in listType"
            :key="item.label"
            :label="item.label"
          >
          </el-radio-button>
        </el-radio-group>
      </div>
      <el-card 
        class="box-card"
        v-for="item in listData"
        :key="item.listNub"
      >
        <div slot="header">
          <div class="clearfix">
            <div class="list-message">
              <span class="margin-mess">订单编号：{{item.listNub}}</span>
              <span class="margin-mess">下单时间： {{item.createDate}}</span>
              <span class="margin-mess">订单状态： <el-tag>已发货</el-tag></span>
            </div>
            <el-button 
              type="primary" 
              class="list-play"
              @click="orderDetail" 
            >查看信息</el-button>
          </div>
          <div class="list-remark">备注：{{item.listRemark}}</div>
        </div>
        <el-table
          :data="item.dishesList"
          style="width: 100%"
          border
          class="tables"
        >
          <el-table-column
            prop="id"
            label="餐品ID"
            width="80">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="price"
            label="价格">
          </el-table-column>
          <el-table-column
            prop="createtime"
            label="上架时间">
          </el-table-column>
          <el-table-column
            prop="remark"
            label="备注">
          </el-table-column>
        </el-table>
      </el-card>
    </div>
  </div>
</template>

<script>
import { request } from '../../util/request'
export default {
  data() {
    return {
      selectType: '全部',
      listType: [
        {
          label: '全部'
        },
        {
          label: '待付款'
        },
        {
          label: '待发货'
        },
        {
          label: '已完成'
        },
        {
          label: '已取消'
        }
      ],
      listData: [{
        listNub: '20180319090441773',
        createDate: '2018-4-19',
        listRemark: '清淡',
        dishesList: [
          {
            id: '2',
            name: '爽口小青菜',
            price: '￥7',
            createtime: '2018-04-16T06:14:42.000Z',
            remark: ''
          }, {
            id: '4',
            name: '手撕包菜',
            price: '￥15',
            createtime: '2018-04-16T06:14:42.000Z',
            remark: ''
          }
        ]
      }, {
        listNub: 'D454845454866',
        createDate: '2018-1-12',
        listRemark: '重辣',
        dishesList: [
          {
            id: 'item-200',
            name: '宫保鸡丁',
            price: '￥21',
            createtime: '2017-12-12',
            remark: ''
          }, {
            id: 'item-102',
            name: '烤串',
            price: '￥20',
            createtime: '2017-12-12',
            remark: ''
          }
        ]
      }, {
        listNub: 'D454845454845',
        createDate: '2018-12-12',
        listRemark: '不要辣',
        dishesList: [
          {
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
          }
        ]
      }, {
        listNub: 'D454845454841',
        dishesList: [
          {
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
          }
        ],
        createDate: '2018-12-12'
      }, {
        listNub: 'D454845454848',
        dishesList: [
          {
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
          }
        ],
        createDate: '2018-12-12'
      }, {
        listNub: 'D454845454847',
        dishesList: [
          {
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
          }
        ],
        createDate: '2018-12-12'
      }]
    }
  },
  created() {
    console.log(1)

    request(
      'adminLogin',
      {
        adminName: 'admin',
        password: 123456
      }
    ).then(r => {
      console.log(r)
    })
  },
  methods: {
    orderDetail() {
      this.$socket.emit('webAdmin', '11', '8787')

      // this.$router.push({
      //   name: 'OrderDetail',
      //   params: {
      //     orderId: '123'
      //   }
      // })
    }
  }
}
</script>

<style lang="scss">
.app-container {
  .radio-group {
    text-align: center;
  }
  .box-card {
    margin-top: 20px;
    .el-card__header {
      padding: 10px;
    }
    .list-message {
      float: left;
      line-height: 32px;
      .margin-mess {
        margin-right: 10px;
      }
    }
    .list-play {
      float: right;
    }
    .list-remark {
      line-height: 30px;
    }
  }
  
}


.app-container .el-table .el-table__header-wrapper tr th {
  background-color: #fafafa;
}
</style>

