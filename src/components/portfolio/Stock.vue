<template>
  <div class="card m-3">
    <div class="card-header">
      <strong>{{ stock.name }}  </strong> ( <strong>Price</strong> : {{ stock.price | currency }} ) | <strong>Quantity</strong>: {{stock.quantity}}
    </div>
    <div class="card-block d-flex">
      <input type="text" class="form-control" placeholder="Quantity" v-model.trim="quantity">
      <button type="button" class="btn btn-outline-info ml-5" @click="sellStock" :disabled="insufficientQuantity || quantity <= 0 || Number.isInteger(quantity)">{{insufficientQuantity ? 'NOT ENOUTH': 'SELL'}}</button>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default{
    props: ['stock'],
    data () {
      return {
        quantity: 0
      }
    },
    computed: {
      insufficientQuantity () {
        return this.quantity > this.stock.quantity;
      }
    },
    methods: {
      ...mapActions({
        placeSellOrder: 'sellStock'
      }),
      sellStock () {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        };
        this.placeSellOrder(order);
        this.quantity = 0;
      }
    }
  }
</script>

<style>
</style>
