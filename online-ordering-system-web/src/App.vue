<template>
  <div id="app">
    <div v-transfer-dom>
      <loading v-model="isLoading"></loading>
    </div>
    <transition
      :name="viewTransition"
      @after-enter="$vux.bus && $vux.bus.$emit('vux:after-view-enter')"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { Loading } from 'vux'
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  components: {
    Loading
  },
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
      'animationType',
      'isLoading'
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
  @import '~vux/src/styles/1px.less';
</style>

<style lang="scss">
  @import './style/index.scss';
  html,
  body,
  #app {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    background-color: #f1f1f1;
  }
</style>




