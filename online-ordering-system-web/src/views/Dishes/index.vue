<template>
  <div>
    <ul>
      <li
        v-for="item in dishesData"
        :key="item.dishesId"
      >
        <p v-text="item.name"></p>
      </li>
    </ul>
  </div>
</template>

<script>
import { request } from '../../utils/request'
export default {
  components: {

  },
  data() {
    return {
      dishesData: []
    }
  },
  created() {
    this.getDishes()
  },
  methods: {
    getDishes() {
      request(
        'getDishes',
        {
          activeFlg: -1
        }
      ).then(r => {
        console.log(r)
        this.dishesData = r.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>

 
</style>
