<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app'
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




