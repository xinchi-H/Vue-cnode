<template>
  <div class="UserInfo">
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif">
    </div>
    <div class="userInfomation">
      <section>
         <img :src="userInfo.avatar_url">
         <span>{{ userInfo.loginname }}</span>
         <p>
           {{ userInfo.score || '暂无'}}积分
         </p>
         <p>
           注册时间{{ userInfo.create_at | formatDate }}
         </p>
      </section>
      <div class="replies">
        <p>回复的主题</p>
        <ul>
          <li v-for="(item, index) in userInfo.recent_replies" :key="index">
            <router-link :to="{
                name:'post_content',
                params:{
                  id:item.id,
                }
              }"
            >
              {{ item.title }}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="topics">
        <p>创建的主题</p>
        <ul>
          <li v-for="(item, index) in userInfo.recent_topics" :key="index">
            <router-link :to="{
                name:'post_content',
                params:{
                  id:item.id,
                }
              }"
            >
              {{ item.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'UserInfo',
    data() {
      return {
        isLoading: false,
        userInfo: {
          create_at: '2018-08-20T02:22:01.418Z',
          score: 300,
        },
      };
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
  .userInfomation {
    background: white;
    width: 75%;
    margin: 10px auto;
  }

  .userInfomation section {
    padding: 12px;
  }

  .userInfomation img {
    width: 30px;
  }

  .userInfomation li {
    list-style: none;
  }

  .userInfomation .replies,
  .userInfomation .topics {
    font-size: 0.72rem;
    border-top: 10px #DDDDDD solid;
  }

  .userInfomation>div>p {
    padding: 12px 0 12px 12px;
    background-color: rgba(212, 205, 205, 0.17);
    font-size: 0.75rem;
    margin: 0;
  }

  .userInfomation>div>ul>li {
    padding: 4px 0 4px 12px;
    white-space: nowrap;
    font-size: 0.72rem;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 30px;
    vertical-align: middle;
  }

  .userInfomation>div>ul>li>a {
    color: #094E99;
    text-decoration: none;
  }
</style>