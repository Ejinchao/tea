<template>
  <div class="chadan" @click="show1=false">
    <!-- header -->
    <div class="head">
      <van-nav-bar fixed title="详情" left-arrow @click-left="onClickLeft">
        <van-icon class="ml10" name="ellipsis" slot="right" @click.stop="show1=!show1" />
      </van-nav-bar>

      <!-- 右侧弹出 -->
      <div class="kiss" v-show="show1">
        <div class="triangle_border_up">
          <span></span>
        </div>
        <ul>
          <li>
            <van-icon name="location-o" />&nbsp;分享
          </li>
          <hr />
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

    <!-- 轮播图 -->
    <div class="slide" id="slide">
      <van-swipe :autoplay="3000" indicator-color="#000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <aside></aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show1: false,
      images: [
        "https://img.chayu.com/goods/1901/15/5395c3d5707b413f.jpg!800800",
        "https://img.chayu.com/goods/1901/15/6165c3d57099ccc7.jpg!800800",
        "https://img.chayu.com/goods/1901/15/8085c3d570eb54e4.jpg!800800",
        "https://img.chayu.com/goods/1901/15/4105c3d570f23bed.jpg!800800",
        "https://img.chayu.com/goods/1901/15/3305c3d5705a5c7c.jpg!800800"
      ]
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
.chadan {
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

#slide {
  overflow: hidden;
  width: 100%;
  height: 10rem;
}
#slide img {
  width: 100%;
}
</style>