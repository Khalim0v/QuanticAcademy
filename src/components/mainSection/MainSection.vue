<template >
  <div class="mainSection">
    <div class="container">
      <CardGroupOne />
    </div>
  </div>
</template>

<script>
import CardGroupOne from './CardGroupOne.vue';
export default {
  components: {
    CardGroupOne,
  }
}
</script>

<style scoped>
.mainSection {
  background: #081C53;
}
</style>