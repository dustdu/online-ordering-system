<template>
  <div class="box-wrap">
    <group>
      <group-title class="title" slot="title" v-text="title"></group-title>
      <x-input title="用户名：" v-model="userName"></x-input>
      <x-input title="密码：" v-model="password"></x-input>
    </group>
    <div class="submit">
      <x-button 
        @click.native="submit"
        :text="submitText"
        :mini="true"
      ></x-button>
    </div>
  </div>
</template>

<script>
import { Group, GroupTitle, XInput, XButton } from 'vux'
export default {
  components: {
    Group,
    GroupTitle,
    XInput,
    XButton
  },
  data() {
    return {
      title: '欢迎登录',
      titleColor: 'black',
      userName: '',
      password: '',
      submitText: '登录'
    }
  },
  methods: {
    submit() {
      this.$store.dispatch('login', {
        userName: this.userName.trim(),
        password: this.password.trim()
      }).then(r => {
        this.$router.push({
          name: 'Home'
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  color: #000;
}
</style>
