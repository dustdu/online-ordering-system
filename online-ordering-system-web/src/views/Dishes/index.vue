<template>
  <div>
    <div >

    </div>
  </div>
</template>

<script>
import { request } from '../../utils/request'
export default {
  components: {

  },
  data() {
    return {

    }
  },
  created() {
    console.log(22)
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
      })
    }
  }
}
</script>

<style lang="scss" scoped>

 
</style>
