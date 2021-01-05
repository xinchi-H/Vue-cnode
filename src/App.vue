<template>
  <div id="app">
    <tab-header/>
    <post-list/>
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

</style>
