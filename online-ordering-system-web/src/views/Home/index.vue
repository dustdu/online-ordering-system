<template>
  <div>
    <swiper 
      loop auto 
      :list="swiperList"
      @on-index-change="onIndexChange"
    >
    </swiper>
    <div class="card">
      <divider>推荐餐品</divider>
      <flexbox :gutter="0" wrap="wrap">
        <flexbox-item 
          :span="1/2"
          v-for="(recommendDishes,index) in recommendDishesData"
          :key="index"
          class="recommend-item"
        >
          <div 
            class="flex-item"
            :class="index%2 === 0?'item-right':'item-left'"
          >
            <img :src="recommendDishes.imgThumb" :class="recommendDishesData.length%2 === 0?index+2 >=recommendDishesData.length?'item-bottom':'':index+2 >recommendDishesData.length?'item-bottom':''">
          </div>
          <div 
            v-text="recommendDishes.name"
            class="recommendName">
          </div>
        </flexbox-item>
      </flexbox>
    </div>
    <div class="card">
      <divider>优惠餐品</divider>
      <flexbox :gutter="0" wrap="wrap">
        <flexbox-item 
          :span="1/2"
          v-for="(discountDishesData,index) in discountDishesData"
          :key="index"
          class="recommend-item"
        >
          <div 
            class="flex-item"
            :class="index%2 === 0?'item-right':'item-left'"
          >
            <img :src="discountDishesData.imgThumb" :class="discountDishesData.length%2 === 0?index+2 >=discountDishesData.length?'item-bottom':'':index+2 >discountDishesData.length?'item-bottom':''">
          </div>
          <div 
            v-text="discountDishesData.name"
            class="recommendName">
          </div>
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>

<script>
  import { Swiper, Divider, Flexbox, FlexboxItem } from 'vux'
  import { request } from '../../utils/request'
  export default {
    components: {
      Swiper,
      Divider,
      Flexbox,
      FlexboxItem
    },
    data() {
      return {
        swiperList: [],
        newDishesData: [],
        recommendDishesData: [],
        discountDishesData: []
      }
    },
    created() {
      this.getDishesData()
    },
    methods: {
      onIndexChange(index) {
        // console.log(index)
      },
      getDishesData() {
        this.getTypeDishes('new')
        this.getTypeDishes('recommend')
        this.getTypeDishes('discount')
      },
      getTypeDishes(type) {
        const dishesData = {
          new: 'newDishesData',
          recommend: 'recommendDishesData',
          discount: 'discountDishesData'
        }
        request(
          'getTypeDishes',
          {
            dishesType: type
          }
          ).then(r => {
            this[dishesData[type]] = r.data
            if (type === 'new') {
              this.swiperList = this.newDishesData.map(item => {
                const swiper = {
                  img: item.imgThumb,
                  title: item.name
                }
                return swiper
              })
            }
          }
        )
      }
    }
  }
</script>

<style lang="scss" scoped>
.recommend-item {
  position: relative;
  .item-bottom {
    margin-bottom: -2px;
  }
  .flex-item {
    display: flex;
    margin-bottom: 2px;
    justify-content: center;
    img {
      width: calc(100% - 2px);
      height: 100%;
      vertical-align: middle;
    }
  }
  // .item-left {
  //   justify-content: flex-end;
  // }
  // .item-right {
  //   justify-content: flex-start;
  // }
  .recommendName {
    position: absolute;
    bottom: 0;
    left: 1px;
    right: 1px;
    height: 24px;
    background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.8));
    line-height: 24px;
    color: #fff;
    padding-left: 10px;
    font-size: 14px;
  }
}
</style>
