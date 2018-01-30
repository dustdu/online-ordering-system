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
      <el-table
        :data="tableData2"
        style="width: 100%"
        :row-class-name="tableRowClassName"
        class="tables"
      >
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
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
        tableData2: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    },
    methods: {
      tableRowClassName({ row, rowIndex }) {
        if (rowIndex === 1) {
          return 'warning-row'
        } else if (rowIndex === 3) {
          return 'success-row'
        }
        return ''
      }
    }
  }
</script>

<style lang="scss">
.list-wrap {
  padding: 10px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px 0 rgba(0,0,0,.05);
}
.app-container {
  .radio-group {
    text-align: center;
  }
  .tables{
    margin-top: 20px;
    .warning-row {
      background: oldlace;
    }

    .success-row {
      background: #f0f9eb;
    }
  }
  
}
 
</style>
