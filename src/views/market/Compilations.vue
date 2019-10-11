<!--  -->
<template>
    <div class='compilations'>

        <van-nav-bar title="合集" left-arrow @click-left="onClickLeft">
            <van-icon name="cart1" slot="right" class="iconfont" class-prefix="icon" @click="onCart" />
            <van-icon name="ellipsis" slot="right" style="margin-left:20px" />
        </van-nav-bar>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh" pulling-text="↓ 下拉可以刷新" loosing-text="↑ 松开立即刷新" loading-text="正在刷新..." success-text="√ 刷新数据成功">
            <img :src="item" alt="" :key="i" v-for="(item,i) in arr" style="width:100%" />
            <p class="center">没有更多啦</p>
        </van-pull-refresh>
    </div>
</template>

<script>
export default {
    name: "compilations",
    components: {},
    props: {},
    data() {
        return {
            arr: [
                "https://img.chayu.com/mall/1809/26/4175bab53218380c.jpg!750500",
                "https://img.chayu.com/mall/1809/14/3875b9b657d861c3.jpg!750500",
                "https://img.chayu.com/mall/1807/27/7225b5ad8a9e475c.jpg!750500",
                "https://img.chayu.com/mall/1807/27/4585b5ad892eafa9.jpg!750500",
                "https://img.chayu.com/mall/1807/27/9685b5ad8746a4b1.jpg!750500",
                "https://img.chayu.com/mall/1807/27/9645b5ad858b4e71.jpg!750500",
                "https://img.chayu.com/mall/1807/27/8335b5ad81c3e66c.jpg!750500",
                "https://img.chayu.com/mall/1807/27/4005b5ad7fb5d1b7.jpg!750500",
                "https://img.chayu.com/mall/1807/27/3205b5ad7d1c5cba.jpg!750500",
                "https://img.chayu.com/mall/1806/04/7235b14b936b17ce.jpg!750500",
                "https://img.chayu.com/mall/1805/21/2405b02ba138f057.jpg!750500",
                "https://img.chayu.com/mall/1804/19/8485ad812d5ab51d.jpg!750500",
                "https://img.chayu.com/mall/1804/13/2485ad01868d8ba3.jpg!750500",
                "https://img.chayu.com/mall/1801/22/2295a65830576060.jpg!750500",
                "https://img.chayu.com/mall/1712/19/4955a38b390712f8.jpg!750500",
                "https://img.chayu.com/mall/1706/02/9595930d92066343.jpg!750500",
                "https://img.chayu.com/mall/1712/01/5325a2107209d72b.jpg!750500",
                "https://img.chayu.com/mall/1711/14/5175a0aaf7404e0a.jpg!750500",
                "https://img.chayu.com/mall/1711/23/1805a167d0754401.jpg!750500",
                "https://img.chayu.com/mall/1711/23/4635a167e9f76584.jpg!750500",
                "https://img.chayu.com/mall/1711/23/4435a1680132ae81.jpg!750500",
                "https://img.chayu.com/mall/1711/23/6125a1680bdddd1c.jpg!750500"
            ]
        };
    },
    computed: {},
    watch: {},
    created() {},
    methods: {
        onClickLeft() {
            this.$router.go(-1);
        },
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
.center {
    text-align: center;
}
.compilations {
    padding-bottom: 1px;
}
</style>