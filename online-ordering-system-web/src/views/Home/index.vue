<template>
  <div>
    <swiper 
      loop auto 
      :list="demo07_list" 
      :index="demo07_index" 
      @on-index-change="demo07_onIndexChange"
    >
    </swiper>
    <divider v-text="newDishes"></divider>
    <grid
      :col="1"
      slot="content"
    >
      <grid-item
        label="Grid" 
        v-for="i in 3"
        :key="i"
      >
        
      </grid-item>
    </grid>
    <div @click="grid()">{{userInfo}}</div>
  </div>
</template>

<script>
  import { Swiper, Divider, Grid, GridItem, Loading } from 'vux'
  import { mapGetters } from 'vuex'
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
      Divider,
      Grid,
      GridItem,
      Loading
    },
    data() {
      return {
        newDishes: '',
        demo07_index: 0,
        demo07_list: baseList
      }
    },
    created() {
    // axios.get('http://localhost:3000/users')
    //   .then(response => {
    //     console.log(response.data)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
    // console.log(new Date().getTime())
    },
    computed: {
      ...mapGetters([
        'userInfo',
        'isLoading'
      ])
    },
    methods: {
      demo07_onIndexChange(index) {
        this.demo07_index = index
      },
      grid() {
        console.log(this.isLoading)
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
