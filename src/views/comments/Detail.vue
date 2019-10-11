<!-- 文章详情 -->
<template>
    <div class="main">
        <van-nav-bar title="茶评详情" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
            <van-icon name="ellipsis" slot="right" />
        </van-nav-bar>
        <div class="banner">
            <div class="pic"><img src="../../assets/compictures/874591585d77801e.jpg" alt=""></div>
            <div class="card">
                <h3>[如初] 如饮·寿眉（2014）</h3>
                <ul>
                    <li><span>综合评分：8.4</span><span>茶语评分：8.6</span></li>
                    <li><span>产区：福建</span><span>茶类：白茶</span></li>
                    <li>推荐指数：
                        <van-rate v-model="value" :size="14" icon="good-job" void-icon="good-job" color="#ff8400" void-color="#eee" />
                        (值得一试)
                    </li>
                    <li>评鉴时间：2017年5月</li>
                </ul>

<<<<<<< HEAD
            </div>

        </div>
        <div class="intorduce">
            <p> 这是一款内质让人惊喜的白茶。
                普通的干茶毫不起眼，冲泡后却给人带来惊喜。首先是浓郁纯净的花香，花香中还带有发酵的果甜香，口腔以及杯底的果蜜香更是香气的加分项；其次就是甜稠的茶汤，爽口、甜润，甜得美好；再加上明显的回甘，舒服的喉韵。一切都是美好饮茶体验。</p>
            <a href="javascript:;" class="arrowbtn" @click="toggle">
                <van-icon name="arrow-down" v-if="down" />
                <van-icon name="arrow-up" v-if="up" />
            </a>
        </div>
        <div class="content">
            <van-tabs v-model="active" sticky title-inactive-color="#000" title-active-color="#9b3a19" color="#9b3a19" background="#fafafa" line-height="2px" line-width="70px">
                <van-tab title="茶评详情"></van-tab>
                <van-tab title="用户品评"></van-tab>
                <van-tab title="基本信息"></van-tab>
                <van-tab title="茶样追溯"></van-tab>
            </van-tabs>
            <div class="detail">
                <div class="brew">
                    <h2>干茶</h2>
                    <div class="tip">
                        <div>
                            <p>色泽红棕色，梗、叶被挤压在一起，茶叶活性欠佳，枝叶带有细长浅金色毫毛的芽头。</p>
                        </div>
                        <img src="../../assets/compictures/2965915870dd1daf.jpg" alt="干茶">
                    </div>
                </div>
                <div class="brew">
                    <h2>冲泡</h2>
                    <div class="tip">
                        <div>
                            <span>第1泡</span><br>
                            <i>时间： 10S 温度： 100℃</i>
                            <p>茶汤浅杏黄，清澈明亮。香气讨喜，入口和回味都带花香，茶汤清甜爽口，甜度高，回甘明显，甜感渗入喉部。</p>
                        </div>
                        <img src="../../assets/compictures/759591587585bb57.jpg" alt="干茶">
                    </div>
                    <div class="tip">
                        <div>
                            <span>第2泡</span><br>
                            <i>时间： 10S 温度： 100℃</i>
                            <p>汤色浅金黄，油润明亮。茶汤甜润，厚度增加，甜度也有少许增加，花香浓郁，带有果香，口腔爽快，回甘明显，喉咙香甜。</p>
                        </div>
                        <img src="../../assets/compictures/759591587585bb57.jpg" alt="干茶">
                    </div>
                    <div class="tip">
                        <div>
                            <span>第3泡</span><br>
                            <i>时间： 10S 温度： 100℃</i>
                            <p>汤色金黄油润，滋味甜稠顺滑，甜度很高又讨喜，微涩可忽略不计，花香清晰明了，花香中裹着果甜，杯底留有浓艳的果蜜香，回甘明显，口腔清爽、被果香填满。回甘延伸到喉咙，喉有留香。</p>
                        </div>
                        <img src="../../assets/compictures/759591587585bb57.jpg" alt="干茶">
                    </div>
                    <div class="tip">
                        <div>
                            <span>第5泡</span><br>
                            <i>时间： 20S 温度： 100℃</i>
                            <p>甜度保持不变，茶汤的稠度开始下降，花香和微发酵的果甜香融合，茶汤微带苦涩，苦涩快速化开，生津明显、回甘强，清凉感明显。</p>
                        </div>
                        <img src="../../assets/compictures/759591587585bb57.jpg" alt="干茶">
                    </div>
                    <div class="tip">
                        <div>
                            <span>第7泡</span><br>
                            <i>时间： 40S 温度： 100℃</i>
                            <p>茶汤浅金黄明亮，茶汤清甜柔和，滋味略变淡，可加长时间冲泡。</p>
                        </div>
                        <img src="../../assets/compictures/759591587585bb57.jpg" alt="干茶">
                    </div>
                </div>
                <div class="brew">
                    <h2>叶底</h2>
                    <div class="tip">
                        <div>
                            <p>色泽棕褐，活性略差，老叶尚软、梗硬。</p>
                        </div>
                        <img src="../../assets/compictures/211591587315e5b8.jpg" alt="干茶">
                    </div>
                </div>
                <div class="brew">
                    <h3>— 茶评分数 —</h3>
                    <div class="rate">
                        <span>8.4</span>
                        <i>综合评分</i>
                    </div>
                    <div class="score">
                        <span>茶语评分：</span>
                        <van-rate v-model="value1" :size="12" color="#ee0a24" void-icon="star" void-color="#eee" /><br />
                        <span>专家评分：</span>
                        <van-rate v-model="value2" :size="12" color="#ee0a24" void-icon="star" void-color="#eee" /><br /><span>达人评分：</span>
                        <van-rate v-model="value3" :size="12" color="#ee0a24" void-icon="star" void-color="#eee" /><br /><span>用户评分：</span>
                        <van-rate v-model="value4" :size="12" color="#ee0a24" void-icon="star" void-color="#eee" />
                    </div>
                </div>
            </div>
            <div class="users">
                <h3>— 用户品评(42) —</h3>
                <div class="con">
                    <div class="tip" v-for="(item,i) in repList" :key=i>
                        <img src="https://img.chayu.com/avatar/000/27/40/42/5795f42c360a6.png!8080" alt="">
                        <div class="info">
                            <p class="name">{{item.username}}
                                <span>
                                    <van-icon name="good-job-o" /><i>5</i></span></p>
                            <p class="num"><i>品评分数：8.2</i><br /><i>干茶：8.0</i><i>汤色：10.0</i><i>气味：8.0</i><i>滋味：8.0</i><i>叶底：8.0</i></p>
                            <p class="report">{{item.report}}</p>
                            <p class="time"><i>2018-07-14</i><button>回复</button></p>
                        </div>
                    </div>
                    <a class="all"><span>查看所有品评<i> &gt; </i></span></a>
                </div>
            </div>
            <div class="basic">
                <h4>基本信息</h4>
                <ul>
                    <li>品牌：如初</li>
                    <li>茶类：白茶,寿眉贡眉</li>
                    <li>产区：福建</li>
                    <li>生产时间：2016</li>
                    <li>茶树品种：无</li>
                    <li>等级：无</li>
                    <li>包装：普通装</li>
                    <li>市场价格：429元/500g</li>
                    <li>参考价：300元/350g</li>
                    <li>保质期：适宜条件下可长期保存</li>
                    <li>生产许可证：QS350914012039</li>
                    <li>执行标准：GB/T22291-2008</li>
                    <li>相关认证：QS认证</li>
                </ul>
            </div>
            <div class="source">
                <h4>审评茶来源</h4>
                <ul>
                    <li>茶样来源：暂无</li>
                    <li>存放地点：暂无</li>
                    <li>存放温度：暂无</li>
                    <li>湿度：暂无</li>
                    <li>存放条件：暂无</li>
                    <li>可追溯期：暂无</li>
                </ul>
                <h4>相关阅读</h4>
                <ul>
                    <li><a href="https://m.chayu.com/article/127683">百茶人系列 | 专访邓时海：传说中的“普洱茶第一人”</a></li>
                    <li><a href="https://m.chayu.com/article/127739">专访嫩绿创始人廖韦佳| 白富美放弃了几十亿家产，开了个茶馆</a></li>
                </ul>
            </div>
            <div class="footer">

            </div>
=======
      </div>

    </div>
    <div class="intorduce">
      <p> 这是一款内质让人惊喜的白茶。
        普通的干茶毫不起眼，冲泡后却给人带来惊喜。首先是浓郁纯净的花香，花香中还带有发酵的果甜香，口腔以及杯底的果蜜香更是香气的加分项；其次就是甜稠的茶汤，爽口、甜润，甜得美好；再加上明显的回甘，舒服的喉韵。一切都是美好饮茶体验。</p>
      <a
        href="javascript:;"
        class="arrowbtn"
        @click="toggle"
      >
        <van-icon
          name="arrow-down"
          v-if="down"
        />
        <van-icon
          name="arrow-up"
          v-if="up"
        />
      </a>
    </div>
    <div class="content">

      <van-tabs
        v-model="active"
        sticky
        title-inactive-color="#000"
        title-active-color="#9b3a19"
        color="#9b3a19"
        background="#fafafa"
        line-height="2px"
        line-width="70px"
      >
        <van-tab title="茶评详情"></van-tab>
        <van-tab title="用户品评"></van-tab>
        <van-tab title="基本信息"></van-tab>
        <van-tab title="茶样追溯"></van-tab>
        <div class="detail">
          <div class="brew">
            <h2>干茶</h2>
            <div class="tip">
              <div>
                <p>色泽红棕色，梗、叶被挤压在一起，茶叶活性欠佳，枝叶带有细长浅金色毫毛的芽头。</p>
              </div>
              <img
                src="../../assets/compictures/2965915870dd1daf.jpg"
                alt="干茶"
              >
            </div>
          </div>
          <div class="brew">
            <h2>冲泡</h2>
            <div class="tip">
              <div>
                <span>第1泡</span><br>
                <i>时间： 10S 温度： 100℃</i>
                <p>茶汤浅杏黄，清澈明亮。香气讨喜，入口和回味都带花香，茶汤清甜爽口，甜度高，回甘明显，甜感渗入喉部。</p>
              </div>
              <img
                src="../../assets/compictures/759591587585bb57.jpg"
                alt="干茶"
              >
            </div>
            <div class="tip">
              <div>
                <span>第2泡</span><br>
                <i>时间： 10S 温度： 100℃</i>
                <p>汤色浅金黄，油润明亮。茶汤甜润，厚度增加，甜度也有少许增加，花香浓郁，带有果香，口腔爽快，回甘明显，喉咙香甜。</p>
              </div>
              <img
                src="../../assets/compictures/759591587585bb57.jpg"
                alt="干茶"
              >
            </div>
            <div class="tip">
              <div>
                <span>第3泡</span><br>
                <i>时间： 10S 温度： 100℃</i>
                <p>汤色金黄油润，滋味甜稠顺滑，甜度很高又讨喜，微涩可忽略不计，花香清晰明了，花香中裹着果甜，杯底留有浓艳的果蜜香，回甘明显，口腔清爽、被果香填满。回甘延伸到喉咙，喉有留香。</p>
              </div>
              <img
                src="../../assets/compictures/759591587585bb57.jpg"
                alt="干茶"
              >
            </div>
            <div class="tip">
              <div>
                <span>第5泡</span><br>
                <i>时间： 20S 温度： 100℃</i>
                <p>甜度保持不变，茶汤的稠度开始下降，花香和微发酵的果甜香融合，茶汤微带苦涩，苦涩快速化开，生津明显、回甘强，清凉感明显。</p>
              </div>
              <img
                src="../../assets/compictures/759591587585bb57.jpg"
                alt="干茶"
              >
            </div>
            <div class="tip">
              <div>
                <span>第7泡</span><br>
                <i>时间： 40S 温度： 100℃</i>
                <p>茶汤浅金黄明亮，茶汤清甜柔和，滋味略变淡，可加长时间冲泡。</p>
              </div>
              <img
                src="../../assets/compictures/759591587585bb57.jpg"
                alt="干茶"
              >
            </div>
          </div>
          <div class="brew">
            <h2>叶底</h2>
            <div class="tip">
              <div>
                <p>色泽棕褐，活性略差，老叶尚软、梗硬。</p>
              </div>
              <img
                src="../../assets/compictures/211591587315e5b8.jpg"
                alt="干茶"
              >
            </div>
          </div>
          <div class="brew">
            <h3>— 茶评分数 —</h3>
            <div class="rate">
              <span>8.4</span>
              <i>综合评分</i>
            </div>
            <div class="score">
              <span>茶语评分：</span>
              <van-rate
                v-model="value1"
                :size="12"
                color="#ee0a24"
                void-icon="star"
                void-color="#eee"
              /><br />
              <span>专家评分：</span>
              <van-rate
                v-model="value2"
                :size="12"
                color="#ee0a24"
                void-icon="star"
                void-color="#eee"
              /><br /><span>达人评分：</span>
              <van-rate
                v-model="value3"
                :size="12"
                color="#ee0a24"
                void-icon="star"
                void-color="#eee"
              /><br /><span>用户评分：</span>
              <van-rate
                v-model="value4"
                :size="12"
                color="#ee0a24"
                void-icon="star"
                void-color="#eee"
              />
            </div>
          </div>
        </div>
        <div class="users">
          <h3>— 用户品评(42) —</h3>
          <div class="con">
            <div
              class="tip"
              v-for="(item,i) in repList"
              :key=i
            >
              <img
                src="https://img.chayu.com/avatar/000/27/40/42/5795f42c360a6.png!8080"
                alt=""
              >
              <div class="info">
                <p class="name">{{item.username}}
                  <span>
                    <van-icon name="good-job-o" /><i>5</i></span></p>
                <p class="num"><i>品评分数：8.2</i><br /><i>干茶：8.0</i><i>汤色：10.0</i><i>气味：8.0</i><i>滋味：8.0</i><i>叶底：8.0</i></p>
                <p class="report">{{item.report}}</p>
                <p class="time"><i>2018-07-14</i><button>回复</button></p>
              </div>
            </div>
            <a class="all"><span>查看所有品评<i> &gt; </i></span></a>
          </div>
        </div>
        <div class="basic">
          <h4>基本信息</h4>
          <ul>
            <li>品牌：如初</li>
            <li>茶类：白茶,寿眉贡眉</li>
            <li>产区：福建</li>
            <li>生产时间：2016</li>
            <li>茶树品种：无</li>
            <li>等级：无</li>
            <li>包装：普通装</li>
            <li>市场价格：429元/500g</li>
            <li>参考价：300元/350g</li>
            <li>保质期：适宜条件下可长期保存</li>
            <li>生产许可证：QS350914012039</li>
            <li>执行标准：GB/T22291-2008</li>
            <li>相关认证：QS认证</li>
          </ul>
        </div>
        <div class="source">
          <h4>审评茶来源</h4>
          <ul>
            <li>茶样来源：暂无</li>
            <li>存放地点：暂无</li>
            <li>存放温度：暂无</li>
            <li>湿度：暂无</li>
            <li>存放条件：暂无</li>
            <li>可追溯期：暂无</li>
          </ul>
          <h4>相关阅读</h4>
          <ul>
            <li><a href="https://m.chayu.com/article/127683">百茶人系列 | 专访邓时海：传说中的“普洱茶第一人”</a></li>
            <li><a href="https://m.chayu.com/article/127739">专访嫩绿创始人廖韦佳| 白富美放弃了几十亿家产，开了个茶馆</a></li>
          </ul>
        </div>
        <div class="footer">
        </div>
      </van-tabs>
>>>>>>> ef4694ced23fba8c0b86e1435d1723b2cab9a2b2

        </div>
        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" />
            <van-goods-action-icon icon="star-o" text="收藏" />
            <van-goods-action-icon icon="share" text="分享" />
            <van-goods-action-button text="暂无茶样" color="#999" style="border-radius:0;height:50px;" />
            <van-goods-action-button color="#893e20" text="我要评茶" style="border-radius:0;height:50px;margin:0;" />
        </van-goods-action>
    </div>
</template>

<script>
export default {
    name: "Detail",
    data() {
        return {
            value: 3,
            value1: 3,
            value2: 4,
            value3: 3,
            value4: 4,
            icon: "arrow-dowm",
            up: false,
            down: true,
            active: 2,
            repList: [
                {
                    username: "张三",
                    report: "收到快递的我惊呆了，东西超好超划算。"
                },
                {
                    username: "张三",
                    report: "收到快递的我惊呆了，东西超好超划算。"
                },
                {
                    username: "张三",
                    report: "收到快递的我惊呆了，东西超好超划算。"
                },
                {
                    username: "张三",
                    report: "收到快递的我惊呆了，东西超好超划算。"
                }
            ]
        };
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1);
        },
        onClickRight() {
            this.$notify("这里是导航栏");
        },
        toggle() {
            var pp = document.querySelector(".intorduce");
            console.log(pp);
            pp.classList.toggle("presh");
            if (this.down == true) {
                this.down = false;
                this.up = true;
            } else {
                (this.down = true), (this.up = false);
            }
        }
    }
};
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
img {
    border: 0;
    margin: 0;
    max-width: 100%;
    vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
p {
    margin: 0;
}
.banner {
    background: #6b6563 url("../../assets/compictures/head.png") no-repeat 0 0/100%
        auto;
    height: 160px;
    width: 100%;
    overflow: hidden;
}
.pic {
    width: 98px;
    height: 130px;
    margin: 15px 10px;
    float: left;
}
.pic img {
    width: 100%;
}
.card {
    float: left;
    color: #fff;
}
.card h3 {
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    margin-top: 15px;
    margin-bottom: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.card ul {
    font-size: 12px;
    line-height: 20px;
}
.card ul li:first-child {
    height: 41px;
}
.intorduce {
    background: #fff;
    padding: 0 12px 8px;
    margin-bottom: 10px;
    overflow: hidden;
}
.intorduce p {
    font-size: 14px;
    color: #333;
    line-height: 22px;
    height: 40px;
    overflow: hidden;
}
.presh p {
    height: 130px;
    overflow: hidden;
}
.arrowbtn {
    display: block;
    width: 100%;
    height: 20px;
    background: #fff;
    font-size: 30px;
    text-align: center;
    outline: none;
}
.arrowbtn .van-icon {
    display: block;
    color: #666;
    font-size: 14px;
    line-height: 20px;
    cursor: pointer;
}
.detail {
    padding: 15px 12px 0;
    background: #fff;
}
.detail .brew {
    overflow: hidden;
}
.detail .tip {
    padding-bottom: 15px;
    overflow: hidden;
}
.detail h2 {
    background: url("../../assets/compictures/title_bg.png") no-repeat 0 0/100%
        auto;
    width: 165px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    font-size: 14px;
    font-weight: normal;
    color: #fff;
    margin: 0 auto 10px;
}
.brew .tip div {
    float: left;
    font-size: 14px;
    color: #000;
    line-height: 22px;
    width: 176px;
    display: block;

    margin-right: 10px;
}
.detail p {
    margin: 0;
}
.detail .tip span {
    color: #ff8400 !important;
}
.detail .tip i {
    display: block;
    color: #999;
    font-size: 10px;
    margin: 0 0 6px 0;
}
.detail img {
    width: 165px;
    height: 124px;
    float: right;
}
.brew h3,
.users > h3 {
    margin: 0;
    text-align: center;
    font-size: 14px;
    height: 44px;
    line-height: 44px;
}
.rate,
.score {
    float: left;
    width: 168px;
    height: 80px;
    text-align: center;
}
.rate {
    border-right: 1px solid #e5e5e5;
}
.rate span {
    font-size: 0.64rem;
    color: #9b3a19;
    margin: 0.373333rem 0 0.306667rem;
    font-weight: bold;
    display: block;
}
.rate i {
    font-size: 16px;
    color: #333;
}
.score span {
    font-size: 12px;
    color: #000;
    margin-bottom: 6px;
    line-height: 12px;
}
.users {
    margin-top: 10px;
    background: #fff;
    width: 100%;
}
.users .tip {
    padding: 5px 12px 13px;
}
.users .tip img {
    float: left;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    margin-right: 6px;
}
.users .info {
    padding-left: 34px;
}
.users .info .name {
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
.info .num {
    font-size: 11px;
    color: #893e20;
    line-height: 20px;
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
    margin-top: 5px;
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
.users .con {
    overflow: hidden;
}
.users .all {
    display: block;
    height: 36px;
    line-height: 36px;
    font-size: 13px;
    color: #000;
    text-align: center;
}
.users .all i {
    font-size: 12px;
    line-height: 12px;
    color: #fff;
    background: #999;
    vertical-align: middle;
    margin-left: 3px;
}
.basic,
.source {
    margin-top: 12px;
    background: #fff;
    padding: 2px 12px 10px;
}
.basic h4,
.source h4 {
    font-size: 13px;
    line-height: 38px;
    color: #000;
}
.basic ul li,
.source ul li {
    font-size: 13px;
    color: #000;
    line-height: 20px;
}
.source ul:last-child a::before {
    content: "";
    width: 2px;
    height: 2px;
    background: #576b95;
    vertical-align: middle;
    display: inline-block;
    margin-right: 3px;
}
.source ul:last-child a {
    color: #576b95;
}
.footer {
    height: 60px;
}
.van-icon-arrow-left,
.van-icon-ellipsis {
    font-size: 24px;
    color: #333;
}
.van-nav-bar__title {
    font-size: 18px;
}
</style>