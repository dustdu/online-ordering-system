<template>
  <div class="box-wrap">
    <group>
      <group-title 
        class="title" 
        slot="title" 
        v-text="title"
      >
      </group-title>
      <x-input 
        title="手机号：" 
        v-model="mobile" 
        :required="true"
        placeholder="请输入手机号"
        :max="11"
      >
      </x-input>
      <x-input 
        title="用户名：" 
        v-model="userName" 
        :required="true"
        placeholder="请输入用户名"
        :max="8"
      >
      </x-input>
      <x-input 
        title="输入密码：" 
        v-model="password" 
        type="password" 
        :required="true"
        placeholder="请输入注册密码"
        :max="12"
      >
      </x-input>
      <x-input 
        title="再次输入：" 
        v-model="againPassword" 
        type="password" 
        :required="true"
        placeholder="请再次输入注册密码"
        :max="12"
      >
      </x-input>
    </group>
    <div class="submit">
      <x-button 
        @click.native="register"
        text="注册"
      ></x-button>
    </div>
    <div class="tip">已有账号？<span class="login" @click="login">去登陆</span></div>
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
      title: '欢迎注册',
      titleColor: 'black',
      mobile: '',
      userName: '',
      password: '',
      againPassword: '',
      loading: false
    }
  },
  methods: {
    register() {
      if (this.mobile === '') {
        this.$vux.toast.text('请输入手机号')
      } else if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.mobile)) {
        this.$vux.toast.text('请输入正确手机号')
      } else if (this.userName === '') {
        this.$vux.toast.text('请输入用户名')
      } else if (this.password === '') {
        this.$vux.toast.text('请输入密码')
      } else if (this.againPassword === '') {
        this.$vux.toast.text('请再次输入密码')
      } else if (this.password !== this.againPassword) {
        this.$vux.toast.text('两次密码不一致！')
      } else {
        this.$store.dispatch('register', {
          mobile: this.mobile.trim() * 1,
          userName: this.userName.trim(),
          password: this.password.trim()
        }).then(r => {
          this.$router.push({
            name: 'Home'
          })
        })
      }
    },
    login() {
      this.$router.push({
        name: 'Signin'
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
.tip {
  line-height: 26px;
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
  .login {
    color: $minColor;
  }
}
</style>
