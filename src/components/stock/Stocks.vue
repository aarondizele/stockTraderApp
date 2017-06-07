<template>
  <div class="row">
    <app-stock v-for="stock in stocks" :key="stock" :stock="stock"></app-stock>
  </div>
</template>

<script>

  export default {
    computed: {
      stocks () {
        return this.$store.getters.stocks;
      }
    }
  }
</script>

<style>
</style>
