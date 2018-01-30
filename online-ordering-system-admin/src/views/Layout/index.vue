<template>
  <div class="app-wrapper">
    <headers></headers>
    <sidebar></sidebar>
    <div class="main-container">
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import Headers from './Header.vue'
import Sidebar from './Sidebar.vue'
import AppMain from './AppMain.vue'
export default {
  components: {
    Headers,
    Sidebar,
    AppMain
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.app-wrapper {
  padding: 50px 0 0 181px;
}
.main-container {
    min-height: calc(100vh - 50px);
    transition: margin-left 0.28s;
    background: #f0f2f5;
  }
</style>
