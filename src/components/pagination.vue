<template>
  <div class="pagination">
    <button @click="changeBtn">首页</button>
    <button @click="changeBtn">上一页</button>
    <button
      v-for="(btn, index) in pageBtns"
      :key="index"
      @click="changeBtn(btn)"
      :class="[
        {
          currentPage: btn === currentPage
        },
        'pagebtn'
      ]"
    >
      {{ btn }}
    </button>
    <button @click="changeBtn">下一页</button>
  </div>
</template>

<script>
  export default {
    name: 'Pagination',
    data() {
      return {
        pageBtns: [ 1, 2, 3, 4, 5, '......' ],
        currentPage: 1,
      };
    },
    methods: {
      changeBtn(page) {
        this.currentPage = page;
        if(page === this.pageBtns[4]) {
          this.pageBtns.shift();
          this.pageBtns.splice(4,0,this.pageBtns[3] + 1);
        } else if(
           page === this.pageBtns[0] && this.pageBtns[0] !== 1
        ) {
          this.pageBtns.splice(4,1);
          this.pageBtns.unshift(this.pageBtns[0] - 1);
        }
      }
    }
  };
</script>

<style scoped>
  .pagination {
    margin-top: 5px;
    margin-bottom: 20px;
    background-color: white;
    padding: 6px 20px;
    border-radius: 5px;
    /*box-shadow: 0px 2px 9px #888888;*/
    border: 1px solid #888888;
  }

  button {
    background-color: #fff;
    border: 1px solid #ddd;
    color: #778087;
    border-radius: 3px;
    outline: none;
    height: 21px;
    cursor: pointer;
    padding: 0 2px;
    width: 55px;
    height: 29px;
  }

  .pagebtn {
    position: relative;
    bottom: 1px;
    width: 40px;
    margin: 0 4px;
  }

  .currentPage {
    color: white;
    background-color: #1f1b1b;

  }
</style>