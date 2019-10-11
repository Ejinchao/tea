<!-- 圈子，学茶网，问茶答，舌尖上的茶 -->
<template>
  <div id="circed" @click="show1=false">
    <van-nav-bar title="标题" left-arrow @click-left="arrow">
        <van-icon name="weapp-nav" slot="right" @click.stop="show1=!show1" />
    </van-nav-bar>
      <div class="kiss" v-show="show1">
      <span><img class="kisss" src="../../assets/imgarticle/bd.png" alt=""></span>
        <ul>
            <li><van-icon name="location-o" />&nbsp;&nbsp;分享</li><hr/>
            <li><van-icon name="chat-o" />&nbsp;&nbsp;消息</li><hr/>
            <li><van-icon name="wap-home-o" />&nbsp;&nbsp;首页</li><hr/>
            <li><van-icon name="user-o" />&nbsp;&nbsp;我的</li>
        </ul>
    </div>
   
    <van-card title="商品标题"  thumb="https://img.yzcdn.cn/vant/t-thirt.jpg">
      <div slot="tags">
        <span class="g">申请圈主</span>
        <ul>
          <li class="gg">关注：</li>
          <li class="ggg">话题：</li>
          <li>圈主：</li>
        </ul>
      </div>
    </van-card>
    <div class="gggg"></div>
    
    <div  >
      <router-link to="post">
        <span class="ggggg" ><van-icon name="brush-o" />&nbsp;发贴</span>
      </router-link>
      
    </div>

    <van-tabs v-model="active" animated sticky>
      <van-tab title="最新">
        <van-card
  num="2"
  price="2.00"
  desc="描述信息"  
  title="商品标题"
  thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
/>
      </van-tab>
      <van-tab title="精华">
        <van-card
  num="2"
  price="2.00"
  desc="描述信息"  
  title="商品标题"
  thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
/>
      </van-tab>
      <van-tab ></van-tab>
      <van-tab ></van-tab>
    </van-tabs>

    
      
   

    
  </div>
</template>

<script>
export default {
  name:'circledetails',
  data () {
    return {
      show1: false,
      active: 0,
    };
  },
  methods: {
    arrow(){
      this.$router.go(-1)
    },
    sss(){
      this.show1=true;
    },
    li(){
      this.show1=false;
    }
  }
}

</script>
<style  scoped>
#circed{
  width: 100%;
  background-color: #fff;
}
.kiss{
    width: 100px;
    height: 150px;
    background: #000;
    position: fixed;
    top: 63px;
    right: 10px;
    border-radius: 5%;
    z-index: 100;
    
}
.kiss ul{
  margin-top: -20px
}
.kiss ul li{
  margin-left: 5px;
  font-size: 17px;
  color: #fff;
}
.kisss{
  width: 50px;
  height: 50px;
  margin-top: -22px;
  margin-left: 57px;
  
}
.g{
  margin-left: 156px;
  margin-top: 9px;
  position: absolute;
  display: block;
  width: 90px;
  height: 30px;
  border: 1px solid #000;
  border-radius: 4%;
  line-height: 30px;
  text-align: center;
  font-size: 16px;
  color: #000
}
.gg{
  margin-top: 6px
}
.ggg{
  margin: 10px 0;
}
.gggg{
  height: 8px;
  background: #eee;
}
.ggggg{
  display: block;
  width: 60px;
  height: 42px;
  position: absolute;
  top: 170px;
  right: 15px;
  text-align: center;
  line-height: 42px;
  font-size: 16px;
  color: #f00;
  z-index: 100
}

.van-tabs {
    position: relative;
    /* width: 140px; */
}

</style>