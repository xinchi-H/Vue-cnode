import Vue from 'vue'
import Router from 'vue-router'
import PostList from '../components/post-list.vue'
import Article from '../components/article.vue'
import UserInfo from '../components/user-info.vue'
import SlideBar from '../components/slide-bar.vue'

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
      path: '/topic/:id&author=:name',
      components: {
        main: Article,
        slidebar: SlideBar,
      }
    },
    {
      name: 'user_info',
      path: '/userinfo/:name',
      components: {
        main: UserInfo,
      }
    }
  ]
})