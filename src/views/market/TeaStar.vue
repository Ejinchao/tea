<!-- 茗星 -->
<template>
    <div class='eminence'>
        <Base firstTit="茗星" :arr="arr" :headerImg="headerImg" :firstImg="firstImg">
        </Base>
    </div>
</template>

<script>
import Base from "./Base.vue";
export default {
    name: "eminence",
    components: { Base },
    props: {},
    data() {
        return {
            headerImg:
                "https://img.chayu.com/banner/1706/21/849594a2011df699.png",
            firstImg: require("../../assets/images/m6.png"),
            arr: [
                {
                    coverImg:
                        "https://img.chayu.com/seller/1611/08/5821342603d11kghi.jpeg!750500",
                    content: "紫者创始人，在茶的世界寻找美的逻辑"
                },
                {
                    coverImg:
                        "https://img.chayu.com/seller/1704/19/58f72397e4fe4i21f.jpeg!750500",
                    content: "“中国琉璃网”创办人、古琉璃收藏研究者"
                },
                {
                    coverImg:
                        "https://img.chayu.com/seller/1703/13/58c63b672eb7crbcy.jpeg!750500",
                    content: "王成华，号墨石山人、大壶翁，当代著名画"
                }
            ]
        };
    },
    computed: {},
    watch: {},
    created() {},
    methods: {}
};
</script>

<style scoped>
</style>