<template>
  <div class="xinren" @click="show1=false">
    <!-- header -->
    <div class="head">
      <van-nav-bar fixed title="新人福利专区" left-arrow @click-left="onClickLeft">
        <van-icon class="ml10" name="ellipsis" slot="right" @click.stop="show1=!show1" />
      </van-nav-bar>

      <!-- 右侧弹出 -->
      <div class="kiss" v-show="show1">
        <div class="triangle_border_up">
          <span></span>
        </div>
        <ul>
          <li>
            <van-icon name="chat-o" />&nbsp;消息
          </li>
          <hr />
          <li>
            <van-icon name="wap-home-o" />&nbsp;首页
          </li>
          <hr />
          <li>
            <van-icon name="user-o" />&nbsp;我的
          </li>
        </ul>
      </div>
    </div>

    <!-- banner -->
    <div class="banner">
      <van-image src="https://img.chayu.com/banner/1708/02/95759817fd941463.jpg"></van-image>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show1: false
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.xinren {
  padding-top: 46px;
  padding-bottom: 50px;
}
.van-nav-bar__title {
  margin: 0 auto;
}
/* 右侧弹出框 */
.head {
  position: relative;
}
.kiss {
  width: 100px;
  height: 164px;
  background: #444;
  position: absolute;
  top: 0px;
  right: 10px;
  border-radius: 5px;
  z-index: 100;
}
.kiss hr {
  height: 1px;
  background-color: #888484;
  border: none;
}
.kiss ul li {
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  font-size: 12px;
  color: #d8d3d3;
}

.kiss .van-icon {
  font-size: 16px;
  position: relative;
  top: 3px;
}

/* 三角符号 */
.triangle_border_up {
  width: 0;
  height: 0;
  border-width: 0 10px 10px;
  border-style: solid;
  border-color: transparent transparent #444; /*透明 透明  灰*/
  position: absolute;
  top: -10px;
  right: 3px;
}
</style>