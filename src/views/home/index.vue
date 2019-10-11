<template>
  <div class="home">
    <!-- 下拉刷新 -->
    <van-pull-refresh
      v-model="isLoading"
      @refresh="onRefresh"
      pulling-text="↓ 下拉可以刷新"
      loosing-text="↑ 松开立即刷新"
      loading-text="正在刷新数据中..."
    >
      <!-- 顶部 -->
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
      <div class="link">
        <van-grid :column-num="4" :border="false">
          <van-grid-item :key="i" v-for="(item,i) in imageLink" info="9+" :to="{name:item.path}">
            <img :src="item.img" alt />
            <div class="van-info">{{item.num}}</div>
            <span>{{item.name}}</span>
          </van-grid-item>
        </van-grid>
      </div>
      <!-- 茶类 -->
      <div class="sort chaping">
        <van-cell-group>
          <van-cell title="茶类" />
          <van-swipe :loop="false" :width="70" :height="90" :show-indicators="false">
            <van-swipe-item>
              <a href="http://m.chaping.chayu.com/lists/?bid=1">
                <img src="https://static.chayu.com/mobile/main/img/common/icons_tea/ico_tea_01.png" />
                <p>绿茶</p>
              </a>
            </van-swipe-item>
            <van-swipe-item>
              <a href="http://m.chaping.chayu.com/lists/?bid=2">
                <img src="https://static.chayu.com/mobile/main/img/common/icons_tea/ico_tea_02.png" />
                <p>乌龙</p>
              </a>
            </van-swipe-item>
            <van-swipe-item>
              <a href="http://m.chaping.chayu.com/lists/?bid=3">
                <img src="https://static.chayu.com/mobile/main/img/common/icons_tea/ico_tea_03.png" />
                <p>红茶</p>
              </a>
            </van-swipe-item>
            <van-swipe-item>
              <a href="http://m.chaping.chayu.com/lists/?bid=4">
                <img src="https://static.chayu.com/mobile/main/img/common/icons_tea/ico_tea_04.png" />
                <p>普洱</p>
              </a>
            </van-swipe-item>
            <van-swipe-item>
              <a href="http://m.chaping.chayu.com/lists/?bid=5">
                <img src="https://static.chayu.com/mobile/main/img/common/icons_tea/ico_tea_05.png" />
                <p>黑茶</p>
              </a>
            </van-swipe-item>
            <van-swipe-item>
              <a href="http://m.chaping.chayu.com/lists/?bid=6">
                <img src="https://static.chayu.com/mobile/main/img/common/icons_tea/ico_tea_06.png" />
                <p>白茶</p>
              </a>
            </van-swipe-item>
            <van-swipe-item>
              <a href="http://m.chaping.chayu.com/lists/?bid=7">
                <img src="https://static.chayu.com/mobile/main/img/common/icons_tea/ico_tea_07.png" />
                <p>黄茶</p>
              </a>
            </van-swipe-item>
            <van-swipe-item>
              <a href="http://m.chaping.chayu.com/lists/?bid=8">
                <img src="https://static.chayu.com/mobile/main/img/common/icons_tea/ico_tea_08.png" />
                <p>花茶</p>
              </a>
            </van-swipe-item>
            <van-swipe-item>
              <a href="http://m.chaping.chayu.com/lists/?bid=9">
                <img src="https://static.chayu.com/mobile/main/img/common/icons_tea/ico_tea_09.png" />
                <p>袋泡</p>
              </a>
            </van-swipe-item>
            <van-swipe-item>
              <a href="http://m.chaping.chayu.com/lists/?bid=10">
                <img src="https://static.chayu.com/mobile/main/img/common/icons_tea/ico_tea_10.png" />
                <p>速溶茶</p>
              </a>
            </van-swipe-item>

            <van-swipe-item></van-swipe-item>
          </van-swipe>
        </van-cell-group>
      </div>
      <!-- 推荐 -->
      <div class="recommend">
        <section class="jingxuan-container">
          <h2>
            〃 当日精选 〃
          </h2>
          <div class="jingxuan-wrap">
            <aside>
              <a
                href="http://m.shiji.chayu.com/zhongchou/zhongchou_detail?zhongchou_id=317"
                title="凤凰印象古树白茶，180元/盒"
                class="img"
              >
                <img
                  src="https://img.chayu.com/banner/1909/30/2095d918fc16ab77.jpg!700300"
                  alt="凤凰印象古树白茶，180元/盒"
                />
              </a>
              <div class="txt-box">
                <div class="txt">
                  <h3>
                    <span class="color_coffe">市集·众筹 |</span> 凤凰印象古树白茶，180元/盒
                  </h3>
                  <p class="des">临沧秘境/改良工艺，丰富内质，收藏价值高</p>
                </div>
              </div>
            </aside>
            <!-- 众筹推荐 -->
            <aside>
              <a
                href="http://m.shiji.chayu.com/zhongchou/zhongchou_detail?zhongchou_id=318"
                title="茶商必读，互联网时代的品牌密码"
                class="img"
              >
                <img
                  src="https://img.chayu.com/banner/1909/27/5615d8dda4a20f09.jpg!700300"
                  alt="茶商必读，互联网时代的品牌密码"
                />
              </a>
              <div class="txt-box">
                <div class="txt">
                  <a
                    href="http://m.shiji.chayu.com/zhongchou/zhongchou_detail?zhongchou_id=318"
                    title="茶商必读，互联网时代的品牌密码"
                    class="title"
                  >
                    <span class="color_coffe">众筹 |</span> 茶商必读，互联网时代的品牌密码
                  </a>
                  <p class="des">21人业内专家、精英联名推荐</p>
                </div>
                <div class="person">
                  <span class="img">
                    <a href="http://m.shiji.chayu.com/master/1375678">
                      <img
                        src="https://img.chayu.com/avatar/001/37/56/78/59cf60926c1db.jpg!120120"
                        alt
                      />
                    </a>
                  </span>
                  <p class="name">茶语优选</p>
                </div>
              </div>
              <p class="other">33人支持 · 已筹0.16万</p>
            </aside>
            <!-- 文章推荐 -->
            <aside>
              <a href="https://m.chayu.com/article/199401" title="7大包装妙招，应对快递公司的粗暴运送" class="img">
                <img
                  src="https://img.chayu.com/banner/1909/30/1535d91b9e4bcdf1.jpg!700300"
                  alt="7大包装妙招，应对快递公司的粗暴运送"
                />
              </a>
              <div class="txt-box">
                <div class="txt">
                  <h3>
                    <span class="color_coffe">头条 |</span> 7大包装妙招，应对快递公司的粗暴运送
                  </h3>
                </div>
              </div>
              <p class="other">
                1232赞 · 2.81万阅读
                <span class="fr">作者：茶语网</span>
              </p>
            </aside>
            <aside>
              <a href="https://m.chayu.com/article/collection/89" title="专访与专家  茶之专业科普" class="img">
                <img
                  src="https://img.chayu.com/banner/1909/29/7425d900d34ee57b.jpg!700300"
                  alt="专访与专家  茶之专业科普"
                />
              </a>
              <div class="txt-box">
                <div class="txt">
                  <a
                    href="https://m.chayu.com/article/collection/89"
                    title="专访与专家  茶之专业科普"
                    class="title"
                  >
                    <span class="color_coffe">专题 |</span> 专访与专家 茶之专业科普
                  </a>
                  <p class="des">9篇文章 · 14.58万阅读</p>
                </div>
              </div>
            </aside>
            <!-- 茶评推荐 -->
            <aside>
              <a href="http://m.chaping.chayu.com/tea/4421" title="[渝四季] 兰妃新茶（2018）" class="img">
                <img
                  src="https://img.chayu.com/banner/1909/25/4155d8ace8b4f0b7.jpg!700300"
                  alt="[渝四季] 兰妃新茶（2018）"
                />
                <span class="lable-status">最新</span>
              </a>
              <div class="txt-box">
                <div class="txt">
                  <h3>
                    <span class="color_coffe">茶评 |</span> [渝四季] 兰妃新茶（2018）
                  </h3>
                  <p class="des">一款甜度高，入口糯滑的兰花茶。</p>
                </div>
              </div>
              <p class="other">茶语评分：8.8</p>
            </aside>
            <!-- 左右图文 -->
            <div class="wenzhang-box">
              <ul>
                <li>
                  <a href="https://m.chayu.com/article/199358" title="有哪些事是你真正喝茶以后才懂的？">
                    <span class="img">
                      <img
                        src="https://img.chayu.com/banner/1909/25/2715d8ad182e8885.png!375255"
                        alt="有哪些事是你真正喝茶以后才懂的？"
                      />
                    </span>
                    <h3>
                      <span class="color_coffe">文章 |</span> 有哪些事是你真正喝茶以后才懂的？
                    </h3>
                    <p class="des">我们整理了一些对茶叶的误解,并给出相应解答。</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.chayu.com/article/199365" title="皖地味道，从祁门开始 | 追寻祁门红茶的源头与创造">
                    <span class="img">
                      <img
                        src="https://img.chayu.com/banner/1909/25/6225d8ad214052b8.jpg!375255"
                        alt="皖地味道，从祁门开始 | 追寻祁门红茶的源头与创造"
                      />
                    </span>
                    <h3>
                      <span class="color_coffe">文章 |</span> 皖地味道，从祁门开始 | 追寻祁门红茶的源头与创造
                    </h3>
                    <p class="des">一起来追寻祁门红茶的的源头与创造。</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.chayu.com/article/199382" title="泡不同茶类的茶席该如何插花？">
                    <span class="img">
                      <img
                        src="https://img.chayu.com/banner/1909/25/5265d8ad2bad6b93.jpg!375255"
                        alt="泡不同茶类的茶席该如何插花？"
                      />
                    </span>
                    <h3>
                      <span class="color_coffe">文章 |</span> 泡不同茶类的茶席该如何插花？
                    </h3>
                    <p class="des">今日，我们一起来谈谈如何把茶席上的插花设计得恰到好处。</p>
                  </a>
                </li>
              </ul>
            </div>
            <aside>
              <a href="http://m.video.chayu.com/detail?id=85" title="老司机教你如何识别假茶广告" class="img">
                <img
                  src="https://img.chayu.com/banner/1907/04/6185d1d7a102bbc5.jpg!700300"
                  alt="老司机教你如何识别假茶广告"
                />
                <span class="lable-status">直播回放</span>
                <i class="video-icon"></i>
              </a>
              <div class="txt-box">
                <div class="txt">
                  <h3>
                    <span class="color_coffe">视频 |</span> 老司机教你如何识别假茶广告
                  </h3>
                </div>
              </div>
              <p class="other">19点赞 · 6877阅读</p>
            </aside>
            <!-- 众筹推荐 -->
            <aside>
              <a
                href="http://m.shiji.chayu.com/zhongchou/zhongchou_detail?zhongchou_id=313"
                title="宋凰出品，凤凰单丛·山韵&amp;密韵"
                class="img"
              >
                <img
                  src="https://img.chayu.com/banner/1909/30/8085d91a543b9618.jpg!700300"
                  alt="宋凰出品，凤凰单丛·山韵&amp;密韵"
                />
              </a>
              <div class="txt-box">
                <div class="txt">
                  <a
                    href="http://m.shiji.chayu.com/zhongchou/zhongchou_detail?zhongchou_id=313"
                    title="宋凰出品，凤凰单丛·山韵&amp;密韵"
                    class="title"
                  >
                    <span class="color_coffe">市集·众筹 |</span> 宋凰出品，凤凰单丛·山韵&amp;密韵
                  </a>
                  <p class="des">核心产地/传统炭焙/名家监制，送礼自饮皆宜</p>
                </div>
                <div class="person">
                  <span class="img">
                    <a href="http://m.shiji.chayu.com/master/1375678">
                      <img
                        src="https://img.chayu.com/avatar/001/37/56/78/59cf60926c1db.jpg!120120"
                        alt
                      />
                    </a>
                  </span>
                  <p class="name">茶语优选</p>
                </div>
              </div>
              <p class="other">34人支持 · 已筹1.33万</p>
            </aside>
            <!-- 茶评推荐 -->
            <aside>
              <a href="http://m.chaping.chayu.com/tea/4409" title="[重茶集团]  巴南银针（2018）" class="img">
                <img
                  src="https://img.chayu.com/banner/1909/25/2625d8acfb3d1985.jpg!700300"
                  alt="[重茶集团]  巴南银针（2018）"
                />
                <span class="lable-status">最新</span>
              </a>
              <div class="txt-box">
                <div class="txt">
                  <h3>
                    <span class="color_coffe">茶评 |</span> [重茶集团] 巴南银针（2018）
                  </h3>
                  <p class="des">一款原料细嫩、外形秀美，青气较重的绿茶。</p>
                </div>
              </div>
              <p class="other">茶语评分：8.7</p>
            </aside>
            <!-- 众筹推荐 -->
            <aside>
              <a
                href="http://m.shiji.chayu.com/zhongchou/zhongchou_detail?zhongchou_id=314"
                title="茶语首发锡兰红茶，168元/罐"
                class="img"
              >
                <img
                  src="https://img.chayu.com/banner/1909/28/4955d8f57864da31.jpg!700300"
                  alt="茶语首发锡兰红茶，168元/罐"
                />
              </a>
              <div class="txt-box">
                <div class="txt">
                  <a
                    href="http://m.shiji.chayu.com/zhongchou/zhongchou_detail?zhongchou_id=314"
                    title="茶语首发锡兰红茶，168元/罐"
                    class="title"
                  >
                    <span class="color_coffe">市集·众筹 |</span> 茶语首发锡兰红茶，168元/罐
                  </a>
                  <p class="des">标准化工艺，浓醇鲜爽，品饮方式多，性价比高</p>
                </div>
                <div class="person">
                  <span class="img">
                    <a href="http://m.shiji.chayu.com/master/1375678">
                      <img
                        src="https://img.chayu.com/avatar/001/37/56/78/59cf60926c1db.jpg!120120"
                        alt
                      />
                    </a>
                  </span>
                  <p class="name">茶语优选</p>
                </div>
              </div>
              <p class="other">83人支持 · 已筹1.68万</p>
            </aside>
          </div>

          <!-- 加载更多 -->
          <div class="com-load-more addmore-show load-more-index" style="display: none;">
            <i class="load"></i>加载中...
          </div>
          <!-- /加载更多 -->
          <input type="hidden" id="page-num" url="https://m.chayu.com/index?p=2" />
        </section>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
// @ is an alias to /src
import { ImagePreview } from "vant";
export default {
  name: "home",
  data() {
    return {
      current: 0,
      isLoading: false,
      images: [
        "https://img.chayu.com/banner/1909/29/4515d900cdb451e6.jpg",
        "https://img.chayu.com/banner/1909/29/5325d900cf2a3623.jpg",
        "https://img.chayu.com/banner/1909/29/6515d900d0aef5cc.jpg"
      ],
      tInfo: [
        { tit: "科普", cont: "汤感香气复苏教程" },
        { tit: "文化", cont: "最好的油茶在哪？当然是阿妈打的" },
        { tit: "干货", cont: "万万没想到，六堡茶还能这么玩" }
      ],

      imageLink: [
        {
          name: "众筹",
          path: "zhongchou",
          img: require("../../assets/images/slices/zhongchou.png"),
          url: "",
          num: "+8"
        },
        {
          name: "拼件福利周",
          path: "pinjian",
          img: require("../../assets/images/slices/fuli.png"),
          url: "",
          num: "+26"
        },
        {
          name: "小方罐",
          path: "fangguan",
          img: require("../../assets/images/slices/fangguan.png"),
          url: "",
          num: 9
        },
        {
          name: "试饮",
          path: "shiyin",
          img: require("../../assets/images/slices/shiyin.png"),
          url: "",
          num: 51
        },
        {
          name: "新人专区",
          path: "xinren",
          img: require("../../assets/images/slices/xinren.png"),
          url: "",
          num: 10
        },
        {
          name: "尝鲜茶单",
          path: "chadan",
          img: require("../../assets/images/slices/changxian.png"),
          url: ""
        },
        {
          name: "专题",
          path: "zhuanti",
          img: require("../../assets/images/slices/zhuanti.png"),
          url: ""
        },
        {
          name: "视频",
          path: "shipin",
          img: require("../../assets/images/slices/shipin.png"),
          url: ""
        }
      ]
    };
  },
  methods: {
    // 轮播图预览
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
    },
    // 下拉刷新
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
      }, 500);
    }
  }
};
</script>

<style scoped>
.home {
  padding: 46px 0 50px 0;
  background-color: #e5e5e5;
}
.top {
  position: relative;
}
.van-swipe {
  width: 100%;
  height: 160px;
}
img {
  width: 100%;
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
  font-size: 12px;
  text-align: center;
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
/* 链接部分 */
.link {
  color: #555555;
}
.link .van-grid-item {
  height: 60px;
}
.link a {
  display: inline-block;
  height: 60px;
  width: 60px;
  text-align: center;
  color: #555555;
}
.link img {
  display: block;
  margin: 0 auto;
  width: 30px;
  height: 30px;
}
.van-info {
  position: absolute;
  right: 20px;
  top: 15px;
  color: #555555;
  background: none;
}
/* .link .van-grid-item__content {
  padding: 0 !important;
} */
.sort .van-cell,
.recommend .van-cell {
  font-weight: 600;
}

/* 茶类 */

.chaping .van-swipe-item {
  float: left;
}
.chaping .van-cell-group {
  margin: 10px 0;
}
.chaping .van-swipe {
  height: 90px;
}
.chaping a {
  display: block;
  text-align: center;
  color: #656565;
}
.chaping a img {
  margin: 0 auto;
  width: 50px;
}
.van-swipe-item {
  float: left;
}

/* 推荐 */
.jingxuan-container {
  background: #fff;
  border-bottom: 1px solid #e5e5e5;
  margin-top: 0.266667rem;
}
.jingxuan-container p {
  margin: 0;
}
.jingxuan-container h2 {
  height: 1.013333rem;
  line-height: 1.013333rem;
  text-align: center;
  font-size: 0.426667rem;
  color: #9d3a0f;
  font-weight: 600;
}
.jingxuan-container aside {
  margin: 0 0.32rem 0.24rem;
  background: #ebebeb;
}

.jingxuan-container aside h3 {
  font-size: 0.4rem;
  line-height: 0.613333rem;
  color: #222222;
  margin: 0.213333rem 0 0.106667rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.color_coffe,
.color_brown {
  color: #893e20 !important;
}

aside .txt-box {
  display: flex;
}
aside .txt {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  align-items: center;
  margin: 0 0.32rem;
}
aside .txt .title {
  font-size: 0.4rem;

  color: #222;
  line-height: 0.533333rem;
  margin: 0.24rem 0 0;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-bottom: 0.106667rem;
}
aside .txt .des {
  font-size: 0.32rem;
  line-height: 0.32rem;
  color: #666666;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0 0 0.2rem;
}

aside a.img {
  width: 100%;
  display: block;
  position: relative;
}
aside a.img img {
  width: 100%;
  height: 4.053333rem;
}
a img {
  border: none;
  vertical-align: top;
}
.jingxuan-container aside .person {
  width: 2.08rem;
  text-align: center;
  position: relative;
  float: left;
}
aside .person .img {
  display: inline-block;
  width: 1.333333rem;
  height: 1.333333rem;
  border-radius: 50%;
  border: 0.053333rem solid #fff;
  position: absolute;
  top: -0.72rem;
  right: 0.32rem;
}
aside .person .img img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
aside .person .name {
  font-size: 0.293333rem;
  line-height: 0.533333rem;
  margin-top: 0.866667rem;
  color: #888;
}
aside p.other {
  font-size: 0.32rem;
  line-height: 0.32rem;
  color: #666666;
  max-height: 999999px;
  margin: 0 0.32rem;
  padding-bottom: 0.32rem;
}
.fr {
  float: right;
}
.lable-status {
  display: inline-block;
  height: 0.466667rem;
  line-height: 0.466667rem;
  padding: 0 0.106667rem;
  background: #893e20;
  color: #fff;
  font-size: 0.293333rem;
  text-align: center;
  border-radius: 0.04rem;
  position: absolute;
  top: 0.16rem;
  left: 0.16rem;
}

/* 文章 */
.jingxuan-container .wenzhang-box li:first-child {
  padding-top: 0;
}
.jingxuan-container .wenzhang-box li {
  margin: 0 0.32rem;
  padding: 0.266667rem 0;
  border-bottom: 1px solid #bbb;
}
.wenzhang-box li a {
  display: block;
  overflow: hidden;
  position: relative;
}
.wenzhang-box .img {
  display: inline-block;
  width: 3.6rem;
  height: 2.4rem;
  float: left;
  margin-right: 0.32rem;
}
.wenzhang-box h3 {
  font-size: 0.4rem;
  line-height: 0.613333rem;
  color: #222222;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0.053333rem 0 0;
  word-break: break-all;
}

.wenzhang-box .des {
  font-size: 0.32rem;
  color: #666666;
  line-height: 0.48rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0.12rem 0 0;
  word-break: break-all;
}
</style>

