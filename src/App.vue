<template>
  <div id="app">
    <!-- header -->
    <van-nav-bar fixed v-show="isShow">
      <van-icon name="msg" slot="left" class="iconfont" class-prefix="icon" @click="onMSG" />
      <div slot="title">
        <van-search placeholder="尝鲜茶单" shape="round" input-align="center" @focus="onFocus" />
      </div>
      <van-icon
        name="geren"
        slot="right"
        class="iconfont"
        class-prefix="icon"
        @click="onPersonal"
        v-show="isShowPer"
      />
      <van-icon
        name="cart1"
        slot="right"
        class="iconfont"
        class-prefix="icon"
        v-show="isShowCart"
        @click="onCart"
      />
    </van-nav-bar>

    <!-- main -->
    <router-view />
    <!-- footer -->
    <van-tabbar v-model="active" route class="footer" v-show="isShow" active-color="#893F24">
      <van-tabbar-item :to="{name:'home'}">
        <span>首页</span>
        <van-icon
          class="iconfont"
          class-prefix="icon"
          slot="icon"
          slot-scope="props"
          :name="props.active ? 'home-fill':'home'"
        ></van-icon>
      </van-tabbar-item>

      <van-tabbar-item :to="{name:'comments'}">
        <span>茶评</span>
        <van-icon
          class="iconfont"
          class-prefix="icon"
          slot="icon"
          slot-scope="props"
          :name="props.active ? 'ziyuan':'chaju'"
        ></van-icon>
      </van-tabbar-item>
      <van-tabbar-item :to="{name:'market'}">
        <span>市集</span>
        <van-icon
          class="iconfont"
          class-prefix="icon"
          slot="icon"
          slot-scope="props"
          :name="props.active ? 'linlishiji':'linlishiji1'"
        ></van-icon>
      </van-tabbar-item>

      <van-tabbar-item :to="{name:'article'}">
        <span>文章</span>
        <van-icon
          class="iconfont"
          class-prefix="icon"
          slot="icon"
          slot-scope="props"
          :name="props.active ? 'wenzhang':'wenzhang1'"
        ></van-icon>
      </van-tabbar-item>

      <van-tabbar-item :to="{name:'circle'}">
        <span>圈子</span>
        <van-icon
          class="iconfont"
          class-prefix="icon"
          slot="icon"
          slot-scope="props"
          :name="props.active ? 'quanzi-xuanzhong':'quanzi'"
        ></van-icon>
      </van-tabbar-item>
    </van-tabbar>

    <!-- 登陆 -->

    <van-popup
      class="login"
      v-model="show"
      closeable
      close-icon-position="top-left"
      position="bottom"
      :style="{ height: '100%' }"
    >
      <!-- logo -->
      <div class="logo">
        <img src="./assets/logo.png" alt />
      </div>

      <!-- tab -->
      <van-tabs v-model="active" swipeable>
        <van-tab title="账号登录">
          <van-cell-group>
            <van-field placeholder="请输入手机号码/邮箱" left-icon="contact" v-model="logPhone" />
            <van-field
              placeholder="请输入登陆密码"
              left-icon="bag-o"
              right-icon="question-o"
              @click-right-icon="$toast('忘记密码？')"
              v-model="logPsd"
            />
          </van-cell-group>
        </van-tab>
        <van-tab title="手机动态密码登录">
          <van-cell-group>
            <van-field placeholder="请输入手机号码" left-icon="contact" />
            <van-field v-model="usercode" center placeholder="请输入短信验证码" left-icon="sign">
              <van-button slot="button" size="small">获取验证码</van-button>
            </van-field>
          </van-cell-group>
        </van-tab>
      </van-tabs>
      <van-cell-group>
        <van-button size="large" color="#8A3D21" @click="onLog">立即登录</van-button>
      </van-cell-group>

      <van-divider :style="{ color: '#6D6C6D', borderColor: '#1989fa', padding: '0 16px' }">其他方式登录</van-divider>

      <!-- 注册 -->

      <div class="tlt" @click="onRes">
        <p>没有账号，去注册</p>
        <em>
          <van-icon name="arrow-down" />
        </em>
      </div>
      <van-popup
        v-model="showRes"
        position="bottom"
        :style="{ height: '100%' }"
        close-icon-position="top-left"
        closeable
      >
        <div class="tlt" @click="onlogin">
          <em>
            <van-icon name="arrow-up" />
          </em>
          <p>已有账号，去登录</p>
        </div>
        <!-- logo -->
        <div class="logo">
          <img src="./assets/logo.png" alt />
        </div>

        <van-cell-group>
          <van-field placeholder="请输入手机号码" left-icon="contact" v-model="phone" />
          <van-field v-model="usercode" center placeholder="请输入短信验证码" left-icon="sign">
            <van-button slot="button" size="small" @click="onCode">获取验证码</van-button>
          </van-field>
          <van-field placeholder="请输入用户昵称" left-icon="contact" v-model="username" />
          <van-field placeholder="设置密码" left-icon="bag-o" v-model="password" />
        </van-cell-group>

        <van-cell-group>
          <van-button size="large" color="#8A3D21" @click="toRes">立即注册</van-button>
        </van-cell-group>
      </van-popup>
    </van-popup>
  </div>
</template>




<script>
import { isLogin, setToken, remoToken } from "./utils/auth";

import axios from "axios";
export default {
  data() {
    return {
      active: 0,
      isShow: false,
      isShowCart: false,
      isShowPer: true,
      show: false,
      showRes: false,
      phone: "",
      username: "",
      password: "",
      usercode: "",
      logPhone: "",
      logPsd: ""
    };
  },
  methods: {
    onClickLeft() {},
    onClickRight() {},
    onSearch() {},
    onCancel() {},
    onFocus() {
      this.$router.push("search");
      // location.reload();
    },
    onPersonal() {
      if (isLogin()) {
        this.$router.push("personal");
      } else {
        this.show = true;
      }
    },
    onCart() {
      this.$toast("cart");
    },
    onMSG() {
      if (isLogin()) {
        this.$router.push("msg");
      } else {
        this.show = true;
      }
      // this.$router.push("msg");
    },
    onRes() {
      this.showRes = true;
    },
    onlogin() {
      this.showRes = false;
    },
    // 验证码
    onCode() {
      let phone = this.phone;
      axios
        .get("http://47.94.255.230:8080/chadao/getUserCode", {
          params: { userPhone: phone }
        })
        .then(res => {
          console.log(res.data);
          this.$toast(res.data.info);
        });
    },
    // 注册
    toRes() {
      let userPhone = this.phone;
      let userName = this.username;
      let password = this.password;
      let userCode = this.usercode;

      axios
        .post("http://47.94.255.230:8080/chadao/userRegister", {
          params: {
            userPhone,
            userName,
            password,
            userCode
          }
        })
        .then(res => {
          this.$toast(res.data.info);
          // console.log(res.data);
        });
    },
    // 登录
    onLog() {
      let userPhone = this.logPhone;
      let password = this.logPsd;
      axios
        .get("http://47.94.255.230:8080/chadao/userlogin", {
          params: { userPhone, password }
        })
        .then(res => {
          this.$toast(res.data.info);
          // console.log(res);
          if (res.data.code == "1") {
            setToken(res.data.token);
            this.show = false;
            // this.$router.push("home");
          } else {
          }
        });
    }
  },
  watch: {
    $route(now) {
      //监控路由变换，控制顶部和底部的显示
      if (
        now.path == "/home" ||
        now.path == "/article" ||
        now.path == "/circle" ||
        now.path == "/comments"
      ) {
        this.isShow = true;
        this.isShowCart = false;
        this.isShowPer = true;
      } else if (now.path == "/market") {
        this.isShow = true;
        this.isShowCart = true;
        this.isShowPer = false;
      } else {
        this.isShow = false;
      }
    }
  }
};
</script>
<style >
html,
body {
  width: 100%;
  height: 100%;
}
body {
  text-align: left;
  color: #333;
}
h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
dl {
  font-weight: normal;
}
#app {
  height: 100%;
  background-color: #e5e5e5;
}
.van-nav-bar {
  overflow: hidden;
}
.van-nav-bar .van-icon {
  color: #707070 !important;
  /* position: absolute;
  left: 50px; */
}
.van-nav-bar__title,
.van-search {
  height: 46px;
}

/* 轮播图小点点 */
.van-swipe .van-swipe__indicators {
  left: 90%;
  z-index: 2;
}
.van-swipe .van-swipe__indicators i {
  background-color: #fff;
}

/* 登录注册 */
.login .van-tabs,
.logo {
  padding-top: 40px;
}

.logo {
  width: 120px;
  height: 120px;
  margin: 0 auto;
  border-radius: 50%;
}
.logo img {
  margin: 0 auto;
  width: 100%;
}
.van-cell-group {
  margin: 10px 0 20px 0;
}
.van-button--default {
  border: 1px solid #8a3d21;
}
.tlt {
  margin-top: 10px;
}

.tlt p {
  margin: 0;
  text-align: center;
}
.tlt em {
  text-align: center;
  display: block;
  font-size: 16px;
}

/* ---顽固--- */
.link .van-grid-item__content {
  padding: 0;
}
.zhongchou .van-tab {
  line-height: 20px;
}
.zhongchou .van-tab {
  font-size: 12px;
}
/* ---顽固--- */
</style>
