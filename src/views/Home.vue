<template>
  <div class="Home flex1">
    <van-list class="menuList">
      <van-cell v-for="x in list"
                :key="x.id"
                class="menuListItem">
        <router-link class="itemText" :to="x.routeName">{{x.text}}</router-link>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Component, Watch } from 'vue-property-decorator';

  @Component({
    name: 'Home'
  })
  export default class Home extends Vue {
    name = 'Home';
    list = [
      { id: '0', routeName: 'chinaflag', text: '给头像添加国旗' },
      { id: '1', routeName: 'cube', text: '旋转的立方体' },
    ];
    components = {
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

  .itemText {
    color: #1989fa;
  }
</style>
