<!-- 基础 -->
<template>
    <div class='base'>
        <van-nav-bar :title="firstTit" left-arrow @click-left="onClickLeft">
            <van-icon name="cart1" slot="right" class="iconfont" class-prefix="icon" @click="onCart" />
            <van-icon name="ellipsis" slot="right" style="margin-left:20px" />
        </van-nav-bar>

        <van-pull-refresh v-model="isLoading" @refresh="onRefresh" pulling-text="↓ 下拉可以刷新" loosing-text="↑ 松开立即刷新" loading-text="正在刷新..." success-text="√ 刷新数据成功">

            <img class="headerPic" :src="headerImg" width="100%" />

            <van-grid :border="false" :column-num="4">
                <van-grid-item>
                    <img :src="firstImg" style="width:24px;height:24px" />
                    <span>{{firstTit}}</span>
                </van-grid-item>
                <van-grid-item>
                    <img src="../../assets/images/m2.png" />
                    <span>手制</span>
                </van-grid-item>
                <van-grid-item>
                    <img src="../../assets/images/m3.png" />
                    <span>监制</span>
                </van-grid-item>
                <van-grid-item>
                    <img src="../../assets/images/m4.png" />
                    <span>合集</span>
                </van-grid-item>
            </van-grid>
            <img src="../../assets/images/line01.png" alt="" width="100%">
            <van-dropdown-menu active-color="#893E20">
                <van-dropdown-item title="按姓氏" ref="item">
                    <van-grid :column-num="5">
                        <van-grid-item text="全部" />
                        <van-grid-item text="C" />
                        <van-grid-item text="F" />
                        <van-grid-item text="G" />
                        <van-grid-item text="H" />
                        <van-grid-item text="L" />
                        <van-grid-item text="Q" />
                        <van-grid-item text="S" />
                        <van-grid-item text="T" />
                        <van-grid-item text="W" />
                        <van-grid-item text="X" />
                        <van-grid-item text="Y" />
                        <van-grid-item text="Z" />
                    </van-grid>
                    <p style="padding-left:10px">按姓氏首字母搜索</p>
                </van-dropdown-item>
                <van-dropdown-item title="按品类" ref="item">

                    <van-collapse v-model="activeNames">
                        <van-cell title="◆ 全部"></van-cell>
                        <van-collapse-item title="◆ 茶叶" name="2" class="gy">
                            <div class="rectangle">
                                <van-grid :gutter="10" :column-num="3">
                                    <van-grid-item>
                                        <div class="content">
                                            <img src="https://static.chayu.com/mobile/main/img/common/icons_tea/ico_tea_all.png" />
                                            <p>名家</p>
                                        </div>
                                    </van-grid-item>
                                    <van-grid-item>
                                        <div class="content">
                                            <img src="https://img.chayu.com/shiji/goods_category/1607/15/951578877b167a56.png" />
                                            <p>白茶</p>
                                        </div>
                                    </van-grid-item>
                                    <van-grid-item>
                                        <div class="content">
                                            <img src="https://img.chayu.com/shiji/goods_category/1607/15/6145788763add7ad.png" />
                                            <p>乌龙</p>
                                        </div>
                                    </van-grid-item>
                                    <van-grid-item>
                                        <div class="content">
                                            <img src="https://img.chayu.com/shiji/goods_category/1608/10/91957aaf57b40e8e.png" />
                                            <p>花茶</p>
                                        </div>
                                    </van-grid-item>
                                    <van-grid-item>
                                        <div class="content">
                                            <img src="https://img.chayu.com/shiji/goods_category/1607/15/9395788771a5f5d5.png" />
                                            <p>红茶</p>
                                        </div>
                                    </van-grid-item>
                                    <van-grid-item>
                                        <div class="content">
                                            <img src="https://img.chayu.com/shiji/goods_category/1607/15/281578875f2cd807.png" />
                                            <p>绿茶</p>
                                        </div>
                                    </van-grid-item>
                                    <van-grid-item>
                                        <div class="content">
                                            <img src="https://img.chayu.com/shiji/goods_category/1607/15/46857887787f01dc.png" />
                                            <p>黑茶</p>
                                        </div>
                                    </van-grid-item>
                                </van-grid>
                            </div>
                        </van-collapse-item>
                        <van-collapse-item title="◆ 茶器" name="3" class="gy">
                            <div class="rectangle">
                                <van-grid :gutter="10" :column-num="3">
                                    <van-grid-item>
                                        <div class="content">
                                            <p>全部</p>
                                        </div>
                                    </van-grid-item>
                                    <van-grid-item>
                                        <div class="content">
                                            <p>茶杯</p>
                                        </div>
                                    </van-grid-item>
                                    <van-grid-item>
                                        <div class="content">
                                            <p>茶壶</p>
                                        </div>
                                    </van-grid-item>
                                    <van-grid-item>
                                        <div class="content">
                                            <p>紫砂壶</p>
                                        </div>
                                    </van-grid-item>
                                    <van-grid-item>
                                        <div class="content">
                                            <p>盖碗</p>
                                        </div>
                                    </van-grid-item>
                                </van-grid>
                            </div>
                        </van-collapse-item>
                        <van-collapse-item title="◆ 茶周边" name="4" class="gy">
                            <div class="rectangle">
                                <van-grid :gutter="10" :column-num="3">
                                    <van-grid-item>
                                        <div class="content">
                                            <p>全部</p>
                                        </div>
                                    </van-grid-item>
                                    <van-grid-item>
                                        <div class="content">
                                            <p>茶杯</p>
                                        </div>
                                    </van-grid-item>
                                </van-grid>
                            </div>
                        </van-collapse-item>
                    </van-collapse>
                </van-dropdown-item>
            </van-dropdown-menu>
            <div class="people" :key="i" v-for="(item,i) in arr" style="background:#fff">
                <img :src="item.coverImg" alt="">
                <div class="clearfix">
                    <p style="float:left">{{item.content}}</p>
                    <div style="float:left;margin-left:20px">
                        <a>大师介绍</a>
                        <a>关注TA</a>
                    </div>
                </div>
                <img src="../../assets/images/line01.png" alt="">
            </div>
            <p class="center">没有更多啦</p>
        </van-pull-refresh>
    </div>
</template>

<script>
export default {
    name: "base",
    components: {},
    props: ["headerImg", "firstImg", "firstTit", "arr", "heaerTit"],
    data() {
        return {
            count: 0,
            isLoading: false,
            activeNames: ["1"]
        };
    },
    computed: {},
    watch: {},
    created() {},
    methods: {
        onRefresh() {
            setTimeout(() => {
                this.$toast("刷新成功");
                this.isLoading = false;
            }, 500);
        },
        onCart() {
            this.$toast("cart");
        },
        onClickLeft() {
            this.$router.go(-1);
        }
    }
};
</script>

<style scoped>
.van-grid-item span {
    margin-top: 10px;
}
.van-grid-item__content {
    padding: 10px 8px;
}
.variety img {
    width: 60px;
    height: 60px;
}
.content {
    display: flex;
    justify-content: center;
    align-items: center;
}
.content p {
    margin-left: 10px;
    font-size: 16px;
    color: black;
}
.content img {
    width: 30px;
    height: 30px;
}
.people img {
    width: 100%;
}
.people p {
    margin-left: 2%;
    width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.people a {
    display: block;
    padding: 6px 5px;
    margin: 6px 5px;
    border: 1px solid #ccc;
    float: left;
    border-radius: 3px;
}
.clearfix:after {
    content: "";
    overflow: hidden;
    visibility: hidden;
    height: 0;
    display: block;
    clear: both;
}
.center {
    text-align: center;
}
.people p {
    margin: 12px 0 0 10px;
    padding: 0;
}
</style>