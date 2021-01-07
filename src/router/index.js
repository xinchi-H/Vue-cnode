import Vue from 'vue'
import Router from 'vue-router'
import PostList from '../components/post-list.vue'
import Article from '../components/article.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      name: 'root',
      path: '/',
      components: {
        main: PostList,
      }
    },
    {
      name: 'post_content',
      path: '/topic/:id',
      components: {
        main: Article,
      }
    },
    {
      name: 'user_info',
      path: '/userinfo/:name',
      components: {
        main: Article,
      }
    }
  ]
})