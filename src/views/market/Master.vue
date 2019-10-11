<!-- 名家 -->
<template>
    <div class='master'>
        <Base firstTit="大师" :arr="arr" :headerImg="headerImg" :firstImg="firstImg">
        </Base>
    </div>
</template>

<script>
import Base from "./Base.vue";
export default {
    name: "master",
    components: { Base },
    props: {},
    data() {
        return {
            headerImg: require("../../assets/images/m-header.png"),
            firstImg: require("../../assets/images/m1.png"),
            arr: [
                {
                    coverImg:
                        "https://img.chayu.com/avatar/000/26/28/55/57c72e42d99c4.jpg!750500",
                    content: "花茶制作技艺非遗传承人"
                },
                {
                    coverImg:
                        "https://img.chayu.com/avatar/001/36/49/32/5921bdad811a9.jpg!750500",
                    content: "福鼎白茶制作技艺非遗传承人，福鼎百年制"
                },
                {
                    coverImg:
                        "https://img.chayu.com/avatar/000/24/66/47/57c7313f21a58.jpg!750500",
                    content: "潮州工夫茶非遗传承人"
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