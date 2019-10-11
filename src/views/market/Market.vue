<!-- 市集 -->
<template>
    <div class="market">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh" pulling-text="↓ 下拉可以刷新" loosing-text="↑ 松开立即刷新" loading-text="正在刷新..." success-text="√ 刷新数据成功">
            <img class="headerPic" src="../../assets/images/header.jpg" />
            <van-grid :border="false" :column-num="5">
                <van-grid-item @click="onMaster">
                    <img src="../../assets/images/iocn01.png" />
                    <span>大师</span>
                </van-grid-item>
                <van-grid-item @click="onEminence">
                    <img src="../../assets/images/icon02.png" />
                    <span>名家</span>
                </van-grid-item>
                <van-grid-item @click="onTeaStar">
                    <img src="../../assets/images/icon03.png" />
                    <span>茗星</span>
                </van-grid-item>
                <van-grid-item @click="onCompilations">
                    <img src="../../assets/images/icon04.png" />
                    <span>合集</span>
                </van-grid-item>
                <van-grid-item>
                    <img src="../../assets/images/icon05.png" />
                    <span>发现</span>
                </van-grid-item>
            </van-grid>
            <img src="../../assets/images/line01.png" alt width="100%" />
            <div class="container">
                <h2>推荐</h2>
                <van-swipe-cell>
                    <van-cell>
                        <span style="disply:flex">
                            <img src="../../assets/images/tuijian01.png" alt />
                            <img src="../../assets/images/tuijian02.png" alt />
                            <img src="../../assets/images/tuijian03.png" alt />
                            <img src="../../assets/images/tuijian04.png" alt />
                        </span>
                    </van-cell>
                    <template slot="right">
                        <img src="../../assets/images/tuijian05.png" alt />
                    </template>
                </van-swipe-cell>
            </div>
            <img src="../../assets/images/line01.png" alt style="width:100%" />
            <div class="container">
                <h2>今日主推</h2>
                <aside>
                    <a href="http://m.shiji.chayu.com/goods/18511" title="高性价比有机寿眉，抄底价99元/饼" class="img">
                        <img src="https://img.chayu.com/banner/1909/30/6805d9190e26c430.jpg!700300" alt="高性价比有机寿眉，抄底价99元/饼" />
                    </a>
                    <div class="txt-box">
                        <div class="txt">
                            <h3>
                                <span class="color_coffe">限时抄底 |</span> 高性价比有机寿眉，抄底价99元/饼
                            </h3>
                            <p class="des">松溪头春原料，老树原生小菜种，口感丰富</p>
                        </div>
                    </div>
                </aside>
            </div>
            <img src="../../assets/images/line01.png" alt style="width:100%" />

            <section class="jingxuan-container">
                <h2>
                    〃 当日精选 〃
                </h2>
                <div class="jingxuan-wrap">
                    <aside :key="i" v-for="(item,i) in arr">
                        <a href="#" title="茶商必读，互联网时代的品牌密码" class="img">
                            <img :src="item.coverImg" alt="茶商必读，互联网时代的品牌密码" />
                        </a>
                        <div class="txt-box">
                            <div class="txt">
                                <a href="http://m.shiji.chayu.com/zhongchou/zhongchou_detail?zhongchou_id=318" title="茶商必读，互联网时代的品牌密码" class="title">
                                    <span class="color_coffe">{{item.category}} |</span> {{item.tit}}
                                </a>
                                <p class="des">{{item.desc}}</p>
                            </div>
                            <div class="person">
                                <span class="img">
                                    <a href="http://m.shiji.chayu.com/master/1375678">
                                        <img src="https://img.chayu.com/avatar/001/37/56/78/59cf60926c1db.jpg!120120" alt />
                                    </a>
                                </span>
                                <p class="name">茶语优选</p>
                            </div>
                        </div>
                        <p class="other">{{item.other}}</p>
                    </aside>
                </div>
            </section>
            <p class="center">没有更多啦</p>
        </van-pull-refresh>
    </div>
</template>

<script>
export default {
    name: "market",
    props: {},
    data() {
        return {
            count: 0,
            isLoading: false,
            arr: [
                {
                    coverImg:
                        "https://img.chayu.com/banner/1909/28/5545d8f5859e9088.jpg",
                    category: "限时抄底",
                    tit: "10年陈酿，绍兴加饭酒",
                    desc: "百年老厂酿造，品鉴大师选坛分装",
                    other: "94人支持 · 已筹4.38万"
                },
                {
                    coverImg:
                        "https://img.chayu.com/banner/1909/30/3185d91a78c06192.jpg",
                    category: "限时抄底",
                    tit: "茶叶农残检测卡，299元/盒",
                    desc: "8分钟快速检测，操作简单便捷",
                    other: "48人支持 · 已筹1.90万"
                }
            ]
        };
    },
    methods: {
        onRefresh() {
            setTimeout(() => {
                this.$toast("刷新成功");
                this.isLoading = false;
                this.count++;
            }, 500);
        },
        onMaster() {
            this.$router.push("master");
        },
        onEminence() {
            this.$router.push("eminence");
        },
        onTeaStar() {
            this.$router.push("star");
        },
        onCompilations() {
            this.$router.push("compilations");
        }
    }
};
</script>

<style scoped>
.market {
    flex: 1;
    padding: 46px 0 50px 0;
    background: #fff;
}
.headerPic {
    width: 100%;
    height: 146px;
}
.container {
    height: auto;
    width: 94%;
    margin: 0 3%;
}
h3 {
    text-align: left;
    margin-bottom: 0;
    font-size: 16px;
}
.van-cell {
    border: 0;
    background: none;
    padding: 10px;
}
.van-cell span {
    display: flex;
    justify-content: space-around;
}
.van-swipe-cell__right img {
    margin-top: 10px;
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
.container .txt-box {
    display: flex;
    background-color: #e5e5e5;
}
.container .des {
    margin: 0;
    padding: 0;
}
.container .txt {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    align-items: center;
    margin: 0 0.32rem;
}

.container .txt .title {
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
.container .txt .des {
    font-size: 0.32rem;
    line-height: 0.32rem;
    color: #666666;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0 0 0.2rem;
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
.container h3 {
    margin: 5px 0;
    padding: 0;
}
.center {
    text-align: center;
}
</style>