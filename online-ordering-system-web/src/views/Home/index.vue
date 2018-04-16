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
        >
          <div 
            class="flex-item"
            :class="index%2 === 0?'item-right':'item-left'"
          >
            <img :src="recommendDishes.imgThumb" :class="index+1 >3?'item-bottom':''">
          </div>
        </flexbox-item>
      </flexbox>
    </div>
    <div class="card">
      <divider>优惠餐品</divider>
      <ul>
        <li
          v-for="dishes in discountDishesData"
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
        console.log(index)
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
              console.log(this.swiperList)
            }
          }
        )
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
