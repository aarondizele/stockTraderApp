<template>
  <div id="app" class="container">
    <div class="row">
      <!-- Navbar -->
      <app-header></app-header>
      <transition name="slide"
                  appear mode="out-in">
          <router-view></router-view>
      </transition>

    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  created () {
    this.$store.dispatch('initStocks');
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #444;
}
input, button, textarea{
  font-family: 'Roboto', Helvetica, sans-serif;
}
button{
  cursor: pointer;
}
.container{
  padding: 20px 0;
}

.slide-enter-active {
  animation: slide-in .2s ease-out forwards;
}
.slide-leave-active {
  animation: slide-out .2s ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>
