<template>
  <div class="col-sm-12">
    <div class="card">
      <div class="card-block">
        <h1 class="mb-4"><strong>Trade or View your Portfolio</strong></h1>
        <p>You may Save &amp; Load your Data</p>
        <p>Click on 'End Day' to begin a new Day!</p>
        <hr>
        <h5><strong> Your Funds: {{ funds | currency }}</strong></h5>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    computed: {
      funds () {
        return this.$store.getters.funds;
      }
    }
  }
</script>

<style scoped>
.card{
  padding: 10px 20px;
}
</style>
