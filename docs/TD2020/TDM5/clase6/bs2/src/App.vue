<template>
  <div id="app">
    <NavBar />
    <Carousel />
    <Cards />
  </div>
</template>

<script>

import NavBar from './components/NavBar'
import Carousel from './components/Carousel'
import Cards from './components/Cards'

export default {
  name: 'App',
  components: {
    NavBar,
    Carousel,
    Cards 
  }
}
</script>

<style>
/* img {
  object-fit: cover;
  height: 300px;
} */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
