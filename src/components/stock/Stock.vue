<template>
  <div class="col-md-6 col-lg-4">
    <div class="card m-3">
      <div class="card-header">
        {{ stock.name }} ( Price: {{ stock.price | currency }} )
      </div>
      <div class="card-block d-flex">
        <input type="text"
               class="form-control"
               placeholder="Quantity"
               v-model="quantity">
        <button type="button"
                class="btn btn-outline-success ml-5"
                @click="buyStock" :disabled="insufficientFunds || quantity <= 0 || Number.isInteger(quantity)">{{insufficientFunds ? 'Insufficient funds' : 'BUY'}}</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['stock'],
    data () {
      return {
        quantity: 0
      }
    },
    computed: {
      funds () {
        return this.$store.getters.funds;
      },
      insufficientFunds () {
        return this.quantity * this.stock.price > this.funds;
      }
    },
    methods: {
      buyStock () {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        }
        this.$store.dispatch('buyStock', order);
        this.quantity = 0;
      }
    }
  }
</script>

<style>
</style>
