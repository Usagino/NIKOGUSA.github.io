<template lang="html">
  <div class="hidemenu">
    <ul>
      <li><a href="index.html">TOP</a></li>
      <li><a href="about.html">ABOUT</a></li>
      <li><a href="question.html">QUESTION</a></li>
      <li>TWITTER</li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import "../stylesheet/_variable.scss";

.hidemenu{
  position: fixed;
  right: 0;
  top:0;
  height: 100vh;
  width: 400px;
  z-index: -1;

  ul{
    @include display-center;
    height: 100%;
    flex-direction: column;
    li{
      cursor: pointer;
      padding: 1rem;
      font-size: 3rem;
      font-weight: bold;
      a{
        cursor: pointer;
      }
    }
  }
}
</style>
