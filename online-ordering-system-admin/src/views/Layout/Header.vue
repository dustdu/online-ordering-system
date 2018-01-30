<template>
  <div class="app-header">
    <div class="app-header-title">
      网上订餐管理系统
    </div>
    <div class="user-container">
      <el-popover ref="popover" placement="bottom" width="180" trigger="hover">
        <div class="popover">
          <ul class="popover-list">
            <li>
              <span>管理员</span>
            </li>
            <li>
              <span>
                店铺积分
              </span>
            </li>
            <li class="border">
              <span>
                店铺等级
              </span>
            </li>
            <li>
              <span>
                账号管理
              </span>
            </li>
            <li class="border">
              <span>
                信息
              </span>
            </li>
          </ul>
          <el-button class="btn-logout" >
            退出登录
          </el-button>
        </div>
      </el-popover>
      <div class="user-wrapper" v-popover:popover>
        <span>您好，管理员</span>
      </div>
    </div>
  </div>
</template>

<script>
  // import { mapGetters } from 'vuex'
  export default {
    name: 'Header',
    computed: {
      // ...mapGetters(['permission_routers', 'nickName'])
    },
    methods: {
      // logout() {
      //   this.$store.dispatch('LogOut').then(() => {
      //     location.reload() // 为了重新实例化vue-router对象 避免bug
      //   })
      // }
    }
  }
</script>

<style lang="scss" scoped>
  .app-header {
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1001;
    background-color: #ffffff;
    border-bottom: 1px solid rgba(30, 35, 42, .1);
    box-shadow: 0 1px 3px 0 rgba(0, 34, 77, .1);
  }
  .app-header-title {
    line-height: 50px;
    float: left;
    margin-left: 20px;
    font-size: 18px;
  }

.user-container {
  height: 50px;
  line-height: 50px;
  float: right;
  .user-wrapper {
    cursor: pointer;
    font-size: 14px;
    color: #48576a;
    float: right;
    margin-right: 20px;
  }
}

.popover {
  .btn-logout {
    float: right;
    margin-top: 12px;
  }
  .popover-list {
    list-style: none;
    padding-left: 0;
    font-size: 13px;
    margin: 0;
    color: #48576a;
    li {
      padding: 5px 0;
      &.border {
        border-bottom: 1px solid #d1dbe5;
        padding-bottom: 12px;
      }
    }
  }
}
</style>
