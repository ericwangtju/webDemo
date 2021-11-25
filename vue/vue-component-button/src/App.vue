<template>
  <div id="app">
    <e-button>
      default
    </e-button>
  </div>
</template>

<script>
import EButton from '@/components/Button'

export default {
  name: 'App',
  components: {
    EButton
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
