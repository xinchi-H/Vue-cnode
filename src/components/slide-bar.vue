<template>
  <div class="authorinfo">
    <div class="authorsummay">
      <div class="topbar">作者</div>
      <router-link :to="{
          name:'user_info',
          params:{
            name:userInfo.loginname,
          }
        }">
        <img :src="userInfo.avatar_url">
      </router-link>
    </div>
    <div class="recent_replies">
      <div class="topbar">作者最近主题</div>
      <ul>
        <li v-for="(list, index) in topicLimit" :key="index">
          <router-link :to="{
              name:'post_content',
              params:{
                id:list.id,
                name:list.author.loginname,
              }
            }"
          >
            {{ list.title }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="recent_topics">
      <div class="topbar">作者最近回复</div>
      <ul>
        <li v-for="(list, index) in replylimit" :key="index">
          <router-link :to="{
              name:'post_content',
              params:{
                id:list.id,
                name:list.author.loginname,
              }
            }"
          >
            {{ list.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SlideBar',
    data() {
      return {
        userInfo: {
          create_at: '2018-08-20T02:22:01.418Z',
          score: 300,
          // 给loginname一个初始值，避免页面加载时vue-router报错
          loginname: 'name',
        },
      };
    },
    computed: {
      topicLimit() {
        if (this.userInfo.recent_topics) {
          return this.userInfo.recent_topics.slice(0, 5);
        }
      },
      replylimit() {
        if (this.userInfo.recent_replies) {
          return this.userInfo.recent_replies.slice(0, 5);
        }
      }
    },
    beforeMount() {
      this.getUserData();
    },
    methods: {
      getUserData() {
        this.isLoading = true;
        this.$http.get(`http://mock.hunger-valley.com/cnode/api/v1/user/${this.$route.params.name}`).then((res) => {
          if (res.data.success === true) {
            this.userInfo = {
              ...this.userInfo,
              ...res.data.data,
            };
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
  .authorsummay,
  .recent_replies,
  .recent_topics {
    background-color: #fff;
  }

  .authorinfo {
    width: 328px;
    float: right;
    margin-top: 0;
  }

  li {
    padding: 3px 0;
  }

  .recent_replies ul,
  .recent_topics ul {
    margin-top: 0px;
    margin-bottom: 0px;
    list-style: none;
    padding-left: 14px;
  }

  ul a {
    font-size: 12px;
    text-decoration: none;
    color: #778087;
  }

  .topbar {
    padding: 10px;
    background-color: #f6f6f6;
    height: 16px;
    font-size: 12px;
    margin-top: 10px;
  }

  img {
    height: 48px;
    width: 48px;
    border-radius: 3px;
    margin: 10px;
  }

  .loginname {
    width: 100px;
    float: right;
    margin-top: 22px;
    margin-right: 159px;
    font-size: 14px;
  }

  .loginname a {
    text-decoration: none;
    color: #778087;
  }

  .authorsummay .topbar {
    margin-top: 0px;
  }
</style>