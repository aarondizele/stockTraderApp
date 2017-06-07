<template>
  <div class="d-flex justify-content-center w-100">
    <div class="alert alert-danger" v-if="stocks.length <= 0">
      You don't have any stocks in your portfolio
    </div>
    <app-stock-portfolio v-for="stock in stocks" :key="stock" :stock="stock"></app-stock-portfolio>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default{
    computed: {
      ...mapGetters({
        stocks: 'stockPortfolio'
      })
    }
  }
</script>

<style>
</style>
