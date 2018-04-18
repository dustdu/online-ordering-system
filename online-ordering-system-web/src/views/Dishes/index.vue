<template>
  <div class="dishesList">
    <div
      v-for="item in dishesData"
      :key="item.dishesId"
      class="dishes-item"
    >
      <div @click="addOrder">
        <img class="img" :src="item.imgThumb">
      </div>
      <div class="item-msg">
        <div class="msg-left">
          <p>售价：{{item.price}}</p>
          <p class="discount-font">优惠价：{{item.discountPrice}}</p>
        </div>
        <div class="msg-right" @click="addDishes(item.dishesId)">
          <i class="fa fa-cart-arrow-down icon"></i>
        </div>
      </div>
    </div>
    <popup 
      v-model="isPopup"
      :height="height"
      class="popup"
    >
      <div class="popupHead">
        <div class="imgBox">
          <img :src="selectDishes.imgThumb" alt="">
        </div>
        <div class="popupMsg">
          <p>{{selectDishes.name}}</p>
          <p class="payPrice">需支付：<span class="price-color">￥{{selectDishes.discountPrice}}</span></p>
        </div>
      </div>
      <div class="addNumber">
        <group>
          <x-number :title="title" v-model="nub" :min="0" @on-change="nubChange"></x-number>
        </group>
      </div>
      <div class="button">
        <div class="item">
          <button type="button" @click="addToCar">添加到购物车</button>
        </div>
        <div class="item">
          <button type="button" @click="payCar">立即购买</button>
        </div>
      </div>
    </popup>
    <div class="payCar" @click="shopCar">
      <i class="fa fa-cart-arrow-down icon"></i>
      <div class="dishesNub">{{this.dishesCount}}</div>
    </div>
  </div>
</template>

<script>
import { request } from '../../utils/request'
import { XNumber, Popup, Group } from 'vux'
import { mapGetters } from 'vuex'
export default {
  components: {
    XNumber,
    Popup,
    Group
  },
  data() {
    return {
      dishesData: [],
      isPopup: false,
      height: '40%',
      selectDishes: {},
      title: '购买数量：',
      nub: 0,
      addCarDishes: [],
      isAdd: true
    }
  },
  computed: {
    ...mapGetters([
      'carDishes'
    ]),
    dishesCount() {
      if (this.addCarDishes.length !== 0) {
        return this.addCarDishes.reduce((total, current) =>
          total + current.count
        , 0)
      } else {
        return 0
      }
    }
  },
  created() {
    this.addCarDishes = this.carDishes
    this.getDishes()
  },
  methods: {
    getDishes() {
      request(
        'getDishes',
        {
          dishesState: 'shelve'
        }
      ).then(r => {
        this.dishesData = r.data
      })
    },
    addDishes(dishesId) {
      this.nub = 0
      this.isPopup = true
      for (const item of this.dishesData) {
        if (item.dishesId === dishesId) {
          this.selectDishes = item
          break
        }
      }
      if (this.addCarDishes.length !== 0) {
        for (const item of this.addCarDishes) {
          if (item.dishesId === dishesId) {
            this.nub = item.count
          }
        }
      }
    },
    nubChange(v) {
      this.nub = v
    },
    updataCar() {
      this.isAdd = true
      for (const key in this.addCarDishes) {
        if (this.addCarDishes[key].dishesId === this.selectDishes.dishesId) {
          if (this.nub === 0) {
            this.addCarDishes.splice(key, 1)
          } else {
            this.addCarDishes[key].count = this.nub
          }
          this.isAdd = false
        }
      }

      if (this.isAdd) {
        if (this.nub !== 0) {
          this.selectDishes.count = this.nub
          this.addCarDishes.push(this.selectDishes)
        }
      }
      this.isPopup = false
      this.$store.commit('updataCarDushes', this.addCarDishes)
    },
    addToCar() {
      this.updataCar()
    },
    payCar() {
      if (this.nub === 0) {
        return this.$vux.toast.text('您还没选择餐品！')
      }
      this.updataCar()
      this.$router.push({ name: 'ShopCar' })
    },
    shopCar() {
      if (this.dishesCount === 0) {
        return this.$vux.toast.text('您还没选购餐品！', 'bottom')
      }
      this.$router.push({ name: 'ShopCar' })
    },
    addOrder() {
      const arr = [{
        dishesId: 1000,
        count: 2
      }, {
        dishesId: '1002',
        count: '4'
      }]

      request(
        'addOrder',
        {
          uId: '1',
          payPrice: '111',
          truePrice: '222',
          payType: '1',
          remark: '4545',
          dishess: arr
        }
      ).then(r => {
        console.log(r)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.dishesList {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  background-color: #fff;
  .dishes-item {
    width: calc(50% - 12px);
    margin: 4px 0 4px 8px;
    border-radius: 2px;
    overflow: hidden;
    box-shadow: 0 0 6px rgba(0, 0, 0, .4);
    img {
      width: 100%;
      vertical-align: middle;
    }
    .item-msg {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      line-height: 20px;
      padding: 6px;
      .msg-left {
        padding-left: 2px;
        width: 80px;
        .discount-font {
          color: #f40000;
        }
      }
      .msg-right{
        display: flex;
        align-items: center;
        padding: 0 8px 0 8px;
        .icon {
          font-size: 20px;
        }
      }
    }
  }
}
.popup {
  background-color: #fff;
  .popupHead {
    position: absolute;
    top: -20px;
    height: 115px;
    left: 0;
    right: 0;
    .imgBox {
      position: fixed;
      width: 100px;
      left: 20px;
      z-index: 600;
      img {
        width: 100%;
        vertical-align: middle;
      }
    }
  }
  .popupMsg {
    margin-left: 140px;
    padding-top: 30px;
    font-size: 16px;
    line-height: 32px;
    .payPrice {
      font-size: 16px;
      .price-color {
        color: #f00000;
      }
    }
  }
  .addNumber {
    padding-top: 80px;
  }
  .button {
    position: fixed;
    bottom: 0;
    height: 50px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: flex-start;
    .item {
      width: 50%;
      button {
        height: 100%;
        width: 100%;
        font-size: 16px;
        color: #fff;
      }
    }
    &>div:nth-of-type(1)>button {
      background-color: #f85;
    }
    &>div:nth-of-type(2)>button {
      background-color: #f44;
    }
  }
}
.payCar {
  position: fixed;
  bottom: 80px;
  right: 30px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #e7e7e7;
  box-shadow: 0 0 6px rgba(0, 0, 0, .4);
  .icon {
    width: 96%;
    height: 100%;
    font-size: 26px;
    line-height: 50px;
    text-align: center;
  }
  .dishesNub {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: #d90000;
    position: absolute;
    right: -1px;
    top: -1px;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    color: #fff;
  }
}
</style>
