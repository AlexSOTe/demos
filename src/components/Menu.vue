<template>
  <div class="Menu">
    <van-sticky>
      <van-nav-bar :title="'Demos'"
                   left-text="首页"
                   @click-left="$router.push({name:'home'})">
      </van-nav-bar>
    </van-sticky>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Component, Watch } from 'vue-property-decorator';

  @Component({
    name: 'Menu'
  })
  export default class Menu extends Vue {
    list = [
      { id: '0', routeName: 'chinaflag', text: '给头像添加国旗' },
    ];

    mounted() {
    }
  }
</script>
<style scoped>
  .menuList {
  }

  .menuList .menuListItem {
    font-weight: bold;
    color: #2c3e50;
    line-height: 30px;
    padding: 0 10px;
  }

  .menuBtn {
    width: 40px;
    height: 40px;
    background-color: #07c160;
    color: white;
  }
</style>
