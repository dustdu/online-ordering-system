<template>
  <view-box
    body-padding-top="46px"
    :body-padding-bottom="paddingBottom"
  >
    <x-header
      slot="header"
      style="width:100%;position:absolute;left:0;top:0;z-index:100;background:#06a355;"
      :left-options="{showBack: isShowBack}"
    >
      <div class="title">
        {{title}}
      </div>
    </x-header>
    <!-- <search slot="header"></search> -->
    <transition
      :name="viewTransition"
      @after-enter="$vux.bus && $vux.bus.$emit('vux:after-view-enter')"
    >
      <router-view></router-view>
    </transition>
    <tabbar
      slot="bottom"
      v-model="index"
      v-if="isShowBottom"
    >
      <tabbar-item
        v-for="item in tabbarList"
        :key="item.link"
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
  import { mapGetters } from 'vuex'
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
        index: 0,
        paddingBottom: '53px',
        tabbarList: [
          {
            title: '首页',
            icon: 'fa-home',
            link: '/home'
          },
          {
            title: '点餐',
            icon: 'fa-cart-arrow-down',
            link: '/dishes'
          },
          {
            title: '订单',
            icon: 'fa-list-ul',
            link: '/orderList'
          },
          {
            title: '我的',
            icon: 'fa-user-o',
            link: '/mine'
          }
        ]
      }
    },
    computed: {
      ...mapGetters([
        'animationType',
        'title',
        'isShowBack',
        'isShowBottom',
        'selectedBottom'
      ]),
      viewTransition() {
        if (!this.animationType) return ''
        return 'vux-pop-' + (this.animationType === 'forward' ? 'in' : 'out')
      }
    },
    watch: {
      isShowBottom(v) {
        if (v) {
          this.paddingBottom = '53px'
        } else {
          this.paddingBottom = '50px'
        }
      },
      selectedBottom(v) {
        this.index = this.selectedBottom
      }
    },
    created() {
      this.index = this.selectedBottom
    },
    methods: {
      itemClick() {
        this.$socket.emit('webApp', '111')
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
