<template>
  <div class="pinjian" @click="show1=false">
    <!-- header -->
    <div class="head">
      <van-nav-bar fixed title="茶语拼件" left-arrow @click-left="onClickLeft">
        <van-icon class="ml10" name="ellipsis" slot="right" @click.stop="show1=!show1" />
      </van-nav-bar>

      <!-- 右侧弹出 -->
      <div class="kiss" v-show="show1">
        <div class="triangle_border_up">
          <span></span>
        </div>
        <ul>
          <li @click="onMsg">
            <van-icon name="chat-o" />&nbsp;消息
          </li>
          <hr />
          <li @click="onHome">
            <van-icon name="wap-home-o" />&nbsp;首页
          </li>
          <hr />
          <li @click="onPersonal">
            <van-icon name="user-o" />&nbsp;我的
          </li>
        </ul>
      </div>
    </div>

    <!-- banner -->
    <div class="banner">
      <van-image src="https://img.chayu.com/banner/1710/18/71259e704fceadae.jpg"></van-image>
    </div>
    <section class="pj-lists">
      <aside>
        <div class="img">
          <em class="tag"></em>
          <a href="#">
            <img src="https://img.chayu.com/banner/1909/29/4935d9078f80c451.jpg" alt />
          </a>
        </div>
        <p class="txt clearfix">
          <span class="fl">活动倒计时：5天7时21分</span>
          <span class="fr">当前参与人数9人</span>
        </p>
        <div class="pj-progress">
          <div class="progress-b">
            <!--当进度小于100%大于0-->
            <p class="progress-bar" style="width: 80%;"></p>
            <span class="progress-btn" style="left: 80%;">
              80%
              <em>本轮进度</em>
            </span>
          </div>
        </div>
        <ul class="pj-collect">
          <li>
            <em>本轮剩余</em>
            <strong>1个</strong>
          </li>
          <li>
            <em>当前轮次</em>
            <strong>第2轮</strong>
          </li>
          <li>
            <em>成交金额</em>
            <strong>0.09万</strong>
          </li>
        </ul>
      </aside>
      <aside>
        <div class="img">
          <em class="tag"></em>
          <a href="#">
            <img src="https://img.chayu.com/banner/1909/29/4935d90815db1261.jpg" alt />
          </a>
        </div>
        <p class="txt clearfix">
          <span class="fl">活动倒计时：5天7时21分</span>
          <span class="fr">当前参与人数6人</span>
        </p>
        <div class="pj-progress">
          <div class="progress-b">
            <!--当进度小于100%大于0-->
            <p class="progress-bar" style="width: 70%;"></p>
            <span class="progress-btn" style="left: 70%;">
              70%
              <em>本轮进度</em>
            </span>
          </div>
        </div>
        <ul class="pj-collect">
          <li>
            <em>本轮剩余</em>
            <strong>3个</strong>
          </li>
          <li>
            <em>当前轮次</em>
            <strong>第1轮</strong>
          </li>
          <li>
            <em>成交金额</em>
            <strong>0.08万</strong>
          </li>
        </ul>
      </aside>
      <aside>
        <div class="img">
          <em class="tag"></em>
          <a href="#">
            <img src="https://img.chayu.com/banner/1909/29/7895d9081e1617b9.jpg" alt />
          </a>
        </div>
        <p class="txt clearfix">
          <span class="fl">活动倒计时：5天7时21分</span>
          <span class="fr">当前参与人数10人</span>
        </p>
        <div class="pj-progress">
          <div class="progress-b">
            <!--当进度等于0-->
            <p class="progress-bar" style="width: 0%;"></p>
            <span class="progress-btn progress-btn-start" style="left: 0%;">
              0%
              <em>本轮进度</em>
            </span>
          </div>
        </div>
        <ul class="pj-collect">
          <li>
            <em>本轮剩余</em>
            <strong>5个</strong>
          </li>
          <li>
            <em>当前轮次</em>
            <strong>第4轮</strong>
          </li>
          <li>
            <em>成交金额</em>
            <strong>0.35万</strong>
          </li>
        </ul>
      </aside>
      <aside>
        <div class="img">
          <em class="tag"></em>
          <a href="http://m.shiji.chayu.com/pinjian/460">
            <img src="https://img.chayu.com/banner/1909/29/9435d9083d252d11.jpg" alt />
          </a>
        </div>
        <p class="txt clearfix">
          <span class="fl">活动倒计时：5天7时21分</span>
          <span class="fr">当前参与人数6人</span>
        </p>
        <div class="pj-progress">
          <div class="progress-b">
            <!--当进度小于100%大于0-->
            <p class="progress-bar" style="width: 20%;"></p>
            <span class="progress-btn" style="left: 20%;">
              20%
              <em>本轮进度</em>
            </span>
          </div>
        </div>
        <ul class="pj-collect">
          <li>
            <em>本轮剩余</em>
            <strong>4个</strong>
          </li>
          <li>
            <em>当前轮次</em>
            <strong>第3轮</strong>
          </li>
          <li>
            <em>成交金额</em>
            <strong>0.66万</strong>
          </li>
        </ul>
      </aside>
      <aside>
        <div class="img">
          <em class="tag"></em>
          <a href="http://m.shiji.chayu.com/pinjian/454">
            <img src="https://img.chayu.com/banner/1909/29/9395d90833075415.jpg" alt />
          </a>
        </div>
        <p class="txt clearfix">
          <span class="fl">活动倒计时：5天7时21分</span>
          <span class="fr">当前参与人数26人</span>
        </p>
        <div class="pj-progress">
          <div class="progress-b">
            <!--当进度小于100%大于0-->
            <p class="progress-bar" style="width: 30%;"></p>
            <span class="progress-btn" style="left: 30%;">
              30%
              <em>本轮进度</em>
            </span>
          </div>
        </div>
        <ul class="pj-collect">
          <li>
            <em>本轮剩余</em>
            <strong>7盒</strong>
          </li>
          <li>
            <em>当前轮次</em>
            <strong>第5轮</strong>
          </li>
          <li>
            <em>成交金额</em>
            <strong>1.04万</strong>
          </li>
        </ul>
      </aside>
      <aside>
        <div class="img">
          <em class="tag"></em>
          <a href="http://m.shiji.chayu.com/pinjian/461">
            <img src="https://img.chayu.com/banner/1909/29/9385d90836f5237a.jpg" alt />
          </a>
        </div>
        <p class="txt clearfix">
          <span class="fl">活动倒计时：5天7时21分</span>
          <span class="fr">当前参与人数6人</span>
        </p>
        <div class="pj-progress">
          <div class="progress-b">
            <!--当进度小于100%大于0-->
            <p class="progress-bar" style="width: 60%;"></p>
            <span class="progress-btn" style="left: 60%;">
              60%
              <em>本轮进度</em>
            </span>
          </div>
        </div>
        <ul class="pj-collect">
          <li>
            <em>本轮剩余</em>
            <strong>2个</strong>
          </li>
          <li>
            <em>当前轮次</em>
            <strong>第2轮</strong>
          </li>
          <li>
            <em>成交金额</em>
            <strong>0.96万</strong>
          </li>
        </ul>
      </aside>
      <aside>
        <div class="img">
          <em class="tag"></em>
          <a href="http://m.shiji.chayu.com/pinjian/455">
            <img src="https://img.chayu.com/banner/1909/29/1125d90841c11a10.jpg" alt />
          </a>
        </div>
        <p class="txt clearfix">
          <span class="fl">活动倒计时：5天7时21分</span>
          <span class="fr">当前参与人数9人</span>
        </p>
        <div class="pj-progress">
          <div class="progress-b">
            <!--当进度小于100%大于0-->
            <p class="progress-bar" style="width: 40%;"></p>
            <span class="progress-btn" style="left: 40%;">
              40%
              <em>本轮进度</em>
            </span>
          </div>
        </div>
        <ul class="pj-collect">
          <li>
            <em>本轮剩余</em>
            <strong>3盒</strong>
          </li>
          <li>
            <em>当前轮次</em>
            <strong>第3轮</strong>
          </li>
          <li>
            <em>成交金额</em>
            <strong>1.17万</strong>
          </li>
        </ul>
      </aside>
      <aside>
        <div class="img">
          <em class="tag"></em>
          <a href="http://m.shiji.chayu.com/pinjian/459">
            <img src="https://img.chayu.com/banner/1909/29/9055d9084a2d36fb.jpg" alt />
          </a>
        </div>
        <p class="txt clearfix">
          <span class="fl">活动倒计时：5天7时21分</span>
          <span class="fr">当前参与人数7人</span>
        </p>
        <div class="pj-progress">
          <div class="progress-b">
            <!--当进度小于100%大于0-->
            <p class="progress-bar" style="width: 40%;"></p>
            <span class="progress-btn" style="left: 40%;">
              40%
              <em>本轮进度</em>
            </span>
          </div>
        </div>
        <ul class="pj-collect">
          <li>
            <em>本轮剩余</em>
            <strong>3套</strong>
          </li>
          <li>
            <em>当前轮次</em>
            <strong>第2轮</strong>
          </li>
          <li>
            <em>成交金额</em>
            <strong>0.90万</strong>
          </li>
        </ul>
      </aside>
      <aside>
        <div class="img">
          <em class="tag"></em>
          <a href="http://m.shiji.chayu.com/pinjian/451">
            <img src="https://img.chayu.com/banner/1909/11/1855d7863af8e88f.jpg" alt />
          </a>
        </div>
        <p class="txt clearfix">
          <span class="fl">活动倒计时：9天7时21分</span>
          <span class="fr">当前参与人数54人</span>
        </p>
        <div class="pj-progress">
          <div class="progress-b">
            <!--当进度小于100%大于0-->
            <p class="progress-bar" style="width: 80%;"></p>
            <span class="progress-btn" style="left: 80%;">
              80%
              <em>本轮进度</em>
            </span>
          </div>
        </div>
        <ul class="pj-collect">
          <li>
            <em>本轮剩余</em>
            <strong>1盒</strong>
          </li>
          <li>
            <em>当前轮次</em>
            <strong>第15轮</strong>
          </li>
          <li>
            <em>成交金额</em>
            <strong>1.69万</strong>
          </li>
        </ul>
      </aside>
      <aside>
        <div class="img">
          <em class="tag"></em>
          <a href="http://m.shiji.chayu.com/pinjian/452">
            <img src="https://img.chayu.com/banner/1909/11/7555d786294a9601.jpg" alt />
          </a>
        </div>
        <p class="txt clearfix">
          <span class="fl">活动倒计时：9天7时21分</span>
          <span class="fr">当前参与人数17人</span>
        </p>
        <div class="pj-progress">
          <div class="progress-b">
            <!--当进度小于100%大于0-->
            <p class="progress-bar" style="width: 60%;"></p>
            <span class="progress-btn" style="left: 60%;">
              60%
              <em>本轮进度</em>
            </span>
          </div>
        </div>
        <ul class="pj-collect">
          <li>
            <em>本轮剩余</em>
            <strong>2盒</strong>
          </li>
          <li>
            <em>当前轮次</em>
            <strong>第6轮</strong>
          </li>
          <li>
            <em>成交金额</em>
            <strong>1.37万</strong>
          </li>
        </ul>
      </aside>
      <aside>
        <div class="img">
          <em class="tag"></em>
          <a href="http://m.shiji.chayu.com/pinjian/435">
            <img src="https://img.chayu.com/banner/1908/28/7845d65f6751f448.jpg" alt />
          </a>
        </div>
        <p class="txt clearfix">
          <span class="fl">活动倒计时：5天7时21分</span>
          <span class="fr">当前参与人数46人</span>
        </p>
        <div class="pj-progress">
          <div class="progress-b">
            <!--当进度等于0-->
            <p class="progress-bar" style="width: 0%;"></p>
            <span class="progress-btn progress-btn-start" style="left: 0%;">
              0%
              <em>本轮进度</em>
            </span>
          </div>
        </div>
        <ul class="pj-collect">
          <li>
            <em>本轮剩余</em>
            <strong>5套</strong>
          </li>
          <li>
            <em>当前轮次</em>
            <strong>第13轮</strong>
          </li>
          <li>
            <em>成交金额</em>
            <strong>2.39万</strong>
          </li>
        </ul>
      </aside>
      <aside>
        <div class="img">
          <em class="tag"></em>
          <a href="http://m.shiji.chayu.com/pinjian/432">
            <img src="https://img.chayu.com/banner/1908/28/6965d65f40e1c45c.jpg" alt />
          </a>
        </div>
        <p class="txt clearfix">
          <span class="fl">活动倒计时：5天7时21分</span>
          <span class="fr">当前参与人数81人</span>
        </p>
        <div class="pj-progress">
          <div class="progress-b">
            <!--当进度小于100%大于0-->
            <p class="progress-bar" style="width: 60%;"></p>
            <span class="progress-btn" style="left: 60%;">
              60%
              <em>本轮进度</em>
            </span>
          </div>
        </div>
        <ul class="pj-collect">
          <li>
            <em>本轮剩余</em>
            <strong>2把</strong>
          </li>
          <li>
            <em>当前轮次</em>
            <strong>第20轮</strong>
          </li>
          <li>
            <em>成交金额</em>
            <strong>0.57万</strong>
          </li>
        </ul>
      </aside>
      <aside>
        <div class="img">
          <em class="tag"></em>
          <a href="http://m.shiji.chayu.com/pinjian/430">
            <img src="https://img.chayu.com/banner/1908/28/8385d65f574a79aa.jpg" alt />
          </a>
        </div>
        <p class="txt clearfix">
          <span class="fl">活动倒计时：5天7时21分</span>
          <span class="fr">当前参与人数17人</span>
        </p>
        <div class="pj-progress">
          <div class="progress-b">
            <!--当进度小于100%大于0-->
            <p class="progress-bar" style="width: 60%;"></p>
            <span class="progress-btn" style="left: 60%;">
              60%
              <em>本轮进度</em>
            </span>
          </div>
        </div>
        <ul class="pj-collect">
          <li>
            <em>本轮剩余</em>
            <strong>2把</strong>
          </li>
          <li>
            <em>当前轮次</em>
            <strong>第4轮</strong>
          </li>
          <li>
            <em>成交金额</em>
            <strong>1.73万</strong>
          </li>
        </ul>
      </aside>
      <aside>
        <div class="img">
          <em class="tag"></em>
          <a href="http://m.shiji.chayu.com/pinjian/434">
            <img src="https://img.chayu.com/banner/1908/28/4825d65f649dd178.jpg" alt />
          </a>
        </div>
        <p class="txt clearfix">
          <span class="fl">活动倒计时：9天7时21分</span>
          <span class="fr">当前参与人数5人</span>
        </p>
        <div class="pj-progress">
          <div class="progress-b">
            <!--当进度等于0-->
            <p class="progress-bar" style="width: 0%;"></p>
            <span class="progress-btn progress-btn-start" style="left: 0%;">
              0%
              <em>本轮进度</em>
            </span>
          </div>
        </div>
        <ul class="pj-collect">
          <li>
            <em>本轮剩余</em>
            <strong>5把</strong>
          </li>
          <li>
            <em>当前轮次</em>
            <strong>第2轮</strong>
          </li>
          <li>
            <em>成交金额</em>
            <strong>0.85万</strong>
          </li>
        </ul>
      </aside>
      <aside>
        <div class="img">
          <em class="tag"></em>
          <a href="http://m.shiji.chayu.com/pinjian/421">
            <img src="https://img.chayu.com/banner/1908/09/9475d4d2a2c47ba9.jpg" alt />
          </a>
        </div>
        <p class="txt clearfix">
          <span class="fl">活动倒计时：9天7时21分</span>
          <span class="fr">当前参与人数11人</span>
        </p>
        <div class="pj-progress">
          <div class="progress-b">
            <!--当进度等于0-->
            <p class="progress-bar" style="width: 0%;"></p>
            <span class="progress-btn progress-btn-start" style="left: 0%;">
              0%
              <em>本轮进度</em>
            </span>
          </div>
        </div>
        <ul class="pj-collect">
          <li>
            <em>本轮剩余</em>
            <strong>5只</strong>
          </li>
          <li>
            <em>当前轮次</em>
            <strong>第4轮</strong>
          </li>
          <li>
            <em>成交金额</em>
            <strong>0.52万</strong>
          </li>
        </ul>
      </aside>
      <aside>
        <div class="img">
          <em class="tag"></em>
          <a href="http://m.shiji.chayu.com/pinjian/415">
            <img src="https://img.chayu.com/banner/1908/09/7765d4d2ae066d92.jpg" alt />
          </a>
        </div>
        <p class="txt clearfix">
          <span class="fl">拼件结束：第7轮拼件成功</span>
          <span class="fr">当前参与人数31人</span>
        </p>
        <div class="pj-progress">
          <div class="progress-b">
            <!--当进度等于100%时-->
            <p class="progress-bar" style="width: 100%;"></p>
            <span class="progress-btn progress-btn-end" style="left: 100%;">
              100%
              <em>本轮进度</em>
            </span>
          </div>
        </div>
        <ul class="pj-collect">
          <li>
            <em>本轮剩余</em>
            <strong>0只</strong>
          </li>
          <li>
            <em>当前轮次</em>
            <strong>第7轮</strong>
          </li>
          <li>
            <em>成交金额</em>
            <strong>1.14万</strong>
          </li>
        </ul>
      </aside>
      <aside>
        <div class="img">
          <em class="tag"></em>
          <a href="http://m.shiji.chayu.com/pinjian/401">
            <img src="https://img.chayu.com/banner/1907/31/4925d411944b4f02.jpg" alt />
          </a>
        </div>
        <p class="txt clearfix">
          <span class="fl">活动倒计时：9天7时21分</span>
          <span class="fr">当前参与人数38人</span>
        </p>
        <div class="pj-progress">
          <div class="progress-b">
            <!--当进度等于0-->
            <p class="progress-bar" style="width: 0%;"></p>
            <span class="progress-btn progress-btn-start" style="left: 0%;">
              0%
              <em>本轮进度</em>
            </span>
          </div>
        </div>
        <ul class="pj-collect">
          <li>
            <em>本轮剩余</em>
            <strong>10份</strong>
          </li>
          <li>
            <em>当前轮次</em>
            <strong>第6轮</strong>
          </li>
          <li>
            <em>成交金额</em>
            <strong>1.30万</strong>
          </li>
        </ul>
      </aside>
      <aside>
        <div class="img">
          <em class="tag"></em>
          <a href="http://m.shiji.chayu.com/pinjian/307">
            <img
              src="https://img.chayu.com/banner/1905/09/3265cd3e996bf01c.jpg"
              alt="去年茶今年价，18年头春七子饼现货福利开拼，超高性价比"
            />
          </a>
          <p>去年茶今年价，18年头春七子饼现货福利开拼，超高性价比</p>
        </div>
        <p class="txt clearfix">
          <span class="fl">活动倒计时：12天7时21分</span>
          <span class="fr">当前参与人数275人</span>
        </p>
        <div class="pj-progress">
          <div class="progress-b">
            <!--当进度小于100%大于0-->
            <p class="progress-bar" style="width: 50%;"></p>
            <span class="progress-btn" style="left: 50%;">
              50%
              <em>本轮进度</em>
            </span>
          </div>
        </div>
        <ul class="pj-collect">
          <li>
            <em>本轮剩余</em>
            <strong>3提</strong>
          </li>
          <li>
            <em>当前轮次</em>
            <strong>第80轮</strong>
          </li>
          <li>
            <em>成交金额</em>
            <strong>19.21万</strong>
          </li>
        </ul>
      </aside>
      <aside>
        <div class="img">
          <em class="tag"></em>
          <a href="http://m.shiji.chayu.com/pinjian/249">
            <img
              src="https://img.chayu.com/banner/1810/08/6465bbb1f2575ec6.jpg"
              alt="2018年帕沙铁饼，勐海知名小产区百年大树，高性价比名山名寨普洱生茶"
            />
          </a>
          <p>2018年帕沙铁饼，勐海知名小产区百年大树，高性价比名山名寨普洱生茶</p>
        </div>
        <p class="txt clearfix">
          <span class="fl">活动倒计时：9天7时21分</span>
          <span class="fr">当前参与人数106人</span>
        </p>
        <div class="pj-progress">
          <div class="progress-b">
            <!--当进度小于100%大于0-->
            <p class="progress-bar" style="width: 28%;"></p>
            <span class="progress-btn" style="left: 28%;">
              28%
              <em>本轮进度</em>
            </span>
          </div>
        </div>
        <ul class="pj-collect">
          <li>
            <em>本轮剩余</em>
            <strong>5饼</strong>
          </li>
          <li>
            <em>当前轮次</em>
            <strong>第25轮</strong>
          </li>
          <li>
            <em>成交金额</em>
            <strong>8.01万</strong>
          </li>
        </ul>
      </aside>
      <aside>
        <div class="img">
          <em class="tag">茶语·优选</em>
          <a href="http://m.shiji.chayu.com/pinjian/245">
            <img
              src="https://img.chayu.com/banner/1808/10/4835b6d3b79c916e.jpg"
              alt="水滴形斑锡茶叶罐，高纯度锡原料，设计小巧，精细打磨，储茶良器"
            />
          </a>
          <p>水滴形斑锡茶叶罐，高纯度锡原料，设计小巧，精细打磨，储茶良器</p>
        </div>
        <p class="txt clearfix">
          <span class="fl">活动倒计时：5天7时21分</span>
          <span class="fr">当前参与人数69人</span>
        </p>
        <div class="pj-progress">
          <div class="progress-b">
            <!--当进度小于100%大于0-->
            <p class="progress-bar" style="width: 20%;"></p>
            <span class="progress-btn" style="left: 20%;">
              20%
              <em>本轮进度</em>
            </span>
          </div>
        </div>
        <ul class="pj-collect">
          <li>
            <em>本轮剩余</em>
            <strong>4个</strong>
          </li>
          <li>
            <em>当前轮次</em>
            <strong>第17轮</strong>
          </li>
          <li>
            <em>成交金额</em>
            <strong>4.70万</strong>
          </li>
        </ul>
      </aside>
      <aside>
        <div class="img">
          <em class="tag">茶语·优选</em>
          <a href="http://m.shiji.chayu.com/pinjian/200">
            <img
              src="https://img.chayu.com/banner/1805/19/3825b0039df5b40e.jpg"
              alt="芽庄野生虫漏，品鉴级沉香，收藏馈赠不二之选，拼件福利价可得"
            />
          </a>
          <p>芽庄野生虫漏，品鉴级沉香，收藏馈赠不二之选，拼件福利价可得</p>
        </div>
        <p class="txt clearfix">
          <span class="fl">活动倒计时：5天7时21分</span>
          <span class="fr">当前参与人数77人</span>
        </p>
        <div class="pj-progress">
          <div class="progress-b">
            <!--当进度小于100%大于0-->
            <p class="progress-bar" style="width: 83%;"></p>
            <span class="progress-btn" style="left: 83%;">
              83%
              <em>本轮进度</em>
            </span>
          </div>
        </div>
        <ul class="pj-collect">
          <li>
            <em>本轮剩余</em>
            <strong>1管</strong>
          </li>
          <li>
            <em>当前轮次</em>
            <strong>第19轮</strong>
          </li>
          <li>
            <em>成交金额</em>
            <strong>5.07万</strong>
          </li>
        </ul>
      </aside>
      <aside>
        <div class="img">
          <em class="tag">茗星·作品</em>
          <a href="http://m.shiji.chayu.com/pinjian/248">
            <img
              src="https://img.chayu.com/banner/1809/13/3375b9a0d4630f6c.jpg"
              alt="全手工陶艺主人杯野菊系列，个性原创釉色，造型美观，趁手好用，两款可选"
            />
          </a>
          <p>全手工陶艺主人杯野菊系列，个性原创釉色，造型美观，趁手好用，两款可选</p>
        </div>
        <p class="txt clearfix">
          <span class="fl">活动倒计时：9天7时21分</span>
          <span class="fr">当前参与人数36人</span>
        </p>
        <div class="pj-progress">
          <div class="progress-b">
            <!--当进度小于100%大于0-->
            <p class="progress-bar" style="width: 60%;"></p>
            <span class="progress-btn" style="left: 60%;">
              60%
              <em>本轮进度</em>
            </span>
          </div>
        </div>
        <ul class="pj-collect">
          <li>
            <em>本轮剩余</em>
            <strong>2只</strong>
          </li>
          <li>
            <em>当前轮次</em>
            <strong>第10轮</strong>
          </li>
          <li>
            <em>成交金额</em>
            <strong>1.09万</strong>
          </li>
        </ul>
      </aside>
      <aside>
        <div class="img">
          <em class="tag">茶语·优选</em>
          <a href="http://m.shiji.chayu.com/pinjian/202">
            <img
              src="https://img.chayu.com/banner/1805/25/3825b076de89eaa8.jpg"
              alt="安汶及星洲香材，搭配3.5寸手工紫檀木管，入门级沉香每日仅需8元"
            />
          </a>
          <p>安汶及星洲香材，搭配3.5寸手工紫檀木管，入门级沉香每日仅需8元</p>
        </div>
        <p class="txt clearfix">
          <span class="fl">活动倒计时：9天7时21分</span>
          <span class="fr">当前参与人数71人</span>
        </p>
        <div class="pj-progress">
          <div class="progress-b">
            <!--当进度小于100%大于0-->
            <p class="progress-bar" style="width: 67%;"></p>
            <span class="progress-btn" style="left: 67%;">
              67%
              <em>本轮进度</em>
            </span>
          </div>
        </div>
        <ul class="pj-collect">
          <li>
            <em>本轮剩余</em>
            <strong>2管</strong>
          </li>
          <li>
            <em>当前轮次</em>
            <strong>第17轮</strong>
          </li>
          <li>
            <em>成交金额</em>
            <strong>2.58万</strong>
          </li>
        </ul>
      </aside>
      <aside>
        <div class="img">
          <em class="tag">茶语·优选</em>
          <a href="http://m.shiji.chayu.com/pinjian/201">
            <img
              src="https://img.chayu.com/banner/1805/21/2395b0236799e88a.jpg"
              alt="越南惠安野生原材调制，香气甜淡，平价优质，日用级熏香的极佳选择"
            />
          </a>
          <p>越南惠安野生原材调制，香气甜淡，平价优质，日用级熏香的极佳选择</p>
        </div>
        <p class="txt clearfix">
          <span class="fl">活动倒计时：9天7时21分</span>
          <span class="fr">当前参与人数66人</span>
        </p>
        <div class="pj-progress">
          <div class="progress-b">
            <!--当进度小于100%大于0-->
            <p class="progress-bar" style="width: 33%;"></p>
            <span class="progress-btn" style="left: 33%;">
              33%
              <em>本轮进度</em>
            </span>
          </div>
        </div>
        <ul class="pj-collect">
          <li>
            <em>本轮剩余</em>
            <strong>4管</strong>
          </li>
          <li>
            <em>当前轮次</em>
            <strong>第18轮</strong>
          </li>
          <li>
            <em>成交金额</em>
            <strong>3.00万</strong>
          </li>
        </ul>
      </aside>
      <aside>
        <div class="img">
          <em class="tag">茶语·优选</em>
          <a href="http://m.shiji.chayu.com/pinjian/204">
            <img
              src="https://img.chayu.com/banner/1805/29/5015b0cad77c4c0a.jpg"
              alt="美国进口樱桃木整木雕刻，纯手工打磨，禅意无限的干泡台，拼件福利价可得"
            />
          </a>
          <p>美国进口樱桃木整木雕刻，纯手工打磨，禅意无限的干泡台，拼件福利价可得</p>
        </div>
        <p class="txt clearfix">
          <span class="fl">活动倒计时：9天7时21分</span>
          <span class="fr">当前参与人数108人</span>
        </p>
        <div class="pj-progress">
          <div class="progress-b">
            <!--当进度小于100%大于0-->
            <p class="progress-bar" style="width: 10%;"></p>
            <span class="progress-btn" style="left: 10%;">
              10%
              <em>本轮进度</em>
            </span>
          </div>
        </div>
        <ul class="pj-collect">
          <li>
            <em>本轮剩余</em>
            <strong>9只</strong>
          </li>
          <li>
            <em>当前轮次</em>
            <strong>第20轮</strong>
          </li>
          <li>
            <em>成交金额</em>
            <strong>4.73万</strong>
          </li>
        </ul>
      </aside>
      <aside>
        <div class="img">
          <em class="tag">茗星·作品</em>
          <a href="http://m.shiji.chayu.com/pinjian/195">
            <img
              src="https://img.chayu.com/banner/1805/07/6425af02f63c0e27.jpg"
              alt="小青柑融合三年陈熟普，口感清爽，耐泡度高,适合当下饮用"
            />
          </a>
          <p>小青柑融合三年陈熟普，口感清爽，耐泡度高,适合当下饮用</p>
        </div>
        <p class="txt clearfix">
          <span class="fl">活动倒计时：9天7时21分</span>
          <span class="fr">当前参与人数168人</span>
        </p>
        <div class="pj-progress">
          <div class="progress-b">
            <!--当进度小于100%大于0-->
            <p class="progress-bar" style="width: 80%;"></p>
            <span class="progress-btn" style="left: 80%;">
              80%
              <em>本轮进度</em>
            </span>
          </div>
        </div>
        <ul class="pj-collect">
          <li>
            <em>本轮剩余</em>
            <strong>2盒</strong>
          </li>
          <li>
            <em>当前轮次</em>
            <strong>第32轮</strong>
          </li>
          <li>
            <em>成交金额</em>
            <strong>4.82万</strong>
          </li>
        </ul>
      </aside>
      <aside>
        <div class="img">
          <em class="tag">茗星·作品</em>
          <a href="http://m.shiji.chayu.com/pinjian/247">
            <img
              src="https://img.chayu.com/banner/1809/11/3725b97385de5969.jpg"
              alt="全手工原创陶艺主人杯-粉樱，个性釉色，造型美观，趁手好用"
            />
          </a>
          <p>全手工原创陶艺主人杯-粉樱，个性釉色，造型美观，趁手好用</p>
        </div>
        <p class="txt clearfix">
          <span class="fl">活动倒计时：5天7时21分</span>
          <span class="fr">当前参与人数36人</span>
        </p>
        <div class="pj-progress">
          <div class="progress-b">
            <!--当进度小于100%大于0-->
            <p class="progress-bar" style="width: 60%;"></p>
            <span class="progress-btn" style="left: 60%;">
              60%
              <em>本轮进度</em>
            </span>
          </div>
        </div>
        <ul class="pj-collect">
          <li>
            <em>本轮剩余</em>
            <strong>2只</strong>
          </li>
          <li>
            <em>当前轮次</em>
            <strong>第12轮</strong>
          </li>
          <li>
            <em>成交金额</em>
            <strong>1.71万</strong>
          </li>
        </ul>
      </aside>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show1: false
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onShare() {
      this.$toast("分享");
    },
    onMsg() {
      this.$router.push("msg");
    },
    onHome() {
      this.$router.push("home");
    },
    onPersonal() {
      this.$router.push("personal");
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.pinjian {
  padding-top: 46px;
  padding-bottom: 50px;
}

.van-nav-bar__title {
  margin: 0 auto;
}
/* 右侧弹出框 */
.head {
  position: relative;
}
.kiss {
  width: 100px;
  background: #444;
  position: absolute;
  top: 0px;
  right: 10px;
  border-radius: 5px;
  z-index: 100;
}
.kiss hr {
  height: 1px;
  background-color: #888484;
  border: none;
}
.kiss ul li {
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  font-size: 12px;
  color: #d8d3d3;
}

.kiss .van-icon {
  font-size: 16px;
  position: relative;
  top: 3px;
}

/* 三角符号 */
.triangle_border_up {
  width: 0;
  height: 0;
  border-width: 0 10px 10px;
  border-style: solid;
  border-color: transparent transparent #444; /*透明 透明  灰*/
  position: absolute;
  top: -10px;
  right: 3px;
}
</style>