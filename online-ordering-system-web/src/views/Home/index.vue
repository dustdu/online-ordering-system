<template>
  <div>
    <swiper 
      loop auto 
      :list="demo07_list" 
      :index="demo07_index" 
      @on-index-change="demo07_onIndexChange"
    >
    </swiper>
    <flexbox :gutter="0" wrap="wrap">
      <flexbox-item :span="3/7">
        <div class="entrance">入口
        </div>
      </flexbox-item>
      <flexbox-item :span="3/7">
        <div class="entrance">入口
        </div>
      </flexbox-item>
      <flexbox-item :span="3/7">
        <div class="entrance">入口
        </div>
      </flexbox-item>
      <flexbox-item :span="3/7">
        <div class="entrance">入口
        </div>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
  import {
    Swiper,
    Flexbox,
    FlexboxItem
  } from 'vux'
  import axios from 'axios'
  const baseList = [{
    url: 'http://m.baidu.com',
    img: 'https://static.vux.li/demo/1.jpg',
    title: '送你一朵fua'
  }, {
    url: 'http://m.baidu.com',
    img: 'https://static.vux.li/demo/2.jpg',
    title: '送你一辆车'
  }, {
    url: 'http://m.baidu.com',
    img: 'https://static.vux.li/demo/3.jpg',
    title: '送你一次旅行'
  }]
  export default {
    components: {
      Swiper,
      Flexbox,
      FlexboxItem
    },
    data() {
      return {
        demo07_index: 0,
        demo07_list: baseList
      }
    },
    created() {
      axios.get('http://localhost:3000/users')
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    },
    methods: {
      demo07_onIndexChange(index) {
        this.demo07_index = index
      }
    }
  }
</script>

<style lang="scss" scoped>
.entrance {
  height: 50px;
  background-color: #ff8000;
  border-radius: 4px;
}
</style>
