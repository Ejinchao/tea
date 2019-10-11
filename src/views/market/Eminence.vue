<!-- 名家 -->
<template>
    <div class='eminence'>
        <Base firstTit="名家" :arr="arr" :headerImg="headerImg" :firstImg="firstImg">
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
            headerImg: require("../../assets/images/m-header.png"),
            firstImg: require("../../assets/images/m5.png"),
            arr: [
                {
                    coverImg:
                        "https://img.chayu.com/avatar/001/34/16/89/5a44ca00a3469.jpg!750500",
                    content: "全国茶叶标准化委员会技术委员"
                },
                {
                    coverImg:
                        "https://img.chayu.com/avatar/000/25/30/20/57c7370aa2bc7.jpg!750500",
                    content: "现代沉香分类标准制定者之一"
                },
                {
                    coverImg:
                        "https://img.chayu.com/avatar/000/24/78/58/57de1431c6d91.jpg!750500",
                    content: "斗记茶业核心技术控制人"
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