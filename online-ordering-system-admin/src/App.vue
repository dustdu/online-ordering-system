<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  sockets: {
    connect() {
      console.log(this.$socket.id)
    },
    sendAdmin(msg) {
      console.log(msg)
    },
    rooms(rooms) {
      console.log(rooms)
    }
  }
  // mounted() {
  //   this.$socket.emit('creatLink', '8787')
  // }
}
</script>

<style lang="scss">
@import './style/index.scss';
</style>
