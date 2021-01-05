<template>
  <div id="app">
    <tab-header />
    <div class="main">
      <post-list />
    </div>
  </div>
</template>

<script>
  import TabHeader from './components/tab-header.vue'
  import PostList from './components/post-list.vue'

  export default {
    name: 'App',
    components: {
      TabHeader,
      PostList,
    }
  }
</script>

<style>
  .main {
    width: 80%;
    margin: 0 auto;
  }
</style>