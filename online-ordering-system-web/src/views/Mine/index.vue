<template>
  <div>
    <blur
      :blur-amount="10"
      :url="url"
      class="img-blur"
    >
      <div class="avatar"><img :src="url"></div>
    </blur>
    <div>{{userInfo}}</div>
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
import { XButton, Blur } from 'vux'
import { mapGetters } from 'vuex'
import url from '../../assets/img/avatar.jpeg'
export default {
  components: {
    XButton,
    Blur
  },
  data() {
    return {
      submitText: '退出登录',
      url
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
