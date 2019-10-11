<!-- 圈子和话题模版 -->
<template>
  <div id='ring' @click="show1=false">
    <van-nav-bar title="标题" left-arrow @click-left="fan">
        <van-icon name="weapp-nav" slot="right"  @click.stop="show1=!show1" />
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

    


   <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>

    <van-card  v-for="itme in 10" :key="itme"  title="商品标题"  thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"> 
        <div slot="tags">
            <ul>
                <li class="tags1">关注:</li>
                <li class="tags2">关注:</li>
                <li>关注:</li>
            </ul>
                <span class="tags3">关注TA</span>
        </div>
    </van-card>
 

    
   



  </div>
</template>

<script>
export default {
  neme:'ring',
  data () {
    return {
        show1: false,
        show: false,
        value1: 0,
        value2: 'a',
        option1: [
            { text: '全部', value: 0 },
            { text: '茶友', value: 1 },
            { text: '器物', value: 2 },
            { text: '活动', value: 3 },
            { text: '茶语公共', value: 4 },
            { text: '咨询反馈', value: 5 },

        ],
        option2: [
            { text: '最新', value: 'a' },
            { text: '人气', value: 'b' },
        ]
    };
  },
  methods: {
    fan(){
      this.$router.go(-1)
    },
    

   } 
}

</script>
<style  scoped>
#ring{
  background-color: #fff;
  height: 100%;
}
.van-nav-bar__title {
    line-height: 32px;   
}
.tags1{
    margin-top: 6px
}
.tags2{
    margin: 10px 0px;
}
.tags3{
    position: absolute;
    top: 30px;
    right: 10px;
    border: 1px solid #000;
    display: block;
    width: 60px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    font-size: 15px
}
.kiss{
    width: 100px;
    height: 150px;
    background: #000;
    position: fixed;
    top: 63px;
    right: 10px;
    border-radius: 3%;
    z-index: 10000;
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
</style>