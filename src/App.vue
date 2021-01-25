<template>
  <div class="container-fluid">
    <h1>
      Nasa
      <img
        style="max-height: 20px"
        alt="Vue logo"
        src="./assets/logo.png"
      >
      uePort
    </h1>
    <date-component />
  </div>
</template>
<script>
import DateComponent from './components/DateComponent'
import { AppState } from './AppState'
import { computed } from 'vue'
export default {
  name: 'App',
  setup () {
    return {
      appState: computed(() => AppState)
    }
  },
  components: {
    DateComponent
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
