<template>
  <div class="setting">
    <!-- top -->
    <van-nav-bar left-arrow title="设置" @click-left="onClickLeft"></van-nav-bar>
    <!-- 个人信息修改 -->
    <van-cell-group>
      <van-cell title="个人资料" is-link></van-cell>
      <van-cell title="修改密码" is-link></van-cell>
      <van-cell title="收货地址" is-link></van-cell>
    </van-cell-group>
    <!-- 消息 -->
    <van-cell-group>
      <van-cell title="推送消息设置" value="去开启" is-link></van-cell>
      <van-cell title="清除缓存" value="0"></van-cell>
    </van-cell-group>
    <!-- 服务中心 -->
    <van-cell-group>
      <van-cell title="服务中心" value="去开启" is-link></van-cell>
      <van-cell title="给我们评分" is-link></van-cell>
      <van-cell title="意见与投诉" is-link></van-cell>
    </van-cell-group>
    <!-- 关于 -->
    <van-cell-group>
      <van-cell title="邀请好友" value="各的30元抵扣券" is-link></van-cell>
      <van-cell title="关于我们"></van-cell>
    </van-cell-group>
    <!-- 退出登录 -->
    <van-cell-group class="center">
      <van-cell title="退出登录" @click="onExit"></van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import { Dialog } from "vant";
import { isLogin, setToken, remoToken } from "../../utils/auth";
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onExit() {
      Dialog.confirm({
        // title: "标题",
        message: "确定退出登录吗？"
      })
        .then(() => {
          // on confirm
          remoToken("token");
          this.$router.push("home");
        })
        .catch(() => {
          // on cancel
          console.log(0);
        });
    }
  }
};
</script>

<style scoped>
.setting {
  background-color: #e5e5e5;
}
.setting .van-cell-group {
  margin: 6px 0;
}
.center .van-cell__title {
  text-align: center;
}
</style>