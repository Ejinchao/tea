<!-- 每周精评 -->
<template>
  <div
    class="main"
    @click="show1=false"
  >
    <van-nav-bar
      title="每周精评"
      left-arrow
      @click-left="onClickLeft"
    >
      <van-icon
        name="ellipsis"
        slot="right"
        @click.stop="show1=!show1"
      />
    </van-nav-bar>
    <van-pull-refresh
      v-model="isLoading"
      @refresh="onRefresh"
    >
      <div class="con">
        <div class="title">
          <h3>茶叶榜丨跨界茶排行TOP5</h3>
          <p class="info">
            <span>发布时间：2017-02-12</span>
            <span>作者：喃咪胖</span>
            <span>阅读量：10.55万</span>
          </p>
        </div>
        <div class="article">
          <p>
            新年新气象，上班第一周，就看到某大号推出迷你压茶机，一饼茶也可以自己压制。至少在普洱茶群内引起不少关注。这件事情的好坏先放一边，总要先等有人使用过后再来评说。</p>
          <p>
            笔者想到更多的则是，凭借这一类技术的展开，会不会有更多的人跨界投入到茶行业的大军中来。所以，这一次的榜单，笔者盘点了茶语网在2016年度找到的一些“跨界”的茶，做了个跨界茶排行榜。</p>
          <p><br></p>
          <h2>跨界茶排行TOP 5</h2>
          <p class="pic"><img
              src="https://img.chayu.com/article/1702/12/71258a003cb8da13.jpg!600"
              alt=""
            ></p>
          <p><br></p>
          <p>
            注：榜单截止日期为2017年2月10日星期五</p>
          <p><br></p>
          <h2>TOP1：老佛手袋泡[汉声]</h2>
          <p><br></p>
          <p class="pic"><img
              src="https://img.chayu.com/article/1702/12/26158a003cf5d19a.png!600"
              alt=""
            ></p>
          <p><br></p>
          <p>
            台湾《汉声》杂志是一本有40年历史的杂志，从创制起一直致力于构筑“中华传统民间文化基因库”，到现在，汉声已经成功完成了上百个民间文化专题的研究和出版，在海内外文化界出版界以及国际汉学界都赢得了广泛影响和认同。这款茶，就是汉声跨界尝试的袋泡。</p>
          <p><br></p>
          <p><strong>上榜理由</strong></p>
          <p>
            由汉声跨界尝试的这款袋泡，包装从里到外都是传统剪纸图样，内质也是不负众望。这么一款包装蕴含中国美学的袋泡，倒是建议一心想输出中华文化的某导演来喝下。</p>
          <p><br></p>
          <p><strong>茶语茶评</strong></p>
          <p>
            这是一个风格温润，存放干净的老乌龙。</p>
          <p>
            香气是典型的老乌龙香气、干净、会让人联想到桂圆干这种甜蜜的熟果香，且能持久存在于口腔。茶汤平顺协调，颇有浓度，甜度很高，微微的酸使得整个口腔生津不断。</p>
          <p><strong><br></strong></p>
          <p class="pic"><img
              src="https://img.chayu.com/article/1702/12/99958a003d1ae529.png!600"
              alt=""
            ></p>
          <p><br></p>
          <h2><strong>TOP2：茶魂茶[天籽 ]</strong></h2>
          <p><strong><br></strong></p>
          <p class="pic"><img
              src="https://img.chayu.com/article/1702/12/67158a003d62cf92.png!600"
              alt=""
            ></p>
          <p><br></p>
          <p>
            2000年，“雨林再造之父”马悠博士（JosefMargraf，德国生态学家）和她的妻子李旻果女士在云南西双版纳的湄公河畔践行再造雨林的理念，创立天籽生物多样性发展中心，探索雨林保护与发展同存的可能。旗下生产多款与雨林有关的生态产品，其中也包含长于自然的茶。</p>
          <p><strong><br></strong></p>
          <p><strong>上榜理由</strong></p>
          <p>
            好茶离不开好的加工，同样离不开良好生长环境的优秀原料。茶魂茶概念与实际好茶在原料方面的要求不谋而合。包装颇有佛教的仪式感，内质也是清爽甜美。</p>
          <p><br></p>
          <p><strong>茶语茶评</strong></p>
          <p>
            这是一款清爽、甜美的普洱生茶。</p>
          <p>
            外形优美，茶叶紧细匀整，金毫满披；内质甜美，香气高扬持久，梅子果香、薄荷清香明显，但前期略带有刺激性气味；茶汤甘甜爽快，回甘生津快且持久，清凉感明显，但是汤感厚度一般，滋味偏淡。</p>
          <p><br></p>
          <p class="pic"><img
              src="https://img.chayu.com/article/1702/12/36358a003da36686.jpg!600"
              alt=""
            ></p>
          <p><strong><br></strong></p>
          <h2><strong>TOP3：明前龙井[饱记]</strong></h2>
          <p><strong><br></strong></p>
          <p class="pic"><img
              src="https://img.chayu.com/article/1702/12/73258a003de1e71e.png!600"
              alt=""
            ></p>
          <p><br></p>
          <p>
            饱记是颇具人气的美食推荐微信号“艾格吃饱了”所做的品牌，这款则是饱记用挑选美食的眼光挑选出的明前龙井。</p>
          <p><br></p>
          <p><strong>上榜理由</strong></p>
          <p>
            很多时候，喝茶的人，无论是否专业，都容易陷入一种误区。我们看这款茶多么珍稀多么名贵，把自己的真实感受都通通否定掉，再小心翼翼膜拜那些充满光环的茶。</p>
          <p>然而、一个美食推荐者不用各种复杂的知识，而是依靠口感挑选出一款还不错的茶时，这更像是一种提醒，当茶回归到一个饮品的本质，最重要的，是好喝。</p>
          <p><br></p>
          <p><strong>茶语茶评</strong></p>
          <p><br></p>
          <p>
            一款香气和滋味都还不错的明前龙井。</p>
          <p>鲜爽的栗香，溶于茶汤，令人愉悦，茶汤入口较为鲜浓，带有甜味，轻微的涩感，化开后回甘生津明显。</p>
          <p><br></p>
          <p class="pic"><img
              src="https://img.chayu.com/article/1702/12/10858a003e2e5cc1.jpg!600"
              alt=""
            ></p>
          <p><br></p>
          <h2><strong>TOP4：茉莉花茶[MUJI]</strong></h2>
          <p>
            以其极简画风和文艺情怀，几乎撩倒了所有小资阶级小心脏的无印良品，在2015年11月正式上线销售中国茶,一共推出六款茶产品。</p>
          <p><br></p>
          <p class="pic"><img
              src="https://img.chayu.com/article/1702/12/90658a003e70eb1a.jpg!600"
              alt=""
            ></p>

          <p><br></p>
          <p><strong>上榜理由</strong></p>
          <p>
            MUJI的茶不仅做到了简单的包装也有品质感，还给出了茶行业很多产品都并未做到的清晰透明化的信息，同时，合理的性价比以及稳定小确幸的品质，即使拿到茶行业中也是难得。</p>
          <p>
            MUJI证明，不是每款茶都需要做出高端大气奢华风，也不是因为茶便宜就可以包装简单到什么信息都没有。</p>
          <p><strong><br></strong></p>
          <p class="pic"><img
              src="https://img.chayu.com/article/1702/12/68558a003f3a6a1a.png!600"
              alt=""
            ></p>
          <span class="source">来源：茶语网</span>
        </div>
        <div class="reading">
          <h2>相关阅读</h2>
          <ul>
            <li
              v-for="(item,i) in 3"
              :key=i
            ><a href="javascript:;">
                <img
                  src="https://img.chayu.com/article/1610/24/463580dd529191c6.png!160120"
                  alt=""
                >
                <h3>2016茶叶榜视觉系好茶5强：惊爆眼球，惊艳舌尖！</h3>
                <p>
                  <span>
                    <van-icon name="good-job-o" />323</span>
                  <span>
                    <van-icon name="eye-o" />14922</span>
                </p>
              </a>
            </li>
          </ul>
        </div>
        <div class="comments">
          <h2>评论（13）
          </h2>
          <div>
            <ul>
              <li>
                <div
                  class="tip"
                  v-for="(item,i) in 20"
                  :key=i
                >
                  <img
                    src="https://img.chayu.com/avatar/000/27/40/42/5795f42c360a6.png!8080"
                    alt=""
                  >
                  <div class="info">
                    <p class="name">张三
                      <span>
                        <van-icon name="good-job-o" /><i>5</i></span></p>

                    <p class="report">包装都好漂亮啊，一眼看上去很特别</p>
                    <p class="time"><i>2018-07-14</i><button>回复</button></p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </van-pull-refresh>

    <a
      href="javascript:;"
      class="go-top"
      style="display:none"
      @click="gotop"
    ></a>
    <van-goods-action>

      <van-goods-action-icon
        icon="share"
        text="分享"
        size="30px"
      />
      <van-goods-action-icon
        icon="chat-o"
        text="客服"
      />
      <van-goods-action-icon
        icon="good-job-o"
        text="赞"
      />
      <van-goods-action-button
        color="#893e20"
        text="评论"
        style="border-radius:0;height:50px;margin:0;font-size:18px;"
      />
    </van-goods-action>
    <div
      class="kiss"
      v-show="show1"
    >
      <span><img
          class="kisss"
          src="../../assets/imgarticle/bd.png"
          alt=""
        ></span>
      <ul>
        <li>
          <van-icon name="location-o" />&nbsp;&nbsp;分享</li>
        <hr />
        <li>
          <van-icon name="chat-o" />&nbsp;&nbsp;消息</li>
        <hr />
        <router-link
          tag="li"
          to="/home"
        >
          <van-icon name="wap-home-o" />&nbsp;&nbsp;首页</router-link>
        <hr />
        <router-link
          tag="li"
          to='/personal'
        >
          <van-icon name="user-o" />&nbsp;&nbsp;我的</router-link>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  name: "Weekcom",
  data() {
    return {      show1: false, count: 0,
      isLoading: false,
    };
  },
  methods: {    onClickLeft() {
      this.$router.go(-1)
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 500);
    },
    scrollToTop() {
      var topBtn = document.querySelector('.go-top');
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      //console.log(scrollTop)
      let browserHeight = window.outerHeight;
      console.log(browserHeight)
      if (scrollTop > browserHeight) {
        topBtn.style.display = 'block';
      } else {
        topBtn.style.display = 'none';
      }
    }, gotop() {
      document.documentElement.scrollTop = 0;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollToTop)
  },
}

</script>
<style  scoped>
.main {
  background: #e5e5e5;
}
a {
  margin: 0;
  padding: 0;
}
i {
  font-style: normal;
}
h1,
h2,
h3,
h4,
h5,
p {
  margin: 0;
}
img {
  border: 0;
  margin: 0;
  max-width: 100%;
  vertical-align: top;
}

.van-icon-arrow-left,
.van-icon-ellipsis {
  font-size: 24px;
  color: #333;
}
.van-nav-bar__title {
  font-size: 18px;
}
.title,
.article {
  background: #fff;
  padding: 0 15px;
  overflow: hidden;
}
.con .title h3 {
  font-size: 24px;
  color: #333;
  line-height: 30px;
  padding-top: 14px;
  font-weight: 400;
}
.con .title p {
  height: 18px;
  line-height: 18px;
  color: #999;
  margin: 6px 0 4px;
}
.con .article {
  font-size: 20px;
  color: #333;
  text-indent: 2em;
}
.article p {
  line-height: 28px;
  margin-bottom: 12px;
  font-size: 20px;
  color: #333;
  text-align: justify;
}
.article h2 {
  line-height: 28px;
  margin-bottom: 16px;
  font-size: 20px;
  color: #333;
  text-align: justify;
}

.article .pic {
  vertical-align: top;
  height: auto;
  width: 100%;
  text-indent: 0;
  text-align: center;
}
.article .source {
  font-size: 18px;
  color: #999;
  display: block;
  text-align: right;
  padding-bottom: 30px;
}
.reading,
.comments {
  padding: 0 15px;
  background: #fff;
  margin-top: 12px;
}
.comments {
  margin-bottom: 50px;
}
.reading h2,
.comments h2 {
  line-height: 50px;
  border-bottom: 1px solid #e5e5e5;
  font-size: 18px;
  color: #333;
  font-weight: normal;
}
.reading li {
  border-bottom: 1px solid #eee;
  height: 98px;
}
.reading li a {
  padding: 15px 0;
  display: block;
  position: relative;
  cursor: pointer;
}
a:link,
a:visited {
  text-decoration: none;
}
.reading li img {
  float: left;
  width: 90px;
  height: 70px;
  margin-right: 10px;
}
.reading li h3 {
  color: #333;
  font-size: 15px;
  line-height: 22x;
  height: 44px;
  font-weight: normal;
}
.reading li p {
  color: #888;
  font-size: 15px;
  margin-top: 8px;
}
.reading li span:first-child {
  padding-right: 50px;
}
.con .tip {
  padding: 12px;
  border-bottom: 1px solid #ccc;
}
.con .tip img {
  float: left;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 6px;
}
.con .info {
  padding-left: 44px;
}
.con .info .name {
  line-height: 17px;
  overflow: hidden;
  font-size: 12px;
  color: #333;
}
.info .name span {
  float: right;
  width: 32px;
  font-size: 14px;
}
.info .name .van-icon {
  font-size: 20px;
  padding-right: 3px;
}

.info .report {
  margin: 3px 0 5px;
  font-size: 14px;
  line-height: 22px;
  overflow: hidden;
}
.info .time {
  font-size: 11px;
  color: #666;
  line-height: 24px;
  margin: 5px 0 0 3px;
}
.info button {
  border: 0;
  background: #f4f5f6;
  width: 56px;
  height: 24px;
  color: #666;
  border-radius: 12px;
  margin-left: 8px;
}
.go-top {
  background: rgba(0, 0, 0, 0.6)
    url(https://static.chayu.com/mobile/main/img/common/go_top.png) no-repeat
    center/25px 20px;
  position: fixed;
  bottom: 70px;
  right: 18px;
  width: 50px;
  height: 50px;
  text-align: center;
  border-radius: 50%;
}
.kiss {
  width: 100px;
  height: 150px;
  background: #000;
  position: fixed;
  top: 63px;
  right: 10px;
  border-radius: 3%;
}
.kiss ul {
  margin-top: -20px;
}
.kiss ul li {
  margin-left: 5px;
  font-size: 17px;
  color: #fff;
}
.kisss {
  width: 50px;
  height: 50px;
  margin-top: -22px;
  margin-left: 57px;
}
</style>