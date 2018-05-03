<template>
  <div>
    <blur
      :blur-amount="10"
      :url="url"
      class="img-blur"
    >
      <div class="avatar"><img :src="url"></div>
    </blur>
    <group class="userInfo">
      <cell title="用户编号" :value="userInfo[0].uId"></cell>
      <x-input title="用户电话" v-model="userInfo[0].mobile" :disabled="disabled"></x-input>
      <cell title="注册时间" :value="userInfo[0].created_at"></cell>
    </group>
    <div class="submit">
      <x-button 
        @click.native="loginOut"
        :text="submitText"
        :mini="true"
      ></x-button>
    </div>
    <div class="submit">
      <x-button 
        @click.native="editorUserInfo"
        text="编辑信息"
        :mini="true"
        v-if="disabled"
      ></x-button>
      <x-button 
        v-else
        @click.native="confirmUserInfo"
        text="确认修改"
        :mini="true"
      ></x-button>
    </div>
  </div>
</template>

<script>
import { request } from '../../utils/request'
import { XButton, Blur, Group, Cell, XInput } from 'vux'
import { mapGetters } from 'vuex'
import url from '../../assets/img/avatar.jpeg'
export default {
  components: {
    XButton,
    Blur,
    Group,
    Cell,
    XInput
  },
  data() {
    return {
      submitText: '退出登录',
      url,
      disabled: true
    }
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  methods: {
    loginOut() {
      this.$store.dispatch('loginOut').then(
        this.$router.push({
          name: 'Signin'
        })
      )
    },
    editorUserInfo() {
      this.disabled = false
    },
    confirmUserInfo() {
      this.disabled = true
      request(
        'editorUserInfo',
        {
          mobile: userInfo[0].mobile
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.img-blur {
  z-index: 2;
}
.avatar {
  text-align: center;
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
  z-index: 10;
  img {
    width: 100px;
    border-radius: 50%;
  }
}
</style>
