<!-- 茶评检索 -->
<template>
  <div
    class="main"
    @click="show1=false"
  >
    <van-nav-bar
      title="按茶类检索"
      left-arrow
      @click-left="onClickLeft"
    >
      <van-icon
        name="search"
        slot="right"
      />
      <van-icon
        name="ellipsis"
        slot="right"
        @click.stop="show1=!show1"
      />

    </van-nav-bar>
    <div
      class="admit"
      v-if="show"
    >
      <p>茶评频道只做品鉴参考和评分排行！</p>
      <van-icon
        name="cross"
        @click="del"
      />
    </div>
    <div class="con">
      <van-dropdown-menu
        active-color="#893e20"
        :overlay=slice
      >
        <van-dropdown-item
          v-model="switch1"
          :options="option1"
          title="茶类"
        />
        <van-dropdown-item
          v-model="switch2"
          :options="option2"
          title="评分"
          @open="rise"
        />
        <van-dropdown-item
          v-model="switch3"
          :options="option3"
          title="2018年"
        />
        <van-dropdown-item
          v-model="switch4"
          :title="title"
          @open="change1"
          @close="change2"
        />
      </van-dropdown-menu>
      <div class="figure">
        <div class="freedemo">
          <div
            class="goods"
            v-for="(item,i) in 16"
            :key=i
          >
            <div class="square">
              <div class="pic"><a href="javascript:;"> <img
                    src="../../assets/compictures/1145a6eb8ede9a14.jpg"
                    alt=""
                  ></a></div>
              <div class="desc">
                <p class="name">{{name}}</p>

                <div class="wrap-left">
                  <i>茶语评分：</i><i class="num">8.4</i><br>
                  <i>普洱>熟茶</i><br>

                  <i>暂无茶样</i>
                </div>
                <div class="wrap-right">
                  <i>综合评分：</i><i class="num">8.6</i><br>
                  <i>参考价：￥680/357g</i>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
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
    <a
      href="javascript:;"
      class="go-top"
      style="display:none"
      @click="gotop"
    ></a>
  </div>
</template>

<script>

export default {

  name: 'Bytype',
  data() {
    return {      show: true, show1: false,
      value: 0, showlist2: false,
      slice: false,
      switch1: true,
      switch2: false, switch3: false, switch4: false, title: '查样库存',
      name: '绿茶',
      option1: [
        { text: '全部', icon: 'https://static.chayu.com/mobile/main/img/common/icons_tea/ico_tea_all.png', value: 0 },
        { text: '绿茶', icon: 'https://static.chayu.com/mobile/main/img/common/icons_tea/ico_tea_01.png', value: 1 },
        { text: '乌龙', icon: 'https://static.chayu.com/mobile/main/img/common/icons_tea/ico_tea_02.png', value: 2 },
        { text: '红茶', icon: 'https://static.chayu.com/mobile/main/img/common/icons_tea/ico_tea_03.png', value: 3 },
        { text: '普洱', icon: 'https://static.chayu.com/mobile/main/img/common/icons_tea/ico_tea_04.png', value: 4 }, { text: '黑茶', icon: 'https://static.chayu.com/mobile/main/img/common/icons_tea/ico_tea_05.png', value: 5 }, { text: '白茶', icon: 'https://static.chayu.com/mobile/main/img/common/icons_tea/ico_tea_06.png', value: 6 }, { text: '黄茶', icon: 'https://static.chayu.com/mobile/main/img/common/icons_tea/ico_tea_07.png', value: 7 }, { text: '花茶', icon: 'https://static.chayu.com/mobile/main/img/common/icons_tea/ico_tea_08.png', value: 8 }, { text: '袋泡', icon: 'https://static.chayu.com/mobile/main/img/common/icons_tea/ico_tea_09.png', value: 9 }, { text: '速溶茶', icon: 'https://static.chayu.com/mobile/main/img/common/icons_tea/ico_tea_10.png', value: 10 },
      ],
      option2: [{ text: '按茶语评分由高到低' }, { text: '按综合评分由高到低' }],
      option3: [{ text: '2018年', value: 0 }, { text: '2017年', value: 1 }, { text: '2016年', value: 2 }, { text: '2015年', value: 3 }, { text: '2014年', value: 4 }]
    };
  },
  methods: {    onClickLeft() {
      this.$router.go(-1)
    },

    del() {
      console.log(43434)
      this.show = false;
      console.log(this.show)
    }, rise() {
      this.showlist2 = !this.showlist2
    },
    change1() {
      console.log(this.switch4)
      if (this.switch4 == false) { this.title = "由多到少"; console.log(this.title) }
    }, change2() {
      console.log(this.switch4)
      if (this.switch4 == false) { this.title = "由少到多"; console.log(this.title) }
    }, scrollToTop() {
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
.main {
  color: #666;
}
.van-icon-arrow-left,
.van-icon-ellipsis,
.van-icon-search {
  font-size: 24px;
  color: #333;
  width: 50px;
  line-height: 46px;
}
.van-nav-bar__left {
  left: 0;
}
.van-nav-bar__right {
  right: 0;
}
.van-nav-bar__title {
  font-size: 18px;
}
.admit {
  background: rgba(0, 0, 0, 0.7);
  height: 40px;
  padding: 0 10px;
}
.admit p,
.admit .van-icon-cross {
  line-height: 40px;
  font-size: 16px;
  color: #fff;
  float: left;
}
.admit .van-icon-cross {
  float: right;
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
.freedemo .desc p {
  margin: 5px 10px 0;
}

.figure {
  background: #fff;
}

.freedemo .square {
  overflow: hidden;
  padding-bottom: 10px;
}
.freedemo .goods {
  padding: 12px 10px 0;

  border-bottom: 1px solid #ccc;
  overflow: hidden;
}
.goods:nth-child(3) {
  padding-top: 10px;
}
.freedemo .pic {
  width: 100px;
  height: 100px;
  float: left;
}
.freedemo img {
  width: 100px;
  height: 100px;
  margin-right: 10px;
}
.freedemo .desc {
  float: left;
  width: 240px;
}
.freedemo .name {
  font-size: 18px;
  line-height: 24px;
  color: #000;
}
.freedemo .goods i {
  line-height: 25px;
}
.num {
  color: #74422f;
}
.wrap-left {
  float: left;
  width: 100px;
  display: inline-block;
  margin-left: 10px;
}
.wrap-right {
  float: right;
}
.go-top {
  background: rgba(0, 0, 0, 0.6)
    url(https://static.chayu.com/mobile/main/img/common/go_top.png) no-repeat
    center/25px 20px;
  position: fixed;
  bottom: 40px;
  right: 18px;
  width: 50px;
  height: 50px;
  text-align: center;
  border-radius: 50%;
}
</style>