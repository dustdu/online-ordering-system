<template>
  <div>
    <div class="submit">
      <x-button 
        @click.native="loginOut"
        :text="submitText"
        :mini="true"
      ></x-button>
    </div>
  </div>
</template>

<script>
import { XButton } from 'vux'
export default {
  components: {
    XButton
  },
  data() {
    return {
      submitText: '退出登录'
    }
  },
  methods: {
    loginOut() {
      this.$store.dispatch('loginOut').then(
        this.$router.push({
          name: 'Login'
        })
      )
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
