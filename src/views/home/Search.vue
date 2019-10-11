<template>
  <div class="search">
    <!-- 搜索框 -->
    <form action="/">
      <van-search
        autofocus
        v-model="value"
        placeholder="尝鲜茶单"
        show-action
        @input="onValue"
        @cancel="onCancel"
      />
    </form>
    <!-- 搜索指定内容 -->
    <div class="searchContent">
      <van-cell-group>
        <van-cell title="搜索指定内容" :border="false"></van-cell>

        <van-grid :border="false">
          <van-grid-item :to="{name:'article'}">
            <van-icon name="chaju" class="iconfont" class-prefix="icon" />
            <span>茶评</span>
          </van-grid-item>

          <van-grid-item :to="{name:'article'}">
            <van-icon name="linlishiji1" class="iconfont" class-prefix="icon" />
            <span>市集</span>
          </van-grid-item>
          <van-grid-item :to="{name:'article'}">
            <van-icon name="quanzi" class="iconfont" class-prefix="icon" />
            <span>圈子</span>
          </van-grid-item>
          <van-grid-item :to="{name:'article'}">
            <van-icon name="wenzhang1" class="iconfont" class-prefix="icon" />
            <span>文章</span>
          </van-grid-item>
          <van-grid-item :to="{name:'article'}">
            <!-- <van-icon name="tv-o" class="iconfont" class-prefix="icon" /> -->
            <van-icon name="tv-o" />
            <span>视频</span>
          </van-grid-item>
        </van-grid>
      </van-cell-group>
    </div>
    <!-- 热门搜索 -->
    <div class="searchHot">
      <van-cell-group>
        <van-cell title="热门搜索" :border="false" @click="onReplay">
          <van-icon name="replay" />
          <span>换一批</span>
        </van-cell>

        <van-button type="default" :key="i" v-for="(item,i) in newKeyWords">{{item}}</van-button>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      hotKeyWords: [
        [
          "紫砂壶",
          "绿茶",
          "水仙",
          "2019尝鲜茶单",
          "白茶",
          "老白茶",
          "柑普",
          "铁观音",
          "古树茶",
          "牛肉"
        ],
        [
          "茶具",
          "龙井",
          "红茶",
          "普洱",
          "小青柑",
          "大红袍",
          "易武",
          "金骏眉",
          "凤凰单枞",
          "极客茶人"
        ],
        [
          "茶壶",
          "单枞",
          "肉桂",
          "台湾乌龙",
          "古树普洱",
          "茉莉花茶",
          "盖碗",
          "正山小种",
          "陈皮",
          "黑茶"
        ]
      ],
      newKeyWords: [],
      num: 0
    };
  },
  mounted() {
    this.newKeyWords = this.hotKeyWords[0];
  },
  methods: {
    onValue() {
      // 输入框内容变化时触发
    },
    onCancel() {
      this.$router.go(-1); //返回上一层
    },
    onReplay() {
      // this.$toast("刷新");
      if (this.num > 2) {
        this.num = 0;
      }
      // console.log(this.num);

      this.newKeyWords = this.hotKeyWords[this.num];
      this.num++;
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
}

.searchContent {
}

.searchContent .iconfont,
.searchContent .van-icon {
  display: inline-block;
  width: 40px;
  height: 40px;
  font-size: 20px;

  line-height: 40px;
  border-radius: 50%;
  background-color: #e5e5e5;
  text-align: center;
}
.van-cell {
  color: #8d8d8d;
  font-size: 13px;
}
.searchHot .van-button {
  height: 30px;
  line-height: 30px;
  margin: 5px 5px 5px 15px;
}
</style>>

