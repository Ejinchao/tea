<!-- 茶评 -->
<template>
  <div class="main">
    <van-pull-refresh
      v-model="isLoading"
      @refresh="onRefresh"
      pulling-text="↓ 下拉可以刷新"
      loosing-text="↑ 松开立即刷新"
      loading-text="正在刷新..."
      success-text="√ 刷新数据成功"
    >
      <div
        class="header"
        style="height:46px;"
      ></div>
      <div
        class="banner"
        @click="newpage"
      >
        <van-swipe
          :autoplay="3000"
          indicator-color="white"
          @change="replace"
        >

          <van-swipe-item><img src="../../assets/compictures/2485a426617e14ac.jpg" /></van-swipe-item>
          <van-swipe-item><img src="../../assets/compictures/2835a42643fe5245.jpg" /></van-swipe-item>
          <van-swipe-item><img src="../../assets/compictures/3025a4265833342d.jpg" /></van-swipe-item>
          <van-swipe-item><img src="../../assets/compictures/5895a42630cd0481.jpg" /></van-swipe-item>
          <van-swipe-item><img src="../../assets/compictures/6935a4263d2aee8c.jpg" /></van-swipe-item>

        </van-swipe>

        <div class="slogen">
          <div class="adress">
            <p>{{title}}</p>
          </div>
          <div class="desc">
            <p>{{content}}</p>
          </div>
        </div>
      </div>
      <div class="figure">
        <div class="flexdoor">
          <div class="bar">
            <p class="title">茶评检索</p><i>记录4330款茶</i>
          </div>
          <div class="con">
            <router-link
              to="/bytype"
              class="square"
            >
              <div>
                <img
                  class="temporary"
                  src="../../assets/compictures/编组 8@2x.png"
                  alt=""
                >
                <p class="explain">按茶类</p>
              </div>
            </router-link>
            <router-link
              to="/bytype"
              class="square"
            >
              <img
                class="temporary"
                src="../../assets/compictures/编组 9@2x.png"
                alt=""
              >
              <p class="explain">按品牌</p>
            </router-link>
            <router-link
              to="/bytype"
              class="square"
            >
              <img
                class="temporary"
                src="../../assets/compictures/编组 11@2x.png"
                alt=""
              >
              <p class="explain">按价格</p>
            </router-link>
            <router-link
              to="/bytype"
              class="square"
            >
              <img
                class="temporary"
                src="../../assets/compictures/编组 12@2x.png"
                alt=""
              >
              <p class="explain">按榜单</p>
            </router-link>
          </div>
        </div>
      </div>
      <div class="hotcomment">
        <div class="bar">
          <p class="title">热门茶评</p><i>汇集上万条用户茶评</i>
          <p class="more"><i>更多</i>
            <i>&gt;</i>
          </p>
        </div>
        <div class="con">
          <router-link
            :to="{name:'Hotcom'}"
            class="card"
            tag="div"
          >
            <div class="top">
              <div class="pic"><img
                  src="https://img.chayu.com/avatar/000/25/40/37/59631fcc5dbdd.jpg!8080"
                  alt=""
                >

              </div>
              <p>慧者心清</p>
            </div>
            <div class="bottom">
              <p class="detail">
                干茶紧结匀整，色泽墨绿，银毫显露。汤色金黄明亮。想起饱满，柔顺，茶汤厚实，入口较苦，化...
              </p>
              <p>品评茶叶：[中吉号] 静悟（2015）</p><br>
              <p><i>品评分数：</i><i class="num">8.6</i></p><br>
              <p class="find"><i>查看详情 &gt;</i></p>
            </div>
          </router-link>
          <router-link
            :to="{name:'Hotcom'}"
            class="card"
            tag="div"
          >
            <div class="top">
              <div class="pic"><img
                  src="https://img.chayu.com/avatar/000/25/40/37/59631fcc5dbdd.jpg!8080"
                  alt=""
                >

              </div>
              <p>慧者心清</p>
            </div>
            <div class="bottom">
              <p class="detail">
                干茶紧结匀整，色泽墨绿，银毫显露。汤色金黄明亮。想起饱满，柔顺，茶汤厚实，入口较苦，化...
              </p>
              <p>品评茶叶：[中吉号] 静悟（2015）</p><br>
              <p><i>品评分数：</i><i class="num">8.6</i></p><br>
              <p class="find"><i>查看详情 &gt;</i></p>
            </div>
          </router-link>
        </div>
      </div>
      <div class="figure">
        <div class="essence">
          <div class="bar">
            <p class="title">每周精评</p><i>多维度展示您关心的数据</i>
            <router-link
              tag="p"
              to="/weekmore"
              class="more"
            ><i>更多</i><i>&gt;</i></router-link>
          </div>
          <div
            class="con"
            @click="scroll"
          >
            <div class="square">
              <router-link
                :to="{name:'Weekcom'}"
                href="javascript:;"
              >
                <img
                  src="../../assets/compictures/4505a55d4418ee01 (1).jpg"
                  alt=""
                >
              </router-link>
            </div>
            <div class="square">
              <router-link
                :to="{name:'Weekcom'}"
                href="javascript:;"
              >
                <img
                  src="../../assets/compictures/4685a55d431cec97.jpg"
                  alt=""
                >
              </router-link>
            </div>
            <div class="
              square">
              <a href="javascript:;">
                <img
                  src="../../assets/compictures/7355a55d421e643f.jpg"
                  alt=""
                >
              </a>
            </div>
            <div class="square">
              <a href="javascript:;">
                <img
                  src="../../assets/compictures/8155be9553527d30.jpeg"
                  alt=""
                >
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="figure">
        <div class="freedemo">
          <div class="bar">
            <p class="title">免费茶样</p><i>每日10点上新</i>
            <p class="more"><i>更多</i><i>&gt;</i></p>
          </div>
          <div class="goods">
            <div class="square">
              <div class="pic"><a href="javascript:;"> <img
                    src="../../assets/compictures/1145a6eb8ede9a14.jpg"
                    alt=""
                  ></a></div>
              <div class="desc">
                <p class="name">绿茶(2017)</p>
                <p class="score"><i>茶语评分：<i class="num">8.4</i>
                  </i>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<i>综合评分：<i class="num">8.6</i>
                  </i></p>
                <div class="wrap-left">
                  <p> <i>所需茶币：158个</i><br>
                    <i>剩余库存：0份</i></p>
                </div>

                <button class="wrap-right">已兑完</button>
              </div>
            </div>

          </div>
          <div class="goods">
            <div class="square">
              <div class="pic"><a href="javascript:;"> <img
                    src="../../assets/compictures/1145a6eb8ede9a14.jpg"
                    alt=""
                  ></a></div>
              <div class="desc">
                <p class="name">绿茶(2017)</p>
                <p class="score"><i>茶语评分：<i class="num">8.4</i>
                  </i>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<i>综合评分：<i class="num">8.6</i>
                  </i></p>
                <div class="wrap-left">
                  <p> <i>所需茶币：158个</i><br>
                    <i>剩余库存：0份</i></p>
                </div>

                <button class="wrap-right">已兑完</button>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="figure">
        <div class="essence">
          <div class="bar">
            <p class="title">年度大榜</p><i>一年一度的“千款茶评榜”</i>
          </div>
          <div
            class="con"
            @click="scroll"
          >
            <div class="square">
              <a href="javascript:;">
                <img
                  src="../../assets/compictures/5215ab11807eeecc.jpeg"
                  alt=""
                >
              </a>
            </div>
            <div class="square">
              <a href="javascript:;">
                <img
                  src="../../assets/compictures/5845a56c5557d37d.png"
                  alt=""
                >
              </a>
            </div>
            <div class="
              square">
              <a href="javascript:;">
                <img
                  src="../../assets/compictures/7905a56c543d1049.png"
                  alt=""
                >
              </a>
            </div>
            <div class="square">
              <a href="javascript:;">
                <img
                  src="../../assets/compictures/9415a56c53016928.png"
                  alt=""
                >
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="figure">
        <div class="taste">
          <div class="bar">
            <p class="title">茶语试饮</p><i>喝遍天下大师名茶</i>
            <p class="more"><i>更多</i></p>
          </div>
          <div class="tags">
            <div class="square">
              <a href="javascript:;">
                <img
                  src="../../assets/compictures/5405b2081df18ce6.jpg"
                  alt=""
                >
                <div class="name">
                  <p>麻粟正山小种</p>
                  <div class="line"></div>
                  <p class="num"><i>限量60份</i><i>剩余0份</i></p>
                </div>

              </a>

            </div>
            <div class="square">
              <a href="javascript:;">
                <img
                  src="../../assets/compictures/5765a937f33c1000.jpg"
                  alt=""
                >
                <div class="name">
                  <p>麻粟正山小种</p>
                  <div class="line"></div>
                  <p class="num"><i>限量60份</i><i>剩余0份</i></p>
                </div>

              </a>

            </div>
            <div class="square">
              <a href="javascript:;">
                <img
                  src="../../assets/compictures/7275adf020e00bfb.jpg"
                  alt=""
                >
                <div class="name">
                  <p>麻粟正山小种</p>
                  <div class="line"></div>
                  <p class="num"><i>限量60份</i><i>剩余0份</i></p>
                </div>

              </a>

            </div>
            <div class="square">
              <a href="javascript:;">
                <img
                  src="../../assets/compictures/6965a697cfcdc983.jpg"
                  alt=""
                >
                <div class="name">
                  <p>麻粟正山小种</p>
                  <div class="line"></div>
                  <p class="num"><i>限量60份</i><i>剩余0份</i></p>
                </div>

              </a>

            </div>
          </div>
        </div>
      </div>
      <div
        class="footer"
        style="height:50px"
      ></div>
    </van-pull-refresh>
  </div>

</template>

<script>
var demo = document.querySelector('.con');
console.log(demo)
export default {
  name: 'comments',
  data() {
    return {
      desc: [
        { adress: '广东', content: '全芽头的原料，火气过高。' }, { adress: '四川', content: '一款外形细嫩，香气有青味的雀。' }, { adress: '贵州', content: '香气清新，滋味甜润的绿茶。' }, { adress: '福建', content: '酸梅香变得浓郁宜人。' },
        { adress: '榜单', content: '西南茶区种茶和饮茶历史悠久，茶树资源丰富，种类繁多。' }],
      title: '广东',
      content: '全芽头的原料，火气过高。',
      isLoading: false
    };
  },
  methods: {
    replace(i) {
      this.title = this.desc[i].adress;
      this.content = this.desc[i].content;
    },
    newpage() {
      this.$router.push({ name: 'Detail' })
    },
    scroll() {
      console.log(3232)
      console.log(demo.scrollHeight)
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 500);
    }
  }
}


</script>
<style  scoped>
.main {
  background: #f8f6f6;
}
.banner {
  position: relative;

  font-size: 0;
}
img {
  width: 100%;
  padding: 0;
}
.slogen {
  width: 375px;
  background: rgba(0, 0, 0, 0.5);
  height: 28px;
  position: absolute;
  bottom: 0;
  color: #fff;
}
p {
  display: inline-block;
  margin: 0;
}
.adress {
  float: left;
  width: 43px;
  height: 100%;
  background: #8a3f1f;

  font-size: 14px;
}
.adress p {
  widows: 28px;
  height: 19px;
  line-height: 19px;
  padding: 5px 7px 5px 8px;
}
.desc {
  float: left;
  width: 332px;
  font-size: 14px;
  overflow: hidden;
}
.desc p {
  width: 231px;

  height: 19px;

  text-align: left;
  float: left;
  white-space: nowrap;
}
.slogen .desc p {
  margin: 4px 0 0 5px;
}
.hotcomment .desc p {
  overflow: hidden;
  margin: 4px 48px 5px 13px;
}
.freedemo .desc p {
  margin: 5px 10px 0;
}

.figure {
  background: #fff;
}
.bar {
  padding: 12px 10px 6px 10px;
}
.hotcomment .con {
  margin: 0 10px;
}
.title {
  font-size: 16px;
  line-height: 21px;
  color: #333333;
  float: left;
  margin-bottom: 6px;
  font-weight: 600;
}
i {
  font-style: normal;
}
.bar i {
  color: #c0bebf;
  line-height: 14px;
  float: left;
  margin-left: 9px;
}
.more {
  font-size: 12px;
  float: right;
}
.bar {
  overflow: hidden;
}
.more i {
  color: #666;
}
.flexdoor {
  background: #fff;
}
.flexdoor .con {
  display: flex;
  width: 100%;
  justify-content: space-around;
}

.flexdoor .square {
  height: 67px;
  flex: 1;
  text-align: center;
}
.square .splain {
  font-style: 12px;
  color: #555555;
}
.temporary {
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 0 auto 5px;
}
.flexdoor .explain {
  color: #333;
}
.hotcomment .top {
  width: 292px;
  height: 56px;
  background: #484647;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
}
.top .pic {
  width: 40px;
  height: 40px;
  border: 1px solid #fff;
  border-radius: 50%;
  overflow: hidden;
  margin: 8px 13px 8px 13px;
  float: left;
}
.pic img {
  width: 100%;
}
.con {
  display: flex;
  overflow-x: auto;
  margin-bottom: 10px;
}
.card {
  margin-right: 10px;
}
.top p {
  font-size: 13px;
  line-height: 17px;
  color: #fff;
  float: left;
  margin-top: 10px;
}
.hotcomment .bottom {
  width: 292px;
  height: 103px;
  box-sizing: border-box;
  padding: 9px 10px 9px 5px;
  background: #fff;
}
.bottom .detail {
  font-size: 12px;
  line-height: 17px;
  color: #555;
  margin-bottom: 10px;
  text-align: left;
}
.bottom p {
  font-size: 10px;
  line-height: 15px;
  color: #888;
  clear: both;
  float: left;
}
.bottom .find {
  float: right;
}
.num,
.bottom .find {
  color: #74422f;
}
.essence {
  margin-top: 10px;
  padding-bottom: 10px;
}
.essence .con {
  overflow-x: auto;
  margin: 0 10px;
}
.essence .square {
  width: 138px;
  height: 92px;
  margin-right: 10px;
}
.essence img {
  width: 138px;
  height: 92px;
}
.freedemo {
  margin-top: 10px;
}
.freedemo .square {
  overflow: hidden;
  padding-bottom: 10px;
}
.freedemo .goods {
  padding: 0 10px;

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
.wrap-left {
  float: left;
  width: 100px;
  display: inline-block;
}
.wrap-right {
  float: right;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 80px;
  height: 40px;
  margin-top: 6px;
}
.annuallist {
  margin-top: 10px;
  padding-bottom: 1px;
}
.taste {
  margin-top: 10px;
  padding-bottom: 10px;
}
.taste .square {
  width: 168px;
}
.taste .tags {
  padding: 0 10px;
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  justify-content: space-around;
}
.taste img {
  width: 100%;
}
.taste .name {
  font-size: 16px;
  line-height: 34px;
  text-align: left;
}
.taste .line {
  width: 100%;
  height: 3px;
  border-radius: 1.5px;
  background: #f48868;
}
.taste .name {
  color: #000;
}
.taste .num {
  color: #666;
}
</style>