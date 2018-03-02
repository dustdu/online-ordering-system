<template>
  <div class="app-container">
    <ve-line :data="orderData" :settings="orderSettings"></ve-line>
    <ve-pie :data="disheCount" :settings="disheSettings"></ve-pie>
  </div>
</template>

<script>
  export default {
    components: {

    },
    data() {
      return {
        orderData: {
          columns: ['日期', '小炒肉', '口水鸡', '占比'],
          rows: [
            { 日期: '1月1日', 小炒肉: 1, 口水鸡: 10, 占比: 12 },
            { 日期: '1月2日', 小炒肉: 5, 口水鸡: 5, 占比: 34 },
            { 日期: '1月3日', 小炒肉: 8, 口水鸡: 8, 占比: 7 },
            { 日期: '1月4日', 小炒肉: 12, 口水鸡: 20, 占比: 31 },
            { 日期: '1月5日', 小炒肉: 7, 口水鸡: 15, 占比: 12 },
            { 日期: '1月6日', 小炒肉: 20, 口水鸡: 6, 占比: 65 }
          ]
        },
        orderSettings: {
          stack: { 售价: ['成本', '利润'] },
          area: true
        },
        disheCount: {
          columns: ['菜品', '售出'],
          rows: [
            { 菜品: '小炒肉', 售出: 20 },
            { 菜品: '口水鸡', 售出: 14 },
            { 菜品: '白切鸡', 售出: 54 },
            { 菜品: '红烧肉', 售出: 10 },
            { 菜品: '干锅花菜', 售出: 5 },
            { 菜品: '外婆菜', 售出: 45 }
          ]
        },
        disheSettings: {
          selectedMode: 'single'
        }
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>

 
</style>
