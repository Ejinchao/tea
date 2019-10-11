<!-- 热门茶评 -->
<template>
  <div
    class="main"
    @click="show1=false"
  >
    <van-nav-bar
      title="热门茶评"
      left-arrow
      @click-left="onClickLeft"
    >
      <van-icon
        name="ellipsis"
        slot="right"
        @click.stop="show1=!show1"
      />
    </van-nav-bar>
    <van-pull-refresh
      v-model="isLoading"
      @refresh="onRefresh"
    >
      <div class="con">
        <div
          class="tip"
          v-for="(item,i) in 20"
          :key=i
        >
          <img
            src="https://img.chayu.com/avatar/000/27/40/42/5795f42c360a6.png!8080"
            alt=""
          >
          <div class="info">
            <p class="name">张三
              <span>
                <van-icon name="good-job-o" /><i>5</i></span></p>
            <p class="num"><i>品评分数：8.2</i><br /><i>干茶：8.0</i><i>汤色：10.0</i><i>气味：8.0</i><i>滋味：8.0</i><i>叶底：8.0</i></p>
            <p class="report">{{item.report}}</p>
            <p class="time"><i>2018-07-14</i><button>回复</button></p>
          </div>
        </div>
      </div>
      <a
        href="javascript:;"
        class="go-top"
        style="display:none"
        @click="gotop"
      ></a>

    </van-pull-refresh>
    <div class="announce">

      <a href="javascript:;"><input
          type="text"
          placeholder="
          请输入回复内容，字数不少于5个字"
        /></a>
      <a href="javescript:;">发布</a>
    </div>
    <div
      class="kiss"
      v-show="show1"
    >
      <span><img
          class="kisss"
          src="../../assets/imgarticle/bd.png"
          alt=""
        ></span>
      <ul>
        <li>
          <van-icon name="location-o" />&nbsp;&nbsp;分享</li>
        <hr />
        <li>
          <van-icon name="chat-o" />&nbsp;&nbsp;消息</li>
        <hr />
        <router-link
          tag="li"
          to="/home"
        >
          <van-icon name="wap-home-o" />&nbsp;&nbsp;首页</router-link>
        <hr />
        <router-link
          tag="li"
          to='/personal'
        >
          <van-icon name="user-o" />&nbsp;&nbsp;我的</router-link>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  name: "Hot",
  data() {

    return {
      count: 0, show1: false,
      isLoading: false,
      repList: [{        username: '张三',
        report: '收到快递的我惊呆了，东西超好超划算。'      }, {        username: '张三',
        report: '收到快递的我惊呆了，东西超好超划算。'      }, {        username: '张三',
        report: '收到快递的我惊呆了，东西超好超划算。'      }, {        username: '张三',
        report: '收到快递的我惊呆了，东西超好超划算。'      }]
    };
  },
  methods: {    onClickLeft() {
      this.$router.go(-1)
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 500);
    },
    scrollToTop() {
      var topBtn = document.querySelector('.go-top');
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      //console.log(scrollTop)
      let browserHeight = window.outerHeight;
      console.log(browserHeight)
      if (scrollTop > browserHeight) {
        topBtn.style.display = 'block';
      } else {
        topBtn.style.display = 'none';
      }
    }, gotop() {
      document.documentElement.scrollTop = 0;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollToTop)
  },
}
</script>
<style  scoped>
.main {
  background: #e5e5e5;
}
a {
  margin: 0;
  padding: 0;
}
i {
  font-style: normal;
}
img {
  border: 0;
  margin: 0;
  max-width: 100%;
  vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
p {
  margin: 0;
}
.van-icon-arrow-left,
.van-icon-ellipsis {
  font-size: 24px;
  color: #333;
}
.van-nav-bar__title {
  font-size: 18px;
}

.con {
  margin-top: 10px;
  background: #fff;
  width: 100%;
}
.con .tip {
  padding: 12px;
  border-bottom: 1px solid #ccc;
}
.con .tip img {
  float: left;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  margin-right: 6px;
}
.con .info {
  padding-left: 34px;
}
.con .info .name {
  line-height: 17px;
  overflow: hidden;
  font-size: 12px;
  color: #333;
}
.info .name span {
  float: right;
  width: 32px;
  font-size: 14px;
}
.info .name .van-icon {
  font-size: 20px;
  padding-right: 3px;
}
.info .num {
  font-size: 11px;
  color: #893e20;
  line-height: 20px;
}
.info .report {
  margin: 3px 0 5px;
  font-size: 14px;
  line-height: 22px;
  overflow: hidden;
}
.info .time {
  font-size: 11px;
  color: #666;
  line-height: 24px;
  margin-top: 5px;
}
.info button {
  border: 0;
  background: #f4f5f6;
  width: 56px;
  height: 24px;
  color: #666;
  border-radius: 12px;
  margin-left: 8px;
}
.users .con {
  overflow: hidden;
}
.users .all {
  display: block;
  height: 36px;
  line-height: 36px;
  font-size: 13px;
  color: #000;
  text-align: center;
}
.users .all i {
  font-size: 12px;
  line-height: 12px;
  color: #fff;
  background: #999;
  vertical-align: middle;
  margin-left: 3px;
}
.go-top {
  background: rgba(0, 0, 0, 0.6)
    url(https://static.chayu.com/mobile/main/img/common/go_top.png) no-repeat
    center/25px 20px;
  position: fixed;
  bottom: 70px;
  right: 18px;
  width: 50px;
  height: 50px;
  text-align: center;
  border-radius: 50%;
}
.announce {
  padding: 10px 0;
  border-top: 1px solid #ccc;
  background: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
}
.announce a:first-child {
  background: #f4f5f6;
  margin-left: 10px;
  padding-left: 10px;
  display: block;
  flex: 1;
}
.announce a:first-child input {
  border: 0;
  background: #f4f5f6;
  height: 31px;
  width: 100%;
  font-size: 16px;
  color: #000;
  text-align: left;
}
.announce a:last-child {
  display: block;
  width: 63px;
  color: #bbb;
  font-size: 16px;
  text-align: center;
  line-height: 31px;
  font-weight: 600;
}
.announce input::placeholder {
  color: #aaa;
  text-align: left;
}
.kiss {
  width: 100px;
  height: 150px;
  background: #000;
  position: fixed;
  top: 63px;
  right: 10px;
  border-radius: 3%;
}
.kiss ul {
  margin-top: -20px;
}
.kiss ul li {
  margin-left: 5px;
  font-size: 17px;
  color: #fff;
}
.kisss {
  width: 50px;
  height: 50px;
  margin-top: -22px;
  margin-left: 57px;
}
</style>