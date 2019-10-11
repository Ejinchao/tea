<template>
  <div class="start_wrap">
    <div class="logo">
      <div class="icon"></div>
      <div class="text">茶语</div>
    </div>

    <p class="title">{{ title }}</p>
    <div class="bottom">
      <p class="copyright">当代茶文化推广者</p>
      <p class="copyright">www.chayu.com</p>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "Start",
  data() {
    return {
      title: "通茶语 会知己"
    };
  },
  mounted() {
    setTimeout(() => {
      this.$router.push("home");
    }, 2500);
  }
};
</script>
<style scoped>
.start_wrap {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  margin-top: -120px;
  background-color: #fff;
}

.text {
  text-align: center;
  font-size: 36px;
  line-height: 50px;
}

.bottom {
  position: absolute;
  bottom: 10px;
  line-height: 20px;
}

.icon {
  background: url(../../assets/logo.png);
  width: 120px;
  height: 120px;
  background-size: 120px 120px;
  margin: 10px auto;
}

.title {
  font-size: 24px;
  text-align: center;
}

.copyright {
  color: #666;
  font-size: 12px;
  margin: 0;
}
</style>