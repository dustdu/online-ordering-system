<template>
  <div>
    <swiper 
      loop auto 
      :list="demo07_list" 
      :index="demo07_index" 
      @on-index-change="demo07_onIndexChange"
    >
    </swiper>
    <div class="card">
      <divider>推荐餐品</divider>
      <flexbox :gutter="0" wrap="wrap">
        <flexbox-item 
          :span="1/2"
          v-for="key in 3"
          :key="key"
        >
          <div 
            class="flex-item"
            :class="key%2 === 0?'item-right':'item-left'"
          >
            <img src="https://static.vux.li/demo/1.jpg" :class="key+1 >3?'item-bottom':''">
          </div>
        </flexbox-item>
      </flexbox>
    </div>
    <div class="card">
      <divider>热门餐品</divider>
      <ul>
        <li
          v-for="dishes in hotDishesData"
          :key="dishes.dishesId"
        >
          {{dishes.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { Swiper, Divider, Flexbox, FlexboxItem } from 'vux'
  import { request } from '../../utils/request'
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
      Flexbox,
      FlexboxItem
    },
    data() {
      return {
        newDishes: '推荐餐品',
        demo07_index: 0,
        demo07_list: baseList,
        hotDishesData: []
      }
    },
    created() {
      this.getHotDishes()
    },
    computed: {
      ...mapGetters([
        'userInfo'
      ])
    },
    methods: {
      demo07_onIndexChange(index) {
        this.demo07_index = index
      },
      getHotDishes() {
        request(
          'getDishes',
          {
            activeFlg: -1
          }
        ).then(r => {
          console.log(r)
          this.hotDishesData = r.data
        })
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
.item-bottom {
  margin-bottom: -2px;
}
.flex-item {
  display: flex;
  margin-bottom: 2px;
  img {
    width: calc(100% - 1px);
    height: 100%;
    vertical-align: middle;
  }
}
.item-left {
  justify-content: flex-start;
}
.item-right {
  justify-content: flex-end;
}
</style>
