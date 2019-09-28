<template>
  <div class="Menu">
    <van-sticky>
      <van-nav-bar :title="navTitle"
                   left-text="首页"
                   @click-left="$router.push({name:'home'})"
                   right-text="菜单"
                   @click-right="show = true">
      </van-nav-bar>
    </van-sticky>
    <van-action-sheet v-model="show" title="菜单">
      <van-list class="menuList">
        <van-cell v-for="x in list"
                  :key="x.id"
                  class="menuListItem">
          <router-link :to="x.routeName">{{x.text}}</router-link>
        </van-cell>
      </van-list>
    </van-action-sheet>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Component, Watch } from 'vue-property-decorator';

  @Component({
    name: 'Menu'
  })
  export default class Menu extends Vue {
    show = false;
    list = [
      { id: '0', routeName: 'chinaflag', text: '给头像添加国旗' },
    ];

    @Watch('$route')
    RouteChange(to, from) {
      this.show = false
    }

    get navTitle() {
      console.log(this.$store.getters.app.navTitle);
      return this.$store.getters.app.navTitle;
    }

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
