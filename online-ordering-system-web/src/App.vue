<template>
  <div id="app">
    <transition
      :name="viewTransition"
      @after-enter="$vux.bus && $vux.bus.$emit('vux:after-view-enter')"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  sockets: {
    connect() {
      console.log('socket connected')
    },
    sendApp(val) {
      // console.log(val)
    },
    openMsg(val) {
      this.$vux.toast.text(val, 'bottom')
    }
  },
  computed: {
    ...mapGetters([
      'animationType'
    ]),
    viewTransition() {
      if (!this.animationType) return ''
      return 'vux-pop-' + (this.animationType === 'forward' ? 'in' : 'out')
    }
  }
}
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
</style>

<style lang="scss">
  @import './style/index.scss';
  html,
  body,
  #app {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }
</style>




