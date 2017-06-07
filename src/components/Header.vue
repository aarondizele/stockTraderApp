<template>
  <div class="col-sm-12 mb-5">
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
      <button class="navbar-toggler navbar-toggler-right"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation">

      <span class="navbar-toggler-icon"></span>
    </button>

    <router-link tag="a" to="/" class="navbar-brand"><strong>Stock Market App</strong></router-link>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">

      <ul class="navbar-nav mr-auto">

        <router-link to="/portfolio"
                     activeClass="active"
                     tag="li"
                     class="navbar-item"><a class="nav-link">Portfolio</a></router-link>

        <router-link to="/stocks"
                     activeClass="active"
                     tag="li"
                     class="navbar-item"><a class="nav-link">Stocks</a></router-link>

        <!-- <li class="nav-item active">
          <a class="nav-link" href="#"> <span class="sr-only">(current)</span></a>
        </li> -->
      </ul>

      <ul class="navbar-nav navbar-right">
        <li class="nav-link" @click="endDay" style="cursor: pointer">End Day</li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"
          data-toggle="dropdown"
          href="#"
          role="button"
          aria-haspopup="true"
          aria-expanded="false">Save &amp; Load</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#" @click="saveData">Save Data</a>
            <a class="dropdown-item" href="#" @click="loadData">Load Data</a>
          </div>
        </li>
        <strong class="nav-link">Funds: {{ funds | currency }}</strong>
      </ul>
    </div>
  </nav>
</div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    computed: {
      funds () {
        return this.$store.getters.funds;
      }
    },
    methods: {
      ...mapActions({
        randomizeStock: 'randomizeStock',
        fetchData: 'loadData'}),
      endDay () {
        this.randomizeStock();
        console.log('End day lauches');
      },
      saveData () {
        const trade = {
          funds: this.$store.getters.funds,
          stockPortfolio: this.$store.getters.stockPortfolio,
          stocks: this.$store.getters.stocks,
        }
        this.$http.put('trade.json', trade)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error);
        })
      },
      loadData () {
        this.fetchData();
      }
    }
  }
</script>

<style>
</style>
