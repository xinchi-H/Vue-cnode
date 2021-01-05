<template>
  <div>
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif">
    </div>
    <div>
      <ul>
        <li v-for="(post) in posts" :key="post.id">
          <img :src="post.author.avatar_url" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  /**
   * 
   */
  export default {
    name: 'PostList',
    data() {
      return {
        isLoading: false,
        posts: {},
      }
    },
    beforeMount() {
      this.getData();
    },
    methods: {
      getData() {
        this.isLoading = true;
        this.$http.get(' http://mock.hunger-valley.com/cnode/api/v1/topics', {
          page: 1,
          limit: 20,
        }).then((res) => {
          console.log(res);
          this.posts = res.data.data
        }).catch((err) => {
          console.log(err);
        }).finally(() => {
          this.isLoading = false;
        })
      },
    }
  };
</script>

<style scoped>
img {
  width: 30px;
  height: 30px;
}
</style>