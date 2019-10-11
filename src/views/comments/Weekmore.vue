<!-- 每周精评榜 -->
<template>
  <div
    class="main"
    @click="show1=false"
  >
    <van-nav-bar
      title="按榜单检索"
      left-arrow
      @click-left="onClickLeft"
    >
      <van-icon
        name="ellipsis"
        slot="right"
        @click.stop="show1=!show1"
      />
    </van-nav-bar>

    <div class="con">
      <van-tabs
        v-model="active"
        color="#893e20"
        sticky
        title-active-color="#893e20"
        title-inactive-color="#666"
        style="font-weight=600"
        line-width="100px"
        background="#fafafa"
      >
        <van-pull-refresh
          v-model="isLoading"
          @refresh="onRefresh"
        >
          <van-tab title="茶语评分榜">
            <div class="title">
              <div class="type">
                <h3>茶类：</h3>
                <ul>
                  <li
                    v-for="(item,i) in typelist"
                    :key=i
                  ><a href="javascript:;">
                      <span>{{item.name}}</span></a></li>
                </ul>
              </div>
              <div class="year">
                <h3>评鉴年份：</h3>
                <ul>
                  <li
                    v-for="(item,i) in yearlist"
                    :key=i
                  ><a href="javascript:;">
                      <span>{{item.year}}</span></a></li>
                </ul>
              </div>
            </div>
            <div class="ranking">
              <h2><span>排行</span><span>名称</span><span>评分</span></h2>
              <ul>
                <li
                  v-for="(item,i) in 10"
                  :key=i
                >
                  <a href="JavaScript:;">
                    <i>1</i><span>[孝文家茶]牛肉(2017)</span><i>9.3</i>
                  </a>
                </li>
              </ul>
            </div>
          </van-tab>
          <van-tab title="综合评分榜">内容 2</van-tab>
          <van-tab title="每周精评榜">内容 3</van-tab>

        </van-pull-refresh>
      </van-tabs>
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
  name: 'Weekmore',
  data() {
    return {      count: 0, show1: false, active: 0,
      isLoading: false,
      typelist: [{ name: "全部" }, { name: "绿茶" }, { name: "乌龙茶" }, { name: "红茶" }, { name: "普洱茶" }, { name: "黑茶" }, { name: "白茶" }, { name: "黄茶" }, { name: "花茶" }, { name: "时尚茶" }],
      yearlist: [{ year: 2018 }, { year: 2017 }, { year: 2016 }, { year: 2015 }, { year: 2014 }, { year: "2014以前" },]
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
    },  }
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
  width: 100%;
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
.title {
  background: #fff;
  padding: 10px 12px;
}
.title .type,
.title .year {
  overflow: hidden;
  display: flex;
}
.title h3 {
  width: 70px;
  font-size: 14px;
  line-height: 24px;
  color: #666;
  text-align: right;
  font-weight: normal;
}
.title ul {
  flex: 1;
}
.title ul li {
  float: left;
}
.title ul a {
  display: block;
  margin-bottom: 12px;
  height: 24px;
  font-size: 14px;
  text-align: center;
  color: #000;
}
.title ul span {
  padding: 0 14px;
}
.title ul .active {
  background: #eee;
  color: #893e20;
}
.ranking {
  margin-top: 10px;
  background: #fff;
  padding: 0 12px;
}
.ranking h2 {
  height: 45px;
  line-height: 45px;
  border-bottom: 1px solid #e6e6e6;
  color: #666;
  font-size: 0;
}
.ranking h2 span {
  font-size: 14px;
  font-weight: normal;
  text-align: center;
}
.ranking h2 span:nth-child(2) {
  margin-left: 136px;
}
.ranking h2 span:last-child {
  float: right;
}
.ranking ul a {
  display: block;
  color: #4c4b4b;
}
.ranking ul i {
  color: #893e20;
  vertical-align: middle;
  display: inline-block;
  width: 44px;
  height: 14px;
  font-size: 14px;
  line-height: 14px;
  margin-left: 10px;
}
.ranking ul span {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 260px;
  line-height: 30px;
  color: #000;
}
</style>