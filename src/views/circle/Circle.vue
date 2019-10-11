<!-- 圈子 -->
<template>
  <div class="com">
    <van-pull-refresh
      v-model="isLoading"
      @refresh="onRefresh"
      loading-text="正在刷新"
      success-text="刷新数据成功"
    >
      <img class="imgsing" src="../../assets/imgarticle/1.jpg" alt />

      <van-grid :column-num="3" :border="false">
        <van-grid-item icon="smile-comment-o" text="圈子" to="ring" />
        <van-grid-item icon="fire-o" text="话题" to="ring" />
        <van-grid-item icon="records" :text="text" @click="show=!show" />
      </van-grid>
      <van-dialog v-model="show" title="签到成功" @confirm="qiandao"></van-dialog>
      <div class="biankuang"></div>
      <van-grid :border="false" :column-num="3">
        <van-grid-item to="Circledetails">
          <img class="xuecha" src="../../assets/imgarticle/2.jpg" alt="学茶圈" />
          <van-divider style="font-size: 15px" dashed>学茶圈</van-divider>
          <van-divider dashed>关注：536</van-divider>
          <van-divider dashed>帖子：378</van-divider>
        </van-grid-item>
        <van-grid-item>
          <img class="xuecha" src="../../assets/imgarticle/3.jpg" alt="茶问答" />
          <van-divider style="font-size: 15px" dashed>茶问答</van-divider>
          <van-divider dashed>关注：1783</van-divider>
          <van-divider dashed>帖子：1905</van-divider>
        </van-grid-item>
        <van-grid-item>
          <img class="xuecha" src="../../assets/imgarticle/4.jpg" alt="舌尖上的茶食" />
          <van-divider style="font-size: 15px" dashed>舌尖上的茶</van-divider>
          <van-divider dashed>关注：536</van-divider>
          <van-divider dashed>帖子：378</van-divider>
        </van-grid-item>
      </van-grid>

      <van-card
        v-for="itme in 10"
        :key="itme"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
      >
        <div slot="tags">
          <ul>
            <li class="sp1">关注:</li>
          </ul>
          <div class="sp2">
            <span>
              <van-icon name="browsing-history-o" />&nbsp;&nbsp;1
            </span>
            <span class="sp3">
              <van-icon name="chat-o" />&nbsp;&nbsp;12
            </span>
          </div>
        </div>
      </van-card>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  // name:'circle',
  data() {
    return {
      isLoading: false,
      show: false,
      text: "签到"
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    },
    qiandao() {
      this.text = "已签到";
    }
  }
};
</script>
<style  scoped>
.com {
  margin-top: 46px;
  margin-bottom: 50px;
}
.imgsing {
  width: 100%;
}
.biankuang {
  height: 5px;
  background: #eeeeee;
}
.xuecha {
  width: 100px;
}
.van-divider {
  margin: 0 0;
}
.xuecha1 {
  font-size: 14px;
}
.van-card {
  text-align: left;
}
.sp1 {
  margin-top: 15px;
}
.sp2 {
  margin-top: 18px;
}
.sp3 {
  margin-left: 100px;
}
</style>