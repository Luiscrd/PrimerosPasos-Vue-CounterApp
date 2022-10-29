<template>
  <Header />
  <Couter title="Counter" :start="10"/>
  <Footer />
</template>

<script>
import Header from './components/shared/Header.vue'
import Couter from './components/Counter.vue'
import Footer from './components/shared/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Couter,
    Footer
  }
}
</script>

<style>
html, body{
  margin: 0;
  padding: 0;
}

body{
  font-family: Arial, Helvetica, sans-serif;
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#app{
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
