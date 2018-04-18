<template>
  <div class="shaop-car">
    <ul class="car-dishes">
      <li
        v-for="(item,index) in carDishes"
        :key="item.dishesId"
        class="dishes-item"
        :class="index === carDishes.length-1?'':'vux-1px-b'"
      >
        <div class="img-box">
          <img :src="item.imgThumb" alt="">
        </div>
        <div class="dishes-msg">
          <p class="dishes-title">{{item.name}}</p>
          <p>售价：<span>￥{{item.price}}</span></p>
          <p>优惠价：<span class="price-color">￥{{item.discountPrice}}</span></p>
        </div>
        <div class="dishes-count">
          <span class="span-align"></span>
          <span class="count">X{{item.count}}</span>
        </div>
      </li>
    </ul>
    <div class="order-msg">
      <div class="order-price">
        <span>订单总价：</span>
        <span class="price">￥{{orderPrice}}</span>
      </div>
    </div>
    <group class="pay">
      <popup-picker 
        :title="payTitle" 
        :data="checkList" 
        v-model="payType"
        show-name
        @on-change="onChange" 
        :placeholder="placeholder"
      >
      </popup-picker>
    </group>
    <div class="bottom-box"></div>
    <div class="pay-order">
      <div class="trueth-price">
        <span>实际支付：</span>
        <span class="price">￥{{discountPrice}}</span>
        <span class="pay-center"></span>
      </div>
      <div class="confirm-pay">
        <button @click="payOrder">确认付款</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { PopupPicker, Group } from 'vux'
export default {
  components: {
    PopupPicker,
    Group
  },
  computed: {
    ...mapGetters([
      'carDishes'
    ]),
    orderPrice() {
      if (this.carDishes.length !== 0) {
        return this.carDishes.reduce((total, current) =>
          total + current.count * current.price
        , 0)
      } else {
        return 0
      }
    },
    discountPrice() {
      if (this.carDishes.length !== 0) {
        return this.carDishes.reduce((total, current) =>
          total + current.count * current.discountPrice
        , 0)
      } else {
        return 0
      }
    }
  },
  data() {
    return {
      payType: ['0'],
      payTitle: '选择支付方式：',
      checkList: [[{ name: '线下', value: '0' }, { name: '支付宝', value: '1' }, { name: '微信', value: '2' }]],
      placeholder: '请选择支付方式'
    }
  },
  created() {
    this.$store.commit('updataShowBottom', false)
    this.$store.commit('updataShowBack', true)
    this.$store.commit('updataTitle', '订单支付')
  },
  methods: {
    onChange(v) {
      console.log(v)
    },
    payOrder() {
      const _this = this
      this.$vux.confirm.show({
        title: '订单支付',
        content: '确认支付该订单？',
        cancelText: '我再想一下',
        onConfirm() {
          _this.$vux.toast.show({
            text: '支付成功！'
          })
          _this.$store.commit('updataCarDushes', [])
          _this.$router.push({ name: 'Home' })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.shaop-car {
  width: 100%;
}
.car-dishes {
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0,0,0,.1);
  .dishes-item {
    display: flex;
    justify-content: flex-start;
    padding: 8px 10px;
    .img-box {
      width: 90px;
      border-radius: 2px;
      overflow: hidden;
      margin-right: 12px;
      img {
        width: 100%;
        vertical-align: middle;
      }
    }
    .dishes-msg {
      font-size: 14px;
      flex-grow: 1;
      line-height: 26px;
      padding-top: 5px;
      .price-color {
        color: #f70000;
      }
      .dishes-title {
        font-size: 16px;
      }
    }
    .dishes-count {
      width: 30px;
      text-align: center;
      .span-align {
        display: inline-block;
        height: 100%;
        width: 0;
        vertical-align: middle;
      }
      .count {
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
}
.order-msg {
  background-color: #fff;
  margin-top: 10px;
  box-shadow: 0 0 5px rgba(0,0,0,.1);
  font-size: 16px;
  line-height: 20px;
  color: #000;
  padding: 0 15px;
  .order-price {
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    .price {
      color: #f70000;
    }
  }
}
.bottom-box {
  height: 100px;
}
.pay-order {
  font-size: 16px;
  position: fixed;
  bottom: 0;
  height: 50px;
  left: 0;
  right: 0;
  display: flex;
  padding-left: 10px;
  background-color: #fff;
  .trueth-price {
    flex-grow: 1;
    span {
      display: inline-block;
      vertical-align: middle;
    }
    .price {
      color: #f70000;
    }
    .pay-center {
      height: 100%;
    }
  }
  .confirm-pay {
    width: 30%;
    button {
      background-color: rgb(240, 144, 49);
      height: 100%;
      width: 100%;
      color: #fff;
      text-align: center;
    }
  }
}
</style>
