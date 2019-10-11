<template>
  <div class="personal">
    <van-nav-bar left-arrow @click-left="onClickLeft" fixed :border="false">
      <van-icon name="setting-o" slot="right" @click="onSetting" color="#fff" />
      <van-icon
        name="msg"
        slot="right"
        class="iconfont"
        class-prefix="icon"
        @click="onMSG"
        color="#fff"
      />
    </van-nav-bar>
    <div class="bg"></div>
    <div class="content">
      <div class="wrop">
        <van-cell-group class="posA">
          <!-- <van-cell title="name"></van-cell> -->
          <div class="header">
            <div class="hTop">
              <img class="img" src="../../assets/logo.png" />
              <p class="name">{{username}}</p>
              <p class="sign" @click="onSign" ref="sign">
                <van-icon name="diamond-o" />
                {{sTitle}}
              </p>
              <div class="teaCurrency">
                <span @click="chabi">
                  茶币
                  <em>{{bi}}</em> &gt;
                </span>
                <span @click="gongxian">
                  贡献值
                  <em>{{zhi}}</em> &gt;
                </span>
              </div>
            </div>
            <div class="hbottom">
              <ul>
                <li>
                  <em>0</em>
                  <span>我的收藏</span>
                </li>
                <div class="line"></div>
                <li>
                  <em>0</em>
                  <span>我的关注</span>
                </li>
                <div class="line"></div>
                <li>
                  <em>0</em>
                  <span>抵扣券</span>
                </li>
                <div class="line"></div>
                <li>
                  <em>0</em>
                  <span>购物车</span>
                </li>
              </ul>
            </div>
          </div>
        </van-cell-group>
      </div>

      <van-cell-group>
        <van-cell title="我的订单" value="查看全部订单" is-link :border="false"></van-cell>
        <van-grid :column-num="5" :border="false">
          <van-grid-item icon="pending-payment" text="待付款" />
          <van-grid-item icon="send-gift-o" text="待发货" />
          <van-grid-item icon="logistics" text="待收货" />
          <van-grid-item icon="smile-o" text="待评价" />
          <van-grid-item icon="after-sale" text="退款/退货" />
        </van-grid>
      </van-cell-group>
      <van-cell-group>
        <van-cell title="市集活动" :border="false"></van-cell>
        <van-grid gutter="20" :border="false">
          <van-grid-item icon="cash-back-record" text="我的众筹" />
          <van-grid-item icon="send-gift-o" text="我的试饮" />
          <van-grid-item icon="gift-o" text="我的礼品" />
        </van-grid>
      </van-cell-group>

      <van-cell-group>
        <van-cell title="茶评茶礼" :border="false"></van-cell>
        <van-grid gutter="20" :border="false">
          <van-grid-item>
            <van-icon class="iconfont" class-prefix="icon" name="chaju"></van-icon>
            <span>我的茶评</span>
          </van-grid-item>
          <van-grid-item icon="clock-o" text="我的茶样" />
          <van-grid-item icon="point-gift-o" text="礼卡兑换" />
        </van-grid>
      </van-cell-group>

      <van-cell-group>
        <van-cell title="圈子文章" :border="false"></van-cell>
        <van-grid :column-num="4" :border="false">
          <van-grid-item icon="smile-comment-o" text="我的圈子" />
          <van-grid-item icon="bulb-o" text="我的话题" />
          <van-grid-item icon="chat-o" text="我的评论" />
          <van-grid-item icon="gift-o" text="我的课程" />
        </van-grid>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
// import { log } from "util";

import axios from "axios";
export default {
  data() {
    return {
      username: "用户名",
      src: "../../assets/logo.png",
      sTitle: "签到",
      bi: "0",
      zhi: "0"
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    onSetting() {
      this.$router.push("setting");
    },
    onMSG() {
      this.$router.push("msg");
    },
    onSign() {
      if (this.sTitle == "签到") {
        this.sTitle = "已签到";
        // console.log(this.$refs.sign);
        this.$refs.sign.style.color = "#888888";
        this.$refs.sign.style.background = "#E3E3E1";
        this.$toast("签到成功，获得5个茶币");
      } else {
        this.$toast("null");
      }
    },
    chabi() {
      this.$toast("我的茶币");
    },
    gongxian() {
      this.$toast("贡献等级");
    }
  },
  mounted() {
    let userId = 1;
    axios
      .post(`http://47.94.255.230:8080/chadao/findOneUser.do?userId=${userId}`)
      .then(res => {
        // console.log(res.data);
        // console.log(res.data.info);
        if (res.data.code == "1") {
          this.username = res.data.info.username;
          this.bi = res.data.info.coin;
          this.zhi = res.data.info.contribution;
        }
      });
  }
};
</script>

<style scoped>
em {
  font-style: normal;
}
.personal {
  height: 100%;
  width: 100%;
  background: #e6e6e6;
  position: relative;
}

.personal .van-nav-bar {
  background: rgba(51, 51, 51, 1);
}
.personal .van-nav-bar__arrow,
.van-icon {
  color: #fff !important;
}
.personal .icon-msg {
  color: #fff;
  margin-left: 20px;
}
.personal .content {
  width: 100%;
  padding-top: 40px;
}
.content .iconfont {
  font-size: 28px;
}
.wrop {
  width: 100%;
  height: 140px;
  position: absolute;
  top: 60px;
}
.personal .van-cell-group {
  margin-bottom: 10px;
}
.wrop .van-cell {
  height: 30px;
}

.bg {
  width: 100%;
  height: 164px;
  background: url(../../assets/images/slices/personal-bg.png);
}
.posA,
.header {
  width: 90%;
  height: 140px;
  margin: 0 auto;
}
.hTop {
  height: 60px;
}
.hTop img {
  margin: 10px;
  float: left;
  width: 36px;
  height: 36px;
}
.hTop p {
  margin: 10px 5px;
  display: inline-block;
}
.hTop .sign {
  line-height: 20px;
  color: #fff;
  padding: 0 10px;
  background-color: #e86b4b;
  border-radius: 10px;
}

.teaCurrency {
  color: #bb807a;
}
.teaCurrency span {
  margin: 0 10px 0 5px;
}

.header .hbottom {
  height: 80px;
  overflow: hidden;
}

.hbottom ul {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 45px;
  margin-top: 20px;
}
.hbottom li {
  margin: 10px;
}

.hbottom li span {
  display: block;
  color: #9a9a97;
}
.hbottom li em {
  font-weight: 700;
  display: block;
  text-align: center;
}
.line {
  height: 22px;
  width: 1px;
  background: #e3e3e1;
}

.van-grid-item {
  height: 60px;
}
</style>
