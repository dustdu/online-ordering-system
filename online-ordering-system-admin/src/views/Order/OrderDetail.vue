<template>
  <div class="app-container">
    <div class="step-message">
      <p class="order-id">订单编号：15845874587</p>
      <el-steps :active="1" align-center class="steps">
        <el-step title="客户下单" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="客户付款" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="上菜（送货）" description="这段就没那么长了"></el-step>
        <el-step title="完成" description="这段就没那么长了"></el-step>
      </el-steps>
    </div>
    
  </div>
</template>

<script>
  export default {
    components: {

    },
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
.step-message {
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 0 8px rgb(211, 211, 211);
  .order-id {
    text-indent: 1em;
    line-height: 60px;
    font-size: 20px;
    border-bottom: 1px solid rgb(149, 149, 149);
  }
  .steps {
    padding: 30px 0;
  }
}
 
</style>
