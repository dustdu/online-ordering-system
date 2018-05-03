<template>
  <div class="order">
    <form-preview 
      v-for="item in orderList"
      :key="item.id"
      :header-label="title" 
      :header-value="item.truePrice" 
      :body-items="item.dishesList"
      class="order-item"
    >
    </form-preview>
  </div>
</template>

<script>
import { request } from '../../utils/request'
import { mapGetters } from 'vuex'
import { FormPreview } from 'vux'
export default {
  components: {
    FormPreview
  },
  data() {
    return {
      orderList: [],
      title: '订单实付金额',
      list: []
    }
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  created() {
    this.getUserOrderList()
  },
  methods: {
    getUserOrderList() {
      console.log(111)

      request(
        'getUserOrderList',
        {
          uId: this.userInfo[0].uId
        }
      )
        .then(r => {
          console.log(r)

          this.orderList = r.data
          for (const order of this.orderList) {
            order.truePrice = `￥${order.truePrice}`
            for (const dishes of order.dishesList) {
              dishes.label = `${dishes.name} (购买价：￥${dishes.discountPrice}) `
              dishes.value = `X${dishes.count}`
            }
          }
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.order {
  width: 100%;
  .order-item {
    margin-top: 10px;
    box-shadow: 0 0 5px rgba(0,0,0,.1);
  }
}
 
</style>
