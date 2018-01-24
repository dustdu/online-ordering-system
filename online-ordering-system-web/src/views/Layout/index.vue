<template>
  <view-box
    body-padding-top="46px"
    body-padding-bottom="53px"
  >
    <x-header
      slot="header"
      style="width:100%;position:absolute;left:0;top:0;z-index:100;"
      :left-options="headOptions"
    >
      <div class="title">
        {{title}}
      </div>
    </x-header>
    <!-- <search slot="header"></search> -->
    <router-view></router-view>
    <tabbar
      slot="bottom"
    >
      <tabbar-item
        v-for="item in tabbarList"
        :key="item.icon"
        :link="item.link"
        @on-item-click="itemClick"
      >
        <i 
          slot="icon"
          class="fa"
          :class="item.icon"
        >
        </i>
        <span slot="label">{{item.title}}</span>
      </tabbar-item>
    </tabbar>
  </view-box>
</template>

<script>
  import { ViewBox, XHeader, Tabbar, TabbarItem, Search } from 'vux'
  export default {
    components: {
      ViewBox,
      XHeader,
      Tabbar,
      TabbarItem,
      Search
    },
    data() {
      return {
        title: '欢迎订餐！',
        headOptions: {
          showBack: false
        },
        tabbarList: [
          {
            title: '首页',
            icon: 'fa-home',
            link: '/home'
          },
          {
            title: '订单',
            icon: 'fa-list-ul',
            link: '/OrderList'
          },
          {
            title: '我的',
            icon: 'fa-user-o',
            link: '/mine'
          }
        ]
      }
    },
    methods: {
      itemClick() {
        this.$vux.toast.text('Loading')
      }
    }
  }
</script>

<style lang="scss" scoped>
.title {
  font-size: 16px;
  font-weight: normal;
}
</style>
