<template>
  <div class="box-wrap">
    <group>
      <group-title class="title" slot="title" v-text="title"></group-title>
      <x-input title="用户名：" v-model="userName"></x-input>
      <x-input title="密码：" v-model="password"></x-input>
    </group>
    <div class="get-password">忘记密码？<span class="find-password">找回密码</span></div>
    <div class="submit">
      <x-button 
        @click.native="login"
        :text="submitText"
        :show-loading="loading"
      ></x-button>
      <x-button 
        @click.native="register"
        text="注册"
        class="back"
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
      submitText: '登录',
      loading: false
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login', {
        userName: this.userName.trim(),
        password: this.password.trim()
      }).then(r => {
        this.$socket.emit('login', r.data[0].uid)
        this.$router.push({
          name: 'Home'
        })
      })
    },
    register() {
      this.$router.push({
        name: 'Signup'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variable.scss';
.title {
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  color: #000;
  margin-bottom: 10px;
}
.get-password {
  line-height: 50px;
  font-size: 14px;
  margin: 0 15px -20px 0;
  text-align: right;
  .find-password {
    color: $minColor;
  }
}
</style>
