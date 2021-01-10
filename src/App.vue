<template>
  <div id="app">
    <tab-header />
    <div class="main">
      <router-view name="slidebar"></router-view>
      <router-view name="main"></router-view>
    </div>
  </div>
</template>

<script>
  import TabHeader from './components/tab-header.vue'

  export default {
    name: 'App',
    components: {
      TabHeader,
    }
  }
</script>

<style>
  .main {
    width: 80%;
    margin: 0 auto;
  }
</style>