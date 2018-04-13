<template>
    <el-menu
      :default-active="$route.path"
      :unique-opened="true"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      class="sidebar-container"
    >
      <el-submenu
        v-for="item in navs"
        :key="item.name"
        :index="item.name"
      >
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.name}}</span>
        </template>
        <router-link
          v-for="items in item.routers"
          :key="items.name"
          :to="items.path"
        >
          <el-menu-item :index="items.path">
            {{items.name}}
          </el-menu-item>
        </router-link>
      </el-submenu>
    </el-menu>
</template>

<script>
  export default {
    name: 'Sidebar',
    data() {
      return {
        navs: [
          {
            icon: 'el-icon-info',
            name: '餐厅信息',
            routers: [
              {
                name: '数据分析',
                path: '/dashboard'
              }
            ]
          },
          {
            icon: 'el-icon-date',
            name: '餐品',
            routers: [
              {
                name: '餐品列表',
                path: '/dishes/list'
              },
              {
                name: '添加餐品',
                path: '/dishes/add'
              }
            ]
          },
          {
            icon: 'el-icon-tickets',
            name: '订单',
            routers: [
              {
                name: '订单列表',
                path: '/order/list'
              }
            ]
          },
          {
            icon: 'el-icon-message',
            name: '消息',
            routers: [
              {
                name: '消息列表',
                path: '/message/list'
              }
            ]
          },
          {
            icon: 'el-icon-view',
            name: '用户',
            routers: [
              {
                name: '用户列表',
                path: '/users/list'
              }
            ]
          }
        ]
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        // console.log(key, keyPath, this.$router.path)
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .el-menu {
    border-right: none;
  }
  .sidebar-container {
    transition: width 0.28s;
    position: fixed;
    width: 181px !important;
    top: 50px;
    bottom: 0;
    left: 0;
    z-index: 1000;
    // overflow-y: auto;
    box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
    a {
      display: inline-block;
      width: 100%;
      text-decoration: none;
    }
    &::-webkit-scrollbar {
      display: none;
    }
    .el-menu-item {
      min-width: 100%;
    }
  }

  .el-submenu .el-menu .el-menu-item{
    border: none;
    width: 100%;
    &.is-active {
      background-color: #369eff !important;
      color: #fff !important;
      &:hover {
        background-color: #369eff !important;
      }
    }
  }
</style>
