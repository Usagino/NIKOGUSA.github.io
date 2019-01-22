<template lang="html">
  <div class="hoge" :style="{'--color': this.font_color}">
    <h1>hoge</h1>
  </div>
</template>

<script>
export default {
  props:{
    font_color: {}
  }
}
</script>

<style lang="scss">
.hoge{
  margin:30px;
  --color:red;
  h1{
    color: var(--color);
  }
}
</style>
