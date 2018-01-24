<template>
  <div class="box-wrap">
    <group>
      <x-input title="用户名：" v-model="name"></x-input>
      <x-input title="密码：" v-model="password"></x-input>
    </group>
    <x-button 
      @click.native="submit"
      :text="submitText"
      :mini="true"
    ></x-button>
  </div>
</template>

<script>
  import { Group, XInput, XButton } from 'vux'
  export default {
    components: {
      Group,
      XInput,
      XButton
    },
    data() {
      return {
        name: '小明',
        password: 5,
        submitText: '登录'
      }
    },
    methods: {
      submit() {
        this.$router.push({
          name: 'Home'
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
.login {
  background: #2d3a4b;
}
 
</style>
