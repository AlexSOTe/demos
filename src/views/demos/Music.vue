<template>
  <div class="Music flex1" ref="ctnr">
    123
  </div>
</template>

<script>
  import { Vue, Component } from 'vue-property-decorator';

  @Component({
    name: 'Music'
  })
  class Music extends Vue {
    mounted() {
    }
    beforeDestroy() {
    }
  }
  export default Music
</script>
<style scoped>
  .Music {
    position: relative;
    width: 100%;
  }
</style>
