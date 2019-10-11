<!-- 文章 -->
<template>
  <div>
    <van-pull-refresh
      v-model="isLoading"
      @refresh="onRefresh"
      loading-text="正在刷新"
      success-text="刷新数据成功"
    >
      <div class="com">
        <div class="home">
          <div class="top">
            <van-swipe :autoplay="3000" @change="onChange">
              <van-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image" @click="PreviewImg(images,index)" />
              </van-swipe-item>
            </van-swipe>
            <div class="custom-indicator" slot="indicator">
              <span class="tit">{{tInfo[current].tit}}</span>
              <span class="cont">{{tInfo[current].cont}}</span>
            </div>
          </div>
        </div>

        <van-grid :border="false">
          <van-grid-item icon="orders-o" text="最新" />
          <van-grid-item icon="fire-o" text="热门" />
          <van-grid-item icon="description" text="专题" />
          <van-grid-item icon="video-o" text="视频" />
        </van-grid>
        <div class="biankuang"></div>

        <van-card
          v-for="item in 10"
          :key="item"
          title="商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题"
          thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
        >
          <div slot="tags" style="margin-top: 53px;">
            <span class="wenzheng1">
              <van-icon name="fire-o" />&nbsp;&nbsp;标签
            </span>
            <span class="wenzheng2">
              <van-icon name="fire-o" />&nbsp;&nbsp;标签
            </span>
          </div>
        </van-card>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import { ImagePreview } from "vant";

export default {

  data () {
    return {
      isLoading: false,
      current: 0,
      images: [
        "https://img.chayu.com/banner/1908/27/2255d648eb296bcb.jpg",
        "https://img.chayu.com/banner/1908/27/5775d648ec6953e0.jpg",
        "https://img.chayu.com/banner/1908/27/8125d648e9d09e39.jpg"
      ],

      tInfo: [
        { tit: "科普", cont: "红茶如何预防心血管疾病？" },
        { tit: "干货", cont: "是否只有龙井才能在茶汤中倒立?" },
        { tit: "文化", cont: "“茶道”是啥“道”，怎么“道”？" }
      ]
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    },
    PreviewImg(images, index) {
      ImagePreview({
        images: images,
        showIndex: true,
        loop: false,
        startPosition: index
      });
    },
    onChange(index) {
      this.current = index;
    }
  }
};
</script>
<style  scoped>
.com {
  margin-top: 46px;
  margin-bottom: 50px;
}
.top {
  position: relative;
}
.van-swipe {
  height: 150px;
  width: 100%;
}
img {
  width: 100%;
  height: 100%;
}
.home .custom-indicator {
  width: 100%;
  height: 28px;
  line-height: 28px;
  color: #fff;
  font-size: 14px;
  position: absolute;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.34);
}

/* 轮播标题和描述 */
.tit {
  width: 10%;
  height: 28px;
  display: inline-block;
  background-color: #8a3f1f;
}
.cont {
  box-sizing: border-box;
  display: inline-block;
  text-align: left;
  padding-left: 5%;
  width: 90%;
  height: 28px;
}
.van-grid {
  margin-top: 14px;
}
.biankuang {
  height: 10px;
  background: #eee;
  margin-top: 10px;
}
.wenzheng2 {
  margin-left: 80px;
}
</style>