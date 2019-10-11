<template>
  <div class="fangguan" @click="show1=false">
    <!-- header -->
    <div class="head">
      <van-nav-bar fixed title="小方罐" left-arrow @click-left="onClickLeft">
        <van-icon class="ml10" name="ellipsis" slot="right" @click.stop="show1=!show1" />
      </van-nav-bar>

      <!-- 右侧弹出 -->
      <div class="kiss" v-show="show1">
        <div class="triangle_border_up">
          <span></span>
        </div>
        <ul>
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

    <div class="page-wrapper multiple_special">
      <!--info-wrap-->
      <div class="info-wrap">
        <p>
          <a href="javascript:;">
            <img src="https://img.chayu.com/banner/1905/08/6075cd2904058a7b.jpg" />
          </a>
        </p>
      </div>
      <!--info-wrap-->

      <!--recommend-wrap-->
      <div class="recommend-wrap pb88">
        <div class="pinjian">
          <div class="img">
            <a href="javascript:;">
              <img src="https://img.chayu.com/banner/1906/22/9805d0de4ae0f29c.jpg" />
            </a>
          </div>
          <p class="txt clearfix">
            <span class="fl">活动倒计时：9天6时10分</span>
            <span class="fr">当前参与人数97人</span>
          </p>
          <div class="pj-progress">
            <div class="progress-b">
              <!--当进度等于100%时-->
              <p class="progress-bar" style="width: 100%;"></p>
              <span class="progress-btn progress-btn-end" style="left: 95%;">
                100%
                <em>本轮进度</em>
              </span>
            </div>
          </div>
          <ul class="pj-collect">
            <li>
              <em>本轮剩余</em>
              <strong>0罐</strong>
            </li>
            <li>
              <em>当前轮次</em>
              <strong>第17轮</strong>
            </li>
            <li>
              <em>成交金额</em>
              <strong>1.59万</strong>
            </li>
          </ul>
        </div>

        <div class="pinjian">
          <div class="img">
            <a href="javascript:;">
              <img src="https://img.chayu.com/banner/1906/22/4295d0de50c492be.jpg" />
            </a>
          </div>
          <p class="txt clearfix">
            <span class="fl">活动倒计时：12天6时10分</span>
            <span class="fr">当前参与人数50人</span>
          </p>
          <div class="pj-progress">
            <div class="progress-b">
              <!--当进度等于0-->
              <p class="progress-bar" style="width: 0%;"></p>
              <span class="progress-btn progress-btn-start" style="left: 5%;">
                0%
                <em>本轮进度</em>
              </span>
            </div>
          </div>
          <ul class="pj-collect">
            <li>
              <em>本轮剩余</em>
              <strong>10罐</strong>
            </li>
            <li>
              <em>当前轮次</em>
              <strong>第8轮</strong>
            </li>
            <li>
              <em>成交金额</em>
              <strong>0.69万</strong>
            </li>
          </ul>
        </div>

        <div class="pinjian">
          <div class="img">
            <a href="javascript:;">
              <img src="https://img.chayu.com/banner/1906/22/7065d0de59def0e4.jpg" />
            </a>
          </div>
          <p class="txt clearfix">
            <span class="fl">活动倒计时：12天6时10分</span>
            <span class="fr">当前参与人数19人</span>
          </p>
          <div class="pj-progress">
            <div class="progress-b">
              <!--当进度小于100%大于0-->
              <p class="progress-bar" style="width: 30%;"></p>
              <span class="progress-btn" style="left: 30%;">
                30%
                <em>本轮进度</em>
              </span>
            </div>
          </div>
          <ul class="pj-collect">
            <li>
              <em>本轮剩余</em>
              <strong>7罐</strong>
            </li>
            <li>
              <em>当前轮次</em>
              <strong>第4轮</strong>
            </li>
            <li>
              <em>成交金额</em>
              <strong>0.39万</strong>
            </li>
          </ul>
        </div>

        <div class="heji">
          <a href="javascript:;" class="img" title>
            <img src="https://img.chayu.com/banner/1905/10/7325cd5720661213.jpg" alt />
          </a>
        </div>

        <div class="heji">
          <a href="javascript:;" class="img" title>
            <img src="https://img.chayu.com/banner/1905/11/7235cd685ab6b3d3.jpg" alt />
          </a>
        </div>

        <div class="heji">
          <a href="http://m.shiji.chayu.com/goods/18406" class="img" title>
            <img src="https://img.chayu.com/banner/1905/10/9095cd571fc07950.jpg" alt />
          </a>
        </div>

        <div class="heji">
          <a href="http://m.shiji.chayu.com/goods/18399" class="img" title="小方罐·八年陈生普">
            <img src="https://img.chayu.com/banner/1905/10/5585cd579bc4b3b0.jpg" alt />
          </a>
        </div>

        <div class="heji">
          <a href="http://m.shiji.chayu.com/goods/18400" class="img" title="小方罐·四年陈生普">
            <img src="https://img.chayu.com/banner/1905/10/6275cd579c58f051.jpg" alt />
          </a>
        </div>

        <div class="heji">
          <a href="http://m.shiji.chayu.com/goods/18401" class="img" title="小方罐·六年陈熟普">
            <img src="https://img.chayu.com/banner/1905/10/4115cd579d7df814.jpg" alt />
          </a>
        </div>
      </div>
      <!--/recommend-wrap-->
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
.fangguan {
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
</style>