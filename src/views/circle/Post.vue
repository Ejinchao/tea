<!-- 发帖 -->
<template>
  <div class="post">
     <van-nav-bar title="发表话题"  left-arrow @click-left="post"></van-nav-bar>

     <van-cell-group>
      <van-field v-model="value" placeholder="3-30个字" label="标题" />
      <van-field v-model="value" placeholder="请输入内容，字数不少于10个字" label="内容" type="textarea" autosize/>
      <div class="post1">
        <span>上传图片</span>
        <span class="post2">（最多9张）</span>
      </div>
      <van-uploader upload-text="文件上传"  v-model="fileList"  multiple  :max-count="9" preview-full-image/>
    </van-cell-group>


    <van-divider dashed>
    <van-button type="primary" size="large">提交</van-button>    
      
    </van-divider>




  </div>
</template>

<script>
export default {
  name:'post',
  data () {
    return {
      fileList: []
    };
  },
  methods:{
    post(){
      this.$router.go(-1)
    }
  }
}

</script>
<style  scoped>
.post{
  height: 100%;
  background-color: #fff;
}
.post1{
  margin-left: 16px;
  margin-top: 10px;
  font-size: 14px
}
.post2{
  font-size: 12px;
  margin-left: 5px;
  color: #aaa

}
.van-uploader{
  margin-left: 20px;
    margin-top: 20px;
}
.van-cell-group {
    margin: 0;
}
van-button--large {
    width: 90%;
    height: 45px;
    line-height: 45px;
}
</style>