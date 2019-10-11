<template>
  <div class="zhongchou" @click="show1=false">
    <!-- header -->
    <div class="head">
      <van-nav-bar fixed title="茶语众筹" left-arrow @click-left="onClickLeft">
        <van-icon name="cart1" slot="right" class="iconfont" class-prefix="icon" @click="onCart" />
        <van-icon class="ml10" name="ellipsis" slot="right" @click.stop="show1=!show1" />
      </van-nav-bar>
      <div class="kiss" v-show="show1">
        <div class="triangle_border_up">
          <span></span>
        </div>

        <ul>
          <li @click="onShare">
            <van-icon name="location-o" />&nbsp;分享
          </li>
          <hr />
          <li @click="onMsg">
            <van-icon name="chat-o" />&nbsp;消息
          </li>
          <hr />
          <li @click="onHome">
            <van-icon name="wap-home-o" />&nbsp;首页
          </li>
          <hr />
          <li @click="onPersonal">
            <van-icon name="user-o" />&nbsp;我的
          </li>
        </ul>
      </div>
    </div>
    <!-- 下拉刷新 -->
    <van-pull-refresh
      v-model="isLoading"
      @refresh="onRefresh"
      pulling-text="↓ 下拉可以刷新"
      loosing-text="↑ 松开立即刷新"
      loading-text="正在刷新数据中..."
    >
      <!-- banner -->
      <div class="banner">
        <van-image src="https://img.chayu.com/banner/1708/02/95759817fd941463.jpg"></van-image>
      </div>
      <!-- tab -->

      <van-tabs v-model="active" :line-height="0">
        <van-tab>
          <div slot="title">
            <van-icon name="more-o" class="dblock fs22" />当期众筹
          </div>
          <div class="content zc-lists">
            <aside>
              <div class="img">
                <a href="#">
                  <img src="https://img.chayu.com/banner/1909/24/1795d89cffc243ed.jpg" />
                </a>
              </div>
            </aside>
            <aside data-id="320">
              <div class="img">
                <a href="#">
                  <img src="https://img.chayu.com/banner/1909/28/2315d8f239ec2bc8.jpg" />
                </a>
                <p>茶叶农残检测神器 8分钟快速检测 操作简便 黑科技发明 品饮放心</p>
              </div>
              <p class="txt" start-time="0" end-time="1938759">
                <label>
                  距离结束：
                  <em>22天10时32分</em>
                </label>
              </p>
              <div class="zc-progress">
                <div class="progress-b">
                  <!--当进度小于100%-->
                  <p class="progress-bar" style="width: 100%;"></p>
                  <span class="progress-btn progress-btn-end">635%</span>
                </div>
              </div>
              <ul class="zc-collect">
                <li>
                  <em>支持人数</em>
                  <strong>48人</strong>
                </li>
                <li>
                  <em>已筹金额</em>
                  <strong>1.90万</strong>
                </li>
                <li>
                  <em>目标金额</em>
                  <strong>0.30万</strong>
                </li>
              </ul>
            </aside>
          </div>
        </van-tab>
        <van-tab>
          <div slot="title">
            <van-icon name="points" class="dblock fs22" />往期回顾
          </div>
          <div class="content zc-lists">
            <aside>
              <div class="img">
                <a href="#">
                  <img src="https://img.chayu.com/shiji/zhongchou/1805/29/1165b0cf5f59be01.jpg!750" />
                </a>
                <p>
                  <strong>制作中 |</strong> 【独家首发】武夷山(黄村)斗茶赛 制茶王的金奖大红袍 众筹目标10斤 总库存90斤
                </p>
              </div>
              <p class="txt">
                <label>众筹成功</label>
              </p>
              <div class="zc-progress">
                <div class="progress-b">
                  <!--当进度小于100%-->
                  <p class="progress-bar" style="width: 100%;"></p>
                  <span class="progress-btn progress-btn-end">176%</span>
                </div>
              </div>
              <ul class="zc-collect">
                <li>
                  <em>支持人数</em>
                  <strong>86人</strong>
                </li>
                <li>
                  <em>已筹金额</em>
                  <strong>5.30万</strong>
                </li>
                <li>
                  <em>目标金额</em>
                  <strong>3.00万</strong>
                </li>
              </ul>
            </aside>
          </div>
        </van-tab>
      </van-tabs>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      show1: false,
      active: "0"
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onCart() {
      this.$router.push("cart");
    },

    // 下拉刷新
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
      }, 500);
    },
    onShare() {
      this.$toast("分享");
    },
    onMsg() {
      this.$router.push("msg");
    },
    onHome() {
      this.$router.push("home");
    },
    onPersonal() {
      this.$router.push("personal");
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.zhongchou {
  padding-top: 46px;
  padding-bottom: 50px;
  background: #fff;
}
.ml10 {
  margin-left: 10px;
}
.dblock {
  display: block;
}
.van-tab {
  height: 58px;
}
.fs22 {
  font-size: 22px;
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
  position: relative;
  top: 3px;
  font-size: 16px;
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

/* tab 切换 */
.zhongchou .van-tabs {
  padding: 10px 0;
}
.zhongchou .van-tab {
  line-height: 20px;
}

.content aside .img {
  width: 100%;
  height: 5.626667rem;
  position: relative;
}
.content aside .img a {
  display: block;
  height: 5.626667rem;
}
.content aside .img img {
  width: 100%;
  height: 100%;
}
aside .img p {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 1.013333rem;
  line-height: 1.013333rem;
  background: rgba(0, 0, 0, 0.5);
  font-size: 0.453333rem;
  color: #fff;
  text-indent: 0.32rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.content aside .txt {
  font-size: 0.346667rem;
  color: #000;
  padding: 0.333333rem 0.32rem 0;
  line-height: 0.48rem;
}
.zhongchou .zc-progress {
  padding: 0.466667rem 0.32rem;
}
.zhongchou .zc-progress .progress-b {
  background: #eee;
  height: 0.16rem;
  border-radius: 0.08rem;
  position: relative;
}
.zhongchou .zc-progress .progress-b .progress-bar {
  background: rgba(0, 0, 0, 0) -webkit-linear-gradient(left, #c79c62, #e8b877) repeat
    scroll 0 0;
  display: block;
  height: 0.16rem;
  border-radius: 0.08rem;
  transition: width 0.3s linear;
}
.zhongchou .zc-progress .progress-b .progress-btn-end {
  transform: translate(-100%, -50%);
}
.zhongchou .zc-progress .progress-b .progress-btn {
  position: absolute;
  right: -21px;
  height: 0.506667rem;
  line-height: 0.506667rem;
  width: 1.066667rem;
  text-align: center;
  background: #fff;
  border: 1px solid #d0a66c;
  border-radius: 0.253333rem;
  font-size: 0.293333rem;
  color: #d0a66c;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: -2px 3px 3px rgba(0, 0, 0, 0.1);
  transition: left 0.3s linear;
}
.zhongchou .zc-collect {
  display: flex;
  flex-direction: row;
  margin-bottom: 0.306667rem;
}
.zhongchou .zc-collect li {
  flex: 3;
  text-align: center;
}
.zhongchou .zc-collect li em {
  display: block;
  font-size: 0.32rem;
  color: #999;
  line-height: 0.48rem;
}

.zhongchou .zc-collect li strong {
  display: block;
  font-size: 0.48rem;
  color: #000;
  font-weight: normal;
  line-height: 0.88rem;
}
</style>