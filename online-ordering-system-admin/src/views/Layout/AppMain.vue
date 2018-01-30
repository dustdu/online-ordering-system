<template>
  <div class="app-main">
    <transition name="fade-right" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'AppMain',
    data() {
      return {

      }
    }
  }
</script>

