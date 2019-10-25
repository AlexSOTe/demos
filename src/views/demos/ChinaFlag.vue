<template>
  <div class="ChinaFlag flex1">
    <h2 class="title">给头像加国旗</h2>
    <div class="fileInput">
      <span class="step">①</span>
      <label for="file">选择图片</label>
      <input id="file" type="file" name="name" @change="FileChange" />
    </div>
    <hr />
    <div class="frames">
      <span class="step">②</span>
      <div v-for="x in frameTypes"
           :key="x.id"
           @click="Change(x)">
        <img src="../../assets/ChinaFlag/avator.jpg" />
        <img :src="x.url" :class="['frame', {selected:frameType===x.type}]" />
      </div>
    </div>
    <hr />
    <canvas ref="canvas" width="300" height="300"></canvas>
    <hr />
    <div>
      <span class="step">③</span>
      <van-button type="info" @click="Download">Download</van-button>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';

  @Component({
    name: 'ChinaFlag'
  })
  export default class ChinaFlag extends Vue {
    frameType = '1';
    files = [];
    frameTypes = [
      { id: '1', type: '1', url: require('../../assets/ChinaFlag/China1.png') },
      { id: '2', type: '2', url: require('../../assets/ChinaFlag/China2.png') },
    ];
    canvas = null;
    ctx = null;
    image = null;
    china = null;
    fileReader = null;

    FileChange(evt) {
      this.files = evt.target.files;
      this.Change();
    }
    DrawAvatar() {
      const self = this;
      this.fileReader = new FileReader()
      this.fileReader.readAsDataURL(this.files[0]);
      this.fileReader.onload = function (evt) {
        self.image.src = evt.target.result;
        self.image.onload = function () {
          self.ctx.drawImage(this, 0, 0, 300, 300);
        }
      }
    }
    Change(x) {
      console.log(this.files[0]);
      if (this.files[0]) {
        if (x) {
          this.frameType = x.type;
        }
        const self = this;
        this.fileReader = new FileReader();
        this.fileReader.readAsDataURL(this.files[0]);
        this.fileReader.onload = function (evt) {
          self.image.src = evt.target.result;
          self.image.onload = function () {
            self.ctx.drawImage(this, 0, 0, 300, 300);
            self.china.src = require(`../../assets/ChinaFlag/China${self.frameType}.png`);
            self.china.width = '70';
            self.china.height = '45';
            self.china.onload = function () {
              self.ctx.drawImage(this, 0, 0, 300, 300);
            }
          }
        }
      }
    }
    Download(evt) {
      if (this.files.length < 1) {
        alert('选一个头像');
        return;
      }
      let a = document.createElement('a');
      a.download = 'Avatar_with_China_flag';
      a.setAttribute('href', this.canvas.toDataURL('image/png'));
      a.click();
    }

    Init() {
      this.image = new Image()
      this.image.setAttribute('crossOrigin', 'anonymous')

      this.china = new Image()
      this.china.setAttribute('crossOrigin', 'anonymous')

      this.canvas = this.$refs['canvas']
      this.ctx = this.canvas.getContext('2d');
    }
    mounted() {
      this.Init();
    }
  }
</script>
<style scoped>
  label {
    display: inline-block;
    background-color: #1989fa;
    color: white;
    font-size: 16px;
    line-height: 20px;
    padding: 12px 15px;
    border-radius: 2px;
  }

  .fileInput input {
    opacity: 0;
  }

  #download {
    padding: 3px 10px;
    border: 1px solid #bbb;
  }

  .title {
    color: red;
    text-align: center;
  }

  .step {
    color: red;
    font-size: 30px;
  }

  .frames {
    position: relative;
  }

  .frames > div {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 60px;
  }

  .frames > div > img {
    width: 50px;
    height: 50px;
  }

  .frames > div .frame {
    position: absolute;
    left: 0;
    top: 0;
    width: 50px;
    border: 5px solid lightcyan;
  }

  .frames > div .frame.selected {
    border: 5px solid lightgreen;
  }
</style>
