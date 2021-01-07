<template>
  <div class="article">
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif">
    </div>
    <div v-else>
      <div class="topic_header">
        <div class="topic_title">{{ post.title }}</div>
        <ul>
          <li>发布于：{{ post.create_at | formatDate }}</li>
          <li>作者：{{ post.author.loginname }}</li>
          <li>{{ psot.visit_count }}次浏览</li>
          <li>来自{{ post | tabFormatter }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  /**
   * 
   */
  export default {
    name: 'Ariticle',
    data() {
      return {
        isLoading: false,
        post: {},
      };
    },
    beforeMount() {
      this.getArticleData();
    },
    methods: {
      getArticleData() {
        this.isLoading = true;
        this.$http.get(`http://mock.hunger-valley.com/cnode/api/v1/topic/${this.$route.params.id}`).then((res) => {
          if (res.data.success === true) {
            this.post = res.data.data;
          }
        }).catch((err) => {
          console.log(err);
        }).finally(() => {
          this.isLoading = false;
        })
      }
    },
  };
</script>

<style scoped>

</style>