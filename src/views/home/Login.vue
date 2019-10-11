<template>
  <div class="login">
    <van-popup
      v-model="show"
      closeable
      close-icon-position="top-left"
      position="bottom"
      :style="{ height: '100%' }"
      @closed="onClosed"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    onClosed() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
</style>