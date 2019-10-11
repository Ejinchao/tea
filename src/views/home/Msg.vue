<template>
  <div class="msg">
    <van-nav-bar title="我的消息" left-arrow @click-left="onClickLeft" />

    <van-cell-group>
      <van-cell title="系统消息" icon="volume" is-link></van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.msg {
  width: 100%;
  height: 100%;
  background: #e6e6e6;
}
.van-cell-group {
  margin-top: 10px;
}
</style>