<template lang="pug">
.talk
  img.talk__shop(src="material/man.svg")
  .talk__wrap
    slot
  img.talk__customer(src="material/man.svg")
</template>

<script>
export default {
  data: {

  },
  props: {
    man: {},
  }
}
</script>

<style lang="scss" scoped>
@import "../stylesheet/_variable.scss";

.talk{
  width: 80vw;
  margin: 3rem auto;
  display: grid;
  grid-column-gap: 3rem;
  grid-template-columns: 1fr 4fr 1fr;

  &__wrap{
    transition: all .5s ease;
    opacity: 0;
    background: $white;
    padding: 1.5rem;
    border-radius: 2rem;
  }
  &__shop{
    opacity: 0;
    align-self: end;
    justify-self: end;
  }
  &__customer{
    align-self: end;
    justify-self: start;
  }
}
</style>
